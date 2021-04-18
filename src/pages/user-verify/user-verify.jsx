import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';

import { AtInput, AtIcon } from 'taro-ui';

import Footer from '../../components/guide-footer/guide-footer';
import { User } from '../../common/api';
import './user-verify.scss'

class UserVerify extends Component {

  state = {
    user_name: '',
    auth_image: '',
  }

  handleInputChange = (e) => {
    this.setState({
      user_name: e,
    });
  }

  handleImgBoxClick = async () => {
    const { auth_image } = this.state;
    if (!auth_image) { // 选择图片
      const url = await User.uploadAuthImg()
      this.setState({
        auth_image: url,
      })
    } else { // 浏览图片
      Taro.previewImage({
        current: auth_image,
        urls: [auth_image]
      });
    }
  }

  doAuth = async () => {
    const { user_name, auth_image  } = this.state;
    if (!user_name) {
      User.showToast('姓名不能为空');
      return;
    }
    if (!auth_image) {
      User.showToast('请上传一张学生证照片');
      return;
    }
    Taro.showLoading();
    const res = await User.applyAuth(user_name, auth_image);
    Taro.hideLoading();
    if (res) {
      Taro.switchTab({
        url: '/pages/me/me'
      })
    }
  }

  goMe = () => {
    Taro.switchTab({
      url: '../me/me',
    });
  }

  render() {
    const { user_name, auth_image } = this.state;
    return (
      <View>
        <View className='box'>
          <AtInput
            border={false}
            title='填写姓名'
            placeholder='点击输入你的真实姓名'
            value={user_name}
            onChange={this.handleInputChange}
          />
        </View>
        <View className='box'>
          <View className='title'>上传学生证</View>
          <View className='des'>学生证需清晰看到姓名、学校、院系、年级信息</View>
          <View className='img_box' onClick={this.handleImgBoxClick}>
            {
              auth_image ? (
                <Image className='img' src={User.parseQiniuImg(auth_image)} mode='aspectFit' />
              ) : (
                <View className='indicate'>
                  <AtIcon value='camera' size='30' color='#989898' />
                  <View className='des'>上传学生证首页展示照片</View>
                </View>
              )
            }
          </View>
          <View className='tip'>提示</View>
          <View className='tip'>1、我们将对你的证明材料严格保密</View>
          <View className='tip'>2、提交后预计1个工作日内通过消息发送认证结果</View>
          <View className='tip'>3、请确保提交的材料真实、合法、有效，否则会影响认证</View>
        </View>
        <Footer
          btntext='提交资料'
          onBtnTap={this.doAuth}
          des='暂不认证'
          onDesTap={this.goMe}
        />
      </View>
    )
  }
}

export default UserVerify;
