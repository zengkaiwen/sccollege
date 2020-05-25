import BaseService from './base-service';

export default class ReplyService extends BaseService {
  constructor() {
    super();
  }

  // 新建回复
  async create(content, images, comment_id, to_uid) {
    const res = await this.request('/reply/add', {
      content,
      images,
      comment_id,
      to_uid,
    }, 'POST');
    if (res) {
      if (res.code === 1) {
        this.showToast('回复成功')
        return true;
      } else{
        this.showToast(res.msg)
      }
    }
    this.showToast('服务端问题');
    return null;
  }

  // 获取某个用户的所有回复
  async getWithUID(from_uid, page = 1) {
    const res = await this.request('/public/replyList', 
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
        this.showToast('没有更多回复');
        return null;
      }
      return data;
    }
    return null;
  }

  // 获取某个回复下的评论
  async getReplysByComment(comment_id, page = 1) {
    const res = await this.request('/public/replyList',
      {comment_id, page},
      'GET'
    );
    if (res.code === 1) {
      const data = res.data;
      if (data.length === 0) {
        this.showToast('没有更多回复');
        return null;
      }
      return data;
    }
    return null;
  }

  // 获取某个回复详情
  async getReplytDetail(id) {
    const res = await this.request('/public/reply',
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