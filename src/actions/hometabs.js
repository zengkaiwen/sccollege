import { TAB_CHANGE } from '../constants/hometabs';

const tabChange = (index) => {
  return {
    type: TAB_CHANGE,
    index,
  }
}

export default tabChange;
