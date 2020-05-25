import Taro, { Component } from '@tarojs/taro';

import { Post } from '../../common/api';
import PostCard from '../../components/post-card/post-card';
import MyPage from '../../components/my-page/my-page';

import './page-recommend.scss';

export default class Recommend extends Component {

  state = {
    pageState: 0,
    postList: [],
    page: 1,
    noMore: false,
    showMoreLoading: false,
  }

  componentDidMount() {
    this.init();
  }

  init = async () => {
    const { page } = this.state;
    const postList = await Post.getNewPosts(page);
    if (postList) {
      this.setState({
        postList,
        page: page + 1,
        pageState: 3
      });
    } else {
      this.setState({
        pageState: 1,
      });
    }
  }

  // 加载更多
  onScrollToLower = async () => {
    const { page, postList, noMore } = this.state;
    if (noMore) return;
    this.setState({
      showMoreLoading: true,
    });

    const newPostList = await Post.getNewPosts(page);
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

  // 刷新
  onRefresh = async () => {
    const { postList } = this.state;
    const newPostList = await Post.getNewPosts(1);
    if (newPostList && newPostList[0]['id'] !== postList[0]['id'] ) {
      this.setState({
        postList: newPostList,
        page: 2,
      });
    } else {
      Post.showToast('当前没有最新帖子');
    }
    this.mypage.hideRefresh();
  }

  onRef = (mypage) => {
    this.mypage = mypage;
  }

  render() {
    const { postList, pageState, showMoreLoading } = this.state;
    return (
      <MyPage
        enableRefresh
        state={pageState}
        enableTips={false}
        showMoreLoading={showMoreLoading}
        onScrollToLower={this.onScrollToLower}
        onRefresh={this.onRefresh}
        onRef={this.onRef}
        onRetry={this.init}
      >
        {
          postList.map(post => (
            <PostCard key={post.id} post={post} showOption canGoPost canUserHome />
          ))
        }
      </MyPage>
    );
  }
}
