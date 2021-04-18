import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

import TopicList from '../../components/topic-list/topic-list';
import Footer from '../../components/guide-footer/guide-footer';

export default class TopicMaidan extends Component {

  onTopicItemClick = () => {

  }

  onCreateBtnClick = () => {
    Taro.navigateTo({
      url: '/pages/topic-create/topic-create'
    });
  }

  render() {
    return (
      <View>
        <TopicList onTopicItemClick={this.onTopicItemClick} des='没有感兴趣的话题？那就新建一个吧' />
        <Footer btntext='创建话题' onBtnTap={this.onCreateBtnClick} />
      </View>
    );
  }
}
