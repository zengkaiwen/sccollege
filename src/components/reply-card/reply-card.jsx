import React, { Component } from 'react'
import { View, Text } from '@tarojs/components';
import { AtAvatar } from 'taro-ui';

import { Like } from '../../common/api';

import './reply-card.scss';

export default class ReplyCard extends Component {

  state = {
    reply_data: null,
    likes_count: 0,
    isLike: false,
  }

  componentDidMount() {
    this.init();
  }

  async init() {
    const { reply } = this.props;
    const isLike = Like.isLike('reply', reply.id) || false;
    this.setState({
      reply_data: reply,
      likes_count: reply.likes_count,
      isLike,
    })
  }

  handleClick = () => {
    const { onContentClick } = this.props;
    if (typeof onContentClick === 'function') {
      onContentClick();
    }
  }

  doLike = async () => {
    const { reply_data, likes_count } = this.state;
    const res = Like.doLike('reply', reply_data.id);
    if (res) {
      this.setState({
        isLike: true,
        likes_count: likes_count + 1
      });
    }
  }

  render() {
    const { reply_data, likes_count, isLike } = this.state;
    const { commentUserId } = this.props;
    return (
      <View>
        {
          reply_data && (
            <View className='card'>
              <AtAvatar image={reply_data.user.avatar} size='small' circle />
              <View className='right'>
                <View className='header'>
                  <View>
                    <View className='nickname'>{reply_data.user.user_nickname}</View>
                    <View className='school'>{reply_data.user.school || '某高校'}</View>
                  </View>
                  {/* <View className='jubao'>举报</View> */}
                </View>
                <View className='center' onClick={this.handleClick}>
                  {
                    reply_data.user.id != commentUserId ? (
                      <Text className='aite'>@{reply_data.user.user_nickname}</Text>
                    ) : null
                  }
                  <Text className='content'>{reply_data.content}</Text>
                </View>
                <View className='footer'>
                  <View className='date'>{reply_data.create_at}</View>
                  <View
                    className={[
                      'icon',
                      isLike ? 'icon-zan-full' : 'icon-zan-line'
                    ]}
                    onClick={this.doLike}
                  >{likes_count}</View>
                </View>
              </View>
            </View>
          )
        }
      </View>
    )
  }
}
