(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/me/me"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/me/me.jsx":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/me/me.jsx ***!
  \**********************************************************************************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/api */ "./src/common/api.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../actions/user */ "./src/actions/user.js");
/* harmony import */ var _components_with_with_login__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/with/with-login */ "./src/components/with/with-login.jsx");
/* harmony import */ var _me_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./me.scss */ "./src/pages/me/me.scss");
/* harmony import */ var _me_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_me_scss__WEBPACK_IMPORTED_MODULE_16__);









var _dec, _class;










var Me = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__[/* connect */ "b"])(function (_ref) {
  var user = _ref.user;
  return {
    user: user
  };
}, function (dispatch) {
  return {
    dispatch: dispatch
  };
}), _dec(_class = /*#__PURE__*/function (_Component) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Me, _Component);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Me);

  function Me() {
    var _this;

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Me);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "goHomePage", function () {
      var id = _this.props.user.id;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.navigateTo({
        url: '/pages/user-home/user-home?id=' + id
      });
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "goEdit", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.navigateTo({
        url: '/pages/subPackage/user-edit/user-edit'
      });
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "goSchool", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.navigateTo({
        url: '/pages/user-school/user-school'
      });
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "onGetUserInfo", /*#__PURE__*/function () {
      var _ref2 = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var dispatch, detail, encryptedData, iv, rawData, signature, result;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch = _this.props.dispatch;
                detail = e.detail;

                if (!detail['encryptedData']) {
                  _context.next = 10;
                  break;
                }

                encryptedData = detail.encryptedData, iv = detail.iv, rawData = detail.rawData, signature = detail.signature;
                _context.next = 6;
                return _common_api__WEBPACK_IMPORTED_MODULE_13__[/* User */ "j"].bindInfo(encryptedData, iv, rawData, signature);

              case 6:
                result = _context.sent;

                if (result) {
                  dispatch(Object(_actions_user__WEBPACK_IMPORTED_MODULE_14__[/* getUser */ "j"])());
                }

                _context.next = 11;
                break;

              case 10:
                _common_api__WEBPACK_IMPORTED_MODULE_13__[/* User */ "j"].showToast('你已取消授权');

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Me, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "init",
    value: function init() {} // 跳到个人主页

  }, {
    key: "render",
    value: function render() {
      var _this$props$user = this.props.user,
          user = _this$props$user === void 0 ? null : _this$props$user;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "container"
      }, !_common_api__WEBPACK_IMPORTED_MODULE_13__[/* User */ "j"].isEmptyObject(user) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "info",
        onClick: this.goHomePage
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "avtater"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Image */ "c"], {
        src: user.avatar || '../../images/empty_avator.svg'
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "nick"
      }, user.user_nickname || '未知'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "des"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Text */ "q"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Text */ "q"], {
        className: "label"
      }, "\u5173\u6CE8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Text */ "q"], {
        className: "value"
      }, user.followNum || 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Text */ "q"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Text */ "q"], {
        className: "label"
      }, "\u7C89\u4E1D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Text */ "q"], {
        className: "value"
      }, user.fansNum || 0)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_with_with_login__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        onClick: this.goHomePage
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], null, "\u4E2A\u4EBA\u4E3B\u9875"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_12__[/* AtIcon */ "h"], {
        value: "chevron-right",
        size: "14"
      })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Button */ "a"], {
        lang: "zh_CN",
        onGetUserInfo: this.onGetUserInfo,
        className: "info",
        openType: "getUserInfo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "avtater"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Image */ "c"], {
        src: "../../images/empty_avator.svg"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "nick"
      }, "\u672A\u767B\u5F55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "des"
      }, "\u767B\u5F55\u540E\u53EF\u7F16\u8F91\u4E2A\u4EBA\u8D44\u6599")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "login-txt"
      }, "\u70B9\u51FB\u5FAE\u4FE1\u6388\u6743"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "cells"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_with_with_login__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        onClick: this.goEdit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Button */ "a"], {
        className: "cell"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "title"
      }, "\u7F16\u8F91\u4FE1\u606F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "des"
      }, "\u5B8C\u5584\u4E2A\u4EBA\u4FE1\u606F\u8BA9\u66F4\u591A\u540C\u5B66\u4E86\u89E3\u4F60")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_12__[/* AtIcon */ "h"], {
        value: "chevron-right",
        size: "14"
      })))), !_common_api__WEBPACK_IMPORTED_MODULE_13__[/* User */ "j"].isEmptyObject(user) && user.is_auth !== 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Button */ "a"], {
        className: "cell",
        onClick: this.goSchool
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "title"
      }, "\u5B66\u751F\u8BA4\u8BC1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "des"
      }, "\u5B66\u751F\u8BA4\u8BC1\u540E\u53EF\u89E3\u9501\u66F4\u591A\u7279\u6743")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "auth"
      }, "\u672A\u8BA4\u8BC1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_12__[/* AtIcon */ "h"], {
        value: "chevron-right",
        size: "14"
      }))) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "cells"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Button */ "a"], {
        className: "cell",
        "open-type": "contact"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "title"
      }, "\u5E2E\u52A9\u4E0E\u53CD\u9988"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "des"
      }, "\u6295\u7A3F\u3001\u5E2E\u52A9\u3001\u5408\u4F5C\u90FD\u53EF\u4EE5\u70B9\u51FB\u8FD9\u91CC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_12__[/* AtIcon */ "h"], {
        value: "chevron-right",
        size: "14"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Button */ "a"], {
        className: "cell",
        "open-type": "feedback"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "title"
      }, "\u610F\u89C1\u53CD\u9988"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "des"
      }, "\u4F60\u7684\u610F\u89C1\u548C\u5EFA\u8BAE\uFF0C\u662F\u5BF9\u6211\u4EEC\u6700\u5927\u7684\u652F\u6301")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_12__[/* AtIcon */ "h"], {
        value: "chevron-right",
        size: "14"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Button */ "a"], {
        className: "cell",
        "open-type": "share"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "title"
      }, "\u5206\u4EAB\u5C0F\u7A0B\u5E8F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "des"
      }, "\u89C9\u5F97\u6709\u8DA3\uFF0C\u5C31\u5206\u4EAB\u7ED9\u4F60\u8EAB\u8FB9\u7684\u540C\u5B66\u5427")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "s"], {
        className: "right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_12__[/* AtIcon */ "h"], {
        value: "chevron-right",
        size: "14"
      })))));
    }
  }]);

  return Me;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"])) || _class);
/* harmony default export */ __webpack_exports__["a"] = (Me);

/***/ }),

/***/ "./src/pages/me/me.jsx":
/*!*****************************!*\
  !*** ./src/pages/me/me.jsx ***!
  \*****************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_me_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./me.jsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/me/me.jsx");


var config = {"navigationBarTitleText":"我的","navigationBarBackgroundColor":"#f8f8f8"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_me_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/me/me', {}, config || {}))



/***/ }),

/***/ "./src/pages/me/me.scss":
/*!******************************!*\
  !*** ./src/pages/me/me.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/me/me.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=me.js.map