import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';

function isEmptyObject(obj) {
  for(let key in obj) {
    return false;
  }
  return true;
}

@connect(({ user }) => ({
  user
}))
class WithLogin extends Taro.Component {

  isAuth = () => {
    const { user, onClick } = this.props;
    console.log('User：',!user);
    if (!user || isEmptyObject(user)) {
      Taro.showToast({
        icon: 'none',
        title: '请先微信授权登录'
      });
      Taro.switchTab({
        url: '../../pages/me/me'
      });
      return;
    }
    onClick();
  }

  render() {
    const { children } = this.props;
    return (
      <View onClick={this.isAuth}>
        {children}
      </View>
    );
  }
}

export default WithLogin;
