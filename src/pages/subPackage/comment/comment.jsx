import React, { Component } from 'react';
import { View } from '@tarojs/components';

import MyPage from '../../../components/my-page/my-page';
import CommentCard from '../../../components/comment-card/comment-card';
import CommentReply from '../../../components/comment-reply/comment-reply';
import ReplyCard from '../../../components/reply-card/reply-card';

import {
  Comment as CommentService,
  Reply as ReplyService,
  Reply
} from '../../../common/api';

import './comment.scss';

export default class Comment extends Component {

  state = {
    comment: null,
    pageState: 0,
    replyList: [],
    page: 1,
    noMore: false,
    showMoreLoading: false,
    toUser: null,
  }

  componentDidMount() {
    this.init();
  }

  async init() {
    const { id } = this.$router.params;
    const { page } = this.state;
    const comment = await CommentService.getCommentDetail(id);

    const reply_res = await ReplyService.getReplysByComment(id, page);
    if (reply_res) { // 如果回复列表存在
      this.setState({
        replyList: reply_res,
        page: page + 1
      });
    }

    if (comment) { // 如果评论获取成功
      this.setState({
        pageState: 3,
        comment,
        toUser: comment.user
      });
    } else {
      this.setState({
        pageState: 1,
      });
    }
  }

  // 上拉加载
  onScrollToLower = async () => {
    const { id } = this.$router.params;
    const { page, replyList, noMore } = this.state;
    if (noMore) return;
    this.setState({
      showMoreLoading: true,
    });

    const newList = await Reply.getReplysByComment(id, page);
    if (newList) {
      this.setState({
        replyList: replyList.concat(newList),
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

  replyClick(reply) {
    console.log(reply);
    const { user } = reply;
    this.setState({
      toUser: user,
    });
  }

  render() {
    const {
      comment, pageState, noMore, showMoreLoading, toUser, replyList
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
          {
            comment && (
              <CommentCard
                comment={comment}
              />
            )
          }
          <View className='tip'>回复列表</View>
          {
            replyList.map(reply => (
              <ReplyCard key={reply.id} reply={reply} onContentClick={() => this.replyClick(reply)} commentUserId={comment.user.id} />
            ))
          }
        </MyPage>
        {
          comment && (
            <CommentReply
              type='reply'
              msgCount={comment.reply_count}
              likesCount={comment.likes_count}
              toUser={toUser}
              parentId={comment.id}
              doLike={this.doLike}
            />
          )
        }
      </View>
    )
  }
}
