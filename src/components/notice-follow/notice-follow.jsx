import React, { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

import { Notice } from '../../common/api';

import './notice-follow.scss'

export default class NoticeFollow extends Component {

  state = {
    is_read: false,
  }

  componentDidMount() {
    this.init();
  }

  init() {
    const { data } = this.props;
    this.setState({
      is_read: data.is_read,
    });
  }

  handleClick = async () => {
    const { is_read } = this.state;
    const { data } = this.props;
    if (!is_read) {
      const res = await Notice.beFollow(null, data.id);
      if (res) {
        this.setState({
          is_read: true,
        });
      }
    }

    Taro.navigateTo({
      url: '/pages/user-home/user-home?id='+data.fans_id
    });
  }

  render() {
    const { is_read } = this.state;
    const { data } = this.props;
    return (
      <View>
        {
          data && (
            <View
              className='card'
              style={{
                backgroundColor: is_read ? '#e5e5e5' : '#ff494933'
              }}
              onClick={this.handleClick}
            >
              <View className='date'>{data.create_at}</View>
              <Text>{data.content}</Text>
            </View>
          )
        }
      </View>
    )
  }
}
