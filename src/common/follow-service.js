import Taro from '@tarojs/taro';
import BaseService from './base-service';

const _action = {
  follow: '关注',
  cancel: '取关'
}

export default class FollowService extends BaseService {
  constructor() {
    super();
  }

  async followUser(userId) {
    return await this.followOrCancel(userId, 'follow', 'user');
  }

  async cancelFollowUser(userId) {
    return await this.followOrCancel(userId, 'cancel', 'user');
  }

  async followTopic(topicId) {
    return await this.followOrCancel(topicId, 'follow', 'topic');
  }

  async cancelFollowTopic(topicId) {
    return await this.followOrCancel(topicId, 'cancel', 'topic');
  }

  async followOrCancel(id, action, type) {
    const res = await this.request(
      `/follow/${type}`,
      {
        id,
        action
      },
      'POST'
    );
    if (res) {
      if (res.code === 1) {
        this.showToast(`${_action[action]}成功`);
        if (action === 'follow') {
          this.cacheFollow(id, type);
        } else {
          this.delFollow(id, type);
        }
        return true;
      } 
      if (res.code === 0) {
        this.showToast(res.msg);
        return false;
      }
    }
    return false;
  }

  isFollowUser(userId) {
    return this.isFollow(userId, 'user');
  }

  isFollowTopic(topicId) {
    return this.isFollow(topicId, 'topic');
  }

  isFollow(id, type) {
    const followList = Taro.getStorageSync(`follow_${type}`);
    if (followList && followList.length !== 0) {
      if (followList.includes(+id)) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
  
  cacheFollow(id, type) {
    let followList = Taro.getStorageSync(`follow_${type}`);
    if (!followList) {
      followList = [];
    }
    if (followList.indexOf(id) === -1) {
      followList.push(id);
    }
    Taro.setStorageSync(`follow_${type}`, followList);
  }

  delFollow(id, type) {
    let followList = Taro.getStorageSync(`follow_${type}`);
    if (!followList) {
      return;
    }
    const i = followList.indexOf(id);
    if (i!== -1) {
      followList.splice(i, 1);
    }
    Taro.setStorageSync(`follow_${type}`, followList);
  }
}