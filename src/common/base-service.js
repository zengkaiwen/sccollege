import Taro from '@tarojs/taro';
import weibo from './weibo-emotions';

const baseUrl = 'http://college.test/api/sns';
// export const baseUrl = 'http://127.0.0.1:7001'
const qiniuUrl = 'http://q63jwsb2r.bkt.clouddn.com/'; // 测试域名
const imgUrl = baseUrl + '/public/images';

const genders = ['未知', '男', '女'];

let _height = 0;  // 窗口高度
let _statusBarHeight = 0; // 状态栏高度
let _headHeight = 0;  // 顶部导航栏高度
const weibo_icon_url = weibo.weibo_icon_url; // 微博表情地址
const emotions = weibo.emotions; // 微博表情属性

// 微博表情
export const weibo_emojis = (function () {
    const _emojis = {}
    for (const key in emotions) {
        if (emotions.hasOwnProperty(key)) {
            const ele = emotions[key];
            for (const item of ele) {
                _emojis[item.value] = {
                    id: item.id,
                    value: item.value,
                    icon: item.icon.replace('/', '_'),
                    url: weibo_icon_url + item.icon
                }
            }
        }
    }
    return _emojis
})();

// 基础service
export default class BaseService {
    constructor() {
        try {
            if (_height === 0) {
                let res = Taro.getSystemInfoSync();
                const { screenHeight, pixelRatio, statusBarHeight } = res;
                _height = screenHeight * pixelRatio;
                _statusBarHeight = statusBarHeight;
                res = Taro.getMenuButtonBoundingClientRect();
                if (res) {
                    const { bottom, top } = res;
                    _headHeight = bottom + top - statusBarHeight;
                    console.log(_headHeight);;
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    // 显示toast
    showToast(title = '操作失败,重试', icon = 'none') {
        Taro.showToast({
            title,
            icon,
            duration: 2000
        })
    }

    // 判断当前系统是否为QQ
    isQQ() {
        const sys = Taro.getSystemInfoSync();
        if (sys.AppPlatform && sys.AppPlatform === 'qq') {
            return true;
        }
        return false;
    }

    // 格式化表情
    parseEmoji(txt) {
        if (!txt) {
            return '';
        }
        return txt
            .split(/(\[[\u4e00-\u9fff,\uff1f,\w]{1,8}\])/)
            .filter(str => str.length > 0).map(str => {
                let obj = {};
                if (/\[([\u4e00-\u9fff,\uff1f,\w]{1,8})\]/.test(str)) {
                    if (weibo_emojis[str]) {
                        obj.type = 1;
                        obj.src = weibo_emojis[str].url;
                    } else {
                        obj.type = 0;
                        obj.value = str;
                    }
                } else {
                    obj.type = 0;
                    obj.value = str;
                }
                return obj;
            });
    }

    // 格式化评论
    parseComment(comment) {
        comment.height = _height;
        comment.origTxt = comment.content;
        if (comment.content) {
            comment.content = this.parseEmoji(comment.content);
        }
        if (comment.imgs) {
            comment.imgs = this.parseCommentImgs(comment.imgs);
        }
        if (comment.user) {
            comment.user.gender = this.parseGender(comment.user.gender);
        }
        return comment;
    }

    // 应用更新
    appUpdate() {
        const updateManager = Taro.getUpdateManager();

        updateManager.onCheckForUpdate(function (res) {
            // 请求完新版本信息的回调
            console.log(res.hasUpdate);
        })

        updateManager.onUpdateReady(function () {
            Taro.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success(res) {
                    if (res.confirm) {
                        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                        updateManager.applyUpdate();
                    }
                }
            });
        })

        updateManager.onUpdateFailed(function () {
            // 新版本下载失败
            this.showToast('新版本下载失败');
        })
    }

    // 基本请求，封装了token
    async request(url, data, method) {
        const token = Taro.getStorageSync('token') || ''; // 获取token
        Taro.showNavigationBarLoading();
        return await Taro.request({
            url: baseUrl + url,
            data,
            header: {
                'XX-Token': token,
                'XX-Device-Type': 'wxapp',
                'Content-Type': 'application/json',
            },
            method
        }).then(res => {
            console.log(res);
            console.log(url);
            Taro.hideNavigationBarLoading();
            return res.data;
        }).catch(() => {
            console.log(url);
            Taro.hideNavigationBarLoading();
            return {
                code: -1
            }
        })
    }

    // 判断是否是空对象
    isEmptyObject(obj) {
        for (let key in obj) {
            return false;
        }
        return true;
    }

    // 格式化图片地址
    parseCommentImgs(imgs) {
        return imgs.map(img => {
            const path = img.path;
            img.path = qiniuUrl + 'thumb_' + path;
            img.origPath = qiniuUrl + path;
            return img;
        })
    }

    parseAvatarImg(path) {
        return qiniuUrl + path + '?imageView2/1/w/200/h/200';
    }

    parseQiniuImg(path) {
        return qiniuUrl + path;
    }

    toTimestamp = time_str => +new Date(time_str) / 1000;

    timeToBirthday = time_stamp => {
        const time = new Date(time_stamp * 1000);
        const Y = time.getFullYear();
        const M = (time.getMonth() + 1).toString().padStart(2, '0');
        const D = time.getDate().toString().padStart(2, '0');
        return `${Y}-${M}-${D}`;
    }

    // 格式化图片URL
    parseImgs(imgs) {
        return imgs.map(img => {
            if (img.isQiniu) {
                const path = img.path;
                img.fileName = img.path;
                img.path = qiniuUrl + 'thumb_' + path;
                img.origPath = qiniuUrl + path;
            } else {
                img.path = imgUrl + img.path;
                img.origPath = imgUrl + img.origPath;
            }
            return img;
        })
    }

    // 格式化性别
    parseGender(gender) {
        return genders[gender];
    }

    // 格式化用户
    parseUser(user) {
        if (user.avtater) {
            if (user.avtater.indexOf('http') === -1) {
                user.avtater = imgUrl + user.avtater;
            }
        }
        user.hasFollow = false;
        user.sex = user.gender;
        user.gender = this.parseGender(user.gender);
        return user;
    }

    // 格式化topic的图标
    parseTopic(topic) {
        topic.icon_path = qiniuUrl + topic.icon_path;
        return topic;
    }

    // 上传单张图片
    async uploadOneImg() {
        const obj = await Taro.chooseImage({
            sizeType: 'compressed',
            count: 1
        });
        if (obj && obj.tempFilePaths) {
            const path = await this.qiniUploadFile(obj.tempFilePaths, true);
            return path;
        }
        return null;
    }

    setMsgCount(user) {
        const {
            sysMsgCount,
            likeCount,
            commentCount,
            replyCount,
            rewardCount,
            planeCount
        } = user;
        const total =
            sysMsgCount + likeCount + commentCount + replyCount + rewardCount + planeCount;
        Taro.setStorageSync('msgcount', total);
    }

    isQQ() {
        const sys = Taro.getSystemInfoSync();
        if (sys.AppPlatform && sys.AppPlatform === 'qq') {
            return true;
        }
        return false;
    }

    getQiniuUrl() {
        return qiniuUrl;
    }

    getImgUrl() {
        return imgUrl;
    }

    async getQiniuToken() {
        const res = await this.request(`/qiniu/token`, null, 'GET');
        if (res.code === 1) {
            return res.data;
        }
        return null;
    }

    // 七牛云文件上传
    /**
     * @param {Arrary} imgs 图片数组 [{path: ''}, {path: ''}]
     * @param {Boolean} isSingle 是否返回单个路径
     */
    async qiniUploadFile(imgs, isSingle = false) {
        let imgPaths = [];
        for (const img of imgs) {
            let token = await this.getQiniuToken();
            if (token === null) {
                continue;
            }
            const result = await Taro.uploadFile({
                url: 'https://upload-z2.qiniup.com',
                filePath: img,
                name: 'file',
                formData: {
                    token: token,
                }
            }).then(res => {
                console.log('上传文件成功', res);
                if (res.statusCode === 200) {
                    const obj = JSON.parse(res.data)
                    const { key } = obj;
                    return {
                        path: key,
                    }
                } else {
                    return null;
                }
            }).catch(() => {
                return null;
            });
            if (result) {
                imgPaths.push(result.path);
            } else {
                imgPaths.push('');
            }
        }
        return isSingle ? imgPaths[0] : imgPaths;
    }

    async uploadFile(obj, formData = null) {
        const token = Taro.getStorageSync('token') || '';
        const urls = [];
        const paths = [];
        for (const filePath of obj.tempFilePaths) {
            const res = await Taro.uploadFile({
                formData,
                url: baseUrl + '/upload',
                filePath: filePath,
                header: {
                    token,
                    'from-wx': '16f9d417-03c3-45cc-90c7-d58e4e447ae6'
                },
                name: 'file'
            });
            try {
                const result = JSON.parse(res.data);
                if (result && result.filePath) {
                    urls.push(imgUrl + result.filePath);
                    paths.push(result.filePath);
                }
            } catch (error) {
                console.log(error);
            }
        }
        return new Promise((resolve) => {
            resolve({
                urls,
                paths
            })
        });
    }

    getHeadHeight() {
        return _headHeight;
    }

    getHeight() {
        return _height;
    }

    getBaseUrl() {
        return baseUrl;
    }

    getStatusBarHeight() {
        return _statusBarHeight;
    }
}
