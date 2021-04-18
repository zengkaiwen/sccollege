(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/actions/user.js":
/*!*****************************!*\
  !*** ./src/actions/user.js ***!
  \*****************************/
/*! exports provided: getUser, initUser, changeAvatar, changeNickname, changeBirthday, changeDegree, changeHometown, changeIsAuth, changeLabel, changePathetState, changeSchool, changeSchoolYear */
/*! exports used: changeAvatar, changeBirthday, changeDegree, changeHometown, changeLabel, changeNickname, changePathetState, changeSchool, changeSchoolYear, getUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getUser; });
/* unused harmony export initUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changeAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return changeNickname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return changeBirthday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return changeDegree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return changeHometown; });
/* unused harmony export changeIsAuth */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return changeLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return changePathetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return changeSchool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return changeSchoolYear; });
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _constants_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/user */ "./src/constants/user.js");
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/api */ "./src/common/api.js");



 // 异步请求网络上的user对象

var getUser = function getUser() {
  return /*#__PURE__*/function () {
    var _ref = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var user, initAction;
      return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _common_api__WEBPACK_IMPORTED_MODULE_3__[/* User */ "j"].login();

            case 2:
              user = _context.sent;
              initAction = initUser(user);
              dispatch(initAction);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}; // 初始化

var initUser = function initUser(user) {
  return {
    type: _constants_user__WEBPACK_IMPORTED_MODULE_2__[/* INIT_USER */ "k"],
    user: user
  };
}; // 修改头像

var changeAvatar = function changeAvatar(avatar) {
  return {
    type: _constants_user__WEBPACK_IMPORTED_MODULE_2__[/* CHANGE_AVATAR */ "a"],
    avatar: avatar
  };
};
var changeNickname = function changeNickname(user_nickname) {
  return {
    type: _constants_user__WEBPACK_IMPORTED_MODULE_2__[/* CHANGE_NICKNAME */ "g"],
    user_nickname: user_nickname
  };
}; // 修改生日

var changeBirthday = function changeBirthday(birthday) {
  return {
    type: _constants_user__WEBPACK_IMPORTED_MODULE_2__[/* CHANGE_BIRTHDAY */ "b"],
    birthday: birthday
  };
}; // 修改学历

var changeDegree = function changeDegree(degree) {
  return {
    type: _constants_user__WEBPACK_IMPORTED_MODULE_2__[/* CHANGE_DEGREE */ "c"],
    degree: degree
  };
}; // 修改故乡

var changeHometown = function changeHometown(province, city) {
  return {
    type: _constants_user__WEBPACK_IMPORTED_MODULE_2__[/* CHANGE_HOMETOWN */ "d"],
    province: province,
    city: city
  };
}; // 修改认证信息

var changeIsAuth = function changeIsAuth(is_auth) {
  return {
    type: _constants_user__WEBPACK_IMPORTED_MODULE_2__[/* CHANGE_ISAUTH */ "e"],
    is_auth: is_auth
  };
}; // 修改个性签名

var changeLabel = function changeLabel(label) {
  return {
    type: _constants_user__WEBPACK_IMPORTED_MODULE_2__[/* CHANGE_LABEL */ "f"],
    label: label
  };
}; // 修改感情状况

var changePathetState = function changePathetState(pathet_state) {
  return {
    type: _constants_user__WEBPACK_IMPORTED_MODULE_2__[/* CHANGE_PATHET_STATE */ "h"],
    pathet_state: pathet_state
  };
}; // 修改学校名称

var changeSchool = function changeSchool(school) {
  return {
    type: _constants_user__WEBPACK_IMPORTED_MODULE_2__[/* CHANGE_SCHOOL */ "i"],
    school: school
  };
}; // 修改入学年份

var changeSchoolYear = function changeSchoolYear(school_year) {
  return {
    type: _constants_user__WEBPACK_IMPORTED_MODULE_2__[/* CHANGE_SCHOOL_YEAR */ "j"],
    school_year: school_year
  };
};

/***/ }),

/***/ "./src/common/api.js":
/*!***************************!*\
  !*** ./src/common/api.js ***!
  \***************************/
/*! exports provided: Base, User, Topic, Post, Comment, Like, Reply, Follow, Notice, Province */
/*! exports used: Base, Comment, Follow, Like, Notice, Post, Province, Reply, Topic, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Topic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Comment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Like; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Reply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Follow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Notice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Province; });
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-service */ "./src/common/base-service.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-service */ "./src/common/user-service.js");
/* harmony import */ var _topic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topic-service */ "./src/common/topic-service.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-service */ "./src/common/post-service.js");
/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comment-service */ "./src/common/comment-service.js");
/* harmony import */ var _like_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./like-service */ "./src/common/like-service.js");
/* harmony import */ var _reply_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reply-service */ "./src/common/reply-service.js");
/* harmony import */ var _follow_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./follow-service */ "./src/common/follow-service.js");
/* harmony import */ var _notice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notice-service */ "./src/common/notice-service.js");
/* harmony import */ var _cities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cities */ "./src/common/cities.js");










var Base = new _base_service__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();
var User = new _user_service__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]();
var Topic = new _topic_service__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]();
var Post = new _post_service__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]();
var Comment = new _comment_service__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]();
var Like = new _like_service__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]();
var Reply = new _reply_service__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]();
var Follow = new _follow_service__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]();
var Notice = new _notice_service__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]();
var Province = _cities__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"];

/***/ }),

/***/ "./src/common/base-service.js":
/*!************************************!*\
  !*** ./src/common/base-service.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);







var baseUrl = 'http://college.test/api/sns';
var qiniuUrl = 'http://sns-file.zeuswk.com/'; // 七牛云图片地址

var imgUrl = baseUrl + '/public/images'; // 服务器图片地址

var genders = ['未知', '男', '女'];
var _height = 0; // 窗口高度 px

var _statusBarHeight = 0; // 状态栏高度

var _headHeight = 0; // 顶部导航栏高度

var _pixelRadio = 1;
var _windowHeight = 0; // 窗口高度
// 基础service

var BaseService = /*#__PURE__*/function () {
  function BaseService() {
    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, BaseService);

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "toTimestamp", function (time_str) {
      return +new Date(time_str) / 1000;
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, "timeToBirthday", function (time_stamp) {
      var time = new Date(time_stamp * 1000);
      var Y = time.getFullYear();
      var M = (time.getMonth() + 1).toString().padStart(2, '0');
      var D = time.getDate().toString().padStart(2, '0');
      return "".concat(Y, "-").concat(M, "-").concat(D);
    });

    try {
      if (_height === 0) {
        var res = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getSystemInfoSync();
        var _res = res,
            screenHeight = _res.screenHeight,
            pixelRatio = _res.pixelRatio,
            statusBarHeight = _res.statusBarHeight,
            windowHeight = _res.windowHeight;
        _pixelRadio = pixelRatio;
        _height = screenHeight * pixelRatio;
        _windowHeight = windowHeight;
        _statusBarHeight = statusBarHeight;
        res = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getMenuButtonBoundingClientRect();

        if (res) {
          var _res2 = res,
              bottom = _res2.bottom,
              top = _res2.top;
          _headHeight = bottom + top - statusBarHeight;
          console.log(_headHeight);
          ;
        }
      }
    } catch (error) {
      console.log(error);
    }
  } // 显示toast


  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(BaseService, [{
    key: "showToast",
    value: function showToast() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '操作失败,重试';
      var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showToast({
        title: title,
        icon: icon,
        duration: 2000
      });
    } // 判断当前系统是否为QQ

  }, {
    key: "isQQ",
    value: function isQQ() {
      var sys = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getSystemInfoSync();

      if (sys.AppPlatform && sys.AppPlatform === 'qq') {
        return true;
      }

      return false;
    }
  }, {
    key: "parseComment",
    value: // 格式化评论
    function parseComment(comment) {
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
    } // 应用更新

  }, {
    key: "appUpdate",
    value: function appUpdate() {
      var updateManager = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getUpdateManager();
      updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        console.log(res.hasUpdate);
      });
      updateManager.onUpdateReady(function () {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: function success(res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate();
            }
          }
        });
      });
      updateManager.onUpdateFailed(function () {
        // 新版本下载失败
        this.showToast('新版本下载失败');
      });
    } // 基本请求，封装了token

  }, {
    key: "request",
    value: function () {
      var _request = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(url, data, method) {
        var token;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync('token') || ''; // 获取token

                _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showNavigationBarLoading();
                _context.next = 4;
                return _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.request({
                  url: baseUrl + url,
                  data: data,
                  header: {
                    'XX-Token': token,
                    'XX-Device-Type': 'wxapp',
                    'Content-Type': 'application/json'
                  },
                  method: method
                }).then(function (res) {
                  console.log(res);
                  console.log(url);
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.hideNavigationBarLoading();
                  return res.data;
                }).catch(function () {
                  console.log(url);
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.hideNavigationBarLoading();
                  return {
                    code: -1
                  };
                });

              case 4:
                return _context.abrupt("return", _context.sent);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function request(_x, _x2, _x3) {
        return _request.apply(this, arguments);
      }

      return request;
    }() // 判断是否是空对象

  }, {
    key: "isEmptyObject",
    value: function isEmptyObject(obj) {
      for (var key in obj) {
        return false;
      }

      return true;
    } // 格式化图片地址

  }, {
    key: "parseCommentImgs",
    value: function parseCommentImgs(imgs) {
      return imgs.map(function (img) {
        var path = img.path;
        img.path = qiniuUrl + 'thumb_' + path;
        img.origPath = qiniuUrl + path;
        return img;
      });
    }
  }, {
    key: "parseAvatarImg",
    value: function parseAvatarImg(path) {
      return qiniuUrl + path + '?imageView2/1/w/200/h/200';
    }
  }, {
    key: "parseQiniuImg",
    value: function parseQiniuImg(path) {
      return qiniuUrl + path;
    }
  }, {
    key: "parseImgs",
    value: // 格式化图片URL
    function parseImgs(imgs) {
      return imgs.map(function (img) {
        if (img.isQiniu) {
          var path = img.path;
          img.fileName = img.path;
          img.path = qiniuUrl + 'thumb_' + path;
          img.origPath = qiniuUrl + path;
        } else {
          img.path = imgUrl + img.path;
          img.origPath = imgUrl + img.origPath;
        }

        return img;
      });
    } // 格式化性别

  }, {
    key: "parseGender",
    value: function parseGender(gender) {
      return genders[gender];
    } // 格式化用户

  }, {
    key: "parseUser",
    value: function parseUser(user) {
      if (user.avtater) {
        if (user.avtater.indexOf('http') === -1) {
          user.avtater = imgUrl + user.avtater;
        }
      }

      user.hasFollow = false;
      user.sex = user.gender;
      user.gender = this.parseGender(user.gender);
      return user;
    } // 格式化topic的图标

  }, {
    key: "parseTopic",
    value: function parseTopic(topic) {
      topic.icon_path = qiniuUrl + topic.icon_path;
      return topic;
    } // 选择单张图片并上传

  }, {
    key: "uploadOneImg",
    value: function () {
      var _uploadOneImg = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var obj, path;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.chooseImage({
                  sizeType: 'compressed',
                  count: 1
                });

              case 2:
                obj = _context2.sent;

                if (!(obj && obj.tempFilePaths)) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 6;
                return this.qiniUploadFile(obj.tempFilePaths, true);

              case 6:
                path = _context2.sent;
                return _context2.abrupt("return", path);

              case 8:
                return _context2.abrupt("return", null);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function uploadOneImg() {
        return _uploadOneImg.apply(this, arguments);
      }

      return uploadOneImg;
    }() // 上传多张图片

  }, {
    key: "uploadImgs",
    value: function () {
      var _uploadImgs = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(files) {
        var images, imgs;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                images = files.map(function (item) {
                  if (typeof item === 'string') {
                    return item;
                  }

                  return item.file.path;
                });
                _context3.next = 3;
                return this.qiniUploadFile(images);

              case 3:
                imgs = _context3.sent;
                return _context3.abrupt("return", imgs);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function uploadImgs(_x4) {
        return _uploadImgs.apply(this, arguments);
      }

      return uploadImgs;
    }()
  }, {
    key: "setMsgCount",
    value: function setMsgCount(user) {
      var sysMsgCount = user.sysMsgCount,
          likeCount = user.likeCount,
          commentCount = user.commentCount,
          replyCount = user.replyCount,
          rewardCount = user.rewardCount,
          planeCount = user.planeCount;
      var total = sysMsgCount + likeCount + commentCount + replyCount + rewardCount + planeCount;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorageSync('msgcount', total);
    }
  }, {
    key: "getQiniuUrl",
    value: function getQiniuUrl() {
      return qiniuUrl;
    }
  }, {
    key: "getImgUrl",
    value: function getImgUrl() {
      return imgUrl;
    }
  }, {
    key: "getQiniuToken",
    value: function () {
      var _getQiniuToken = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
        var res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.request("/qiniu/token", null, 'GET');

              case 2:
                res = _context4.sent;

                if (!(res.code === 1)) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return", res.data);

              case 5:
                return _context4.abrupt("return", null);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getQiniuToken() {
        return _getQiniuToken.apply(this, arguments);
      }

      return getQiniuToken;
    }() // 七牛云文件上传

    /**
     * @param {Arrary} imgs 图片数组 ['dizhi', 'dizhi']
     * @param {Boolean} isSingle 是否返回单个路径
     */

  }, {
    key: "qiniUploadFile",
    value: function () {
      var _qiniUploadFile = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(imgs) {
        var isSingle,
            imgPaths,
            token,
            _iterator,
            _step,
            img,
            result,
            _args5 = arguments;

        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                isSingle = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : false;
                imgPaths = [];
                _context5.next = 4;
                return this.getQiniuToken();

              case 4:
                token = _context5.sent;
                _iterator = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(imgs);
                _context5.prev = 6;

                _iterator.s();

              case 8:
                if ((_step = _iterator.n()).done) {
                  _context5.next = 18;
                  break;
                }

                img = _step.value;

                if (!(token === null)) {
                  _context5.next = 12;
                  break;
                }

                return _context5.abrupt("continue", 16);

              case 12:
                _context5.next = 14;
                return _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.uploadFile({
                  url: 'https://upload-z2.qiniup.com',
                  filePath: img,
                  name: 'file',
                  formData: {
                    token: token
                  }
                }).then(function (res) {
                  console.log('上传文件成功', res);

                  if (res.statusCode === 200) {
                    var obj = JSON.parse(res.data);
                    var key = obj.key;
                    return {
                      path: key
                    };
                  } else {
                    return null;
                  }
                }).catch(function (err) {
                  console.warn(err);
                  return null;
                });

              case 14:
                result = _context5.sent;

                if (result) {
                  imgPaths.push(result.path);
                } else {
                  imgPaths.push('');
                }

              case 16:
                _context5.next = 8;
                break;

              case 18:
                _context5.next = 23;
                break;

              case 20:
                _context5.prev = 20;
                _context5.t0 = _context5["catch"](6);

                _iterator.e(_context5.t0);

              case 23:
                _context5.prev = 23;

                _iterator.f();

                return _context5.finish(23);

              case 26:
                return _context5.abrupt("return", isSingle ? imgPaths[0] : imgPaths);

              case 27:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[6, 20, 23, 26]]);
      }));

      function qiniUploadFile(_x5) {
        return _qiniUploadFile.apply(this, arguments);
      }

      return qiniUploadFile;
    }()
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(obj) {
        var formData,
            token,
            urls,
            paths,
            _iterator2,
            _step2,
            filePath,
            res,
            result,
            _args6 = arguments;

        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                formData = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : null;
                token = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync('token') || '';
                urls = [];
                paths = [];
                _iterator2 = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj.tempFilePaths);
                _context6.prev = 5;

                _iterator2.s();

              case 7:
                if ((_step2 = _iterator2.n()).done) {
                  _context6.next = 15;
                  break;
                }

                filePath = _step2.value;
                _context6.next = 11;
                return _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.uploadFile({
                  formData: formData,
                  url: baseUrl + '/upload',
                  filePath: filePath,
                  header: {
                    token: token,
                    'from-wx': '16f9d417-03c3-45cc-90c7-d58e4e447ae6'
                  },
                  name: 'file'
                });

              case 11:
                res = _context6.sent;

                try {
                  result = JSON.parse(res.data);

                  if (result && result.filePath) {
                    urls.push(imgUrl + result.filePath);
                    paths.push(result.filePath);
                  }
                } catch (error) {
                  console.log(error);
                }

              case 13:
                _context6.next = 7;
                break;

              case 15:
                _context6.next = 20;
                break;

              case 17:
                _context6.prev = 17;
                _context6.t0 = _context6["catch"](5);

                _iterator2.e(_context6.t0);

              case 20:
                _context6.prev = 20;

                _iterator2.f();

                return _context6.finish(20);

              case 23:
                return _context6.abrupt("return", new Promise(function (resolve) {
                  resolve({
                    urls: urls,
                    paths: paths
                  });
                }));

              case 24:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[5, 17, 20, 23]]);
      }));

      function uploadFile(_x6) {
        return _uploadFile.apply(this, arguments);
      }

      return uploadFile;
    }()
  }, {
    key: "getHeadHeight",
    value: function getHeadHeight() {
      return _headHeight;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return _height;
    }
  }, {
    key: "getBaseUrl",
    value: function getBaseUrl() {
      return baseUrl;
    }
  }, {
    key: "getStatusBarHeight",
    value: function getStatusBarHeight() {
      return _statusBarHeight;
    }
  }, {
    key: "getPixelRadio",
    value: function getPixelRadio() {
      return _pixelRadio;
    }
  }, {
    key: "getWindowHeight",
    value: function getWindowHeight() {
      return _windowHeight;
    }
  }]);

  return BaseService;
}();



