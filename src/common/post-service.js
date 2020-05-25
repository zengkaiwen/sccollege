import Taro from '@tarojs/taro';

import BaseService from "./base-service";

class PostService extends BaseService {
  constructor() {
    super();
  }

  // 新建帖子
  async create(topic_id, content, images) {
    const res = await this.request('/post/add', {
      topic_id,
      content,
      images
    }, 'POST');
    if (res.code === 1) {
      this.showToast('发布帖子成功')
      return res.data;
    } else{
      this.showToast(res.msg)
    }
    return null;
  }

  // 获取某个用户的所有帖子
  async getWithUID(from_uid, page = 1) {
    const res = await this.request('/public/postList', 
      {
        from_uid,
        page,
        order: 'create_at'
      },
      'GET'
    );
    if (res.code === 1) {
      const data = res.data;
      if (data.length === 0) {
        this.showToast('没有更多帖子');
        return null;
      }
      return data;
    }
    return null;
  }

  // 获取最新的帖子
  async getNewPosts(page) {
    const res = await this.request('/public/postList',
      {page, order: 'create_at'},
      'GET'
    );
    if (res.code === 1) {
      const data = res.data;
      if (data.length === 0) {
        this.showToast('没有更多帖子');
        return null;
      }
      return data;
    }
    return null;
  }

  // 获取帖子详情
  async getPostDetail(id) {
    const res = await this.request('/public/post',
      {id},
      'GET'
    );
    if (res.code === 1) {
      const data = res.data;
      return data;
    }
    return null;
  }

  async getPostsWithTopic(topic_id, page) {
    const res = await this.request('/public/postList', 
      {
        topic_id,
        page,
        order: 'create_at'
      },
      'GET'
    );
    if (res.code === 1) {
      const data = res.data;
      if (data.length === 0) {
        this.showToast('没有更多帖子');
        return null;
      }
      return data;
    }
    return null;
  }

}

export default PostService;
