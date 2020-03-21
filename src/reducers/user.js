import Taro from '@tarojs/taro';

import {
  CHANGE_AVATAR,
  CHANGE_NICKNAME,
  CHANGE_BIRTHDAY,
  CHANGE_DEGREE,
  CHANGE_HOMETOWN,
  CHANGE_ISAUTH,
  CHANGE_LABEL,
  CHANGE_PATHET_STATE,
  CHANGE_SCHOOL,
  CHANGE_SCHOOL_YEAR,
  INIT_USER
} from '../constants/user';

const InitState = Taro.getStorageSync('user');

export default function user(state = InitState, action) {
  switch(action.type) {
    case INIT_USER:
      return {
        ...state,
        ...action.user
      }
    case CHANGE_AVATAR:
      return {
        ...state,
        avatar: action.avatar,
      }
    case CHANGE_NICKNAME:
      return {
        ...state,
        user_nickname: action.user_nickname
      }
    case CHANGE_BIRTHDAY:
      return {
        ...state,
        birthday: action.birthday,
      }
    case CHANGE_DEGREE:
      return {
        ...state,
        degree: action.degree,
      }
    case CHANGE_HOMETOWN:
      return {
        ...state,
        province: action.province,
        city: action.city
      }
    case CHANGE_ISAUTH:
      return {
        ...state,
        is_auth: action.is_auth,
      }
    case CHANGE_LABEL:
      return {
        ...state,
        label: action.label,
      }
    case CHANGE_PATHET_STATE:
      return {
        ...state,
        pathet_state: action.pathet_state,
      }
    case CHANGE_SCHOOL_YEAR:
      return {
        ...state,
        school_year: action.school_year,
      }
    case CHANGE_SCHOOL:
      return {
        ...state,
        school: action.school,
      }
    default: {
      return state;
    }
  }
}