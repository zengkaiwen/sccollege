import Taro from '@tarojs/taro';
import BaseService from './base-service';

export default class LikeService extends BaseService {

  isLike(type, id) {
    let likeList = Taro.getStorageSync('likes_'+type);
    if (!likeList) {
      return false;
    }
    if (likeList.includes(id)) {
      return true;
    } else {
      return false;
    }
  }

  async doLike(type, id) {
    // 获取本地缓存的内容
    let likeList = Taro.getStorageSync('likes_'+type);
    if (!likeList) {
      likeList = [];
    }

    // 判断是否已经点过赞了
    if (likeList.includes(id)) {
      this.showToast('已经点过赞了');
      return null;
    };

    // 如果没有点过赞的话
    let res = null;
    if (type === 'post') {
      res = await this.request(
        '/post/like',
        {id},
        'POST'
      );
    }
    if (type === 'comment') {
      res = await this.request(
        '/comment/like',
        {id},
        'POST'
      );
    }
    if (type === 'reply') {
      res = await this.request(
        '/reply/like',
        {id},
        'POST'
      );
    }
    if (res && res.code === 1) {
      if (likeList.length === 200) {
        likeList.shift();
      }
      likeList.push(id);
      Taro.setStorageSync('likes_'+type, likeList);
      this.showToast('点赞成功');
      return res.data;
    } else {
      return null;
    }
  }
}