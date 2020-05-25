import Taro from '@tarojs/taro';
import BaseService from "./base-service";

export default class UserService extends BaseService {
  constructor() {
    super()
  }

  // 登录
  async login() {
    let data = {};
    let res = await Taro.login();
    if (res && res.code) {
      data.code = res.code
    }

    const result = await this.request('/wxapp/login', data, 'POST');
    if (result.code === 1) { // 后端返回登录成功
      const {
        user,
        token
      } = result.data;
      if (user) {
        try {
          Taro.setStorageSync('user', user); // 存储用户信息
          Taro.setStorageSync('userId', user.id); // 存储用户id
          Taro.setStorageSync('token', token);  // 存储token
          this.setMsgCount(user)
        } catch (error) {
          console.log(error)
        }
        return user;
      } else {
        try {
          Taro.setStorageSync('userId', result.data.userId);
        } catch (error) {
          console.log(error);
        }
        Taro.setStorageSync('token', token);
        return null;
      }
    }
    return null;
  }

  // 获取所有四川的大学列表
  async getSichuanUniversity() {
    const res = await this.request('/school/getSichuan', null, 'GET');
    if (res.code === 1) {
      return res.data.map((item) => item.name);
    }
    return null;
  }

  // 获取用户信息
  async getInfo(userId) {
    const res = await this.request(`/public/getUserInfo`, { id: userId }, 'GET');
    if (res.code === 1) {
      return res.data;
    }
    return null;
  }

  // 微信绑定
  async bindInfo(encrypted_data, iv, raw_data, signature) {
    let data = {
      encrypted_data,
      iv,
      raw_data,
      signature
    };
    let res = await Taro.login();
    if (res && res.code) {
      data.code = res.code
    } 
    if (res && res.code) {
      const result = await this.request('/wxapp/bind', data, 'POST');
      if (result.code === 1) {
        this.showToast('微信绑定成功');
        const {
          user,
          token
        } = result.data;
        Taro.setStorageSync('user', user);
        Taro.setStorageSync('token', token);
        Taro.setStorageSync('hasBinding', true);
        return user;
      } else if (result.code === 0) {
        this.showToast('操作失败，请稍后重试');
      }
    }
    return false;
  }

  async addPhoto(userId) {
    let _userId = Taro.getStorageSync('userId') || ''
    const {
      userType
    } = Taro.getStorageSync('user')

    if (userType === 4 && userId) {
      _userId = userId;
    }
    const obj = await Taro.chooseImage({
      sizeType: 'compressed'
    });
    if (obj && obj.tempFilePaths) {
      const obj1 = await this.uploadFile(obj)
      if (obj1.paths.length === 0) {
        this.showToast('头像上传失败')
        return null;
      }
      const res = await this.request('/user/photo/add', {
        userId: _userId,
        imgs: obj1.paths
      }, 'POST')
      if (res.code === 0) {
        return res.data.items.map(photo => {
          photo.src = this.getImgUrl() + photo.src
          return photo;
        });
      } else {
        this.showToast('头像上传失败');
      }
    }
    return null;
  }

  async getPhotos(userId) {
    const res = await this.request(`/user/photo/list/${userId}`, null, 'GET');
    if (res.code === 0) {
      return res.data.items.map(photo => {
        photo.src = this.getImgUrl() + photo.src;
        return photo;
      });
    } else {
      this.showToast('加载失败,请重试');
    }
    return null;
  }

  async delPhoto(id) {
    const res = await this.request(`/user/photo/del/${id}`, null, 'GET');
    if (res.code === 0) {
      return res.data.result;
    } else {
      this.showToast('删除失败,请重试');
    }
    return false;
  }

  async getLabels(parent) {
    const res = await this.request('/user/label/choice', {
      parent
    }, 'POST');
    if (res.code === 0) {
      return res.data.items;
    }
    return null;
  }

  async getLabelsForUser(userId) {
    const res = await this.request(`/user/label/${userId}`, {}, 'GET');
    if (res.code === 0) {
      return res.data.items;
    }
    return null;
  }

  async addLabels(userId, parent, labels) {
    const arr = labels.map(label => {
      return {
        userId,
        parent: parent,
        labelId: label.id
      }
    });
    await this.request('/user/label/add', {
      userId,
      parent,
      labels: arr
    }, 'POST');
  }

  // 编辑用户信息
  async setUserFiled(field, value, toastMsg = '修改成功' ) {
    const userId = Taro.getStorageSync('userId');
    if (userId) {
      const res = await this.request('/user/change', {
        field,
        value
      }, 'PUT');
      if (res.code === 1) {
        if (toastMsg) {
          this.showToast(toastMsg);
        }
        return true;
      } else {
        this.showToast('失败，请重试');
      }
    }
    return false;
  }

  // 编辑更新头像
  async editAvtater() {
    const path = await this.uploadOneImg();
    if (path) {
      let result = await this.setUserFiled('avatar', path);
      if (result) {
        return this.parseAvatarImg(path);
      }
    }
    return null;
  }

  // 编辑上传认证用的学生证照片
  async uploadAuthImg() {
    const path = await this.uploadOneImg();
    if (path) {
      return path;
    }
    return null;
  }

  // 申请认证
  async applyAuth(user_name, auth_image) {
    const res = await this.request('/user/applyStudentAuth', {
      user_name,
      auth_image
    }, 'POST' );
    if (res.code === 1) {
      this.showToast('提交成功');
      return true;
    }
    return false;
  }

  async getScore() {
    const res = await this.request('/user/score')
    if (res.code === 0) {
      return res.data;
    }
    return null;
  }

  async transformScore(score) {
    const res = await this.request(`/user/transform/${score}`);
    if (res.code === 0) {
      this.showToast('转换成功', 'success');
      return true;
    } else {
      if (res.erroCode > 0) {
        this.showToast(res.msg);
      } else {
        this.showToast();
      }
    }
    return false;
  }

  async cash(score) {
    const res = await this.request(`/reward/cash/${score}`);
    if (res.code === 0) {
      Taro.showModal({
        title: '兑换成功',
        content: '兑换现金将在2-3个工作日通过公众号「壹淘」已红包的形式发放,请注意查收',
        showCancel: false
      });
      return true;
    } else {
      if (res.erroCode > 0) {
        if (res.erroCode === 10020) { //未关注公众号
          Taro.showModal({
            title: '未关注公众号',
            confirmText: '去关注',
            content: '还未关注公众号「壹淘」无法发放兑换的现金',
            showCancel: false,
            success: () => {
              Taro.navigateTo({
                url: '/pages/binding'
              });
            }
          });
        } else if (res.erroCode === 10021) {//未认证
          Taro.showModal({
            title: '未学生认证',
            confirmText: '去认证',
            content: '还未学生认证,完成认证后可继续兑换',
            showCancel: false,
            success: () => {
              Taro.navigateTo({
                url: '/pages/user-school'
              });
            }
          });
        }
      } else {
        this.showToast();
      }
    }
    return false;
  }
}