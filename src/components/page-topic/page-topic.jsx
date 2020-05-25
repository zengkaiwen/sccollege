import Taro, { Component } from '@tarojs/taro';
import {
  View, ScrollView, Image, Text, Button
} from '@tarojs/components';

import { AtIcon } from 'taro-ui';

import { Topic, Follow } from '../../common/api';

import MyPage from '../my-page/my-page';

import './page-topic.scss';
import '../../font.css'

export default class PageTopic extends Component {

  state = {
    pageState: 0,
    tracks: [], // 保存在本地的最近访问话题
    items: [], // 已关注话题列表
    recommends: [], // 推荐的话题列表
    // hasMore: true,
    // isLoadData: false,
    pageIndex: 1,
    // pageSize: 15 
  }

  componentDidMount () {
    this.init();
  }

  init = async () => {
    this.setState({
      pageState: 0
    });

    let res = await Topic.myFollowTopics(1); // 获取我关注的topic
    if (res) {
      if (res.length > 0) {
        this.setState({
          items: res,
          pageState: 3,
          pageIndex: ++this.state.pageIndex
        });
      } else { // 如果我没有关注的话题，获取推荐的话题
        res = await Topic.getTopicList(1);
        if (res) {
          this.setState({
            pageState: 3,
            recommends: res,
          });
        } else {
          this.setState({
            pageState: 1,
          })
        }
      }
    } else {
      this.setState({
        pageState: 1,
      })
    }
  }

  componentDidShow() {
    const tracks = Topic.getTopicTrack();
    if (tracks) {
      this.setState({
        tracks,
      })
    }
  }

  onScroll = (detail) => {
    console.log(detail);
  }

  onScrollToLower = () => {

  }

  onRefresh = () => {
    console.log('刷新');
    setTimeout(() => {
      this.mypage.hideRefresh();
    }, 2000);
  }

  /**
   * 清除最近访问的话题
   */
  onClean = () => {

  }

  /**
   * 进入话题页面
   * @param {number} id 话题的id
   */
  goTopic(id) {
    Taro.navigateTo({
      url: '/pages/subPackage/topic-home/topic-home?id='+id
    });
  }

  /**
   * 进入话题广场
   */
  goMaidan = () => {
    Taro.navigateTo({
      url: '/pages/topic-maidan/topic-maidan',
    });
  }

  onRef = (page) => {
    this.mypage = page;
  }

  async onFollow(e, item, index) {
    const { recommends } = this.state;
    let newRecommends = [...recommends];
    let res = false;
    if (newRecommends[index].hasFollow) {
      res = await Follow.cancelFollowTopic(item.id);
      newRecommends[index].hasFollow = false;
    } else {
      res = await Follow.followTopic(item.id);
      newRecommends[index].hasFollow = true;
    }
    if (res) {
      this.setState({
        recommends: newRecommends,
      });
    }
  }

  render() {
    const {
      pageState,
      items,
      recommends,
      tracks
    } = this.state;
    return (
      <MyPage
        enableRefresh
        state={pageState}
        enableTips={false}
        showMoreLoading={false}
        onScroll={this.onScroll}
        onScrollToLower={this.onScrollToLower}
        onRefresh={this.onRefresh}
        onRef={this.onRef}
        onRetry={this.init}
      >
        {
          tracks ? (
            <View className='tracks'>
              <View className='top'>
                <View className='title'>最近访问的话题</View>
                <View className='btn' onClick={this.onClean}>
                  <View className='icon icon-del-line'></View>
                </View>
              </View>
              <ScrollView scrollX>
                <View className='list'>
                  {
                    tracks.map((item) => (
                      <View className='item' key={item.id} onClick={() => this.goTopic(item.id)}>
                        <Image src={item.icon_path} />
                        <View className='item-title'>{item.title}</View>
                      </View>
                    ))
                  }
                  <View className='item item-more' onClick={this.goMaidan}>
                    <View className='ic'>
                      <Text className='icon icon-more-line' />
                    </View>
                    <View className='item-title'>发现话题</View>
                  </View>
                </View>
              </ScrollView>
            </View>
          ) : null
        }
        {
          items.length ? (
            <View className='follow recommends'>
              <View className='title'>
                <View className='left'>关注话题</View>
                <View className='right' onClick={this.goMaidan}>
                  <View>话题广场</View>
                  <AtIcon value='chevron-right' size='16' color='#409eff'></AtIcon>
                </View>
              </View>
              <View className='list'>
                {
                  items.map((item) => (
                    <View
                      className='item'
                      key={item.id}
                      hover-className='item-hover'
                      onClick={() => this.goTopic(item.id)}
                    >
                      <Image src={item.icon_path} />
                      <View className='item-content'>
                        <View className='item-title'>{item.title}</View>
                        <View className='item-des'>{item.des}</View>
                      </View>
                      <View className='item-action'>
                        {/* <!-- <View className='num'>3</View> --> */}
                      </View>
                    </View>
                  ))
                }
              </View>
              <View className='footer' onClick={this.goMaidan}>
                <View className='icon icon-add' />
                <View>关注更多话题</View>
              </View>
            </View>
          ) : (
            <View>
              <View className='empty'>
                <View className='empty-content'>
                  <View>你还没有关注话题,</View>
                  <View>先关注一下吧!</View>
                </View>
              </View>
              <View className='recommends'>
                <View className='title'>
                  <View className='left'>推荐话题</View>
                  <View className='right' onClick={this.goMaidan}>
                    <Text>话题广场</Text>
                    <AtIcon value='chevron-right' size='16' color='#409eff'></AtIcon>
                  </View>
                </View>
                <View className='list'>
                  {
                    recommends.map((item, index) => (
                      <View
                        className='item'
                        key={item.id}
                        onClick={() => this.goTopic(item.id)}
                      >
                        <Image src={item.icon_path} />
                        <View className='item-content'>
                          <View className='item-title'>{item.title}</View>
                          <View className='item-des'>{item.des}</View>
                        </View>
                        <View className='item-action' onClick={(e) => {e.stopPropagation();this.onFollow(e, item, index)}}>
                          <Button className={['btn', item.hasFollow ? 'has' : '']}>
                            <Text className={['icon', item.hasFollow ? 'icon-follow' : 'icon-add']}></Text>
                            <Text>{item.hasFollow ? '已关注' : '关注'}</Text>
                          </Button>
                        </View>
                      </View>
                    ))
                  }
                </View>
              </View>
            </View>
          )
        }
      </MyPage>
    );
  }
}
