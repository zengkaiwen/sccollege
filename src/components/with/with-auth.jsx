import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';

@connect(({ user }) => ({
  user
}))
class WithAuth extends Taro.Component {

  isAuth = () => {
    const { user, onClick } = this.props;
    if (user.is_auth !== 2) {
      Taro.showToast({
        icon: 'none',
        title: '请先学生认证'
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

export default WithAuth;
