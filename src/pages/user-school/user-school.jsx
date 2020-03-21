/* eslint-disable no-shadow */
import Taro from '@tarojs/taro';
import {
  View, PickerView, PickerViewColumn
} from '@tarojs/components';
import { connect } from '@tarojs/redux';

import { AtIcon, AtFloatLayout } from 'taro-ui';

import './user-school.scss';

import Footer from '../../components/guide-footer/guide-footer';
import { User } from '../../common/api';
import {
  changeDegree,
  changeSchool,
  changeSchoolYear
} from '../../actions/user';

const years = [];
const currentYear = +new Date().getFullYear();
for (let i = currentYear - 8; i <= currentYear; i++) {
  years.push(i);
}

@connect(({ user }) => ({
  user
}), (dispatch) => ({
  dispatch,
}))
class UserSchool extends Taro.Component {

  state = {
    showDegreeDialog: false,
    showSchoolDialog: false,
    showYearDialog: false,
    degrees: ['未设置', '专科', '本科', '硕士', '博士'],
    selectedDegree: [2],
    schools: [],
    selectedSchool: [0],
    years,
    selectedYear: [3],
  }

  componentDidMount() {
    this.init();
  }

  async init() {
    const schools = await User.getSichuanUniversity();
    this.setState({
      schools,
    })
  }

  config = {
    navigationBarTitleText: '编辑学校信息',
  }

  handleSchool = (e) => {
    const { value } = e.detail;
    this.setState({
      selectedSchool: value,
    })
  }

  handleDegree = (e) => {
    const { value } = e.detail;
    this.setState({
      selectedDegree: value,
    })
  }

  handleYear = (e) => {
    const { value } = e.detail;
    this.setState({
      selectedYear: value,
    })
  }

  updateDegree = async () => {
    const { selectedDegree } = this.state;
    if (selectedDegree[0] === 0) {
      Taro.showToast({
        icon: 'none',
        title: '学历不能选择未设置选项'
      });
      return;
    }
    this.hideModal('showDegreeDialog');
    const result = await User.setUserFiled('degree', selectedDegree[0]);
    if (result) {
      const { dispatch } = this.props;
      dispatch(changeDegree(selectedDegree[0]));
    }
  }

  updateSchool = async () => {
    const { selectedSchool, schools } = this.state;
    const schoolName = schools[selectedSchool[0]];
    this.hideModal('showSchoolDialog');
    const result = await User.setUserFiled('school', schoolName);
    if (result) {
      const { dispatch } = this.props;
      dispatch(changeSchool(schoolName));
    }
  }

  updateYear = async () => {
    const { selectedYear, years } = this.state;
    const year = years[selectedYear[0]];
    this.hideModal('showYearDialog');
    const result = await User.setUserFiled('school_year', year);
    if (result) {
      const { dispatch } = this.props;
      dispatch(changeSchoolYear(year));
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

  goVerify = () => {
    const { user } = this.props;
    if (!user.school || !user.degree || !user.school_year ) {
      User.showToast('请先补全学校信息');
      return;
    }
    Taro.navigateTo({
      url: '../user-verify/user-verify'
    })
  }

  render() {
    const {
      degrees,
      selectedDegree,
      showDegreeDialog,
      showSchoolDialog,
      schools,
      selectedSchool,
      showYearDialog,
      years,
      selectedYear,
    } = this.state;
    const {
      user
    } = this.props;
    return (
      <View>
        <View className='cells'>
          <View className='cell' onClick={() => this.showModal('showSchoolDialog')}>
            <View className='left'>就读学校</View>
            <View className='right'>
              <View>{user.school || '未设置'}</View>
              <AtIcon value='chevron-right' size='14' />
            </View>
          </View>
          <View className='cell' onClick={() => this.showModal('showDegreeDialog')}>
            <View className='left'>学历</View>
            <View className='right'>
              <View>{degrees[user.degree] || '未设置'}</View>
              <AtIcon value='chevron-right' size='14' />
            </View>
          </View>
          <View className='cell' onClick={() => this.showModal('showYearDialog')}>
            <View className='left'>入学年份</View>
            <View className='right'>
              <View>{user.school_year || '未设置'}</View>
              <AtIcon value='chevron-right' size='14' />
            </View>
          </View>
        </View>
        <Footer
          btntext='下一步'
          des='点击下一步，进行学生认证'
          onBtnTap={this.goVerify}
        />

        {/* 选择学校 */}
        <AtFloatLayout
          isOpened={showSchoolDialog}
          onClose={() => this.hideModal('showSchoolDialog')}
        >
          <View className='picker-title' style={{ height: '50px', width: '100%'}}>
            <View className='btn' onClick={() => this.hideModal('showSchoolDialog')}>取消</View>
            <View>选择学校</View>
            <View className='btn confirm' onClick={this.updateSchool}>确认</View>
          </View>
          <PickerView
            value={selectedSchool}
            onChange={this.handleSchool}
            indicator-style='height: 50px;'
            style='height: 200px;'
          >
            <PickerViewColumn>
              {
                schools.map((item, index) => (
                  <View key={`school_${index}`} className='picker-col'>{item}</View>
                ))
              }
            </PickerViewColumn>
          </PickerView>
        </AtFloatLayout>
        {/* 选择学历 */}
        <AtFloatLayout
          isOpened={showDegreeDialog}
          onClose={() => this.hideModal('showDegreeDialog')}
        >
          <View className='picker-title' style={{ height: '50px', width: '100%'}}>
            <View className='btn' onClick={() => this.hideModal('showDegreeDialog')}>取消</View>
            <View>选择学历</View>
            <View className='btn confirm' onClick={this.updateDegree}>确认</View>
          </View>
          <PickerView
            value={selectedDegree}
            onChange={this.handleDegree}
            indicator-style='height: 50px;'
            style='height: 200px;'
          >
            <PickerViewColumn>
              {
                degrees.map((item, index) => (
                  <View key={`school_${index}`} className='picker-col'>{item}</View>
                ))
              }
            </PickerViewColumn>
          </PickerView>
        </AtFloatLayout>
        {/* 选择入学年份 */}
        <AtFloatLayout
          isOpened={showYearDialog}
          onClose={() => this.hideModal('showYearDialog')}
        >
          <View className='picker-title' style={{ height: '50px', width: '100%'}}>
            <View className='btn' onClick={() => this.hideModal('showYearDialog')}>取消</View>
            <View>选择入学年份</View>
            <View className='btn confirm' onClick={this.updateYear}>确认</View>
          </View>
          <PickerView
            value={selectedYear}
            onChange={this.handleYear}
            indicator-style='height: 50px;'
            style='height: 200px;'
          >
            <PickerViewColumn>
              {
                years.map((item, index) => (
                  <View key={`school_${index}`} className='picker-col'>{item}</View>
                ))
              }
            </PickerViewColumn>
          </PickerView>
        </AtFloatLayout>
      </View>
    );
  }
}

export default UserSchool;