/***/ }),

/***/ "./src/common/cities.js":
/*!******************************!*\
  !*** ./src/common/cities.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  name: "北京",
  cities: ["东城区", "西城区", "崇文区", "宣武区", "朝阳区", "海淀区", "丰台区", "石景山区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区", "门头沟区", "密云县", "延庆县"]
}, {
  name: "天津",
  cities: ["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "东丽区", "西青区", "北辰区", "津南区", "武清区", "宝坻区", "滨海新区", "静海县", "宁河县", "蓟县"]
}, {
  name: "上海",
  cities: ["黄浦区", "卢湾区", "徐汇区", "长宁区", "静安区", "普陀区", "闸北区", "虹口区", "杨浦区", "闵行区", "宝山区", "嘉定区", "浦东新区", "金山区", "松江区", "青浦区", "奉贤区", "崇明县"]
}, {
  name: "重庆",
  cities: ["渝中区", "大渡口区", "江北区", "南岸区", "北碚区", "渝北区", "巴南区", "长寿区", "双桥区", "沙坪坝区", "万盛区", "万州区", "涪陵区", "黔江区", "永川区", "合川区", "江津区", "九龙坡区", "南川区", "綦江县", "潼南县", "荣昌县", "璧山县", "大足县", "铜梁县", "梁平县", "开县", "忠县", "城口县", "垫江县", "武隆县", "丰都县", "奉节县", "云阳县", "巫溪县", "巫山县", "石柱土家族自治县", "秀山土家族苗族自治县", "酉阳土家族苗族自治县", "彭水苗族土家族自治县"]
}, {
  name: "河北",
  cities: ["石家庄", "唐山", "秦皇岛", "邯郸", "邢台", "保定", "张家口", "承德", "沧州", "廊坊", "衡水"]
}, {
  name: "山西",
  cities: ["太原", "大同", "阳泉", "长治", "晋城", "朔州", "晋中", "运城", "忻州", "临汾", "吕梁"]
}, {
  name: "辽宁",
  cities: ["沈阳", "大连", "鞍山", "抚顺", "本溪", "丹东", "锦州", "营口", "阜新", "辽阳", "盘锦", "铁岭", "朝阳", "葫芦岛"]
}, {
  name: "吉林",
  cities: ["长春", "吉林", "四平", "辽源", "通化", "白山", "松原", "白城", "延边朝鲜族自治州"]
}, {
  name: "黑龙江",
  cities: ["哈尔滨", "齐齐哈尔", "鹤岗", "双鸭山", "鸡西", "大庆", "伊春", "牡丹江", "佳木斯", "七台河", "黑河", "绥化", "大兴安岭"]
}, {
  name: "江苏",
  cities: ["南京", "苏州", "无锡", "常州", "镇江", "南通", "泰州", "扬州", "盐城", "连云港", "徐州", "淮安", "宿迁"]
}, {
  name: "浙江",
  cities: ["杭州", "宁波", "温州", "嘉兴", "湖州", "绍兴", "金华", "衢州", "舟山", "台州", "丽水"]
}, {
  name: "安徽",
  cities: ["合肥", "芜湖", "蚌埠", "淮南", "马鞍山", "淮北", "铜陵", "安庆", "黄山", "滁州", "阜阳", "宿州", "巢湖", "六安", "亳州", "池州", "宣城"]
}, {
  name: "福建",
  cities: ["福州", "厦门", "莆田", "三明", "泉州", "漳州", "南平", "龙岩", "宁德"]
}, {
  name: "江西",
  cities: ["南昌", "景德镇", "萍乡", "九江", "新余", "鹰潭", "赣州", "吉安", "宜春", "抚州", "上饶"]
}, {
  name: "山东",
  cities: ["济南", "青岛", "淄博", "枣庄", "东营", "烟台", "潍坊", "济宁", "泰安", "威海", "日照", "莱芜", "临沂", "德州", "聊城", "滨州", "菏泽"]
}, {
  name: "河南",
  cities: ["郑州", "开封", "洛阳", "平顶山", "安阳", "鹤壁", "新乡", "焦作", "濮阳", "许昌", "漯河", "三门峡", "南阳", "商丘", "信阳", "周口", "驻马店"]
}, {
  name: "湖北",
  cities: ["武汉", "黄石", "十堰", "荆州", "宜昌", "襄樊", "鄂州", "荆门", "孝感", "黄冈", "咸宁", "随州", "恩施"]
}, {
  name: "湖南",
  cities: ["长沙", "株洲", "湘潭", "衡阳", "邵阳", "岳阳", "常德", "张家界", "益阳", "郴州", "永州", "怀化", "娄底", "湘西"]
}, {
  name: "广东",
  cities: ["广州", "深圳", "珠海", "汕头", "韶关", "佛山", "江门", "湛江", "茂名", "肇庆", "惠州", "梅州", "汕尾", "河源", "阳江", "清远", "东莞", "中山", "潮州", "揭阳", "云浮"]
}, {
  name: "海南",
  cities: ["海口", "三亚"]
}, {
  name: "四川",
  cities: ["成都", "自贡", "攀枝花", "泸州", "德阳", "绵阳", "广元", "遂宁", "内江", "乐山", "南充", "眉山", "宜宾", "广安", "达州", "雅安", "巴中", "资阳", "阿坝", "甘孜", "凉山"]
}, {
  name: "贵州",
  cities: ["贵阳", "六盘水", "遵义", "安顺", "铜仁", "毕节", "黔西南", "黔东南", "黔南"]
}, {
  name: "云南",
  cities: ["昆明", "曲靖", "玉溪", "保山", "昭通", "丽江", "普洱", "临沧", "德宏", "怒江", "迪庆", "大理", "楚雄", "红河", "文山", "西双版纳"]
}, {
  name: "陕西",
  cities: ["西安", "铜川", "宝鸡", "咸阳", "渭南", "延安", "汉中", "榆林", "安康", "商洛"]
}, {
  name: "甘肃",
  cities: ["兰州", "嘉峪关", "金昌", "白银", "天水", "武威", "酒泉", "张掖", "庆阳", "平凉", "定西", "陇南", "临夏", "甘南"]
}, {
  name: "青海",
  cities: ["西宁", "海东", "海北", "海南", "黄南", "果洛", "玉树", "海西"]
}, {
  name: "内蒙古",
  cities: ["呼和浩特", "包头", "乌海", "赤峰", "通辽", "鄂尔多斯", "呼伦贝尔", "巴彦淖尔", "乌兰察布", "锡林郭勒盟", "兴安盟", "阿拉善盟"]
}, {
  name: "广西",
  cities: ["南宁", "柳州", "桂林", "梧州", "北海", "防城港", "钦州", "贵港", "玉林", "百色", "贺州", "河池", "来宾", "崇左"]
}, {
  name: "西藏",
  cities: ["拉萨", "那曲", "昌都", "林芝", "山南", "日喀则", "阿里"]
}, {
  name: "宁夏",
  cities: ["银川", "石嘴山", "吴忠", "固原", "中卫"]
}, {
  name: "新疆",
  cities: ["乌鲁木齐", "克拉玛依", "吐鲁番", "哈密", "和田", "阿克苏", "喀什", "克孜勒苏", "巴音郭楞", "昌吉", "博尔塔拉", "伊犁", "塔城", "阿勒泰"]
}, {
  name: "香港",
  cities: ["香港岛", "九龙东", "九龙西", "新界东", "新界西"]
}, {
  name: "澳门",
  cities: ["澳门半岛", "离岛"]
}, {
  name: "台湾",
  cities: ["台北", "高雄", "基隆", "新竹", "台中", "嘉义", "台南市"]
}]);

/***/ }),

