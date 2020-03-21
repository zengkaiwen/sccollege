import { TAB_CHANGE } from '../constants/hometabs';

const INIT_STATE = {
  tabIndex: 1,
}

export default function hometabs(state = INIT_STATE, action) {
  switch(action.type) {
    case TAB_CHANGE: 
      return {
        ...state,
        tabIndex: action.index
      }
    default:
      return state;
  }
}