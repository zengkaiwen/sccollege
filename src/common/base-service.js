import Taro from '@tarojs/taro';

const baseUrl = 'http://college.test/api/sns';
const qiniuUrl = 'http://sns-file.zeuswk.com/'; // 七牛云图片地址
const imgUrl = baseUrl + '/public/images'; // 服务器图片地址

const genders = ['未知', '男', '女'];

let _height = 0;  // 窗口高度 px
let _statusBarHeight = 0; // 状态栏高度
let _headHeight = 0;  // 顶部导航栏高度
let _pixelRadio = 1;
let _windowHeight = 0; // 窗口高度


// 基础service
export default class BaseService {
    constructor() {
        try {
            if (_height === 0) {
                let res = Taro.getSystemInfoSync();
                const { screenHeight, pixelRatio, statusBarHeight, windowHeight } = res;
                _pixelRadio = pixelRatio;
                _height = screenHeight * pixelRatio;
                _windowHeight = windowHeight;
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

    // 选择单张图片并上传
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

    // 上传多张图片
    async uploadImgs(files) {
        const images = files.map((item) => {
            if (typeof item === 'string') {
                return item;
            }
            return item.file.path;
        });
        const imgs = await this.qiniUploadFile(images);
        return imgs;
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
     * @param {Arrary} imgs 图片数组 ['dizhi', 'dizhi']
     * @param {Boolean} isSingle 是否返回单个路径
     */
    async qiniUploadFile(imgs, isSingle = false) {
        let imgPaths = [];
        let token = await this.getQiniuToken();
        for (const img of imgs) {
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
            }).catch((err) => {
                console.warn(err);
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

    getPixelRadio() {
        return _pixelRadio;
    }

    getWindowHeight () {
        return _windowHeight;
    }
}