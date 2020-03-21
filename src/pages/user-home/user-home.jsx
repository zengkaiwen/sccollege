import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import NavBar from 'taro-navigationbar';
import './user-home.scss';

import MyPage from '../../components/my-page/my-page';
import UserItem from '../../components/user-item/user-item';

class UserHome extends Component {
  state = {
    showUser: false,
  }

  config = {
    navigationStyle: 'custom',
  }

  render() {
    const {
      showUser,
    } = this.state;
    return (
      <View className='container'>
        <NavBar 
          back={showUser}
          background='transparent'
          renderLeft={
            (
              <View slot='left' className='user-back' v-if='showUser'>
                <View className='btn-back' onClick='goBack'></View>
                <UserItem style='opacity:1;transition: all 0.3s;' info='post.user' />
              </View>
            )
          }
          renderCenter={
            (
              <View slot='center' className='navigation-title' v-else>帖子详情</View>
            )
          }
        />
      </View>
    );
  }
}

export default UserHome;
