(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/user-verify/user-verify"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/user-verify/user-verify.jsx":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/user-verify/user-verify.jsx ***!
  \****************************************************************************************************************/
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
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _components_guide_footer_guide_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/guide-footer/guide-footer */ "./src/components/guide-footer/guide-footer.jsx");
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/api */ "./src/common/api.js");
/* harmony import */ var _user_verify_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-verify.scss */ "./src/pages/user-verify/user-verify.scss");
/* harmony import */ var _user_verify_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_user_verify_scss__WEBPACK_IMPORTED_MODULE_14__);
















var UserVerify = /*#__PURE__*/function (_Component) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(UserVerify, _Component);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(UserVerify);

  function UserVerify() {
    var _this;

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, UserVerify);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "state", {
      user_name: '',
      auth_image: ''
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleInputChange", function (e) {
      _this.setState({
        user_name: e
      });
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "handleImgBoxClick", /*#__PURE__*/Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var auth_image, url;
      return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              auth_image = _this.state.auth_image;

              if (auth_image) {
                _context.next = 8;
                break;
              }

              _context.next = 4;
              return _common_api__WEBPACK_IMPORTED_MODULE_13__[/* User */ "j"].uploadAuthImg();

            case 4:
              url = _context.sent;

              _this.setState({
                auth_image: url
              });

              _context.next = 9;
              break;

            case 8:
              // 浏览图片
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.previewImage({
                current: auth_image,
                urls: [auth_image]
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "doAuth", /*#__PURE__*/Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var _this$state, user_name, auth_image, res;

      return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$state = _this.state, user_name = _this$state.user_name, auth_image = _this$state.auth_image;

              if (user_name) {
                _context2.next = 4;
                break;
              }

              _common_api__WEBPACK_IMPORTED_MODULE_13__[/* User */ "j"].showToast('姓名不能为空');
              return _context2.abrupt("return");

            case 4:
              if (auth_image) {
                _context2.next = 7;
                break;
              }

              _common_api__WEBPACK_IMPORTED_MODULE_13__[/* User */ "j"].showToast('请上传一张学生证照片');
              return _context2.abrupt("return");

            case 7:
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.showLoading();
              _context2.next = 10;
              return _common_api__WEBPACK_IMPORTED_MODULE_13__[/* User */ "j"].applyAuth(user_name, auth_image);

            case 10:
              res = _context2.sent;
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.hideLoading();

              if (res) {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.switchTab({
                  url: '/pages/me/me'
                });
              }

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "goMe", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.switchTab({
        url: '../me/me'
      });
    });

    return _this;
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(UserVerify, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          user_name = _this$state2.user_name,
          auth_image = _this$state2.auth_image;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_11__[/* AtInput */ "j"], {
        border: false,
        title: "\u586B\u5199\u59D3\u540D",
        placeholder: "\u70B9\u51FB\u8F93\u5165\u4F60\u7684\u771F\u5B9E\u59D3\u540D",
        value: user_name,
        onChange: this.handleInputChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "title"
      }, "\u4E0A\u4F20\u5B66\u751F\u8BC1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "des"
      }, "\u5B66\u751F\u8BC1\u9700\u6E05\u6670\u770B\u5230\u59D3\u540D\u3001\u5B66\u6821\u3001\u9662\u7CFB\u3001\u5E74\u7EA7\u4FE1\u606F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "img_box",
        onClick: this.handleImgBoxClick
      }, auth_image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Image */ "c"], {
        className: "img",
        src: _common_api__WEBPACK_IMPORTED_MODULE_13__[/* User */ "j"].parseQiniuImg(auth_image),
        mode: "aspectFit"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "indicate"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_11__[/* AtIcon */ "h"], {
        value: "camera",
        size: "30",
        color: "#989898"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "des"
      }, "\u4E0A\u4F20\u5B66\u751F\u8BC1\u9996\u9875\u5C55\u793A\u7167\u7247"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "tip"
      }, "\u63D0\u793A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "tip"
      }, "1\u3001\u6211\u4EEC\u5C06\u5BF9\u4F60\u7684\u8BC1\u660E\u6750\u6599\u4E25\u683C\u4FDD\u5BC6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "tip"
      }, "2\u3001\u63D0\u4EA4\u540E\u9884\u8BA11\u4E2A\u5DE5\u4F5C\u65E5\u5185\u901A\u8FC7\u6D88\u606F\u53D1\u9001\u8BA4\u8BC1\u7ED3\u679C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "tip"
      }, "3\u3001\u8BF7\u786E\u4FDD\u63D0\u4EA4\u7684\u6750\u6599\u771F\u5B9E\u3001\u5408\u6CD5\u3001\u6709\u6548\uFF0C\u5426\u5219\u4F1A\u5F71\u54CD\u8BA4\u8BC1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_guide_footer_guide_footer__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        btntext: "\u63D0\u4EA4\u8D44\u6599",
        onBtnTap: this.doAuth,
        des: "\u6682\u4E0D\u8BA4\u8BC1",
        onDesTap: this.goMe
      }));
    }
  }]);

  return UserVerify;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (UserVerify);

/***/ }),

/***/ "./src/pages/user-verify/user-verify.jsx":
/*!***********************************************!*\
  !*** ./src/pages/user-verify/user-verify.jsx ***!
  \***********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_user_verify_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./user-verify.jsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/user-verify/user-verify.jsx");


var config = {"navigationBarTitleText":"学生认证"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_user_verify_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/user-verify/user-verify', {}, config || {}))



/***/ }),

/***/ "./src/pages/user-verify/user-verify.scss":
/*!************************************************!*\
  !*** ./src/pages/user-verify/user-verify.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/user-verify/user-verify.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=user-verify.js.map