/***/ "./src/common/comment-service.js":
/*!***************************************!*\
  !*** ./src/common/comment-service.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base-service */ "./src/common/base-service.js");









var CommentService = /*#__PURE__*/function (_BaseService) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(CommentService, _BaseService);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(CommentService);

  function CommentService() {
    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, CommentService);

    return _super.call(this);
  } // 新建评论


  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(CommentService, [{
    key: "create",
    value: function () {
      var _create = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(content, images, post_id, to_uid, is_secret) {
        var res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.request('/comment/add', {
                  content: content,
                  images: images,
                  post_id: post_id,
                  to_uid: to_uid,
                  is_secret: is_secret
                }, 'POST');

              case 2:
                res = _context.sent;

                if (!res) {
                  _context.next = 10;
                  break;
                }

                if (!(res.code === 1)) {
                  _context.next = 9;
                  break;
                }

                this.showToast('评论成功');
                return _context.abrupt("return", true);

              case 9:
                this.showToast(res.msg);

              case 10:
                this.showToast('服务端问题');
                return _context.abrupt("return", null);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x, _x2, _x3, _x4, _x5) {
        return _create.apply(this, arguments);
      }

      return create;
    }() // 获取某个用户的所有评论

  }, {
    key: "getWithUID",
    value: function () {
      var _getWithUID = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(from_uid) {
        var page,
            res,
            data,
            _args2 = arguments;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                page = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 1;
                _context2.next = 3;
                return this.request('/public/commentList', {
                  from_uid: from_uid,
                  page: page,
                  order: 'create_at'
                }, 'GET');

              case 3:
                res = _context2.sent;

                if (!(res.code === 1)) {
                  _context2.next = 10;
                  break;
                }

                data = res.data;

                if (!(data.length === 0)) {
                  _context2.next = 9;
                  break;
                }

                this.showToast('没有更多评论');
                return _context2.abrupt("return", null);

              case 9:
                return _context2.abrupt("return", data);

              case 10:
                return _context2.abrupt("return", null);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getWithUID(_x6) {
        return _getWithUID.apply(this, arguments);
      }

      return getWithUID;
    }() // 获取某个帖子下的评论

  }, {
    key: "getCommentsByPost",
    value: function () {
      var _getCommentsByPost = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(post_id) {
        var page,
            order,
            res,
            data,
            _args3 = arguments;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                page = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 1;
                order = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : 'create_at';
                _context3.next = 4;
                return this.request('/public/commentList', {
                  post_id: post_id,
                  page: page,
                  order: order
                }, 'GET');

              case 4:
                res = _context3.sent;

                if (!(res.code === 1)) {
                  _context3.next = 11;
                  break;
                }

                data = res.data;

                if (!(data.length === 0)) {
                  _context3.next = 10;
                  break;
                }

                this.showToast('没有更多评论');
                return _context3.abrupt("return", null);

              case 10:
                return _context3.abrupt("return", data);

              case 11:
                return _context3.abrupt("return", null);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getCommentsByPost(_x7) {
        return _getCommentsByPost.apply(this, arguments);
      }

      return getCommentsByPost;
    }() // 获取包含私密评论的帖子评论列表

  }, {
    key: "getCommentsByPostWithSecret",
    value: function () {
      var _getCommentsByPostWithSecret = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(post_id) {
        var page,
            order,
            res,
            data,
            _args4 = arguments;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                page = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : 1;
                order = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : 'create_at';
                _context4.next = 4;
                return this.request('/comment/getListWithSecret', {
                  post_id: post_id,
                  page: page,
                  order: order
                }, 'GET');

              case 4:
                res = _context4.sent;

                if (!(res.code === 1)) {
                  _context4.next = 13;
                  break;
                }

                data = res.data;

                if (!(data.length === 0)) {
                  _context4.next = 10;
                  break;
                }

                this.showToast('没有更多评论');
                return _context4.abrupt("return", null);

              case 10:
                return _context4.abrupt("return", data);

              case 13:
                this.showToast(res.msg);

              case 14:
                return _context4.abrupt("return", null);

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getCommentsByPostWithSecret(_x8) {
        return _getCommentsByPostWithSecret.apply(this, arguments);
      }

      return getCommentsByPostWithSecret;
    }() // 获取某个评论详情

  }, {
    key: "getCommentDetail",
    value: function () {
      var _getCommentDetail = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id) {
        var res, data;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.request('/public/comment', {
                  id: id
                }, 'GET');

              case 2:
                res = _context5.sent;

                if (!(res.code === 1)) {
                  _context5.next = 6;
                  break;
                }

                data = res.data;
                return _context5.abrupt("return", data);

              case 6:
                return _context5.abrupt("return", null);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getCommentDetail(_x9) {
        return _getCommentDetail.apply(this, arguments);
      }

      return getCommentDetail;
    }()
  }]);

  return CommentService;
}(_base_service__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (CommentService);

/***/ }),

/***/ "./src/common/follow-service.js":
/*!**************************************!*\
  !*** ./src/common/follow-service.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowService; });
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base-service */ "./src/common/base-service.js");








var _action = {
  follow: '关注',
  cancel: '取关'
};

var FollowService = /*#__PURE__*/function (_BaseService) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(FollowService, _BaseService);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(FollowService);

  function FollowService() {
    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, FollowService);

    return _super.call(this);
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(FollowService, [{
    key: "followUser",
    value: function () {
      var _followUser = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(userId) {
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.followOrCancel(userId, 'follow', 'user');

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function followUser(_x) {
        return _followUser.apply(this, arguments);
      }

      return followUser;
    }()
  }, {
    key: "cancelFollowUser",
    value: function () {
      var _cancelFollowUser = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(userId) {
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.followOrCancel(userId, 'cancel', 'user');

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function cancelFollowUser(_x2) {
        return _cancelFollowUser.apply(this, arguments);
      }

      return cancelFollowUser;
    }()
  }, {
    key: "followTopic",
    value: function () {
      var _followTopic = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(topicId) {
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.followOrCancel(topicId, 'follow', 'topic');

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function followTopic(_x3) {
        return _followTopic.apply(this, arguments);
      }

      return followTopic;
    }()
  }, {
    key: "cancelFollowTopic",
    value: function () {
      var _cancelFollowTopic = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(topicId) {
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.followOrCancel(topicId, 'cancel', 'topic');

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function cancelFollowTopic(_x4) {
        return _cancelFollowTopic.apply(this, arguments);
      }

      return cancelFollowTopic;
    }()
  }, {
    key: "followOrCancel",
    value: function () {
      var _followOrCancel = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id, action, type) {
        var res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.request("/follow/".concat(type), {
                  id: id,
                  action: action
                }, 'POST');

              case 2:
                res = _context5.sent;

                if (!res) {
                  _context5.next = 11;
                  break;
                }

                if (!(res.code === 1)) {
                  _context5.next = 8;
                  break;
                }

                this.showToast("".concat(_action[action], "\u6210\u529F"));

                if (action === 'follow') {
                  this.cacheFollow(id, type);
                } else {
                  this.delFollow(id, type);
                }

                return _context5.abrupt("return", true);

              case 8:
                if (!(res.code === 0)) {
                  _context5.next = 11;
                  break;
                }

                this.showToast(res.msg);
                return _context5.abrupt("return", false);

              case 11:
                return _context5.abrupt("return", false);

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function followOrCancel(_x5, _x6, _x7) {
        return _followOrCancel.apply(this, arguments);
      }

      return followOrCancel;
    }()
  }, {
    key: "isFollowUser",
    value: function isFollowUser(userId) {
      return this.isFollow(userId, 'user');
    }
  }, {
    key: "isFollowTopic",
    value: function isFollowTopic(topicId) {
      return this.isFollow(topicId, 'topic');
    }
  }, {
    key: "isFollow",
    value: function isFollow(id, type) {
      var followList = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync("follow_".concat(type));

      if (followList && followList.length !== 0) {
        if (followList.includes(+id)) {
          return true;
        } else {
          return false;
        }
      }

      return false;
    }
  }, {
    key: "cacheFollow",
    value: function cacheFollow(id, type) {
      var followList = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync("follow_".concat(type));

      if (!followList) {
        followList = [];
      }

      if (followList.indexOf(id) === -1) {
        followList.push(id);
      }

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorageSync("follow_".concat(type), followList);
    }
  }, {
    key: "delFollow",
    value: function delFollow(id, type) {
      var followList = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync("follow_".concat(type));

      if (!followList) {
        return;
      }

      var i = followList.indexOf(id);

      if (i !== -1) {
        followList.splice(i, 1);
      }

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorageSync("follow_".concat(type), followList);
    }
  }]);

  return FollowService;
}(_base_service__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);



/***/ }),

/***/ "./src/common/like-service.js":
/*!************************************!*\
  !*** ./src/common/like-service.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikeService; });
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base-service */ "./src/common/base-service.js");









var LikeService = /*#__PURE__*/function (_BaseService) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(LikeService, _BaseService);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(LikeService);

  function LikeService() {
    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, LikeService);

    return _super.apply(this, arguments);
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(LikeService, [{
    key: "isLike",
    value: function isLike(type, id) {
      var likeList = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync('likes_' + type);

      if (!likeList) {
        return false;
      }

      if (likeList.includes(id)) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "doLike",
    value: function () {
      var _doLike = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(type, id) {
        var likeList, res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 获取本地缓存的内容
                likeList = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync('likes_' + type);

                if (!likeList) {
                  likeList = [];
                } // 判断是否已经点过赞了


                if (!likeList.includes(id)) {
                  _context.next = 5;
                  break;
                }

                this.showToast('已经点过赞了');
                return _context.abrupt("return", null);

              case 5:
                ; // 如果没有点过赞的话

                res = null;

                if (!(type === 'post')) {
                  _context.next = 11;
                  break;
                }

                _context.next = 10;
                return this.request('/post/like', {
                  id: id
                }, 'POST');

              case 10:
                res = _context.sent;

              case 11:
                if (!(type === 'comment')) {
                  _context.next = 15;
                  break;
                }

                _context.next = 14;
                return this.request('/comment/like', {
                  id: id
                }, 'POST');

              case 14:
                res = _context.sent;

              case 15:
                if (!(type === 'reply')) {
                  _context.next = 19;
                  break;
                }

                _context.next = 18;
                return this.request('/reply/like', {
                  id: id
                }, 'POST');

              case 18:
                res = _context.sent;

              case 19:
                if (!(res && res.code === 1)) {
                  _context.next = 27;
                  break;
                }

                if (likeList.length === 200) {
                  likeList.shift();
                }

                likeList.push(id);
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorageSync('likes_' + type, likeList);
                this.showToast('点赞成功');
                return _context.abrupt("return", res.data);

              case 27:
                return _context.abrupt("return", null);

              case 28:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function doLike(_x, _x2) {
        return _doLike.apply(this, arguments);
      }

      return doLike;
    }()
  }]);

  return LikeService;
}(_base_service__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);



/***/ }),

/***/ "./src/common/notice-service.js":
/*!**************************************!*\
  !*** ./src/common/notice-service.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeService; });
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base-service */ "./src/common/base-service.js");








