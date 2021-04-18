import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { connect } from 'react-redux';

import PostCard from '../../components/post-card/post-card';
import CommentCard from '../../components/comment-card/comment-card';
import CommentReply from '../../components/comment-reply/comment-reply';
import MyPage from '../../components/my-page/my-page';
import { Post as PostService, Comment as CommentService } from '../../common/api';

import './post.scss';


@connect(({ user }) => ({
  user
}))
class Post extends Component {
  state = {
    post: null,
    pageState: 0,
    page: 1,
    noMore: false,
    showMoreLoading: false,
    commentList: [],
  }

  componentDidMount() {
    this.init();
  }

  onShareAppMessage() {
    const { post: { content, id } } = this.state;
    return {
      title: content.slice(0, 20)+'...',
      path: '/pages/post/post?id='+id
    }
  }

  // 初始化
  async init() {
    const { id } = this.$router.params;
    const { page } = this.state;
    const post = await PostService.getPostDetail(id);

    const { from_uid } = post;
    const { user: { id: uid } } = this.props;

    let comment_res = null;
    if (uid == from_uid) { // 如果当前用户是该帖子的用户
      comment_res = await CommentService.getCommentsByPostWithSecret(id, page);
    } else {
      comment_res = await CommentService.getCommentsByPost(id, page);
    }

    if (comment_res) { // 如果评论列表存在
      this.setState({
        commentList: comment_res,
        page: page + 1
      });
    }


    if (post) { // 如果帖子获取成功
      this.setState({
        pageState: 3,
        post
      });
    } else {
      this.setState({
        pageState: 1,
      });
    }
  }

  // 下拉加载
  onScrollToLower = async () => {
    const { post:{id}, page, commentList, noMore } = this.state;
    if (noMore) return;
    this.setState({
      showMoreLoading: true,
    });

    const newList = await CommentService.getCommentsByPost(id, page);
    if (newList) {
      this.setState({
        commentList: commentList.concat(newList),
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


  render() {
    const {
      pageState,
      showMoreLoading,
      post,
      noMore,
      commentList,
    } = this.state;
    return (
      <View>
      <MyPage
        autoHeight
        state={pageState}
        enableTips={noMore}
        showMoreLoading={showMoreLoading}
        onScrollToLower={this.onScrollToLower}
      >
        <PostCard post={post} canUserHome />
        <View className='comment-wrap'>
          <Text>评论列表</Text>
          {/* <View className='option'>
            <View className='active'>热门</View>
            <View className='divi'></View>
            <View>最新</View>
          </View> */}
        </View>
        {
          commentList.map((comment) => (
            <CommentCard key={comment.id} comment={comment} showOption canGoComment />
          ))
        }
        {
          commentList.length === 0 && (
            <View className='tip'>
              还没有人评论哦，快来抢沙发吧
            </View>
          )
        }
        <View className='bottom'></View>
      </MyPage>
      {
        post && (
          <CommentReply
            openSecret
            openImagePicker
            canShare
            type='comment'
            msgCount={post.comment_count}
            likesCount={post.likes_count}
            toUser={post.user}
            parentId={post.id}
            doLike={this.doLike}
          />
        )
      }
      </View>
    )
  }
}

export default Post;
