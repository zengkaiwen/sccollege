import Taro, { Component } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';

import './guide-footer.scss'

class GuideFooter extends Component {

  getUserInfo = () => {

  }

  onBtnClick = () => {
    const { onBtnTap } = this.props;
    if (onBtnTap) onBtnTap();
  }

  onDesClick = () => {
    const { onDesTap } = this.props;
    if (onDesTap) onDesTap();
  }

  render() {
    const { type, btntext, des, loading = false, disabled = false } = this.props;
    return (
      <View class='guide-footer'>
        {
          type === 'getUserInfo' ? (
            <Button
              onGetUserInfo={this.getUserInfo}
              loading={loading}
              disabled={disabled}
              className='button btn-login'
              openType='getUserInfo'
              lang='zh_CN'
            >
              {btntext}
            </Button>
          ) : (
            <Button
              onClick={this.onBtnClick}
              loading={loading}
              disabled={disabled}
              className='button'
              hover-class='btn-hover'
            >{btntext}</Button>
          )
        }
        <View className='des' onClick={this.onDesClick}>{des}</View>
      </View>
    );
  }
}

export default GuideFooter;