var NoticeService = /*#__PURE__*/function (_BaseService) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(NoticeService, _BaseService);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(NoticeService);

  function NoticeService() {
    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, NoticeService);

    return _super.call(this);
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(NoticeService, [{
    key: "count",
    value: function () {
      var _count = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.request('/notice/count', {}, 'GET');

              case 2:
                res = _context.sent;

                if (!(res && res.code === 1)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", res.data);

              case 5:
                return _context.abrupt("return", null);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function count() {
        return _count.apply(this, arguments);
      }

      return count;
    }()
  }, {
    key: "official",
    value: function () {
      var _official = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(page, id) {
        var res, data;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.request('/notice/official', {
                  id: id,
                  page: page
                }, 'POST');

              case 2:
                res = _context2.sent;

                if (!(res && res.code === 1)) {
                  _context2.next = 9;
                  break;
                }

                data = res.data;

                if (!(!id && data.length === 0)) {
                  _context2.next = 8;
                  break;
                }

                this.showToast('到底啦');
                return _context2.abrupt("return", null);

              case 8:
                return _context2.abrupt("return", data);

              case 9:
                return _context2.abrupt("return", null);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function official(_x, _x2) {
        return _official.apply(this, arguments);
      }

      return official;
    }()
  }, {
    key: "beFollow",
    value: function () {
      var _beFollow = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(page, id) {
        var res, data;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.request('/notice/beFollow', {
                  id: id,
                  page: page
                }, 'POST');

              case 2:
                res = _context3.sent;

                if (!(res && res.code === 1)) {
                  _context3.next = 9;
                  break;
                }

                data = res.data;

                if (!(!id && data.length === 0)) {
                  _context3.next = 8;
                  break;
                }

                this.showToast('到底啦');
                return _context3.abrupt("return", null);

              case 8:
                return _context3.abrupt("return", data);

              case 9:
                return _context3.abrupt("return", null);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function beFollow(_x3, _x4) {
        return _beFollow.apply(this, arguments);
      }

      return beFollow;
    }()
  }, {
    key: "beComment",
    value: function () {
      var _beComment = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(page, id) {
        var res, data;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.request('/notice/beComment', {
                  id: id,
                  page: page
                }, 'POST');

              case 2:
                res = _context4.sent;

                if (!(res && res.code === 1)) {
                  _context4.next = 9;
                  break;
                }

                data = res.data;

                if (!(!id && data.length === 0)) {
                  _context4.next = 8;
                  break;
                }

                this.showToast('到底啦');
                return _context4.abrupt("return", null);

              case 8:
                return _context4.abrupt("return", data);

              case 9:
                return _context4.abrupt("return", null);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function beComment(_x5, _x6) {
        return _beComment.apply(this, arguments);
      }

      return beComment;
    }()
  }, {
    key: "beReply",
    value: function () {
      var _beReply = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(page, id) {
        var res, data;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.request('/notice/beReply', {
                  id: id,
                  page: page
                }, 'POST');

              case 2:
                res = _context5.sent;

                if (!(res && res.code === 1)) {
                  _context5.next = 9;
                  break;
                }

                data = res.data;

                if (!(!id && data.length === 0)) {
                  _context5.next = 8;
                  break;
                }

                this.showToast('到底啦');
                return _context5.abrupt("return", null);

              case 8:
                return _context5.abrupt("return", data);

              case 9:
                return _context5.abrupt("return", null);

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function beReply(_x7, _x8) {
        return _beReply.apply(this, arguments);
      }

      return beReply;
    }()
  }]);

  return NoticeService;
}(_base_service__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]);



/***/ }),

/***/ "./src/common/post-service.js":
/*!************************************!*\
  !*** ./src/common/post-service.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base-service */ "./src/common/base-service.js");









var PostService = /*#__PURE__*/function (_BaseService) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(PostService, _BaseService);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(PostService);

  function PostService() {
    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, PostService);

    return _super.call(this);
  } // 新建帖子


  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(PostService, [{
    key: "create",
    value: function () {
      var _create = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(topic_id, content, images) {
        var res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.request('/post/add', {
                  topic_id: topic_id,
                  content: content,
                  images: images
                }, 'POST');

              case 2:
                res = _context.sent;

                if (!(res.code === 1)) {
                  _context.next = 8;
                  break;
                }

                this.showToast('发布帖子成功');
                return _context.abrupt("return", res.data);

              case 8:
                this.showToast(res.msg);

              case 9:
                return _context.abrupt("return", null);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x, _x2, _x3) {
        return _create.apply(this, arguments);
      }

      return create;
    }() // 获取某个用户的所有帖子

  }, {
    key: "getWithUID",
    value: function () {
      var _getWithUID = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(from_uid) {
        var page,
            res,
            data,
            _args2 = arguments;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                page = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 1;
                _context2.next = 3;
                return this.request('/public/postList', {
                  from_uid: from_uid,
                  page: page,
                  order: 'create_at'
                }, 'GET');

              case 3:
                res = _context2.sent;

                if (!(res.code === 1)) {
                  _context2.next = 10;
                  break;
                }

                data = res.data;

                if (!(data.length === 0)) {
                  _context2.next = 9;
                  break;
                }

                this.showToast('没有更多帖子');
                return _context2.abrupt("return", null);

              case 9:
                return _context2.abrupt("return", data);

              case 10:
                return _context2.abrupt("return", null);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getWithUID(_x4) {
        return _getWithUID.apply(this, arguments);
      }

      return getWithUID;
    }() // 获取最新的帖子

  }, {
    key: "getNewPosts",
    value: function () {
      var _getNewPosts = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(page) {
        var res, data;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.request('/public/postList', {
                  page: page,
                  order: 'create_at'
                }, 'GET');

              case 2:
                res = _context3.sent;

                if (!(res.code === 1)) {
                  _context3.next = 9;
                  break;
                }

                data = res.data;

                if (!(data.length === 0)) {
                  _context3.next = 8;
                  break;
                }

                this.showToast('没有更多帖子');
                return _context3.abrupt("return", null);

              case 8:
                return _context3.abrupt("return", data);

              case 9:
                return _context3.abrupt("return", null);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getNewPosts(_x5) {
        return _getNewPosts.apply(this, arguments);
      }

      return getNewPosts;
    }() // 获取帖子详情

  }, {
    key: "getPostDetail",
    value: function () {
      var _getPostDetail = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id) {
        var res, data;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.request('/public/post', {
                  id: id
                }, 'GET');

              case 2:
                res = _context4.sent;

                if (!(res.code === 1)) {
                  _context4.next = 6;
                  break;
                }

                data = res.data;
                return _context4.abrupt("return", data);

              case 6:
                return _context4.abrupt("return", null);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getPostDetail(_x6) {
        return _getPostDetail.apply(this, arguments);
      }

      return getPostDetail;
    }()
  }, {
    key: "getPostsWithTopic",
    value: function () {
      var _getPostsWithTopic = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(topic_id, page) {
        var res, data;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.request('/public/postList', {
                  topic_id: topic_id,
                  page: page,
                  order: 'create_at'
                }, 'GET');

              case 2:
                res = _context5.sent;

                if (!(res.code === 1)) {
                  _context5.next = 9;
                  break;
                }

                data = res.data;

                if (!(data.length === 0)) {
                  _context5.next = 8;
                  break;
                }

                this.showToast('没有更多帖子');
                return _context5.abrupt("return", null);

              case 8:
                return _context5.abrupt("return", data);

              case 9:
                return _context5.abrupt("return", null);

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getPostsWithTopic(_x7, _x8) {
        return _getPostsWithTopic.apply(this, arguments);
      }

      return getPostsWithTopic;
    }()
  }]);

  return PostService;
}(_base_service__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (PostService);

/***/ }),

/***/ "./src/common/reply-service.js":
/*!*************************************!*\
  !*** ./src/common/reply-service.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplyService; });
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base-service */ "./src/common/base-service.js");








var ReplyService = /*#__PURE__*/function (_BaseService) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ReplyService, _BaseService);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(ReplyService);

  function ReplyService() {
    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, ReplyService);

    return _super.call(this);
  } // 新建回复


  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ReplyService, [{
    key: "create",
    value: function () {
      var _create = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(content, images, comment_id, to_uid) {
        var res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.request('/reply/add', {
                  content: content,
                  images: images,
                  comment_id: comment_id,
                  to_uid: to_uid
                }, 'POST');

              case 2:
                res = _context.sent;

                if (!res) {
                  _context.next = 10;
                  break;
                }

                if (!(res.code === 1)) {
                  _context.next = 9;
                  break;
                }

                this.showToast('回复成功');
                return _context.abrupt("return", true);

              case 9:
                this.showToast(res.msg);

              case 10:
                this.showToast('服务端问题');
                return _context.abrupt("return", null);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x, _x2, _x3, _x4) {
        return _create.apply(this, arguments);
      }

      return create;
    }() // 获取某个用户的所有回复

  }, {
    key: "getWithUID",
    value: function () {
      var _getWithUID = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(from_uid) {
        var page,
            res,
            data,
            _args2 = arguments;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                page = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 1;
                _context2.next = 3;
                return this.request('/public/replyList', {
                  from_uid: from_uid,
                  page: page,
                  order: 'create_at'
                }, 'GET');

              case 3:
                res = _context2.sent;

                if (!(res.code === 1)) {
                  _context2.next = 10;
                  break;
                }

                data = res.data;

                if (!(data.length === 0)) {
                  _context2.next = 9;
                  break;
                }

                this.showToast('没有更多回复');
                return _context2.abrupt("return", null);

              case 9:
                return _context2.abrupt("return", data);

              case 10:
                return _context2.abrupt("return", null);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getWithUID(_x5) {
        return _getWithUID.apply(this, arguments);
      }

      return getWithUID;
    }() // 获取某个回复下的评论

  }, {
    key: "getReplysByComment",
    value: function () {
      var _getReplysByComment = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(comment_id) {
        var page,
            res,
            data,
            _args3 = arguments;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                page = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 1;
                _context3.next = 3;
                return this.request('/public/replyList', {
                  comment_id: comment_id,
                  page: page
                }, 'GET');

              case 3:
                res = _context3.sent;

                if (!(res.code === 1)) {
                  _context3.next = 10;
                  break;
                }

                data = res.data;

                if (!(data.length === 0)) {
                  _context3.next = 9;
                  break;
                }

                this.showToast('没有更多回复');
                return _context3.abrupt("return", null);

              case 9:
                return _context3.abrupt("return", data);

              case 10:
                return _context3.abrupt("return", null);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getReplysByComment(_x6) {
        return _getReplysByComment.apply(this, arguments);
      }

      return getReplysByComment;
    }() // 获取某个回复详情

  }, {
    key: "getReplytDetail",
    value: function () {
      var _getReplytDetail = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id) {
        var res, data;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.request('/public/reply', {
                  id: id
                }, 'GET');

              case 2:
                res = _context4.sent;

                if (!(res.code === 1)) {
                  _context4.next = 6;
                  break;
                }

                data = res.data;
                return _context4.abrupt("return", data);

              case 6:
                return _context4.abrupt("return", null);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getReplytDetail(_x7) {
        return _getReplytDetail.apply(this, arguments);
      }

      return getReplytDetail;
    }()
  }]);

  return ReplyService;
}(_base_service__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]);



/***/ }),

/***/ "./src/common/topic-service.js":
/*!*************************************!*\
  !*** ./src/common/topic-service.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicService; });
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base-service */ "./src/common/base-service.js");








var KEY_TOPIC_TRACK = 'TOPIC_TRACK';

