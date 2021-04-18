(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/post/post"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/post/post.jsx":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/post/post.jsx ***!
  \**************************************************************************************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_post_card_post_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/post-card/post-card */ "./src/components/post-card/post-card.jsx");
/* harmony import */ var _components_comment_card_comment_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/comment-card/comment-card */ "./src/components/comment-card/comment-card.jsx");
/* harmony import */ var _components_comment_reply_comment_reply__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/comment-reply/comment-reply */ "./src/components/comment-reply/comment-reply.jsx");
/* harmony import */ var _components_my_page_my_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/my-page/my-page */ "./src/components/my-page/my-page.jsx");
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/api */ "./src/common/api.js");
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./post.scss */ "./src/pages/post/post.scss");
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_post_scss__WEBPACK_IMPORTED_MODULE_16__);









var _dec, _class;










var Post = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__[/* connect */ "b"])(function (_ref) {
  var user = _ref.user;
  return {
    user: user
  };
}), _dec(_class = /*#__PURE__*/function (_Component) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Post, _Component);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Post);

  function Post() {
    var _this;

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Post);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "state", {
      post: null,
      pageState: 0,
      page: 1,
      noMore: false,
      showMoreLoading: false,
      commentList: []
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "onScrollToLower", /*#__PURE__*/Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this$state, id, page, commentList, noMore, newList;

      return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, id = _this$state.post.id, page = _this$state.page, commentList = _this$state.commentList, noMore = _this$state.noMore;

              if (!noMore) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              _this.setState({
                showMoreLoading: true
              });

              _context.next = 6;
              return _common_api__WEBPACK_IMPORTED_MODULE_15__[/* Comment */ "b"].getCommentsByPost(id, page);

            case 6:
              newList = _context.sent;

              if (newList) {
                _this.setState({
                  commentList: commentList.concat(newList),
                  page: page + 1,
                  showMoreLoading: false
                });
              } else {
                _this.setState({
                  noMore: true,
                  showMoreLoading: false
                });
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    return _this;
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Post, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage() {
      var _this$state$post = this.state.post,
          content = _this$state$post.content,
          id = _this$state$post.id;
      return {
        title: content.slice(0, 20) + '...',
        path: '/pages/post/post?id=' + id
      };
    } // 初始化

  }, {
    key: "init",
    value: function () {
      var _init = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var id, page, post, from_uid, uid, comment_res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = this.$router.params.id;
                page = this.state.page;
                _context2.next = 4;
                return _common_api__WEBPACK_IMPORTED_MODULE_15__[/* Post */ "f"].getPostDetail(id);

              case 4:
                post = _context2.sent;
                from_uid = post.from_uid;
                uid = this.props.user.id;
                comment_res = null;

                if (!(uid == from_uid)) {
                  _context2.next = 14;
                  break;
                }

                _context2.next = 11;
                return _common_api__WEBPACK_IMPORTED_MODULE_15__[/* Comment */ "b"].getCommentsByPostWithSecret(id, page);

              case 11:
                comment_res = _context2.sent;
                _context2.next = 17;
                break;

              case 14:
                _context2.next = 16;
                return _common_api__WEBPACK_IMPORTED_MODULE_15__[/* Comment */ "b"].getCommentsByPost(id, page);

              case 16:
                comment_res = _context2.sent;

              case 17:
                if (comment_res) {
                  // 如果评论列表存在
                  this.setState({
                    commentList: comment_res,
                    page: page + 1
                  });
                }

                if (post) {
                  // 如果帖子获取成功
                  this.setState({
                    pageState: 3,
                    post: post
                  });
                } else {
                  this.setState({
                    pageState: 1
                  });
                }

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }() // 下拉加载

  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          pageState = _this$state2.pageState,
          showMoreLoading = _this$state2.showMoreLoading,
          post = _this$state2.post,
          noMore = _this$state2.noMore,
          commentList = _this$state2.commentList;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_my_page_my_page__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        autoHeight: true,
        state: pageState,
        enableTips: noMore,
        showMoreLoading: showMoreLoading,
        onScrollToLower: this.onScrollToLower
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_post_card_post_card__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        post: post,
        canUserHome: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
        className: "comment-wrap"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "q"], null, "\u8BC4\u8BBA\u5217\u8868")), commentList.map(function (comment) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_comment_card_comment_card__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
          key: comment.id,
          comment: comment,
          showOption: true,
          canGoComment: true
        });
      }), commentList.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
        className: "tip"
      }, "\u8FD8\u6CA1\u6709\u4EBA\u8BC4\u8BBA\u54E6\uFF0C\u5FEB\u6765\u62A2\u6C99\u53D1\u5427"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
        className: "bottom"
      })), post && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_comment_reply_comment_reply__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
        openSecret: true,
        openImagePicker: true,
        canShare: true,
        type: "comment",
        msgCount: post.comment_count,
        likesCount: post.likes_count,
        toUser: post.user,
        parentId: post.id,
        doLike: this.doLike
      }));
    }
  }]);

  return Post;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"])) || _class);
/* harmony default export */ __webpack_exports__["a"] = (Post);

/***/ }),

/***/ "./src/pages/post/post.jsx":
/*!*********************************!*\
  !*** ./src/pages/post/post.jsx ***!
  \*********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_post_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./post.jsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/post/post.jsx");


var config = {"navigationBarTitleText":"帖子详情"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_post_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/post/post', {}, config || {}))



/***/ }),

/***/ "./src/pages/post/post.scss":
/*!**********************************!*\
  !*** ./src/pages/post/post.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/post/post.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=post.js.map