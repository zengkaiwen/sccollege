import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem } from '@tarojs/components'

import NavBar from 'taro-navigationbar';
import { connect } from '@tarojs/redux'

import tabChange from '../../actions/hometabs'

import './index.scss'

import Tabs from '../../components/tab-bar/tab-bar';
import Topic from '../../components/page-topic/page-topic';
import Recommend from '../../components/recommend/recommend';
import Follow from '../../components/follow/follow';

@connect(({ hometabs }) => ({
  hometabs
}), (dispatch) => ({
  dispatchTabChange(index) {
    dispatch(tabChange(index))
  }
}))
class Index extends Component {

  state = {
    labels: ['话题', '推荐', '关注'],
    action_right: 15,
  }

  componentDidMount() {
    console.log(this.props);
  }

  config = {
    navigationBarTitleText: '首页',
    navigationStyle: 'custom'
  }

  onTabChange = (index) => {
    this.props.dispatchTabChange(index);
  }

  onChange = (e) => {
    const { current, source } = e.detail;
    if (source == 'touch') {
      this.props.dispatchTabChange(current);
    }
  }

  goSend = (e) => {
    e.default
  }

  render() {
    const { labels, action_right } = this.state;
    const { tabIndex } = this.props.hometabs;
    return (
      <View className='container'>
        <NavBar
          renderLeft={
            <Tabs labels={labels} selectedIndex={tabIndex} onTabChange={this.onTabChange} />
          }
        />
        <Swiper
          style={{
            height: 'calc(100vh - 64px)'
          }}
          current={tabIndex}
          onChange={this.onChange}
        >
          <SwiperItem>
            <Topic />
          </SwiperItem>
          <SwiperItem>
            <Recommend />
          </SwiperItem>
          <SwiperItem>
            <Follow />
          </SwiperItem>
        </Swiper>

        <View className='home-action' style={{right: `${action_right}px`}}>
          <View className='btn-circle btn-i' onClick={this.goSend}>
            <View className='icon icon-xiezuo'></View>
          </View>
          {/* <View className='btn-share btn-i' onClick='goMoney'>
            <View className='icon icon-hongbao'></View>
            <View className='dot'>认证领¥30</View>
          </View> */}
        </View>
      </View>
    )
  }
}

export default Index