var TopicService = /*#__PURE__*/function (_BaseService) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(TopicService, _BaseService);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(TopicService);

  function TopicService() {
    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, TopicService);

    return _super.call(this);
  } // 添加话题


  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(TopicService, [{
    key: "add",
    value: function () {
      var _add = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(title, des, icon_path, follow_name) {
        var res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.request('/topic/add', {
                  title: title,
                  des: des,
                  icon_path: icon_path,
                  follow_name: follow_name
                }, 'POST');

              case 2:
                res = _context.sent;

                if (!(res.code === 1)) {
                  _context.next = 8;
                  break;
                }

                this.showToast('等待审核', 'success');
                return _context.abrupt("return", res.data);

              case 8:
                this.showToast('创建话题失败');

              case 9:
                return _context.abrupt("return", null);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function add(_x, _x2, _x3, _x4) {
        return _add.apply(this, arguments);
      }

      return add;
    }() // 获取话题列表

  }, {
    key: "getTopicList",
    value: function () {
      var _getTopicList = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var page,
            res,
            _args2 = arguments;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                page = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 0;
                _context2.next = 3;
                return this.request('/public/topicList', {
                  page: page
                });

              case 3:
                res = _context2.sent;

                if (!(res.code === 1)) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", res.data);

              case 6:
                return _context2.abrupt("return", null);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getTopicList() {
        return _getTopicList.apply(this, arguments);
      }

      return getTopicList;
    }() // 搜索某个话题

  }, {
    key: "searchTopic",
    value: function () {
      var _searchTopic = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(keyword, page) {
        var res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.request('/public/topicList', {
                  keyword: keyword,
                  page: page
                });

              case 2:
                res = _context3.sent;

                if (!(res.code === 1)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", res.data.rows.map(this.parseTopic.bind(this)));

              case 5:
                return _context3.abrupt("return", null);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function searchTopic(_x5, _x6) {
        return _searchTopic.apply(this, arguments);
      }

      return searchTopic;
    }() // 获取话题详情

  }, {
    key: "getTopic",
    value: function () {
      var _getTopic = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id) {
        var res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.request('/public/topicDetail', {
                  id: id
                });

              case 2:
                res = _context4.sent;

                if (!(res.code === 1)) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return", res.data);

              case 5:
                return _context4.abrupt("return", null);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getTopic(_x7) {
        return _getTopic.apply(this, arguments);
      }

      return getTopic;
    }() // 关注、取消关注,取消关注的action为cancel

  }, {
    key: "topicFollow",
    value: function () {
      var _topicFollow = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id, action) {
        var res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.request('/follow/topic', {
                  id: id,
                  action: action
                });

              case 2:
                res = _context5.sent;

                if (!(res.code === 1)) {
                  _context5.next = 5;
                  break;
                }

                return _context5.abrupt("return", true);

              case 5:
                return _context5.abrupt("return", false);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function topicFollow(_x8, _x9) {
        return _topicFollow.apply(this, arguments);
      }

      return topicFollow;
    }() // 获取所有我关注的话题

  }, {
    key: "myFollowTopics",
    value: function () {
      var _myFollowTopics = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(page) {
        var res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.request('/topic/follow', {
                  page: page
                });

              case 2:
                res = _context6.sent;

                if (!(res.code === 1)) {
                  _context6.next = 5;
                  break;
                }

                return _context6.abrupt("return", res.data.map(function (item) {
                  return item.topic;
                }));

              case 5:
                return _context6.abrupt("return", null);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function myFollowTopics(_x10) {
        return _myFollowTopics.apply(this, arguments);
      }

      return myFollowTopics;
    }()
  }, {
    key: "topicAddTrack",
    value: function topicAddTrack(topic) {
      try {
        var items = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync(KEY_TOPIC_TRACK);

        if (items) {
          items = items.filter(function (item) {
            return item.id !== topic.id;
          });
          items.unshift(topic);

          if (items.length > 15) {
            items = items.slice(0, 15);
          }
        } else {
          items = [topic];
        }

        try {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorageSync(KEY_TOPIC_TRACK, items);
        } catch (e) {}
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: "getTopicTrack",
    value: function getTopicTrack() {
      try {
        var items = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync(KEY_TOPIC_TRACK);
        return items || null;
      } catch (e) {
        return null;
      }
    }
  }, {
    key: "cleanTopicTrack",
    value: function cleanTopicTrack() {
      try {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.removeStorageSync(KEY_TOPIC_TRACK);
        return true;
      } catch (e) {
        this.showToast('清空数据失败,重试');
        return false;
      }
    }
  }]);

  return TopicService;
}(_base_service__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);



/***/ }),

/***/ "./src/common/user-service.js":
/*!************************************!*\
  !*** ./src/common/user-service.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base-service */ "./src/common/base-service.js");









var UserService = /*#__PURE__*/function (_BaseService) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(UserService, _BaseService);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(UserService);

  function UserService() {
    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, UserService);

    return _super.call(this);
  } // 登录


  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(UserService, [{
    key: "login",
    value: function () {
      var _login = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var data, res, result, _result$data, user, token;

        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = {};
                _context.next = 3;
                return _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.login();

              case 3:
                res = _context.sent;

                if (res && res.code) {
                  data.code = res.code;
                }

                _context.next = 7;
                return this.request('/wxapp/login', data, 'POST');

              case 7:
                result = _context.sent;

                if (!(result.code === 1)) {
                  _context.next = 18;
                  break;
                }

                // 后端返回登录成功
                _result$data = result.data, user = _result$data.user, token = _result$data.token;

                if (!user) {
                  _context.next = 15;
                  break;
                }

                try {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorageSync('user', user); // 存储用户信息

                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorageSync('userId', user.id); // 存储用户id

                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorageSync('token', token); // 存储token

                  this.setMsgCount(user);
                } catch (error) {
                  console.log(error);
                }

                return _context.abrupt("return", user);

              case 15:
                try {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorageSync('userId', result.data.userId);
                } catch (error) {
                  console.log(error);
                }

                _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorageSync('token', token);
                return _context.abrupt("return", null);

              case 18:
                return _context.abrupt("return", null);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login() {
        return _login.apply(this, arguments);
      }

      return login;
    }() // 获取所有四川的大学列表

  }, {
    key: "getSichuanUniversity",
    value: function () {
      var _getSichuanUniversity = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.request('/school/getSichuan', null, 'GET');

              case 2:
                res = _context2.sent;

                if (!(res.code === 1)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", res.data.map(function (item) {
                  return item.name;
                }));

              case 5:
                return _context2.abrupt("return", null);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getSichuanUniversity() {
        return _getSichuanUniversity.apply(this, arguments);
      }

      return getSichuanUniversity;
    }() // 获取用户信息

  }, {
    key: "getInfo",
    value: function () {
      var _getInfo = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(userId) {
        var res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.request("/public/getUserInfo", {
                  id: userId
                }, 'GET');

              case 2:
                res = _context3.sent;

                if (!(res.code === 1)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", res.data);

              case 5:
                return _context3.abrupt("return", null);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getInfo(_x) {
        return _getInfo.apply(this, arguments);
      }

      return getInfo;
    }() // 微信绑定

  }, {
    key: "bindInfo",
    value: function () {
      var _bindInfo = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(encrypted_data, iv, raw_data, signature) {
        var data, res, result, _result$data2, user, token;

        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                data = {
                  encrypted_data: encrypted_data,
                  iv: iv,
                  raw_data: raw_data,
                  signature: signature
                };
                _context4.next = 3;
                return _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.login();

              case 3:
                res = _context4.sent;

                if (res && res.code) {
                  data.code = res.code;
                }

                if (!(res && res.code)) {
                  _context4.next = 19;
                  break;
                }

                _context4.next = 8;
                return this.request('/wxapp/bind', data, 'POST');

              case 8:
                result = _context4.sent;

                if (!(result.code === 1)) {
                  _context4.next = 18;
                  break;
                }

                this.showToast('微信绑定成功');
                _result$data2 = result.data, user = _result$data2.user, token = _result$data2.token;
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorageSync('user', user);
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorageSync('token', token);
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorageSync('hasBinding', true);
                return _context4.abrupt("return", user);

              case 18:
                if (result.code === 0) {
                  this.showToast('操作失败，请稍后重试');
                }

              case 19:
                return _context4.abrupt("return", false);

              case 20:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function bindInfo(_x2, _x3, _x4, _x5) {
        return _bindInfo.apply(this, arguments);
      }

      return bindInfo;
    }()
  }, {
    key: "addPhoto",
    value: function () {
      var _addPhoto = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(userId) {
        var _this = this;

        var _userId, _Taro$getStorageSync, userType, obj, obj1, res;

        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _userId = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync('userId') || '';
                _Taro$getStorageSync = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync('user'), userType = _Taro$getStorageSync.userType;

                if (userType === 4 && userId) {
                  _userId = userId;
                }

                _context5.next = 5;
                return _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.chooseImage({
                  sizeType: 'compressed'
                });

              case 5:
                obj = _context5.sent;

                if (!(obj && obj.tempFilePaths)) {
                  _context5.next = 21;
                  break;
                }

                _context5.next = 9;
                return this.uploadFile(obj);

              case 9:
                obj1 = _context5.sent;

                if (!(obj1.paths.length === 0)) {
                  _context5.next = 13;
                  break;
                }

                this.showToast('头像上传失败');
                return _context5.abrupt("return", null);

              case 13:
                _context5.next = 15;
                return this.request('/user/photo/add', {
                  userId: _userId,
                  imgs: obj1.paths
                }, 'POST');

              case 15:
                res = _context5.sent;

                if (!(res.code === 0)) {
                  _context5.next = 20;
                  break;
                }

                return _context5.abrupt("return", res.data.items.map(function (photo) {
                  photo.src = _this.getImgUrl() + photo.src;
                  return photo;
                }));

              case 20:
                this.showToast('头像上传失败');

              case 21:
                return _context5.abrupt("return", null);

              case 22:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function addPhoto(_x6) {
        return _addPhoto.apply(this, arguments);
      }

      return addPhoto;
    }()
  }, {
    key: "getPhotos",
    value: function () {
      var _getPhotos = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(userId) {
        var _this2 = this;

        var res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.request("/user/photo/list/".concat(userId), null, 'GET');

              case 2:
                res = _context6.sent;

                if (!(res.code === 0)) {
                  _context6.next = 7;
                  break;
                }

                return _context6.abrupt("return", res.data.items.map(function (photo) {
                  photo.src = _this2.getImgUrl() + photo.src;
                  return photo;
                }));

              case 7:
                this.showToast('加载失败,请重试');

              case 8:
                return _context6.abrupt("return", null);

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getPhotos(_x7) {
        return _getPhotos.apply(this, arguments);
      }

      return getPhotos;
    }()
  }, {
    key: "delPhoto",
    value: function () {
      var _delPhoto = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
        var res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.request("/user/photo/del/".concat(id), null, 'GET');

              case 2:
                res = _context7.sent;

                if (!(res.code === 0)) {
                  _context7.next = 7;
                  break;
                }

                return _context7.abrupt("return", res.data.result);

              case 7:
                this.showToast('删除失败,请重试');

              case 8:
                return _context7.abrupt("return", false);

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function delPhoto(_x8) {
        return _delPhoto.apply(this, arguments);
      }

      return delPhoto;
    }()
  }, {
    key: "getLabels",
    value: function () {
      var _getLabels = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(parent) {
        var res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.request('/user/label/choice', {
                  parent: parent
                }, 'POST');

              case 2:
                res = _context8.sent;

                if (!(res.code === 0)) {
                  _context8.next = 5;
                  break;
                }

                return _context8.abrupt("return", res.data.items);

              case 5:
                return _context8.abrupt("return", null);

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getLabels(_x9) {
        return _getLabels.apply(this, arguments);
      }

      return getLabels;
    }()
  }, {
    key: "getLabelsForUser",
    value: function () {
      var _getLabelsForUser = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(userId) {
        var res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.request("/user/label/".concat(userId), {}, 'GET');

              case 2:
                res = _context9.sent;

                if (!(res.code === 0)) {
                  _context9.next = 5;
                  break;
                }

                return _context9.abrupt("return", res.data.items);

              case 5:
                return _context9.abrupt("return", null);

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getLabelsForUser(_x10) {
        return _getLabelsForUser.apply(this, arguments);
      }

      return getLabelsForUser;
    }()
  }, {
    key: "addLabels",
    value: function () {
      var _addLabels = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(userId, parent, labels) {
        var arr;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                arr = labels.map(function (label) {
                  return {
                    userId: userId,
                    parent: parent,
                    labelId: label.id
                  };
                });
                _context10.next = 3;
                return this.request('/user/label/add', {
                  userId: userId,
                  parent: parent,
                  labels: arr
                }, 'POST');

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function addLabels(_x11, _x12, _x13) {
        return _addLabels.apply(this, arguments);
      }

      return addLabels;
    }() // 编辑用户信息

  }, {
    key: "setUserFiled",
    value: function () {
      var _setUserFiled = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(field, value) {
        var toastMsg,
            userId,
            res,
            _args11 = arguments;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                toastMsg = _args11.length > 2 && _args11[2] !== undefined ? _args11[2] : '修改成功';
                userId = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync('userId');

                if (!userId) {
                  _context11.next = 12;
                  break;
                }

                _context11.next = 5;
                return this.request('/user/change', {
                  field: field,
                  value: value
                }, 'PUT');

              case 5:
                res = _context11.sent;

                if (!(res.code === 1)) {
                  _context11.next = 11;
                  break;
                }

                if (toastMsg) {
                  this.showToast(toastMsg);
                }

                return _context11.abrupt("return", true);

              case 11:
                this.showToast('失败，请重试');

              case 12:
                return _context11.abrupt("return", false);

              case 13:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function setUserFiled(_x14, _x15) {
        return _setUserFiled.apply(this, arguments);
      }

      return setUserFiled;
    }() // 编辑更新头像

  }, {
    key: "editAvtater",
    value: function () {
      var _editAvtater = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        var path, result;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.uploadOneImg();

              case 2:
                path = _context12.sent;

                if (!path) {
                  _context12.next = 9;
                  break;
                }

                _context12.next = 6;
                return this.setUserFiled('avatar', path);

              case 6:
                result = _context12.sent;

                if (!result) {
                  _context12.next = 9;
                  break;
                }

                return _context12.abrupt("return", this.parseAvatarImg(path));

              case 9:
                return _context12.abrupt("return", null);

              case 10:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function editAvtater() {
        return _editAvtater.apply(this, arguments);
      }

      return editAvtater;
    }() // 编辑上传认证用的学生证照片

  }, {
    key: "uploadAuthImg",
    value: function () {
      var _uploadAuthImg = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13() {
        var path;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.uploadOneImg();

              case 2:
                path = _context13.sent;

                if (!path) {
                  _context13.next = 5;
                  break;
                }

                return _context13.abrupt("return", path);

              case 5:
                return _context13.abrupt("return", null);

              case 6:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function uploadAuthImg() {
        return _uploadAuthImg.apply(this, arguments);
      }

      return uploadAuthImg;
    }() // 申请认证

  }, {
    key: "applyAuth",
    value: function () {
      var _applyAuth = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14(user_name, auth_image) {
        var res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.request('/user/applyStudentAuth', {
                  user_name: user_name,
                  auth_image: auth_image
                }, 'POST');

              case 2:
                res = _context14.sent;

                if (!(res.code === 1)) {
                  _context14.next = 6;
                  break;
                }

                this.showToast('提交成功');
                return _context14.abrupt("return", true);

              case 6:
                return _context14.abrupt("return", false);

              case 7:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function applyAuth(_x16, _x17) {
        return _applyAuth.apply(this, arguments);
      }

      return applyAuth;
    }()
  }, {
    key: "getScore",
    value: function () {
      var _getScore = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15() {
        var res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.request('/user/score');

              case 2:
                res = _context15.sent;

                if (!(res.code === 0)) {
                  _context15.next = 5;
                  break;
                }

                return _context15.abrupt("return", res.data);

              case 5:
                return _context15.abrupt("return", null);

              case 6:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function getScore() {
        return _getScore.apply(this, arguments);
      }

      return getScore;
    }()
  }, {
    key: "transformScore",
    value: function () {
      var _transformScore = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16(score) {
        var res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this.request("/user/transform/".concat(score));

              case 2:
                res = _context16.sent;

                if (!(res.code === 0)) {
                  _context16.next = 8;
                  break;
                }

                this.showToast('转换成功', 'success');
                return _context16.abrupt("return", true);

              case 8:
                if (res.erroCode > 0) {
                  this.showToast(res.msg);
                } else {
                  this.showToast();
                }

              case 9:
                return _context16.abrupt("return", false);

              case 10:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function transformScore(_x18) {
        return _transformScore.apply(this, arguments);
      }

      return transformScore;
    }()
  }, {
    key: "cash",
    value: function () {
      var _cash = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17(score) {
        var res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return this.request("/reward/cash/".concat(score));

              case 2:
                res = _context17.sent;

                if (!(res.code === 0)) {
                  _context17.next = 8;
                  break;
                }

                _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showModal({
                  title: '兑换成功',
                  content: '兑换现金将在2-3个工作日通过公众号「壹淘」已红包的形式发放,请注意查收',
                  showCancel: false
                });
                return _context17.abrupt("return", true);

              case 8:
                if (res.erroCode > 0) {
                  if (res.erroCode === 10020) {
                    //未关注公众号
                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showModal({
                      title: '未关注公众号',
                      confirmText: '去关注',
                      content: '还未关注公众号「壹淘」无法发放兑换的现金',
                      showCancel: false,
                      success: function success() {
                        _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.navigateTo({
                          url: '/pages/binding'
                        });
                      }
                    });
                  } else if (res.erroCode === 10021) {
                    //未认证
                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showModal({
                      title: '未学生认证',
                      confirmText: '去认证',
                      content: '还未学生认证,完成认证后可继续兑换',
                      showCancel: false,
                      success: function success() {
                        _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.navigateTo({
                          url: '/pages/user-school'
                        });
                      }
                    });
                  }
                } else {
                  this.showToast();
                }

              case 9:
                return _context17.abrupt("return", false);

              case 10:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function cash(_x19) {
        return _cash.apply(this, arguments);
      }

      return cash;
    }()
  }]);

  return UserService;
}(_base_service__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);



/***/ }),

/***/ "./src/components/comment-card/comment-card.jsx":
/*!******************************************************!*\
  !*** ./src/components/comment-card/comment-card.jsx ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentCard; });
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/api */ "./src/common/api.js");
/* harmony import */ var _comment_card_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comment-card.scss */ "./src/components/comment-card/comment-card.scss");
/* harmony import */ var _comment_card_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_comment_card_scss__WEBPACK_IMPORTED_MODULE_14__);
















var CommentCard = /*#__PURE__*/function (_Component) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(CommentCard, _Component);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(CommentCard);

  function CommentCard() {
    var _this;

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, CommentCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "state", {
      comment_data: null,
      isLike: false
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "goComment", function () {
      var id = _this.state.comment_data.id;
      var canGoComment = _this.props.canGoComment;
      if (!canGoComment) return;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.navigateTo({
        url: '/pages/subPackage/comment/comment?id=' + id
      });
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "goUserHome", function () {
      var id = _this.state.comment_data.user.id;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.navigateTo({
        url: '/pages/user-home/user-home?id=' + id
      });
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "doLike", /*#__PURE__*/Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this$state, comment_data, _this$state$comment_d, id, likes_count, res;

      return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, comment_data = _this$state.comment_data, _this$state$comment_d = _this$state.comment_data, id = _this$state$comment_d.id, likes_count = _this$state$comment_d.likes_count;
              _context.next = 3;
              return _common_api__WEBPACK_IMPORTED_MODULE_13__[/* Like */ "d"].doLike('comment', id);

            case 3:
              res = _context.sent;

              if (res) {
                _this.setState({
                  comment_data: Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, comment_data), {}, {
                    likes_count: likes_count + 1
                  }),
                  isLike: true
                });
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    return _this;
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(CommentCard, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      var comment = this.props.comment;

      if (comment) {
        var id = comment.id;
        var isLike = _common_api__WEBPACK_IMPORTED_MODULE_13__[/* Like */ "d"].isLike('comment', id);
        this.setState({
          comment_data: comment,
          isLike: isLike
        });
      }
    }
  }, {
    key: "imgClick",
    value: function imgClick(url) {
      var images = this.props.comment.images;
      var imgList = images.map(function (img) {
        return img.url;
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.previewImage({
        current: url,
        urls: imgList
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          comment_data = _this$state2.comment_data,
          isLike = _this$state2.isLike;
      var showOption = this.props.showOption;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], null, comment_data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "card",
        style: {
          backgroundColor: comment_data.is_secret ? '#f0f9ff' : 'white'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        onClick: this.goUserHome
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_12__[/* AtAvatar */ "d"], {
        image: comment_data.user.avatar,
        size: "small"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "user-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "nickname-wrap"
      }, comment_data.user.user_nickname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "school"
      }, comment_data.user.school))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "center",
        onClick: this.goComment
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "content"
      }, comment_data.content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "imgs-box"
      }, comment_data.images.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* Image */ "c"], {
          className: "img",
          key: item.id,
          src: item.url,
          onClick: function onClick(e) {
            e.stopPropagation();

            _this2.imgClick(item.url);
          },
          mode: "aspectFill"
        });
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "date"
      }, comment_data.create_at), showOption && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "option"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        onClick: this.goComment,
        className: "icon icon-comment"
      }, comment_data.reply_count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        onClick: this.doLike,
        className: ['icon', isLike ? 'icon-zan-full' : 'icon-zan-line']
      }, comment_data.likes_count)))));
    }
  }]);

  return CommentCard;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ }),

