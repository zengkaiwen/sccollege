/* eslint-disable no-shadow */
import Taro, { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View, Image, Input, Button, PickerView, PickerViewColumn } from '@tarojs/components';
import {
  AtIcon,
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction,
  AtFloatLayout,
  AtActionSheet,
  AtActionSheetItem
} from 'taro-ui';

import { User, Province } from '../../../common/api';
import {
  changeAvatar,
  changeNickname,
  changeLabel,
  changePathetState,
  changeBirthday,
  changeHometown
} from '../../../actions/user';

import './user-edit.scss';

const years = [];
const months = [];
const days = [];
for (let i = 1; i <= 31; i++) {
  days.push(i);
}
for (let i = 1; i <= 12; i++) {
  months.push(i);
}
for (let i = 1980; i <= new Date().getFullYear(); i++) {
  years.push(i);
}


@connect(({ user }) => ({
  user
}), (dispatch) => ({
  dispatch
}))
class UserEdit extends Component {

  state = {
    pathetEnum: ['保密', '单身', '热恋'],
    userState: null,
    showNickNameDialog: false,
    showLabelDialog: false,
    showPathetDialog: false,
    showBirthdayDialog: false,
    showHometownDialog: false,
    birthday: [17, 0, 2],
    years,
    months,
    days,
    hometown: [0, 0],
    provinces: Province,
    cities: Province[0]['cities'],
  }

  componentDidMount() {
    this.propsMapState();
  }

  propsMapState() {
    const { user } = this.props;
    this.setState({
      userState: user,
    });
  }

  config = {
    navigationBarTitleText: '编辑个人资料',
    navigationBarBackgroundColor: '#f8f8f8'
  }

  onUpload = async () => {
    const imgUrl = await User.editAvtater();
    if (imgUrl) {
      const { dispatch } = this.props;
      dispatch(changeAvatar(imgUrl));
    }
  }

  updateNickname = async () => {
    this.hideModal('showNickNameDialog');
    const { userState: { user_nickname } } = this.state;
    const result = await User.setUserFiled('user_nickname', user_nickname);
    if (result) {
      const { dispatch } = this.props;
      dispatch(changeNickname(user_nickname));
    }
  }

  updateLabel = async () => {
    this.hideModal('showLabelDialog');
    const { label } = this.state.userState;
    const result = await User.setUserFiled('label', label);
    if (result) {
      const { dispatch } = this.props;
      dispatch(changeLabel(label));
    }
  }

  updateBirthday = async () => {
    this.hideModal('showBirthdayDialog');
    const { birthday, years, months, days } = this.state;
    const year = years[birthday[0]];
    const month = months[birthday[1]];
    const day = days[birthday[2]];
    const time = User.toTimestamp(`${year}-${month}-${day} 0:0:0`);
    const result = await User.setUserFiled('birthday', time);
    if (result) {
      const { dispatch } = this.props;
      dispatch(changeBirthday(time));
    }
  }

  updateHometown = async () => {
    this.hideModal('showHometownDialog');
    const { hometown } = this.state;
    const value = {};
    value['province'] = Province[hometown[0]].name;
    value['city'] = Province[hometown[0]]['cities'][hometown[1]];
    const result = await User.setUserFiled('hometown', JSON.stringify(value));
    if (result) {
      const { dispatch } = this.props;
      dispatch(changeHometown(value['province'], value['city']));
    }
  }

  handleNicknameInput = (e) => {
    const nickname = e.detail.value;
    const { userState } = this.state;
    this.setState({
      userState: {
        ...userState,
        user_nickname: nickname
      }
    });
  }

  handleLabelInput = (e) => {
    const label = e.detail.value;
    const { userState } = this.state;
    this.setState({
      userState: {
        ...userState,
        label
      }
    }); 
  }

  handlePathetIndex = async (index) => {
    this.hideModal('showPathetDialog');
    const result = await User.setUserFiled('pathet_state', index);
    if (result) {
      const { dispatch } = this.props;
      dispatch(changePathetState(index));
    }
  }

