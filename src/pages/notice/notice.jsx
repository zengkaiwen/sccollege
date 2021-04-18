import React, { Component } from 'react';
import Taro from '@tarojs/taro'
import {
  View,
  Image,
  Text
} from '@tarojs/components';
import { connect } from 'react-redux';
import { AtBadge } from 'taro-ui';

import { Notice as NoticeService } from '../../common/api';

import './notice.scss';

@connect(({ user }) => ({
  user
}))
class Notice extends Component {

  state = {
    countObj: null,
  }

  componentDidMount() {
    const { user } = this.props;
    if (!user) {
      Taro.showToast({
        icon: 'none',
        title: '请先绑定微信帐号'
      });
      Taro.switchTab({
        url: '/pages/me/me',
      });
      return;
    }
  }

  componentDidShow() {
    this.init();
  }

  async init() {
    const countObj = await NoticeService.count();
    if (countObj) {
      this.setState({
        countObj,
      })
    }
  }

  goNoticeList(type) {
    Taro.navigateTo({
      url: '/pages/subPackage/notice-list/notice-list?type='+type
    });
  }

  render() {
    const { countObj } = this.state;
    return (
      <View>
        {
          countObj && (
            <View>
              <View
                className='card'
                onClick={() => this.goNoticeList('official')}
              >
                <AtBadge value={countObj.official} maxValue={99}>
                  <Image className='icon' src='../../images/tongzhi.svg' />
                </AtBadge>
                <Text className='official'>官方通知</Text>
              </View>
              <View
                className='card'
                onClick={() => this.goNoticeList('follow')}
              >
                <AtBadge value={countObj.follow} maxValue={99}>
                  <Image className='icon' src='../../images/fans.svg' />
                </AtBadge>
                <Text className=''>新粉丝</Text>
              </View>
              <View
                className='card'
                onClick={() => this.goNoticeList('comment')}
              >
                <AtBadge value={countObj.comment} maxValue={99}>
                  <Image className='icon' src='../../images/pinglun.svg' />
                </AtBadge>
                <Text className=''>帖子被评论</Text>
              </View>
              <View
                className='card'
                onClick={() => this.goNoticeList('reply')}
              >
                <AtBadge value={countObj.reply} maxValue={99}>
                  <Image className='icon' src='../../images/huifupingluns.svg' />
                </AtBadge>
                <Text className=''>评论被回复</Text>
              </View>
            </View>
          )
        }
      </View>
    )
  }
}

export default Notice;