/***/ "./src/components/comment-card/comment-card.scss":
/*!*******************************************************!*\
  !*** ./src/components/comment-card/comment-card.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/comment-reply/comment-reply.jsx":
/*!********************************************************!*\
  !*** ./src/components/comment-reply/comment-reply.jsx ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentReply; });
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _components_with_with_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/with/with-login */ "./src/components/with/with-login.jsx");
/* harmony import */ var _comment_reply_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comment-reply.scss */ "./src/components/comment-reply/comment-reply.scss");
/* harmony import */ var _comment_reply_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_comment_reply_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/api */ "./src/common/api.js");
















var CommentReply = /*#__PURE__*/function (_Component) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(CommentReply, _Component);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(CommentReply);

  function CommentReply() {
    var _this;

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, CommentReply);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "state", {
      content: '',
      // 内容
      images: [],
      // 图片列表
      isSecret: 0,
      // 是否私密评价
      showBar: true,
      // 是否显示编辑框
      count: 9,
      // 可上传图片数量
      disabled: true,
      // 发表按钮是否禁用
      loading: false,
      // 是否正在发表中
      bottom: 0,
      // 编辑框离底部高度，在键盘被激活时设置
      msg_count: 0,
      likes_count: 0,
      isLike: false
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "barClick", function () {
      _this.setState({
        showBar: false
      });
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "chooseImg", function () {
      var _this$state = _this.state,
          count = _this$state.count,
          images = _this$state.images;

      if (count === 0) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.showToast({
          icon: 'none',
          title: '最多只能9张图'
        });
        return;
      }

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.chooseImage({
        count: count,
        sourceType: ['album']
      }).then(function (res) {
        var tempFilePaths = res.tempFilePaths;
        var newImgs = images.concat(tempFilePaths);

        _this.setState({
          images: newImgs,
          count: 9 - newImgs.length
        });
      }).catch(function (err) {
        console.log(err);
      });
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleInput", function (e) {
      var content = e.detail.value;
      var disabled = false;

      if (!content) {
        disabled = true;
      }

      _this.setState({
        content: content,
        disabled: disabled
      });
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleBlur", function () {
      _this.setState({
        bottom: 0
      });
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleKeyboard", function (e) {
      var height = e.detail.height;

      _this.setState({
        bottom: height
      });
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "switchChange", function (e) {
      var value = e.detail.value;

      if (value) {
        _this.setState({
          isSecret: 1
        });
      } else {
        _this.setState({
          isSecret: 0
        });
      }
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "publish", /*#__PURE__*/Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this$state2, images, content, isSecret, _this$props, type, toUser, parentId, result, imageList, imgs;

      return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state2 = _this.state, images = _this$state2.images, content = _this$state2.content, isSecret = _this$state2.isSecret;
              _this$props = _this.props, type = _this$props.type, toUser = _this$props.toUser, parentId = _this$props.parentId;

              _this.setState({
                disabled: true,
                loading: true
              });

              result = null;

              if (!(type === 'comment')) {
                _context.next = 14;
                break;
              }

              // 发表评论
              // 判断是否有图片，有的话需要先上传图片
              imageList = [];

              if (!(images.length !== 0)) {
                _context.next = 11;
                break;
              }

              _context.next = 9;
              return _common_api__WEBPACK_IMPORTED_MODULE_14__[/* Comment */ "b"].uploadImgs(images);

            case 9:
              imgs = _context.sent;
              imageList = imgs.map(function (item, index) {
                return {
                  path: item,
                  index: index
                };
              });

            case 11:
              _context.next = 13;
              return _common_api__WEBPACK_IMPORTED_MODULE_14__[/* Comment */ "b"].create(content, imageList, parentId, toUser.id, isSecret);

            case 13:
              result = _context.sent;

            case 14:
              if (!(type === 'reply')) {
                _context.next = 18;
                break;
              }

              _context.next = 17;
              return _common_api__WEBPACK_IMPORTED_MODULE_14__[/* Reply */ "h"].create(content, [], parentId, toUser.id);

            case 17:
              result = _context.sent;

            case 18:
              _this.setState({
                disabled: false,
                loading: false
              });

              if (result) {
                _this.setState({
                  content: '',
                  images: [],
                  showBar: true
                });
              }

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "doLike", /*#__PURE__*/Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var _this$props2, parentId, type, likes_count, res;

      return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$props2 = _this.props, parentId = _this$props2.parentId, type = _this$props2.type;
              likes_count = _this.state.likes_count;
              res = null;

              if (!(type === 'comment')) {
                _context2.next = 7;
                break;
              }

              _context2.next = 6;
              return _common_api__WEBPACK_IMPORTED_MODULE_14__[/* Like */ "d"].doLike('post', parentId);

            case 6:
              res = _context2.sent;

            case 7:
              if (!(type === 'reply')) {
                _context2.next = 11;
                break;
              }

              _context2.next = 10;
              return _common_api__WEBPACK_IMPORTED_MODULE_14__[/* Like */ "d"].doLike('comment', parentId);

            case 10:
              res = _context2.sent;

            case 11:
              if (res) {
                _this.setState({
                  isLike: true,
                  likes_count: likes_count + 1
                });
              }

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "cancel", function () {
      _this.setState({
        showBar: true,
        loading: false
      });
    });

    return _this;
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(CommentReply, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      var _this$props3 = this.props,
          msgCount = _this$props3.msgCount,
          likesCount = _this$props3.likesCount,
          type = _this$props3.type,
          parentId = _this$props3.parentId;
      var isLike = false;

      if (type === 'comment') {
        isLike = _common_api__WEBPACK_IMPORTED_MODULE_14__[/* Like */ "d"].isLike('post', parentId);
      }

      if (type === 'reply') {
        isLike = _common_api__WEBPACK_IMPORTED_MODULE_14__[/* Like */ "d"].isLike('comment', parentId);
      }

      this.setState({
        msg_count: msgCount,
        likes_count: likesCount,
        isLike: isLike
      });
    } // 当按钮组被点击，激活编辑框

  }, {
    key: "delImg",
    value: // 删除图片
    function delImg(index) {
      var images = this.state.images;
      images.splice(index, 1);
      this.setState({
        images: images
      });
    } // 是否私密

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state3 = this.state,
          showBar = _this$state3.showBar,
          images = _this$state3.images,
          disabled = _this$state3.disabled,
          content = _this$state3.content,
          bottom = _this$state3.bottom,
          loading = _this$state3.loading,
          msg_count = _this$state3.msg_count,
          likes_count = _this$state3.likes_count,
          isLike = _this$state3.isLike;
      var _this$props4 = this.props,
          openImagePicker = _this$props4.openImagePicker,
          openSecret = _this$props4.openSecret,
          canShare = _this$props4.canShare,
          toUser = _this$props4.toUser,
          type = _this$props4.type;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "wrap",
        style: {
          bottom: bottom + 'px'
        }
      }, showBar ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "bar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "content-bar",
        onClick: this.barClick
      }, type === 'comment' ? '来，神评是你的' : "@".concat(toUser.user_nickname)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "icon icon-comment"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "sup"
      }, msg_count)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_with_with_login__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        onClick: this.doLike
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: ['icon', isLike ? 'icon-zan-full' : 'icon-zan-line']
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "sup"
      }, likes_count))), canShare && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "icon icon-share"
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "editor"
      }, images.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* ScrollView */ "l"], {
        scrollX: true,
        className: "imgs-box"
      }, images.map(function (img, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
          key: "img_".concat(index),
          className: "img-box"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Image */ "c"], {
          className: "img",
          mode: "aspectFill",
          src: img
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
          className: "del",
          onClick: function onClick() {
            return _this2.delImg(index);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_11__[/* AtIcon */ "h"], {
          value: "close",
          size: "14",
          color: "white"
        })));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Textarea */ "r"], {
        className: "textarea",
        value: content,
        onInput: this.handleInput,
        onBlur: this.handleBlur,
        autoFocus: true,
        showConfirmBar: false,
        adjustPosition: false,
        onKeyboardHeightChange: this.handleKeyboard
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "option"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "btn-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "btn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_11__[/* AtButton */ "f"], {
        size: "small",
        onClick: this.cancel
      }, "\u53D6\u6D88")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "btn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_11__[/* AtButton */ "f"], {
        size: "small",
        onClick: this.publish,
        type: "primary",
        disabled: disabled,
        loading: loading
      }, "\u53D1\u8868"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "left"
      }, type == 'reply' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "aite"
      }, "@", toUser.user_nickname) : null, openImagePicker && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "img-btn",
        onClick: this.chooseImg
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_11__[/* AtIcon */ "h"], {
        value: "image",
        size: "22",
        color: "#595959"
      })), openSecret && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "secret"
      }, "\u79C1\u5BC6\u8BC4\u8BBA", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Switch */ "p"], {
        type: "checkbox",
        className: "switch",
        color: "#6190e8",
        onChange: this.switchChange
      }))))));
    }
  }]);

  return CommentReply;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./src/components/comment-reply/comment-reply.scss":
