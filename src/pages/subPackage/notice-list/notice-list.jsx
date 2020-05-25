import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import MyPage from '../../../components/my-page/my-page';
import NoticeOfficial from '../../../components/notice-official/notice-official';
import NoticeFollow from '../../../components/notice-follow/notice-follow';
import NoticeComment from '../../../components/notice-comment/notice-comment';
import NoticeReply from '../../../components/notice-reply/notice-reply';

import { Notice } from '../../../common/api';

import './notice-list.scss'

export default class NoticeList extends Component {

  state = {
    type: null,
    pageState: 0,
    page: 1,
    dataList: [],
    noMore: false,
    showMoreLoading: false,
  }

  componentDidMount() {
    this.init();
  }

  config = {
    navigationBarTitleText: '',
  }

  init = async () => {
    const { page } = this.state;
    const { type } = this.$router.params;
    console.log(type);
    this.setState({
      pageState: 0,
      type,
    });
    let dataList = [];
    switch(type) {
      case 'official':
        dataList = await Notice.official(page);
        Taro.setNavigationBarTitle({
          title: '官方通知'
        });
        break;
      case 'follow':
        dataList = await Notice.beFollow(page);
        Taro.setNavigationBarTitle({
          title: '新粉丝'
        });
        break;
      case 'comment':
        dataList = await Notice.beComment(page);
        Taro.setNavigationBarTitle({
          title: '被评论'
        });
        break;
      case 'reply':
        dataList = await Notice.beReply(page);
        Taro.setNavigationBarTitle({
          title: '被回复'
        });
        break;
    }
    if (dataList && dataList.length !== 0) {
      this.setState({
        dataList,
        page: page + 1,
        pageState: 3
      });
    } else {
      this.setState({
        pageState: 1,
      })
    }
  }

  onScrollToLower = async () => {
    const { page, dataList, noMore, type } = this.state;
    if (noMore) return;

    this.setState(() => ({
      showMoreLoading: true,
    }));
    let newList = [];
    switch(type) {
      case 'official':
        newList = await Notice.official(page);
        break;
      case 'follow':
        newList = await Notice.beFollow(page);
        break;
      case 'comment':
        newList = await Notice.beComment(page);
        break;
      case 'reply':
        newList = await Notice.beReply(page);
        break;
    }
    if (newList && newList.length !== 0) {
      this.setState({
        dataList: dataList.concat(newList),
        page: page + 1,
      });
    } else {
      this.setState({
        noMore: true,
      })
    }
    this.setState(() => ({
      showMoreLoading: false,
    }))
  }

  render() {
    const { pageState, showMoreLoading, dataList, type } = this.state;
    return (
      <MyPage
        autoHeight
        state={pageState}
        enableTips={false}
        showMoreLoading={showMoreLoading}
        onScrollToLower={this.onScrollToLower}
        onRetry={this.init}
      >
        {
          type === 'official' &&  dataList.map(item => (
            <NoticeOfficial key={item.id} data={item} />
          ))
        }
        {
          type === 'follow' &&  dataList.map(item => (
            <NoticeFollow key={item.id} data={item} />
          ))
        }
        {
          type === 'comment' && dataList.map(item => (
            <NoticeComment key={item.id} data={item} />
          ))
        }
        {
          type === 'reply' && dataList.map(item => (
            <NoticeReply key={item.id} data={item} />
          ))
        }
      </MyPage>
    )
  }
}