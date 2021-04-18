(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/user-school/user-school"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/user-school/user-school.jsx":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/user-school/user-school.jsx ***!
  \****************************************************************************************************************/
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
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _user_school_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-school.scss */ "./src/pages/user-school/user-school.scss");
/* harmony import */ var _user_school_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_user_school_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_guide_footer_guide_footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/guide-footer/guide-footer */ "./src/components/guide-footer/guide-footer.jsx");
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/api */ "./src/common/api.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../actions/user */ "./src/actions/user.js");










var _dec, _class;
/* eslint-disable no-shadow */











var years = [];
var currentYear = +new Date().getFullYear();

for (var i = currentYear - 8; i <= currentYear; i++) {
  years.push(i);
}

var UserSchool = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__[/* connect */ "b"])(function (_ref) {
  var user = _ref.user;
  return {
    user: user
  };
}, function (dispatch) {
  return {
    dispatch: dispatch
  };
}), _dec(_class = /*#__PURE__*/function (_Component) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(UserSchool, _Component);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(UserSchool);

  function UserSchool() {
    var _this;

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, UserSchool);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "state", {
      showDegreeDialog: false,
      showSchoolDialog: false,
      showYearDialog: false,
      degrees: ['未设置', '专科', '本科', '硕士', '博士'],
      selectedDegree: [2],
      schools: [],
      selectedSchool: [0],
      years: years,
      selectedYear: [3]
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "handleSchool", function (e) {
      var value = e.detail.value;

      _this.setState({
        selectedSchool: value
      });
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "handleDegree", function (e) {
      var value = e.detail.value;

      _this.setState({
        selectedDegree: value
      });
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "handleYear", function (e) {
      var value = e.detail.value;

      _this.setState({
        selectedYear: value
      });
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "updateDegree", /*#__PURE__*/Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var selectedDegree, result, dispatch;
      return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              selectedDegree = _this.state.selectedDegree;

              if (!(selectedDegree[0] === 0)) {
                _context.next = 4;
                break;
              }

              _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.showToast({
                icon: 'none',
                title: '学历不能选择未设置选项'
              });
              return _context.abrupt("return");

            case 4:
              _this.hideModal('showDegreeDialog');

              _context.next = 7;
              return _common_api__WEBPACK_IMPORTED_MODULE_16__[/* User */ "j"].setUserFiled('degree', selectedDegree[0]);

            case 7:
              result = _context.sent;

              if (result) {
                dispatch = _this.props.dispatch;
                dispatch(Object(_actions_user__WEBPACK_IMPORTED_MODULE_17__[/* changeDegree */ "c"])(selectedDegree[0]));
              }

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "updateSchool", /*#__PURE__*/Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var _this$state, selectedSchool, schools, schoolName, result, dispatch;

      return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$state = _this.state, selectedSchool = _this$state.selectedSchool, schools = _this$state.schools;
              schoolName = schools[selectedSchool[0]];

              _this.hideModal('showSchoolDialog');

              _context2.next = 5;
              return _common_api__WEBPACK_IMPORTED_MODULE_16__[/* User */ "j"].setUserFiled('school', schoolName);

            case 5:
              result = _context2.sent;

              if (result) {
                dispatch = _this.props.dispatch;
                dispatch(Object(_actions_user__WEBPACK_IMPORTED_MODULE_17__[/* changeSchool */ "h"])(schoolName));
              }

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "updateYear", /*#__PURE__*/Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var _this$state2, selectedYear, years, year, result, dispatch;

      return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this$state2 = _this.state, selectedYear = _this$state2.selectedYear, years = _this$state2.years;
              year = years[selectedYear[0]];

              _this.hideModal('showYearDialog');

              _context3.next = 5;
              return _common_api__WEBPACK_IMPORTED_MODULE_16__[/* User */ "j"].setUserFiled('school_year', year);

            case 5:
              result = _context3.sent;

              if (result) {
                dispatch = _this.props.dispatch;
                dispatch(Object(_actions_user__WEBPACK_IMPORTED_MODULE_17__[/* changeSchoolYear */ "i"])(year));
              }

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "goVerify", function () {
      var user = _this.props.user;

      if (!user.school || !user.degree || !user.school_year) {
        _common_api__WEBPACK_IMPORTED_MODULE_16__[/* User */ "j"].showToast('请先补全学校信息');
        return;
      }

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.navigateTo({
        url: '/pages/user-verify/user-verify'
      });
    });

    return _this;
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(UserSchool, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "init",
    value: function () {
      var _init = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
        var schools;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _common_api__WEBPACK_IMPORTED_MODULE_16__[/* User */ "j"].getSichuanUniversity();

              case 2:
                schools = _context4.sent;
                this.setState({
                  schools: schools
                });

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
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

      var _this$state3 = this.state,
          degrees = _this$state3.degrees,
          selectedDegree = _this$state3.selectedDegree,
          showDegreeDialog = _this$state3.showDegreeDialog,
          showSchoolDialog = _this$state3.showSchoolDialog,
          schools = _this$state3.schools,
          selectedSchool = _this$state3.selectedSchool,
          showYearDialog = _this$state3.showYearDialog,
          years = _this$state3.years,
          selectedYear = _this$state3.selectedYear;
      var user = this.props.user;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "cells"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "cell",
        onClick: function onClick() {
          return _this2.showModal('showSchoolDialog');
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "left"
      }, "\u5C31\u8BFB\u5B66\u6821"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], null, user.school || '未设置'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtIcon */ "h"], {
        value: "chevron-right",
        size: "14"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "cell",
        onClick: function onClick() {
          return _this2.showModal('showDegreeDialog');
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "left"
      }, "\u5B66\u5386"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], null, degrees[user.degree] || '未设置'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtIcon */ "h"], {
        value: "chevron-right",
        size: "14"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "cell",
        onClick: function onClick() {
          return _this2.showModal('showYearDialog');
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "left"
      }, "\u5165\u5B66\u5E74\u4EFD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], null, user.school_year || '未设置'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtIcon */ "h"], {
        value: "chevron-right",
        size: "14"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_guide_footer_guide_footer__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        btntext: "\u4E0B\u4E00\u6B65",
        des: "\u70B9\u51FB\u4E0B\u4E00\u6B65\uFF0C\u8FDB\u884C\u5B66\u751F\u8BA4\u8BC1",
        onBtnTap: this.goVerify
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtFloatLayout */ "g"], {
        isOpened: showSchoolDialog,
        onClose: function onClose() {
          return _this2.hideModal('showSchoolDialog');
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "picker-title",
        style: {
          height: '50px',
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "btn",
        onClick: function onClick() {
          return _this2.hideModal('showSchoolDialog');
        }
      }, "\u53D6\u6D88"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], null, "\u9009\u62E9\u5B66\u6821"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "btn confirm",
        onClick: this.updateSchool
      }, "\u786E\u8BA4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* PickerView */ "j"], {
        value: selectedSchool,
        onChange: this.handleSchool,
        "indicator-style": "height: 50px;",
        style: "height: 200px;"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* PickerViewColumn */ "k"], null, schools.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
          key: "school_".concat(index),
          className: "picker-col"
        }, item);
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtFloatLayout */ "g"], {
        isOpened: showDegreeDialog,
        onClose: function onClose() {
          return _this2.hideModal('showDegreeDialog');
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "picker-title",
        style: {
          height: '50px',
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "btn",
        onClick: function onClick() {
          return _this2.hideModal('showDegreeDialog');
        }
      }, "\u53D6\u6D88"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], null, "\u9009\u62E9\u5B66\u5386"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "btn confirm",
        onClick: this.updateDegree
      }, "\u786E\u8BA4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* PickerView */ "j"], {
        value: selectedDegree,
        onChange: this.handleDegree,
        "indicator-style": "height: 50px;",
        style: "height: 200px;"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* PickerViewColumn */ "k"], null, degrees.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
          key: "school_".concat(index),
          className: "picker-col"
        }, item);
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_13__[/* AtFloatLayout */ "g"], {
        isOpened: showYearDialog,
        onClose: function onClose() {
          return _this2.hideModal('showYearDialog');
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "picker-title",
        style: {
          height: '50px',
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "btn",
        onClick: function onClick() {
          return _this2.hideModal('showYearDialog');
        }
      }, "\u53D6\u6D88"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], null, "\u9009\u62E9\u5165\u5B66\u5E74\u4EFD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "btn confirm",
        onClick: this.updateYear
      }, "\u786E\u8BA4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* PickerView */ "j"], {
        value: selectedYear,
        onChange: this.handleYear,
        "indicator-style": "height: 50px;",
        style: "height: 200px;"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* PickerViewColumn */ "k"], null, years.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
          key: "school_".concat(index),
          className: "picker-col"
        }, item);
      })))));
    }
  }]);

  return UserSchool;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"])) || _class);
/* harmony default export */ __webpack_exports__["a"] = (UserSchool);

/***/ }),

/***/ "./src/pages/user-school/user-school.jsx":
/*!***********************************************!*\
  !*** ./src/pages/user-school/user-school.jsx ***!
  \***********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_user_school_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./user-school.jsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/user-school/user-school.jsx");


var config = {"navigationBarTitleText":"编辑学校信息"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_user_school_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/user-school/user-school', {}, config || {}))



/***/ }),

/***/ "./src/pages/user-school/user-school.scss":
/*!************************************************!*\
  !*** ./src/pages/user-school/user-school.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/user-school/user-school.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=user-school.js.map