/*!*********************************************************!*\
  !*** ./src/components/comment-reply/comment-reply.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/guide-footer/guide-footer.jsx":
/*!******************************************************!*\
  !*** ./src/components/guide-footer/guide-footer.jsx ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _guide_footer_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guide-footer.scss */ "./src/components/guide-footer/guide-footer.scss");
/* harmony import */ var _guide_footer_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_guide_footer_scss__WEBPACK_IMPORTED_MODULE_8__);










var GuideFooter = /*#__PURE__*/function (_Component) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(GuideFooter, _Component);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(GuideFooter);

  function GuideFooter() {
    var _this;

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, GuideFooter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "getUserInfo", function () {});

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "onBtnClick", function () {
      var onBtnTap = _this.props.onBtnTap;
      if (onBtnTap) onBtnTap();
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "onDesClick", function () {
      var onDesTap = _this.props.onDesTap;
      if (onDesTap) onDesTap();
    });

    return _this;
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(GuideFooter, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          btntext = _this$props.btntext,
          des = _this$props.des,
          _this$props$loading = _this$props.loading,
          loading = _this$props$loading === void 0 ? false : _this$props$loading,
          _this$props$disabled = _this$props.disabled,
          disabled = _this$props$disabled === void 0 ? false : _this$props$disabled;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "s"], {
        class: "guide-footer"
      }, type === 'getUserInfo' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Button */ "a"], {
        onGetUserInfo: this.getUserInfo,
        loading: loading,
        disabled: disabled,
        className: "button btn-login",
        openType: "getUserInfo",
        lang: "zh_CN"
      }, btntext) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Button */ "a"], {
        onClick: this.onBtnClick,
        loading: loading,
        disabled: disabled,
        className: "button",
        "hover-class": "btn-hover"
      }, btntext), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "s"], {
        className: "des",
        onClick: this.onDesClick
      }, des));
    }
  }]);

  return GuideFooter;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (GuideFooter);

/***/ }),

/***/ "./src/components/guide-footer/guide-footer.scss":
/*!*******************************************************!*\
  !*** ./src/components/guide-footer/guide-footer.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/loading/loading.jsx":
/*!********************************************!*\
  !*** ./src/components/loading/loading.jsx ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _loading_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading.scss */ "./src/components/loading/loading.scss");
/* harmony import */ var _loading_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_loading_scss__WEBPACK_IMPORTED_MODULE_6__);








var Loading = /*#__PURE__*/function (_Component) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Loading, _Component);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Loading);

  function Loading() {
    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Loading);

    return _super.apply(this, arguments);
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Loading, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          extClass = _this$props.extClass,
          _this$props$type = _this$props.type,
          type = _this$props$type === void 0 ? 'dot-gray' : _this$props$type,
          _this$props$tips = _this$props.tips,
          tips = _this$props$tips === void 0 ? '加载中' : _this$props$tips;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "s"], {
        className: ['wx_loading_view', extClass]
      }, type === 'dot-white' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "s"], {
        className: "loading wx_dot_loading wx_dot_loading_white"
      }) : type === 'dot-gray' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "s"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "s"], {
        className: "loading wx_dot_loading_1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "s"], {
        className: "loading wx_dot_loading_2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "s"], {
        className: "loading wx_dot_loading_3"
      })) : type === 'circle' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "s"], {
        className: "weui-loadmore"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "s"], {
        className: "weui-loading"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "s"], {
        className: "weui-loadmore__tips"
      }, tips)) : null);
    }
  }]);

  return Loading;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Loading);

/***/ }),

/***/ "./src/components/loading/loading.scss":
/*!*********************************************!*\
  !*** ./src/components/loading/loading.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/my-page/my-page.jsx":
/*!********************************************!*\
  !*** ./src/components/my-page/my-page.jsx ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPage; });
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _components_loading_loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/loading/loading */ "./src/components/loading/loading.jsx");
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/api */ "./src/common/api.js");
/* harmony import */ var _my_page_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./my-page.scss */ "./src/components/my-page/my-page.scss");
/* harmony import */ var _my_page_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_my_page_scss__WEBPACK_IMPORTED_MODULE_12__);














var MyPage = /*#__PURE__*/function (_Component) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(MyPage, _Component);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(MyPage);

  function MyPage() {
    var _this;

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, MyPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "state", {
      margin: 0,
      beginY: 0,
      top: -100,
      showLoading: false,
      isLoading: false,
      transition: 'none'
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "linkRef", function () {
      var onRef = _this.props.onRef;
      if (onRef) onRef(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this));
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "onRetry", function () {
      var propsRetry = _this.props.onRetry;
      if (propsRetry) propsRetry();
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "onTouchmove", function (e) {
      // console.log('TouchMove');
      var _this$state = _this.state,
          isLoading = _this$state.isLoading,
          beginY = _this$state.beginY,
          margin = _this$state.margin,
          showLoading = _this$state.showLoading;
      var _this$props = _this.props,
          enableRefresh = _this$props.enableRefresh,
          _this$props$marginOff = _this$props.marginOffset,
          marginOffset = _this$props$marginOff === void 0 ? 0 : _this$props$marginOff;

      if (!isLoading && enableRefresh) {
        var newState = _this.state; // console.log('进入准备刷新');

        var y = e.changedTouches[0].clientY;

        if (beginY === 0) {
          newState['scrollY'] = false;
        }

        newState['margin'] = margin + (y - beginY) / 3;

        if (margin > marginOffset && !showLoading) {
          newState['showLoading'] = true;
        }

        newState['beginY'] = y;

        _this.setState(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, newState)); // console.log('beginY', newState['beginY']);
        // console.log('margin', newState['margin']);

      }
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "onTouchend", function () {
      // console.log('TouchEnd')
      var _this$state2 = _this.state,
          isLoading = _this$state2.isLoading,
          margin = _this$state2.margin;
      var _this$props2 = _this.props,
          onRefresh = _this$props2.onRefresh,
          enableRefresh = _this$props2.enableRefresh; // console.log(enableRefresh);

      if (!isLoading && enableRefresh) {
        // console.log('进入刷新');
        var newState = _this.state;
        newState['transition'] = 'all 0.3s';
        newState['beginY'] = 0;

        if (margin > 50) {
          // 当满足上拉刷新的高度时
          newState['isLoading'] = true;
          newState['margin'] = 15; // 调用组件的刷新

          onRefresh();
        } else {
          newState['scrollY'] = true;
          newState['margin'] = 0;
          setTimeout(function () {
            _this.setState({
              isLoading: false,
              showLoading: false
            });
          }, 200);
        }

        _this.setState(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, newState));
      }
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "onScroll", function (e) {
      var propsOnScroll = _this.props.onScroll;

      if (typeof propsOnScroll === 'function') {
        propsOnScroll(e.detail);
      }
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "onScrolltolower", function () {
      console.log('碰到底');
      var propsOnScrollToLower = _this.props.onScrollToLower;

      if (typeof propsOnScrollToLower === 'function') {
        propsOnScrollToLower();
      }
    });

    return _this;
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(MyPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mapPropsToState();
      this.linkRef();
    }
  }, {
    key: "mapPropsToState",
    value: function mapPropsToState() {
      var _this$props$scrollY = this.props.scrollY,
          scrollY = _this$props$scrollY === void 0 ? true : _this$props$scrollY;
      this.setState({
        scrollY: scrollY
      });
    }
  }, {
    key: "hideRefresh",
    value: function hideRefresh() {
      var _this2 = this;

      var newState = this.state;
      newState['top'] = 10;
      newState['isLoading'] = false;
      newState['margin'] = 0;
      newState['scrollY'] = true;
      this.setState(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, newState));
      setTimeout(function () {
        _this2.setState({
          showLoading: false
        });
      }, 200);
      setTimeout(function () {
        _this2.setState({
          top: -100
        });
      }, 2000);
    } // 当触摸移动时

  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          margin = _this$state3.margin,
          top = _this$state3.top,
          showLoading = _this$state3.showLoading,
          transition = _this$state3.transition,
          scrollY = _this$state3.scrollY;
      var _this$props3 = this.props,
          _this$props3$state = _this$props3.state,
          state = _this$props3$state === void 0 ? 0 : _this$props3$state,
          _this$props3$showMore = _this$props3.showMoreLoading,
          showMoreLoading = _this$props3$showMore === void 0 ? true : _this$props3$showMore,
          _this$props3$count = _this$props3.count,
          count = _this$props3$count === void 0 ? 0 : _this$props3$count,
          _this$props3$baseHeig = _this$props3.baseHeight,
          baseHeight = _this$props3$baseHeig === void 0 ? '100vh' : _this$props3$baseHeig,
          _this$props3$autoHeig = _this$props3.autoHeight,
          autoHeight = _this$props3$autoHeig === void 0 ? false : _this$props3$autoHeig,
          _this$props3$bottomOf = _this$props3.bottomOffset,
          bottomOffset = _this$props3$bottomOf === void 0 ? 0 : _this$props3$bottomOf,
          _this$props3$enableTi = _this$props3.enableTips,
          enableTips = _this$props3$enableTi === void 0 ? true : _this$props3$enableTi,
          _this$props3$offset = _this$props3.offset,
          offset = _this$props3$offset === void 0 ? _common_api__WEBPACK_IMPORTED_MODULE_11__[/* Base */ "a"].getHeadHeight() : _this$props3$offset,
          _this$props3$empty = _this$props3.empty,
          empty = _this$props3$empty === void 0 ? null : _this$props3$empty,
          children = _this$props3.children;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "page",
        style: {
          height: autoHeight ? "".concat(baseHeight) : "calc(".concat(baseHeight, " - ").concat(offset, "PX - ").concat(bottomOffset, "px)")
        }
      }, state === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "page-init"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_9__[/* AtActivityIndicator */ "c"], {
        className: "page-loading",
        mode: "center",
        content: "\u52A0\u8F7D\u4E2D..."
      })) : state === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "page-error"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "des",
        style: {
          marginBottom: '10px'
        }
      }, "\u52A0\u8F7D\u5931\u8D25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_9__[/* AtButton */ "f"], {
        type: "primary",
        size: "small",
        onClick: this.onRetry
      }, "\u70B9\u51FB\u91CD\u8BD5")) : state === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "page-empty"
      }, empty) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "page-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* ScrollView */ "l"], {
        scrollY: !showLoading && scrollY,
        onTouchMove: this.onTouchmove,
        onTouchEnd: this.onTouchend,
        onScroll: this.onScroll,
        onScrollToLower: this.onScrolltolower,
        className: "content",
        style: {
          height: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "loading_wrap",
        style: {
          margin: "".concat(margin, "px 0"),
          transition: transition
        }
      }, showLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_loading_loading__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null) : null), children, showMoreLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_loading_loading__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null) : null), enableTips ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], null, count ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "tips",
        style: {
          top: "".concat(top, "px")
        }
      }, "\u4E3A\u4F60\u9009\u51FA", count, "\u6761\u597D\u5185\u5BB9") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "tips",
        style: {
          top: "".concat(top, "px")
        }
      }, "\u6682\u65F6\u6CA1\u6709\u66F4\u597D\u7684\u5185\u5BB9")) : null));
    }
  }]);

  return MyPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./src/components/my-page/my-page.scss":
