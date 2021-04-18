import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { AtAvatar } from 'taro-ui';

import { Like } from '../../common/api';

import './comment-card.scss';

export default class CommentCard extends Component {
  state = {
    comment_data: null,
    isLike: false,
  }

  componentWillMount() {
    this.init();
  }

  init() {
    const { comment } = this.props;
    if (comment) {
      const { id } = comment;
      const isLike = Like.isLike('comment', id);
      this.setState({
        comment_data: comment,
        isLike,
      });
    }
  }

  imgClick(url) {
    const { comment: { images } } = this.props;
    let imgList = images.map(img => img.url);
    Taro.previewImage({
      current: url,
      urls: imgList
    });
  }

  goComment = () => {
    const { comment_data: { id } } = this.state;
    const { canGoComment } = this.props;
    if (!canGoComment) return;
    Taro.navigateTo({
      url: '/pages/subPackage/comment/comment?id='+ id
    });
  }

  goUserHome = () => {
    const { comment_data: { user: { id } } } = this.state;
    Taro.navigateTo({
      url: '/pages/user-home/user-home?id='+id
    })
  }

  doLike = async () => {
    const { comment_data, comment_data: { id, likes_count } } = this.state;
    const res = await Like.doLike('comment', id);
    if (res) {
      this.setState({
        comment_data: {
          ...comment_data,
          likes_count: likes_count + 1,
        },
        isLike: true,
      });
    }
  }

  render() {
    const { comment_data, isLike } = this.state;
    const { showOption } = this.props;
    return (
      <View>
        {
          comment_data && (
            <View className='card' style={{
              backgroundColor: comment_data.is_secret ? '#f0f9ff' : 'white'
            }}
            >
              {/* 头像、昵称和认证图标、学校、 举报 */}
              <View className='header'>
                <View onClick={this.goUserHome}>
                  <AtAvatar image={comment_data.user.avatar} size='small'></AtAvatar>
                </View>
                <View className='user-info'>
                  <View className='nickname-wrap'>{comment_data.user.user_nickname}</View>
                  <View className='school'>{comment_data.user.school}</View>
                </View>
                {/* <View className='link' onClick={this.more}>举报</View> */}
              </View>
              {/* 中间内容和图片 */}
              <View className='center' onClick={this.goComment}>
                <View className='content'>
                  {comment_data.content}
                </View>
                <View className='imgs-box'>
                  {
                    comment_data.images.map((item) => (
                      <Image
                        className='img'
                        key={item.id}
                        src={item.url}
                        onClick={(e) => {
                          e.stopPropagation();
                          this.imgClick(item.url)
                        }}
                        mode='aspectFill'
                      />
                    ))
                  }
                </View>
              </View>
              {/* 底部  话题 评论 点赞 */}
              <View className='footer'>
                <View className='date'>
                  {comment_data.create_at}
                </View>
                {
                  showOption && (
                    <View className='option'>
                      <View
                        onClick={this.goComment}
                        className='icon icon-comment'
                      >{comment_data.reply_count}</View>
                      <View
                        onClick={this.doLike}
                        className={[
                          'icon',
                          isLike ? 'icon-zan-full' : 'icon-zan-line'
                        ]}
                      >{comment_data.likes_count}</View>
                    </View>
                  )
                }
              </View>
            </View>
          )
        }
      </View>
    )
  }
}
