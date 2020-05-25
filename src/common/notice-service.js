import BaseService from './base-service';

export default class NoticeService extends BaseService {
  constructor() {
    super();
  }

  async count() {
    const res = await this.request(
      '/notice/count',
      {},
      'GET'
    );
    if (res &&　res.code === 1) {
      return res.data;
    }
    return null;
  }

  async official(page, id) {
    const res = await this.request(
      '/notice/official',
      {id, page},
      'POST'
    );
    if (res && res.code === 1) {
      const data = res.data;
      if (!id && data.length === 0) {
        this.showToast('到底啦');
        return null;
      }
      return data;
    }
    return null;
  }

  async beFollow(page, id) {
    const res = await this.request(
      '/notice/beFollow',
      {id, page},
      'POST'
    );
    if (res && res.code === 1) {
      const data = res.data;
      if (!id && data.length === 0) {
        this.showToast('到底啦');
        return null;
      }
      return data;
    }
    return null;
  }

  async beComment(page, id) {
    const res = await this.request(
      '/notice/beComment',
      {id, page},
      'POST'
    );
    if (res && res.code === 1) {
      const data = res.data;
      if (!id && data.length === 0) {
        this.showToast('到底啦');
        return null;
      }
      return data;
    }
    return null;
  }

  async beReply(page, id) {
    const res = await this.request(
      '/notice/beReply',
      {id, page},
      'POST'
    );
    if (res && res.code === 1) {
      const data = res.data;
      if (!id && data.length === 0) {
        this.showToast('到底啦');
        return null;
      }
      return data;
    }
    return null;
  }
}
