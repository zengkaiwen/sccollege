import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

export default class Report extends Component {

  state = {

  }

  componentDidMount() {

  }

  async init() {
    const { id, type } = this.$router.params; 
  }

  config = {
    navigationBarTitleText: '举报'
  }

  render() {
    const {  } = this.state;
    return (
      <View>
        举报页面
      </View>
    )
  }

}