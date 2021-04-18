import React, { Component } from 'react'
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtAvatar } from 'taro-ui';

import { Notice } from '../../common/api';

import './notice-comment.scss'

export default class NoticeComment extends Component {

  state = {
    is_read: false,
  }

  componentDidMount() {
    this.init();
  }

  init() {
    const { data } = this.props;
    this.setState({
      is_read: data.is_read,
    });
  }

  handleClick = async () => {
    const { is_read } = this.state;
    const { data } = this.props;
    if (!is_read) {
      const res = await Notice.beComment(null, data.id);
      if (res) {
        this.setState({
          is_read: true,
        });
      }
    }

    Taro.navigateTo({
      url: '/pages/post/post?id='+data.post_id
    });
  }

  goUserHome = () => {
    const { data } = this.props;
    Taro.navigateTo({
      url: '/pages/user-home/user-home?id='+data.from_uid
    })
  }

  render() {
    const { is_read } = this.state;
    const { data } = this.props;
    return (
      <View>
        {
          data && (
            <View
              className='card'
              style={{
                backgroundColor: is_read ? '#e5e5e5' : '#ff494933'
              }}
              onClick={this.handleClick}
            >
              <View className='header' onClick={this.goUserHome}>
                <AtAvatar image={data.from_user.avatar} size='small' />
                <View className='right'>
                  <View className='nickname'>{data.from_user.user_nickname}</View>
                  <View className='date'>{data.create_at}</View>
                </View>
              </View>
              <View className='content'>{data.content}</View>
            </View>
          )
        }
      </View>
    )
  }
}
