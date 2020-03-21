import { combineReducers } from 'redux'

import appinfo from './appinfo'
import hometabs from './hometabs'
import user from './user'

export default combineReducers({
  appinfo,
  hometabs,
  user
})
