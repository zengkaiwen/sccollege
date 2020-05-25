import Taro, { Component } from '@tarojs/taro';
import {
  View, Image, Button, Text
} from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtIcon } from 'taro-ui';

import { User } from '../../common/api';
import { getUser } from '../../actions/user';
import WithLogin from '../../components/with/with-login';

import './me.scss';


@connect(({ user }) => ({
  user
}), (dispatch) => ({
  dispatch,
}))
class Me extends Component {

  componentDidMount() {
    this.init();
  }

  init() {

  }

  config = {
    navigationBarTitleText: '我的',
    navigationBarBackgroundColor: '#f8f8f8'
  }

  // 跳到个人主页
  goHomePage = () => {
    const { user: { id } } = this.props;
    Taro.navigateTo({
      url: '/pages/user-home/user-home?id='+id
    });
  }

  // 跳到编辑信息
  goEdit = () => {
    Taro.navigateTo({
      url: '/pages/subPackage/user-edit/user-edit'
    })
  }

  // 跳到学生认证页面
  goSchool = () => {
    Taro.navigateTo({
      url: '/pages/user-school/user-school'
    })
  }

  // 授权回调函数
  onGetUserInfo = async  (e) => {
    const { dispatch } = this.props;
    const { detail } = e;
    if (detail['encryptedData']) {
      const {
        encryptedData,
        iv,
        rawData,
        signature
      } = detail;
      let result = await User.bindInfo(encryptedData, iv, rawData, signature);
      if (result) {
        dispatch(getUser());
      }
    } else {
      User.showToast('你已取消授权');
    }
  }

  render() {
    const { user = null } = this.props;
    return (
      <View className='container'>
        {
          !User.isEmptyObject(user) ? (
            <View className='info' onClick={this.goHomePage}>
              <View className='avtater'>
                <Image src={user.avatar || '../../images/empty_avator.svg'} />
              </View>
              <View className='content'>
                <View className='nick'>{user.user_nickname || '未知'}</View>
                <View className='des'>
                  <Text>
                    <Text className='label'>关注</Text>
                    <Text className='value'>{user.followNum || 0}</Text>
                  </Text>
                  <Text>
                    <Text className='label'>粉丝</Text>
                    <Text className='value'>{user.fansNum || 0}</Text>
                  </Text>
                </View>
              </View>
              <WithLogin onClick={this.goHomePage}>
                <View className='right'>
                  <View>个人主页</View>
                  <AtIcon value='chevron-right' size='14' />
                </View>
              </WithLogin>
            </View>
          ) : (
            <Button lang='zh_CN' onGetUserInfo={this.onGetUserInfo} className='info' openType='getUserInfo'>
              <View className='avtater'>
                <Image src='../../images/empty_avator.svg' />
              </View>
              <View className='content'>
                <View className='nick'>未登录</View>
                <View className='des'>登录后可编辑个人资料</View>
              </View>
              <View className='right'>
                <View className='login-txt'>点击微信授权</View>
              </View>
            </Button>
          )
        }
        <View className='cells'>
          <WithLogin onClick={this.goEdit}>
            <Button className='cell'>
              <View className='left'>
                <View className='title'>编辑信息</View>
                <View className='des'>完善个人信息让更多同学了解你</View>
              </View>
              <View className='right'>
                <AtIcon value='chevron-right' size='14' />
              </View>
            </Button>
          </WithLogin>
          {
            !User.isEmptyObject(user) && user.is_auth !== 2 ? (
              <Button className='cell' onClick={this.goSchool}>
                <View className='left'>
                  <View className='title'>学生认证</View>
                  <View className='des'>学生认证后可解锁更多特权</View>
                </View>
                <View className='right'>
                  <View className='auth'>未认证</View>
                  <AtIcon value='chevron-right' size='14' />
                </View>
              </Button>
            ) : null
          }
        </View>
        <View className='cells'>
          <Button className='cell' open-type='contact'>
            <View className='left'>
              <View className='title'>帮助与反馈</View>
              <View className='des'>投稿、帮助、合作都可以点击这里</View>
            </View>
            <View className='right'>
              <AtIcon value='chevron-right' size='14' />
            </View>
          </Button>
          <Button className='cell' open-type='feedback'>
            <View className='left'>
              <View className='title'>意见反馈</View>
              <View className='des'>你的意见和建议，是对我们最大的支持</View>
            </View>
            <View className='right'>
              <AtIcon value='chevron-right' size='14' />
            </View>
          </Button>
          <Button className='cell' open-type='share'>
            <View className='left'>
              <View className='title'>分享小程序</View>
              <View className='des'>觉得有趣，就分享给你身边的同学吧</View>
            </View>
            <View className='right'>
              <AtIcon value='chevron-right' size='14' />
            </View>
          </Button>
        </View>
      </View>
    );
  }
}

export default Me;
