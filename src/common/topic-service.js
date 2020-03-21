import Taro from '@tarojs/taro';

import BaseService from "./base-service";

const KEY_TOPIC_TRACK = 'TOPIC_TRACK';

export default class TopicService extends BaseService {
    constructor() {
        super();
    }

    // 添加话题
    async add(title, des, icon_path, follow_name) {
        const res = await this.request('/topic/add', { title, des, icon_path, follow_name }, 'POST');
        if (res.code === 1) {
            this.showToast('等待审核', 'success');
            return res.data;
        } else{
          this.showToast('创建话题失败')
        }
        return null;
    }

    // 获取话题列表
    async getTopicList(page = 0) {
        const res = await this.request('/public/topicList', {page});
        if (res.code === 1) {
            return res.data.map(this.parseTopic.bind(this));
        }
        return null;
    }

    // 搜索某个话题
    async searchTopic(keyword, page) {
        const res = await this.request('/public/topicList', {keyword, page});
        if (res.code === 1) {
            return res.data.rows.map(this.parseTopic.bind(this));
        }
        return null;
    }

    // 获取话题详情
    async getTopic(id) {
        const res = await this.request('/public/topicDetail', {id});
        if (res.code === 1) {
            res.data = this.parseTopic(res.data)
            return res.data;
        }
        return null;
    }

    // 关注、取消关注,取消关注的action为cancel
    async topicFollow(id, action) {
        const res = await this.request('/follow/topic', {id, action})
        if (res.code === 1) {
            return true;
        }
        return false;
    }

    // 获取所有我关注的话题
    async myFollowTopics(page) {
        const res = await this.request('/topic/follow', {page});
        if (res.code === 1) {
            return res.data.map(this.parseTopic.bind(this));
        }
        return null;
    }


    async topicRank(topicId, pageIndex, pageSize) {
        const res = await this.request(`/topic/user/rank/${topicId}/${pageIndex}/${pageSize}`)
        return res.data
    }
    async removePost(topicId, postId) {
        const res = await this.request(`/post/topic/remove/${topicId}/${postId}`)
        if (res.code === 0) {
            this.showToast('移除成功', 'success')
            return true
        } else {
            if (res.erroCode > 0) {
                this.showToast(res.msg)
            } else {
                this.showToast()
            }
        }
        return false
    }
    async recommendPost(topicId, postId, isRecommend) {
        const res = await this.request(`/post/topic/recommend/${topicId}/${postId}/${isRecommend ? 1 : 0}`)
        if (res.code === 0) {
            this.showToast('设置成功', 'success')
            return true
        } else {
            if (res.erroCode > 0) {
                this.showToast(res.msg)
            } else {
                this.showToast()
            }
        }
        return false
    }
    topicAddTrack(topic) {
        try {
            let items = Taro.getStorageSync(KEY_TOPIC_TRACK)
            if (items) {
                items = items.filter(item => {
                    return item.id !== topic.id
                })
                items.unshift(topic)
                if (items.length > 15) {
                    items = items.slice(0, 15)
                }
            } else {
                items = [topic]
            }
            try {
                Taro.setStorageSync(KEY_TOPIC_TRACK, items)
            } catch (e) { }
        } catch (e) {
            console.log(e);
        }
    }
    getTopicTrack() {
        try {
            let items = Taro.getStorageSync(KEY_TOPIC_TRACK)
            return items || null
        }
        catch (e) {
            return null
        }
    }
    cleanTopicTrack() {
        try {
            Taro.removeStorageSync(KEY_TOPIC_TRACK)
            return true
        } catch (e) {
            this.showToast('清空数据失败,重试')
            return false
        }
    }
}