/*!*********************************************!*\
  !*** ./src/components/my-page/my-page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/post-card/post-card.jsx":
/*!************************************************!*\
  !*** ./src/components/post-card/post-card.jsx ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/api */ "./src/common/api.js");
/* harmony import */ var _post_card_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post-card.scss */ "./src/components/post-card/post-card.scss");
/* harmony import */ var _post_card_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_post_card_scss__WEBPACK_IMPORTED_MODULE_11__);













var PostCard = /*#__PURE__*/function (_Component) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(PostCard, _Component);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(PostCard);

  function PostCard() {
    var _this;

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, PostCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "more", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showActionSheet({
        itemList: ['分享到好友', '分享到朋友圈']
      }).then(function (res) {
        if (res.tapIndex === 0) {// 分享
        }

        if (res.tapIndex === 1) {// 举报
        }
      }).catch(function (err) {
        return console.log(err.errMsg);
      });
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "goPost", function () {
      var _this$props = _this.props,
          _this$props$post = _this$props.post,
          id = _this$props$post.id,
          topic = _this$props$post.topic,
          canGoPost = _this$props.canGoPost;

      if (canGoPost) {
        _common_api__WEBPACK_IMPORTED_MODULE_10__[/* Topic */ "i"].topicAddTrack(topic);
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.navigateTo({
          url: '/pages/post/post?id=' + id
        });
      }
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "goTopic", function () {
      var id = _this.props.post.topic.id;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.navigateTo({
        url: '/pages/subPackage/topic-home/topic-home?id=' + id
      });
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "goUserHome", function () {
      var _this$props2 = _this.props,
          canUserHome = _this$props2.canUserHome,
          id = _this$props2.post.user.id;

      if (!canUserHome) {
        return;
      }

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.navigateTo({
        url: '/pages/user-home/user-home?id=' + id
      });
    });

    return _this;
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PostCard, [{
    key: "imgClick",
    value: function imgClick(url) {
      var images = this.props.post.images;
      var urls = images.map(function (item) {
        return item.url;
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.previewImage({
        current: url,
        urls: urls
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          post = _this$props3.post,
          showOption = _this$props3.showOption;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], null, post && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        onClick: this.goUserHome
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_9__[/* AtAvatar */ "d"], {
        image: post.user.avatar
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "user-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "nickname-wrap"
      }, post.user.user_nickname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "school"
      }, post.user.school))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "center",
        onClick: this.goPost
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "content"
      }, post.content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "imgs-box"
      }, post.images.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Image */ "c"], {
          className: "img",
          key: item.id,
          src: item.url,
          onClick: function onClick(e) {
            e.stopPropagation();

            _this2.imgClick(item.url);
          },
          mode: "aspectFill"
        });
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "topic",
        onClick: this.goTopic
      }, "# ", post.topic.title), showOption && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "option"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        onClick: this.goPost,
        className: "icon icon-comment"
      }, post.comment_count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        onClick: this.goPost,
        className: "icon icon-zan-line"
      }, post.likes_count)))));
    }
  }]);

  return PostCard;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (PostCard);

/***/ }),

/***/ "./src/components/post-card/post-card.scss":
/*!*************************************************!*\
  !*** ./src/components/post-card/post-card.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/topic-list/topic-list.jsx":
/*!**************************************************!*\
  !*** ./src/components/topic-list/topic-list.jsx ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _topic_list_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./topic-list.scss */ "./src/components/topic-list/topic-list.scss");
/* harmony import */ var _topic_list_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_topic_list_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/api */ "./src/common/api.js");














var TopicList = /*#__PURE__*/function (_Component) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(TopicList, _Component);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(TopicList);

  function TopicList() {
    var _this;

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, TopicList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "state", {
      searchVal: '',
      list: [],
      cacheList: []
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "init", /*#__PURE__*/Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var list;
      return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _common_api__WEBPACK_IMPORTED_MODULE_12__[/* Topic */ "i"].getTopicList();

            case 2:
              list = _context.sent;

              if (list) {
                _this.setState({
                  list: list,
                  cacheList: list
                });
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "onSearchChange", function (value) {
      var cacheList = _this.state.cacheList;

      _this.setState({
        searchVal: value
      });

      if (value === '') {
        _this.setState({
          list: cacheList
        });
      }
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "onSearchClick", function () {
      var _this$state = _this.state,
          searchVal = _this$state.searchVal,
          cacheList = _this$state.cacheList;
      var newList = cacheList.filter(function (item) {
        var title = item.title;

        if (title.indexOf(searchVal) !== -1) {
          return true;
        } else {
          return false;
        }
      });

      _this.setState({
        list: newList
      });
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "itemClick", function (id, name) {
      var onTopicItemClick = _this.props.onTopicItemClick;

      if (typeof onTopicItemClick === 'function') {
        onTopicItemClick(id, name);
      }
    });

    return _this;
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(TopicList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          searchVal = _this$state2.searchVal,
          list = _this$state2.list,
          cacheList = _this$state2.cacheList;
      var des = this.props.des;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
        className: "wrap"
      }, cacheList.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_10__[/* AtSearchBar */ "o"], {
        value: searchVal,
        onChange: this.onSearchChange,
        onActionClick: this.onSearchClick
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
        className: "list"
      }, list.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
          className: "item",
          key: item.id,
          onClick: function onClick() {
            return _this2.itemClick(item.id, item.title);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Image */ "c"], {
          className: "img",
          src: item.icon_path
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
          className: "item-content"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
          className: "item-title"
        }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
          className: "item-des"
        }, item.des)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "q"], {
          className: "item-follow"
        }, "".concat(item.follow_count).concat(item.follow_name)));
      })), list.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
        className: "des"
      }, des));
    }
  }]);

  return TopicList;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TopicList);

/***/ }),

/***/ "./src/components/topic-list/topic-list.scss":
/*!***************************************************!*\
  !*** ./src/components/topic-list/topic-list.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/with/with-login.jsx":
/*!********************************************!*\
  !*** ./src/components/with/with-login.jsx ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");







var _dec, _class;






function isEmptyObject(obj) {
  for (var key in obj) {
    return false;
  }

  return true;
}

var WithLogin = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[/* connect */ "b"])(function (_ref) {
  var user = _ref.user;
  return {
    user: user
  };
}), _dec(_class = /*#__PURE__*/function (_Component) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(WithLogin, _Component);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(WithLogin);

  function WithLogin() {
    var _this;

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, WithLogin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "isAuth", function () {
      var _this$props = _this.props,
          user = _this$props.user,
          onClick = _this$props.onClick;
      console.log('User：', !user);

      if (!user || isEmptyObject(user)) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
          icon: 'none',
          title: '请先微信授权登录'
        });
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.switchTab({
          url: '../../pages/me/me'
        });
        return;
      }

      onClick();
    });

    return _this;
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(WithLogin, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        onClick: this.isAuth
      }, children);
    }
  }]);

  return WithLogin;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"])) || _class);
/* harmony default export */ __webpack_exports__["a"] = (WithLogin);

/***/ }),

/***/ "./src/constants/hometabs.js":
/*!***********************************!*\
  !*** ./src/constants/hometabs.js ***!
  \***********************************/
/*! exports provided: TAB_CHANGE, DEL */
/*! exports used: TAB_CHANGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TAB_CHANGE; });
/* unused harmony export DEL */
var TAB_CHANGE = 'TAB_CHANGE';
var DEL = 'DEL';

/***/ }),

/***/ "./src/constants/user.js":
/*!*******************************!*\
  !*** ./src/constants/user.js ***!
  \*******************************/
/*! exports provided: INIT_USER, CHANGE_AVATAR, CHANGE_NICKNAME, CHANGE_LABEL, CHANGE_PATHET_STATE, CHANGE_BIRTHDAY, CHANGE_HOMETOWN, CHANGE_SCHOOL, CHANGE_DEGREE, CHANGE_SCHOOL_YEAR, CHANGE_ISAUTH */
/*! exports used: CHANGE_AVATAR, CHANGE_BIRTHDAY, CHANGE_DEGREE, CHANGE_HOMETOWN, CHANGE_ISAUTH, CHANGE_LABEL, CHANGE_NICKNAME, CHANGE_PATHET_STATE, CHANGE_SCHOOL, CHANGE_SCHOOL_YEAR, INIT_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return INIT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_AVATAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CHANGE_NICKNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CHANGE_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CHANGE_PATHET_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_BIRTHDAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CHANGE_HOMETOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CHANGE_SCHOOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_DEGREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return CHANGE_SCHOOL_YEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CHANGE_ISAUTH; });
var INIT_USER = 'INIT_USER'; // 初始化user对象

var CHANGE_AVATAR = 'USER_CHANGE_AVATAR'; // 头像

var CHANGE_NICKNAME = 'USER_CHANGE_NICKNAME'; // 改昵称

var CHANGE_LABEL = 'USER_CHANGE_LABEL'; // 个性签名

var CHANGE_PATHET_STATE = 'USER_CHANGE_PATHET_STATE'; // 感情状况

var CHANGE_BIRTHDAY = 'USER_CHANGE_BIRTHDAY'; // 生日

var CHANGE_HOMETOWN = 'USER_CHANGE_HOMETOWN'; // 故乡

var CHANGE_SCHOOL = 'USER_CHANGE_SCHOOL'; // 学校

var CHANGE_DEGREE = 'USER_CHANGE_DEGREE'; // 学历

var CHANGE_SCHOOL_YEAR = 'USER_CHANGE_SCHOOL_YEAR'; // 入学年份

var CHANGE_ISAUTH = 'USER_CHANGE_ISAUTH'; // 是否认证

/***/ })

}]);
//# sourceMappingURL=common.js.map