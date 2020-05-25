import Taro from '@tarojs/taro';

import BaseService from "./base-service";

class CommentService extends BaseService {
  constructor() {
    super();
  }

  // 新建评论
  async create(content, images, post_id, to_uid, is_secret) {
    const res = await this.request('/comment/add', {
      content,
      images,
      post_id,
      to_uid,
      is_secret
    }, 'POST');
    if (res) {
      if (res.code === 1) {
        this.showToast('评论成功')
        return true;
      } else{
        this.showToast(res.msg)
      }
    }
    this.showToast('服务端问题');
    return null;
  }

  // 获取某个用户的所有评论
  async getWithUID(from_uid, page = 1) {
    const res = await this.request('/public/commentList', 
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
        this.showToast('没有更多评论');
        return null;
      }
      return data;
    }
    return null;
  }

  // 获取某个帖子下的评论
  async getCommentsByPost(post_id, page = 1, order = 'create_at') {
    const res = await this.request('/public/commentList',
      {post_id, page, order},
      'GET'
    );
    if (res.code === 1) {
      const data = res.data;
      if (data.length === 0) {
        this.showToast('没有更多评论');
        return null;
      }
      return data;
    }
    return null;
  }

  // 获取包含私密评论的帖子评论列表
  async getCommentsByPostWithSecret(post_id, page=1, order='create_at') {
    const res = await this.request('/comment/getListWithSecret',
      {post_id, page, order},
      'GET'
    );
    if (res.code === 1) {
      const data = res.data;
      if (data.length === 0) {
        this.showToast('没有更多评论');
        return null;
      }
      return data;
    } else {
      this.showToast(res.msg);
    }
    return null;
  }

  // 获取某个评论详情
  async getCommentDetail(id) {
    const res = await this.request('/public/comment',
      {id},
      'GET'
    );
    if (res.code === 1) {
      const data = res.data;
      return data;
    }
    return null;
  }

}

export default CommentService;
