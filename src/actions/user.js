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
  INIT_USER,
} from '../constants/user';
import { User } from '../common/api';
// 异步请求网络上的user对象
export const getUser = () => async (dispatch) => {
  let user = await User.login();
  const initAction = initUser(user);
  dispatch(initAction);
}
// 初始化
export const initUser = (user) => ({
  type: INIT_USER,
  user
})
// 修改头像
export const changeAvatar = (avatar) => ({
  type: CHANGE_AVATAR,
  avatar,
})
export const changeNickname = (user_nickname) => ({
  type: CHANGE_NICKNAME,
  user_nickname,
})
// 修改生日
export const changeBirthday = (birthday) => ({
  type: CHANGE_BIRTHDAY,
  birthday,
})
// 修改学历
export const changeDegree = (degree) => ({
  type: CHANGE_DEGREE,
  degree,
})
// 修改故乡
export const changeHometown = (province, city) => ({
  type: CHANGE_HOMETOWN,
  province,
  city
})
// 修改认证信息
export const changeIsAuth = (is_auth) => ({
  type: CHANGE_ISAUTH,
  is_auth,
})
// 修改个性签名
export const changeLabel = (label) => ({
  type: CHANGE_LABEL,
  label,
})
// 修改感情状况
export const changePathetState = (pathet_state) => ({
  type: CHANGE_PATHET_STATE,
  pathet_state,
})
// 修改学校名称
export const changeSchool = (school) => ({
  type: CHANGE_SCHOOL,
  school,
})
// 修改入学年份
export const changeSchoolYear = (school_year) => ({
  type: CHANGE_SCHOOL_YEAR,
  school_year,
})