  handleBirthdayChange = (e) => {
    const birthday = e.detail.value;
    this.setState({
      birthday,
    });
  }

  handleHometownChange = (e) => {
    const newHomtown = e.detail.value;
    const { hometown } = this.state;
    if (newHomtown[0] !== hometown[0]) { // 省份改变的话
      this.setState({
        cities: Province[newHomtown[0]]['cities'],
        hometown: [newHomtown[0], 0],
      });
    } else {
      this.setState({
        hometown: newHomtown,
      });
    }
  }

  showModal(type) {
    const newState = this.state;
    newState[type] = true;
    this.setState({
      ...newState
    });
  }

  hideModal(type) {
    const newState = this.state;
    newState[type] = false;
    this.setState({
      ...newState
    });
  }

  goAuth = () => {
    Taro.navigateTo({
      url: '/pages/user-school/user-school'
    });
  }

  render() {
    const {
      userState,
      showNickNameDialog,
      showLabelDialog,
      showPathetDialog,
      pathetEnum,
      showBirthdayDialog,
      birthday,
      years,
      months,
      days,
      showHometownDialog,
      hometown,
      provinces,
      cities,
    } = this.state;
    const { 
      user
    } = this.props;
    return (
      <View className='container'>
        {/* 修改头像 */}
        <View class='avtater'>
          <Image className='image' src={userState.avatar} onClick={this.onUpload} />
          <View class='btn-edit icon icon-camera-full'></View>
        </View>
        {/* 信息 */}
        <View className='cells'>
          <View className='cell' onClick={() => this.showModal('showNickNameDialog')}>
            <View className='left'>昵称</View>
            <View className='right'>
              <View>{user.user_nickname}</View>
              <AtIcon value='chevron-right' size='14' />
            </View>
          </View>
          <View className='cell' onClick={() => this.showModal('showLabelDialog')}>
            <View className='left'>个性签名</View>
            <View className='right'>
              <View>{user.label || '一句话介绍自己'}</View>
              <AtIcon value='chevron-right' size='14' />
            </View>
          </View>
          <View className='cell' onClick={() => this.showModal('showPathetDialog')}>
            <View className='left'>感情状况</View>
            <View className='right'>
              <View>{pathetEnum[user.pathet_state] || '未知'}</View>
              <AtIcon value='chevron-right' size='14' />
            </View>
          </View>
          <View className='cell' onClick={() => this.showModal('showBirthdayDialog')}>
            <View className='left'>生日</View>
            <View className='right'>
              <View>{ user.birthday ? User.timeToBirthday(user.birthday) : '未设置'}</View>
              <AtIcon value='chevron-right' size='14' />
            </View>
          </View>
          <View className='cell' onClick={() => this.showModal('showHometownDialog')}>
            <View className='left'>故乡</View>
            <View className='right'>
              <View>{user.province} {user.city}</View>
              <AtIcon value='chevron-right' size='14' />
            </View>
          </View>
        </View>
        <View className='cells'>
          <View className='cell'>
            <View className='left'>就读学校</View>
            <View className='right'>
              <View>{user.school || '未设置'}</View>
            </View>
          </View>
          <View className='cell'>
            <View className='left'>学历</View>
            <View className='right'>
              <View>{['未知','专科','本科','硕士', '博士'][user.degree] || '未设置'}</View>
            </View>
          </View>
          <View className='cell'>
            <View className='left'>入学年份</View>
            <View className='right'>
              <View>{user.school_year || '未设置'}</View>
            </View>
          </View>
          {
            userState.is_auth !== 2 ? (
              <View className='cell btn-cell' onClick={this.goAuth}>
                <View className='icon icon-auth-1'></View>
                <View>去学生认证</View>
              </View>
            ) : null
          }
        </View>

        <AtModal
          isOpened={showNickNameDialog}
          onClose={() => this.hideModal('showNickNameDialog')}
        >
          <AtModalHeader>修改昵称</AtModalHeader>
          <AtModalContent>
            <Input onInput={this.handleNicknameInput} value={userState.user_nickname} focus={showNickNameDialog} className='nick-input input-bg' />
          </AtModalContent>
          <AtModalAction>
            <Button onClick={() => this.hideModal('showNickNameDialog')}>取消</Button>
            <Button onClick={this.updateNickname}>确定</Button>
          </AtModalAction>
        </AtModal>
        <AtModal
          isOpened={showLabelDialog}
          onClose={() => this.hideModal('showLabelDialog')}
        >
          <AtModalHeader>修改个性签名</AtModalHeader>
          <AtModalContent>
            <Input
              onInput={this.handleLabelInput}
              value={userState.label}
              focus={showLabelDialog}
              className='nick-input input-bg'
            />
          </AtModalContent>
          <AtModalAction>
            <Button onClick={() => this.hideModal('showLabelDialog')}>取消</Button>
            <Button onClick={this.updateLabel}>确定</Button>
          </AtModalAction>
        </AtModal>
        {/* 感情状况 */}
        <AtActionSheet
          isOpened={showPathetDialog}
          cancelText='取消'
          onCancel={() => this.hideModal('showPathetDialog')}
          onClose={() => this.hideModal('showPathetDialog')}
        >
          {
            pathetEnum.map((item, index) => (
              <AtActionSheetItem key={`pathet_${index}`} onClick={() => this.handlePathetIndex(index)}>
              {item}
              </AtActionSheetItem>
            ))
          }
        </AtActionSheet>
        {/* 生日 */}
        <AtFloatLayout
          isOpened={showBirthdayDialog}
          onClose={() => this.hideModal('showBirthdayDialog')}
        >
          <View className='picker-title' style={{ height: '50px', width: '100%'}}>
            <View className='btn' onClick={() => this.hideModal('showBirthdayDialog')}>取消</View>
            <View>选择生日</View>
            <View className='btn confirm' onClick={this.updateBirthday}>确认</View>
          </View>
          <PickerView
            value={birthday}
            onChange={this.handleBirthdayChange}
            indicator-style='height: 50px;'
            style='height: 150px;'
          >
            <PickerViewColumn>
              {
                years.map((item, index) => (
                  <View key={`year_${index}`} className='picker-col'>{item}年</View>
                ))
              }
            </PickerViewColumn>
            <PickerViewColumn>
              {
                months.map((item, index) => (
                  <View key={`month_${index}`} className='picker-col'>{item}月</View>
                ))
              }
            </PickerViewColumn>
            <PickerViewColumn>
              {
                days.map((item, index) => (
                  <View key={`day_${index}`} className='picker-col'>{item}日</View>
                ))
              }
            </PickerViewColumn>
          </PickerView>
        </AtFloatLayout>
        {/* 故乡 */}
        <AtFloatLayout
          isOpened={showHometownDialog}
          onClose={() => this.hideModal('showHometownDialog')}
        >
          <View className='picker-title' style={{ height: '50px', width: '100%'}}>
            <View className='btn' onClick={() => this.hideModal('showHometownDialog')}>取消</View>
            <View>选择故乡</View>
            <View className='btn confirm' onClick={this.updateHometown}>确认</View>
          </View>
          <PickerView
            value={hometown}
            onChange={this.handleHometownChange}
            indicator-style='height: 50px;'
            style='height: 150px;'
          >
            <PickerViewColumn>
              {
                provinces.map((item, index) => (
                  <View key={`province_${index}`} className='picker-col'>{item.name}</View>
                ))
              }
            </PickerViewColumn>
            <PickerViewColumn>
              {
                cities.map((item, index) => (
                  <View key={`city_${index}`} className='picker-col'>{item}</View>
                ))
              }
            </PickerViewColumn>
          </PickerView>
        </AtFloatLayout>
      </View>
    );
  }
}

export default UserEdit;
