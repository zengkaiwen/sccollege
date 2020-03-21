import Taro from '@tarojs/taro';

const INIT_STATE = Taro.getSystemInfoSync();

export default function appinfo(state = INIT_STATE, action) {
  switch (action.type) {
     default:
       return state
  }
}