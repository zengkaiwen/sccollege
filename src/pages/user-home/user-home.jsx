import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtAvatar, AtButton } from 'taro-ui';
import './user-home.scss';

import MyPage from '../../components/my-page/my-page';
import PostCard from '../../components/post-card/post-card';

import { User, Post, Follow } from '../../common/api';

class UserHome extends Component {
  state = {
    user: null,
    postList: [],
    page: 1,
    noMore: false,

    pageState: 0,
    showMoreLoading: false,

    isFollow: false,
    fans_count: 0,

  }

  componentDidMount() {
    this.init();
  }

  onShareAppMessage() {
    const { user: { user_nickname, id } } = this.state;
    return {
      title: `【${user_nickname}】的个人主页`,
      path: '/pages/user-home/user-home?id='+id
    }
  }

  init = async () => {
    this.setState({
      pageState: 0,
    });
    const { id } = this.$router.params;
    const user = await User.getInfo(id);
    const postList = await Post.getWithUID(id);
    const isFollow = await Follow.isFollowUser(id);
    let pageState = 1;
    if (user && postList) {
      pageState = 3;
      Taro.setNavigationBarTitle({
        title: user.user_nickname
      });
    }
    this.setState({
      user,
      fans_count: user.fans_count,
      postList,
      pageState,
      isFollow,
      page: this.state.page + 1,
    });
  }

  // 加载更多
  onScrollToLower = async () => {
    console.log('加载更多');
    const { user: {id}, page, postList, noMore } = this.state;
    if (noMore) return;
    this.setState({
      showMoreLoading: true,
    });

    const newPostList = await Post.getWithUID(id, page);
    if (newPostList) {
      this.setState({
        postList: postList.concat(newPostList),
        page: page + 1,
        showMoreLoading: false
      });
    } else {
      this.setState({
        noMore: true,
        showMoreLoading: false
      });
    }
  }

  onRef = (page) => {
    this.mypage = page;
  }

  goFans = () => {

  }

  goFollows = () => {

  }

  goTopics = () => {

  }

  followClick = async () => {
    const { isFollow, user: {id}, fans_count } = this.state;
    let res = false, followCount = fans_count;
    if (isFollow) {
      res = await Follow.cancelFollowUser(id);
      followCount--;
    } else {
      res = await Follow.followUser(id);
      followCount++;
    }
    if (res) {
      this.setState({
        isFollow: !isFollow,
        fans_count: followCount,
      });
    }
  }

  render() {
    const {
      pageState,
      showMoreLoading,
      user,
      postList,
      fans_count,
      isFollow,
    } = this.state;
    return (
      <View className='container'>
        <MyPage
          autoHeight
          state={pageState}
          enableTips={false}
          showMoreLoading={showMoreLoading}
          onScrollToLower={this.onScrollToLower}
          onRetry={this.init}
          onRef={this.onRef}
        >
          {/* 用户头像 */}
          {
            user && (
              <View
                className='user-box'
              >
                <View className='mask' style={{
                  backgroundImage: `url('${user.avatar}')`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'none',
                  backgroundPosition: 'center center'
                }}
                ></View>
                <View className='top'>
                  <AtAvatar className='shadow' image={user.avatar} circle size='large' />
                  <AtButton
                    size='small'
                    circle
                    type={isFollow ? 'secondary' : 'primary'}
                    onClick={this.followClick}
                  >{isFollow ? '已关注' : '关注'}</AtButton>
                </View>
                <View className='center'>
                  <View className='nickname'>{user.user_nickname}</View>
                  <View className='school'>{user.school || '某高校'}</View>
                </View>
                <View className='bottom'>
                  <View className='tip' onClick={this.goFans}>
                    {fans_count}<Text className='txt'>粉丝</Text>
                  </View>
                  <View className='tip' onClick={this.goFollows}>
                    {user.follow_count}<Text className='txt'>关注</Text>
                  </View>
                  <View className='tip' onClick={this.goTopics}>
                    {user.topic_count}<Text className='txt'>话题</Text>
                  </View>
                </View>
              </View>
            )
          }
          {
            postList.map((item) => (
              <PostCard key={item.id} post={item} canUserHome={false} showOption canGoPost />
            ))
          }
        </MyPage>
      </View>
    );
  }
}

export default UserHome;
