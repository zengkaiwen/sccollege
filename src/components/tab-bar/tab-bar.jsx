import Taro, { Component } from '@tarojs/taro';
import {
  View
} from '@tarojs/components';

import { connect } from '@tarojs/redux';

import tabChange from '../../actions/hometabs'

import './tab-bar.scss';

@connect(({ hometabs }) => ({
  hometabs
}), (dispatch) => ({
  dispatchTabChange(index) {
    dispatch(tabChange(index))
  }
}))
class TabBar extends Component {

  tabTap(index) {
    this.props.dispatchTabChange(index);
  }

  render() {
    const { selectedIndex, labels, hometabs: { tabIndex } } = this.props;
    return (
      <View className='tab-bar'>
        <View className='tabs'>
          {
            labels && labels.map((item, index) => (
              <View
                className={['tab', index == selectedIndex? 'active' : '' ]}
                key={`tabs_${index}`}
                onClick={() => this.tabTap(index)}
              >{item}</View>
            ))
          }
          <View className='tab-bar' style={{left: `${tabIndex * 60 + 25}PX`}}></View>
        </View>
      </View>
    );
  }
}

export default TabBar;
