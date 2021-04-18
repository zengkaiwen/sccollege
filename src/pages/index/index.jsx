import React, { Component } from 'react';
import Taro from '@tarojs/taro'
import { View, Swiper, SwiperItem } from '@tarojs/components'

import { connect } from 'react-redux'

import tabChange from '../../actions/hometabs'

import './index.scss'

import NavBar from '../../components/navigator/navigator';
import Tabs from '../../components/tab-bar/tab-bar';
import Topic from '../../components/page-topic/page-topic';
import Recommend from '../../components/page-recommend/page-recommend';
import Activity from '../../components/page-activity/page-activity';
import WithAuth from '../../components/with/with-auth';

@connect(({ hometabs }) => ({
  hometabs
}), (dispatch) => ({
  dispatchTabChange(index) {
    dispatch(tabChange(index))
  }
}))
class Index extends Component {

  state = {
    labels: ['话题', '推荐', '活动'],
    action_right: 15,
  }

  componentDidMount() {
    console.log(this.props);
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

  goEdit = () => {
    Taro.navigateTo({
      url: '/pages/post-edit/post-edit'
    });
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
            <Activity />
          </SwiperItem>
        </Swiper>

        <View className='home-action' style={{right: `${action_right}px`}}>
          <WithAuth onClick={this.goEdit}>
            <View className='btn-circle btn-i'>
              <View className='icon icon-xiezuo'></View>
            </View>
          </WithAuth>
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
