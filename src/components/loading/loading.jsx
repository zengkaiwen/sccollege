import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import './loading.scss';

class Loading extends Component {


  render() {
    const {
      extClass,
      type = 'dot-gray',
      tips = '加载中'
    } = this.props;
    return (
      <View
        className={['wx_loading_view', extClass]}
      >
        {
          type === 'dot-white' ? (
            <View className='loading wx_dot_loading wx_dot_loading_white'></View>
          ) : type === 'dot-gray' ? (
            <View>
              <View className='loading wx_dot_loading_1'></View>
              <View className='loading wx_dot_loading_2'></View>
              <View className='loading wx_dot_loading_3'></View>
            </View>
          ) : type === 'circle' ? (
            <View className='weui-loadmore'>
              <View className='weui-loading'></View>
              <View className='weui-loadmore__tips'>{tips}</View>
            </View>
          ) : null
        }
      </View>
    )
  }
}

export default Loading;
