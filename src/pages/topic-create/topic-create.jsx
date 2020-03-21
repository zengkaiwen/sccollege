import Taro, { Component, switchTab } from '@tarojs/taro';
import { View, Image, Text, Input } from '@tarojs/components';
import { AtIcon, AtButton } from 'taro-ui';

import './topic-create.scss';

import { Topic } from '../../common/api';

class TopicCreate extends Component {

  state = {
    icon: '',
    title: '',
    follow_name: '',
    des: '',
    disabled: false,
  }

  config = {
    navigationBarTitleText: '创建话题'
  }

  changeIcon = async () => {
    const path = await Topic.uploadOneImg();
    this.setState({
      icon: path
    });
  }

  inputChange(type, e) {
    const { value } = e.detail;
    console.log(value.length);
    switch(type) {
      case 'title': {
        this.setState({
          title: value,
        });
        break;
      }
      case 'follow_name': {
        this.setState({
          follow_name: value,
        });
        break;
      }
      case 'des': {
        this.setState({
          des: value,
        });
        break;
      }
      default: return;
    }
  }

  onSubmit = async () => {
    const { icon, des, title, follow_name } = this.state;
    let msg = '';
    if (!icon) msg = '图标不能为空';
    if (!des) msg = '介绍不能为空';
    if (!title) msg = '话题名称不能为空';
    if (!follow_name) msg = '关注者称呼不能为空';
    if (des.length > 20) msg = '介绍不能超过20个字';
    if (title.length > 8) msg = '名称不能超过8个字';
    if (follow_name > 4) msg = '称呼不能超过4个字';

    if (msg) {
      Topic.showToast(msg);
      return;
    }
    this.setState({
      disabled: true,
    })
    const result = await Topic.add(title, des, icon, follow_name);
    this.setState({
      disabled: false,
    })
    if (result) {
      setTimeout(() => {
        Taro.navigateBack();
      }, 2000);
    }
  }

  render() {
    const { icon, title, follow_name, des, disabled } = this.state;
    return (
      <View>
        <View className='form-item'>
          <View className='label'>话题图标：</View>
          <View onClick={this.changeIcon} style={{display: 'inline-block'}}>
            {
              icon ? (
                <Image className='img' src={Topic.parseQiniuImg(icon)} />
              ) : (
                <View className='img'>
                  <AtIcon value='image' color='#ccc' />
                  <Text className='des'>选择一张图片</Text>
                </View>
              )
            }
          </View>
        </View>
        <View className='form-item'>
          <View className='label'>话题名称：</View>
          <View className='des'>好的名称是吸引小伙伴的关键</View>
          <Input className='form-control' value={title} onInput={(e) => this.inputChange('title', e)} />
        </View>
        <View className='form-item'>
          <View className='label'>一句话介绍：</View>
          <View className='des'>简短的介绍可以拉近朋友间的距离</View>
          <Input className='form-control' value={des} onInput={(e) => this.inputChange('des', e)} />
        </View>
        <View className='form-item'>
          <View className='label'>对话题关注者的称呼：</View>
          <View className='des'>在这里，我们都叫{follow_name}</View>
          <Input className='form-control' value={follow_name} onInput={(e) => this.inputChange('follow_name', e)} />
        </View>
        <View className='form-item'>
          <AtButton type='primary' disabled={disabled} onClick={this.onSubmit} >提交</AtButton>
        </View>
      </View>
    )
  }
}

export default TopicCreate;