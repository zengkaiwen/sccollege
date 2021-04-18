(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/subPackage/user-edit/user-edit"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/subPackage/user-edit/user-edit.jsx":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/subPackage/user-edit/user-edit.jsx ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/api */ "./src/common/api.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../actions/user */ "./src/actions/user.js");
/* harmony import */ var _user_edit_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-edit.scss */ "./src/pages/subPackage/user-edit/user-edit.scss");
/* harmony import */ var _user_edit_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_user_edit_scss__WEBPACK_IMPORTED_MODULE_16__);










var _dec, _class;
/* eslint-disable no-shadow */










var years = [];
var months = [];
var days = [];

for (var i = 1; i <= 31; i++) {
  days.push(i);
}

for (var _i = 1; _i <= 12; _i++) {
  months.push(_i);
}

for (var _i2 = 1980; _i2 <= new Date().getFullYear(); _i2++) {
  years.push(_i2);
}

var UserEdit = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__[/* connect */ "b"])(function (_ref) {
  var user = _ref.user;
  return {
    user: user
  };
}, function (dispatch) {
  return {
    dispatch: dispatch
  };
}), _dec(_class = /*#__PURE__*/function (_Component) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(UserEdit, _Component);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(UserEdit);

  function UserEdit() {
    var _this;

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, UserEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "state", {
      pathetEnum: ['保密', '单身', '热恋'],
      userState: null,
      showNickNameDialog: false,
      showLabelDialog: false,
      showPathetDialog: false,
      showBirthdayDialog: false,
      showHometownDialog: false,
      birthday: [17, 0, 2],
      years: years,
      months: months,
      days: days,
      hometown: [0, 0],
      provinces: _common_api__WEBPACK_IMPORTED_MODULE_14__[/* Province */ "g"],
      cities: _common_api__WEBPACK_IMPORTED_MODULE_14__[/* Province */ "g"][0]['cities']
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "onUpload", /*#__PURE__*/Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var imgUrl, dispatch;
      return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _common_api__WEBPACK_IMPORTED_MODULE_14__[/* User */ "j"].editAvtater();

            case 2:
              imgUrl = _context.sent;

              if (imgUrl) {
                dispatch = _this.props.dispatch;
                dispatch(Object(_actions_user__WEBPACK_IMPORTED_MODULE_15__[/* changeAvatar */ "a"])(imgUrl));
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "updateNickname", /*#__PURE__*/Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var user_nickname, result, dispatch;
      return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.hideModal('showNickNameDialog');

              user_nickname = _this.state.userState.user_nickname;
              _context2.next = 4;
              return _common_api__WEBPACK_IMPORTED_MODULE_14__[/* User */ "j"].setUserFiled('user_nickname', user_nickname);

            case 4:
              result = _context2.sent;

              if (result) {
                dispatch = _this.props.dispatch;
                dispatch(Object(_actions_user__WEBPACK_IMPORTED_MODULE_15__[/* changeNickname */ "f"])(user_nickname));
              }

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "updateLabel", /*#__PURE__*/Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var label, result, dispatch;
      return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this.hideModal('showLabelDialog');

              label = _this.state.userState.label;
              _context3.next = 4;
              return _common_api__WEBPACK_IMPORTED_MODULE_14__[/* User */ "j"].setUserFiled('label', label);

            case 4:
              result = _context3.sent;

              if (result) {
                dispatch = _this.props.dispatch;
                dispatch(Object(_actions_user__WEBPACK_IMPORTED_MODULE_15__[/* changeLabel */ "e"])(label));
              }

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "updateBirthday", /*#__PURE__*/Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
      var _this$state, birthday, years, months, days, year, month, day, time, result, dispatch;

      return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _this.hideModal('showBirthdayDialog');

              _this$state = _this.state, birthday = _this$state.birthday, years = _this$state.years, months = _this$state.months, days = _this$state.days;
              year = years[birthday[0]];
              month = months[birthday[1]];
              day = days[birthday[2]];
              time = _common_api__WEBPACK_IMPORTED_MODULE_14__[/* User */ "j"].toTimestamp("".concat(year, "-").concat(month, "-").concat(day, " 0:0:0"));
              _context4.next = 8;
              return _common_api__WEBPACK_IMPORTED_MODULE_14__[/* User */ "j"].setUserFiled('birthday', time);

            case 8:
              result = _context4.sent;

              if (result) {
                dispatch = _this.props.dispatch;
                dispatch(Object(_actions_user__WEBPACK_IMPORTED_MODULE_15__[/* changeBirthday */ "b"])(time));
              }

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "updateHometown", /*#__PURE__*/Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
      var hometown, value, result, dispatch;
      return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _this.hideModal('showHometownDialog');

              hometown = _this.state.hometown;
              value = {};
              value['province'] = _common_api__WEBPACK_IMPORTED_MODULE_14__[/* Province */ "g"][hometown[0]].name;
              value['city'] = _common_api__WEBPACK_IMPORTED_MODULE_14__[/* Province */ "g"][hometown[0]]['cities'][hometown[1]];
              _context5.next = 7;
              return _common_api__WEBPACK_IMPORTED_MODULE_14__[/* User */ "j"].setUserFiled('hometown', JSON.stringify(value));

            case 7:
              result = _context5.sent;

              if (result) {
                dispatch = _this.props.dispatch;
                dispatch(Object(_actions_user__WEBPACK_IMPORTED_MODULE_15__[/* changeHometown */ "d"])(value['province'], value['city']));
              }

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "handleNicknameInput", function (e) {
      var nickname = e.detail.value;
      var userState = _this.state.userState;

      _this.setState({
        userState: Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, userState), {}, {
          user_nickname: nickname
        })
      });
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "handleLabelInput", function (e) {
      var label = e.detail.value;
      var userState = _this.state.userState;

      _this.setState({
        userState: Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, userState), {}, {
          label: label
        })
      });
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "handlePathetIndex", /*#__PURE__*/function () {
      var _ref7 = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(index) {
        var result, dispatch;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this.hideModal('showPathetDialog');

                _context6.next = 3;
                return _common_api__WEBPACK_IMPORTED_MODULE_14__[/* User */ "j"].setUserFiled('pathet_state', index);

              case 3:
                result = _context6.sent;

                if (result) {
                  dispatch = _this.props.dispatch;
                  dispatch(Object(_actions_user__WEBPACK_IMPORTED_MODULE_15__[/* changePathetState */ "g"])(index));
                }

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x) {
        return _ref7.apply(this, arguments);
      };
    }());

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "handleBirthdayChange", function (e) {
      var birthday = e.detail.value;

      _this.setState({
        birthday: birthday
      });
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "handleHometownChange", function (e) {
      var newHomtown = e.detail.value;
      var hometown = _this.state.hometown;

      if (newHomtown[0] !== hometown[0]) {
        // 省份改变的话
        _this.setState({
          cities: _common_api__WEBPACK_IMPORTED_MODULE_14__[/* Province */ "g"][newHomtown[0]]['cities'],
          hometown: [newHomtown[0], 0]
        });
      } else {
        _this.setState({
          hometown: newHomtown
        });
      }
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "goAuth", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.navigateTo({
        url: '/pages/user-school/user-school'
      });
    });

    return _this;
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(UserEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.propsMapState();
    }
  }, {
    key: "propsMapState",
    value: function propsMapState() {
      var user = this.props.user;
      this.setState({
        userState: user
      });
    }
  }, {
    key: "showModal",
    value: function showModal(type) {
      var newState = this.state;
      newState[type] = true;
      this.setState(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, newState));
    }
  }, {
    key: "hideModal",
    value: function hideModal(type) {
      var newState = this.state;
      newState[type] = false;
      this.setState(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, newState));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          userState = _this$state2.userState,
          showNickNameDialog = _this$state2.showNickNameDialog,
          showLabelDialog = _this$state2.showLabelDialog,
          showPathetDialog = _this$state2.showPathetDialog,
          pathetEnum = _this$state2.pathetEnum,
          showBirthdayDialog = _this$state2.showBirthdayDialog,
          birthday = _this$state2.birthday,
          years = _this$state2.years,
          months = _this$state2.months,
          days = _this$state2.days,
          showHometownDialog = _this$state2.showHometownDialog,
          hometown = _this$state2.hometown,
          provinces = _this$state2.provinces,
          cities = _this$state2.cities;
      var user = this.props.user;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        class: "avtater"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* Image */ "c"], {
        className: "image",
        src: userState.avatar,
        onClick: this.onUpload
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        class: "btn-edit icon icon-camera-full"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "cells"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "cell",
        onClick: function onClick() {
          return _this2.showModal('showNickNameDialog');
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "left"
      }, "\u6635\u79F0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], null, user.user_nickname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtIcon */ "h"], {
        value: "chevron-right",
        size: "14"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "cell",
        onClick: function onClick() {
          return _this2.showModal('showLabelDialog');
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "left"
      }, "\u4E2A\u6027\u7B7E\u540D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], null, user.label || '一句话介绍自己'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtIcon */ "h"], {
        value: "chevron-right",
        size: "14"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "cell",
        onClick: function onClick() {
          return _this2.showModal('showPathetDialog');
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "left"
      }, "\u611F\u60C5\u72B6\u51B5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], null, pathetEnum[user.pathet_state] || '未知'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtIcon */ "h"], {
        value: "chevron-right",
        size: "14"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "cell",
        onClick: function onClick() {
          return _this2.showModal('showBirthdayDialog');
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "left"
      }, "\u751F\u65E5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], null, user.birthday ? _common_api__WEBPACK_IMPORTED_MODULE_14__[/* User */ "j"].timeToBirthday(user.birthday) : '未设置'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtIcon */ "h"], {
        value: "chevron-right",
        size: "14"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "cell",
        onClick: function onClick() {
          return _this2.showModal('showHometownDialog');
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "left"
      }, "\u6545\u4E61"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], null, user.province, " ", user.city), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtIcon */ "h"], {
        value: "chevron-right",
        size: "14"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "cells"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "cell"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "left"
      }, "\u5C31\u8BFB\u5B66\u6821"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], null, user.school || '未设置'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "cell"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "left"
      }, "\u5B66\u5386"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], null, ['未知', '专科', '本科', '硕士', '博士'][user.degree] || '未设置'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "cell"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "left"
      }, "\u5165\u5B66\u5E74\u4EFD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], null, user.school_year || '未设置'))), userState.is_auth !== 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "cell btn-cell",
        onClick: this.goAuth
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "icon icon-auth-1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], null, "\u53BB\u5B66\u751F\u8BA4\u8BC1")) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtModal */ "k"], {
        isOpened: showNickNameDialog,
        onClose: function onClose() {
          return _this2.hideModal('showNickNameDialog');
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtModalHeader */ "n"], null, "\u4FEE\u6539\u6635\u79F0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtModalContent */ "m"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* Input */ "d"], {
        onInput: this.handleNicknameInput,
        value: userState.user_nickname,
        focus: showNickNameDialog,
        className: "nick-input input-bg"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtModalAction */ "l"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* Button */ "a"], {
        onClick: function onClick() {
          return _this2.hideModal('showNickNameDialog');
        }
      }, "\u53D6\u6D88"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* Button */ "a"], {
        onClick: this.updateNickname
      }, "\u786E\u5B9A"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtModal */ "k"], {
        isOpened: showLabelDialog,
        onClose: function onClose() {
          return _this2.hideModal('showLabelDialog');
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtModalHeader */ "n"], null, "\u4FEE\u6539\u4E2A\u6027\u7B7E\u540D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtModalContent */ "m"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* Input */ "d"], {
        onInput: this.handleLabelInput,
        value: userState.label,
        focus: showLabelDialog,
        className: "nick-input input-bg"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtModalAction */ "l"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* Button */ "a"], {
        onClick: function onClick() {
          return _this2.hideModal('showLabelDialog');
        }
      }, "\u53D6\u6D88"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* Button */ "a"], {
        onClick: this.updateLabel
      }, "\u786E\u5B9A"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtActionSheet */ "a"], {
        isOpened: showPathetDialog,
        cancelText: "\u53D6\u6D88",
        onCancel: function onCancel() {
          return _this2.hideModal('showPathetDialog');
        },
        onClose: function onClose() {
          return _this2.hideModal('showPathetDialog');
        }
      }, pathetEnum.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtActionSheetItem */ "b"], {
          key: "pathet_".concat(index),
          onClick: function onClick() {
            return _this2.handlePathetIndex(index);
          }
        }, item);
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtFloatLayout */ "g"], {
        isOpened: showBirthdayDialog,
        onClose: function onClose() {
          return _this2.hideModal('showBirthdayDialog');
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "picker-title",
        style: {
          height: '50px',
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "btn",
        onClick: function onClick() {
          return _this2.hideModal('showBirthdayDialog');
        }
      }, "\u53D6\u6D88"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], null, "\u9009\u62E9\u751F\u65E5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "btn confirm",
        onClick: this.updateBirthday
      }, "\u786E\u8BA4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* PickerView */ "j"], {
        value: birthday,
        onChange: this.handleBirthdayChange,
        "indicator-style": "height: 50px;",
        style: "height: 150px;"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* PickerViewColumn */ "k"], null, years.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
          key: "year_".concat(index),
          className: "picker-col"
        }, item, "\u5E74");
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* PickerViewColumn */ "k"], null, months.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
          key: "month_".concat(index),
          className: "picker-col"
        }, item, "\u6708");
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* PickerViewColumn */ "k"], null, days.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
          key: "day_".concat(index),
          className: "picker-col"
        }, item, "\u65E5");
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtFloatLayout */ "g"], {
        isOpened: showHometownDialog,
        onClose: function onClose() {
          return _this2.hideModal('showHometownDialog');
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "picker-title",
        style: {
          height: '50px',
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "btn",
        onClick: function onClick() {
          return _this2.hideModal('showHometownDialog');
        }
      }, "\u53D6\u6D88"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], null, "\u9009\u62E9\u6545\u4E61"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
        className: "btn confirm",
        onClick: this.updateHometown
      }, "\u786E\u8BA4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* PickerView */ "j"], {
        value: hometown,
        onChange: this.handleHometownChange,
        "indicator-style": "height: 50px;",
        style: "height: 150px;"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* PickerViewColumn */ "k"], null, provinces.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
          key: "province_".concat(index),
          className: "picker-col"
        }, item.name);
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* PickerViewColumn */ "k"], null, cities.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__[/* View */ "s"], {
          key: "city_".concat(index),
          className: "picker-col"
        }, item);
      })))));
    }
  }]);

  return UserEdit;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"])) || _class);
/* harmony default export */ __webpack_exports__["a"] = (UserEdit);

/***/ }),

/***/ "./src/pages/subPackage/user-edit/user-edit.jsx":
/*!******************************************************!*\
  !*** ./src/pages/subPackage/user-edit/user-edit.jsx ***!
  \******************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_user_edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./user-edit.jsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/subPackage/user-edit/user-edit.jsx");


var config = {"navigationBarTitleText":"编辑个人资料","navigationBarBackgroundColor":"#f8f8f8"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_user_edit_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/subPackage/user-edit/user-edit', {}, config || {}))



/***/ }),

/***/ "./src/pages/subPackage/user-edit/user-edit.scss":
/*!*******************************************************!*\
  !*** ./src/pages/subPackage/user-edit/user-edit.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/subPackage/user-edit/user-edit.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=user-edit.js.map