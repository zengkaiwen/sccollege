import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { AtAvatar } from 'taro-ui';

import { Topic } from '../../common/api';

import './post-card.scss';

class PostCard extends Component {

  // 更多，含举报，分享
  more = () => {
    const { post: { id } } = this.props;
    Taro.showActionSheet({
      itemList: ['分享到好友', '分享到朋友圈']
    }).then(res => {
      if (res.tapIndex === 0) { // 分享

      }
      if (res.tapIndex === 1) { // 举报

      }
    })
    .catch(err => console.log(err.errMsg))
  }

  imgClick(url) {
    const { post: { images } } = this.props;
    const urls = images.map(item => item.url);
    Taro.previewImage({
      current: url,
      urls,
    });
  }

  goPost = () => {
    const { post: { id, topic }, canGoPost } = this.props;
    if (canGoPost) {
      Topic.topicAddTrack(topic);
      Taro.navigateTo({
        url: '/pages/post/post?id='+id
      })
    }
  }

  goTopic = () => {
    const { post: { topic: { id } } } = this.props;
    Taro.navigateTo({
      url: '/pages/subPackage/topic-home/topic-home?id='+id,
    })
  }

  goUserHome = () => {
    const { canUserHome, post: {user: {id}} } = this.props;
    if (!canUserHome) {
      return;
    }
    Taro.navigateTo({
      url: '/pages/user-home/user-home?id='+id
    });
  }

  render() {
    const { post, showOption } = this.props;
    return (
      <View>
        {
          post && (
            <View className='card'>
              {/* 头像、昵称和认证图标、学校、 举报 */}
              <View className='header'>
                <View onClick={this.goUserHome}>
                  <AtAvatar image={post.user.avatar}></AtAvatar>
                </View>
                <View className='user-info'>
                  <View className='nickname-wrap'>{post.user.user_nickname}</View>
                  <View className='school'>{post.user.school}</View>
                </View>
                {/* <View className='icon icon-more' onClick={this.more}></View> */}
              </View>
              {/* 中间内容和图片 */}
              <View className='center' onClick={this.goPost}>
                <View className='content'>
                  {post.content}
                </View>
                <View className='imgs-box'>
                  {
                    post.images.map((item) => (
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
                <View className='topic' onClick={this.goTopic}>
                  # {post.topic.title}
                </View>
                {
                  showOption && (
                    <View className='option'>
                      <View
                        onClick={this.goPost}
                        className='icon icon-comment'
                      >{post.comment_count}</View>
                      <View
                        onClick={this.goPost}
                        className='icon icon-zan-line'
                      >{post.likes_count}</View>
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

export default PostCard;
