import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtAvatar, AtButton } from 'taro-ui';

import MyPage from '../../../components/my-page/my-page';
import PostCard from '../../../components/post-card/post-card';

import { Topic, Post, Follow } from '../../../common/api';

import './topic-home.scss';

export default class TopicHome extends Component {

  state = {
    topic: null,
    pageState: 0,
    postList: [],
    page: 1,
    noMore: false,
    showMoreLoading: false,
    isFollow: false,
    follow_count: 0,
  }

  componentDidMount() {
    this.init();
  }

  onShareAppMessage() {
    const { topic: { title, id } } = this.state;
    return {
      title: '# '+title,
      path: '/pages/subPackage/topic-home/topic-home?id='+id
    }
  }

  async init() {
    const { id } = this.$router.params;
    const { page } = this.state;
    const topic = await Topic.getTopic(id);
    if (topic) {
      this.setState({
        topic,
        follow_count: topic.follow_count
      });
      Taro.setNavigationBarTitle({
        title: topic.title
      });
    }

    const isFollow = Follow.isFollowTopic(id);
    this.setState({
      isFollow,
    });
    console.log(isFollow);

    const postList = await Post.getPostsWithTopic(id, page);
    if (postList) {
      this.setState({
        postList,
        page: page + 1,
        pageState: 3,
      });
    } else {
      this.setState({
        pageState: 1,
      });
    }
  }

  onScrollToLower = async () => {
    console.log('到底了');
    const { topic: {id}, page, postList, noMore } = this.state;
    if (noMore) return;
    this.setState({
      showMoreLoading: true,
    });

    const newPostList = await Post.getPostsWithTopic(id, page);
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

  followClick = async () => {
    const { isFollow, topic: {id}, follow_count } = this.state;
    let res = false, followCount = follow_count;
    if (isFollow) {
      res = await Follow.cancelFollowTopic(id);
      followCount--;
    } else {
      res = await Follow.followTopic(id);
      followCount++;
    }
    if (res) {
      this.setState({
        isFollow: !isFollow,
        follow_count: followCount,
      });
    }
  }

  render() {
    const {
      pageState, showMoreLoading, topic, postList, noMore, isFollow, follow_count
    } = this.state;
    return (
      <MyPage
        autoHeight
        state={pageState}
        enableTips={noMore}
        showMoreLoading={showMoreLoading}
        onScrollToLower={this.onScrollToLower}
      >
        {
          topic && (
            <View className='topic-box'>
              <View className='mask' style={{
                backgroundImage: `url('${topic.icon_path}')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'none',
                backgroundPosition: 'center center'
              }}
              ></View>
              <View className='topic'>
                <AtAvatar image={topic.icon_path} />
                <View className='title'>{topic.title}</View>
                <View className='des'>{topic.des}</View>
                <View className='follow'>{follow_count} 个{topic.follow_name}</View>
                <AtButton
                  size='small'
                  circle
                  type={isFollow ? 'secondary' : 'primary'}
                  onClick={this.followClick}
                >{isFollow ? '已关注' : '关注'}</AtButton>
              </View>
            </View>
          )
        }
        {
          postList.map(post => (
            <PostCard
              key={post.id}
              post={post}
              canUserHome
              showOption
              canGoPost
            />
          ))
        }
      </MyPage>
    )
  }
}
