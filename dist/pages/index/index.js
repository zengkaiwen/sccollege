(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/index/index.jsx":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/index/index.jsx ***!
  \****************************************************************************************************/
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
/* harmony import */ var _actions_hometabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions/hometabs */ "./src/actions/hometabs.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_navigator_navigator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/navigator/navigator */ "./src/components/navigator/navigator.jsx");
/* harmony import */ var _components_tab_bar_tab_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/tab-bar/tab-bar */ "./src/components/tab-bar/tab-bar.jsx");
/* harmony import */ var _components_page_topic_page_topic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/page-topic/page-topic */ "./src/components/page-topic/page-topic.jsx");
/* harmony import */ var _components_page_recommend_page_recommend__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/page-recommend/page-recommend */ "./src/components/page-recommend/page-recommend.jsx");
/* harmony import */ var _components_page_activity_page_activity__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/page-activity/page-activity */ "./src/components/page-activity/page-activity.jsx");
/* harmony import */ var _components_with_with_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/with/with-auth */ "./src/components/with/with-auth.jsx");







var _dec, _class;













var Index = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[/* connect */ "b"])(function (_ref) {
  var hometabs = _ref.hometabs;
  return {
    hometabs: hometabs
  };
}, function (dispatch) {
  return {
    dispatchTabChange: function dispatchTabChange(index) {
      dispatch(Object(_actions_hometabs__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(index));
    }
  };
}), _dec(_class = /*#__PURE__*/function (_Component) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Index, _Component);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Index);

  function Index() {
    var _this;

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "state", {
      labels: ['话题', '推荐', '活动'],
      action_right: 15
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "onTabChange", function (index) {
      _this.props.dispatchTabChange(index);
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "onChange", function (e) {
      var _e$detail = e.detail,
          current = _e$detail.current,
          source = _e$detail.source;

      if (source == 'touch') {
        _this.props.dispatchTabChange(current);
      }
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "goEdit", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.navigateTo({
        url: '/pages/post-edit/post-edit'
      });
    });

    return _this;
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          labels = _this$state.labels,
          action_right = _this$state.action_right;
      var tabIndex = this.props.hometabs.tabIndex;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_navigator_navigator__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        renderLeft: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_tab_bar_tab_bar__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
          labels: labels,
          selectedIndex: tabIndex,
          onTabChange: this.onTabChange
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* Swiper */ "n"], {
        style: {
          height: 'calc(100vh - 64px)'
        },
        current: tabIndex,
        onChange: this.onChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* SwiperItem */ "o"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_page_topic_page_topic__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* SwiperItem */ "o"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_page_recommend_page_recommend__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* SwiperItem */ "o"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_page_activity_page_activity__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "home-action",
        style: {
          right: "".concat(action_right, "px")
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_with_with_auth__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
        onClick: this.goEdit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "btn-circle btn-i"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        className: "icon icon-xiezuo"
      })))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"])) || _class);
/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Built-in value references. */


var _Symbol = root.Symbol;
module.exports = _Symbol;

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
/** Detect free variable `self`. */


var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = _typeof(value);

  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ "./src/actions/hometabs.js":
/*!*********************************!*\
  !*** ./src/actions/hometabs.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _constants_hometabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/hometabs */ "./src/constants/hometabs.js");


var tabChange = function tabChange(index) {
  return {
    type: _constants_hometabs__WEBPACK_IMPORTED_MODULE_0__[/* TAB_CHANGE */ "a"],
    index: index
  };
};

/* harmony default export */ __webpack_exports__["a"] = (tabChange);

/***/ }),

/***/ "./src/components/navigator/navigator.jsx":
/*!************************************************!*\
  !*** ./src/components/navigator/navigator.jsx ***!
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
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _navigator_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigator.scss */ "./src/components/navigator/navigator.scss");
/* harmony import */ var _navigator_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_navigator_scss__WEBPACK_IMPORTED_MODULE_10__);







/* eslint-disable react/sort-comp */






function getSystemInfo() {
  if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.globalSystemInfo && !_tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.globalSystemInfo.ios) {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.globalSystemInfo;
  } else {
    // h5环境下忽略navbar
    if (!lodash_isFunction__WEBPACK_IMPORTED_MODULE_6___default()(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.getSystemInfoSync)) {
      return null;
    }

    var systemInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.getSystemInfoSync() || {
      model: '',
      system: ''
    };
    var ios = !!(systemInfo.system.toLowerCase().search('ios') + 1);
    var rect;

    try {
      rect = _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.getMenuButtonBoundingClientRect ? _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.getMenuButtonBoundingClientRect() : null;

      if (rect === null) {
        throw 'getMenuButtonBoundingClientRect error';
      } //取值为0的情况  有可能width不为0 top为0的情况


      if (!rect.width || !rect.top || !rect.left || !rect.height) {
        throw 'getMenuButtonBoundingClientRect error';
      }
    } catch (error) {
      var gap = ''; //胶囊按钮上下间距 使导航内容居中

      var width = 96; //胶囊的宽度

      if (systemInfo.platform === 'android') {
        gap = 8;
        width = 96;
      } else if (systemInfo.platform === 'devtools') {
        if (ios) {
          gap = 5.5; //开发工具中ios手机
        } else {
          gap = 7.5; //开发工具中android和其他手机
        }
      } else {
        gap = 4;
        width = 88;
      }

      if (!systemInfo.statusBarHeight) {
        //开启wifi的情况下修复statusBarHeight值获取不到
        systemInfo.statusBarHeight = systemInfo.screenHeight - systemInfo.windowHeight - 20;
      }

      rect = {
        //获取不到胶囊信息就自定义重置一个
        bottom: systemInfo.statusBarHeight + gap + 32,
        height: 32,
        left: systemInfo.windowWidth - width - 10,
        right: systemInfo.windowWidth - 10,
        top: systemInfo.statusBarHeight + gap,
        width: width
      };
      console.log('error', error);
      console.log('rect', rect);
    }

    var navBarHeight = '';

    if (!systemInfo.statusBarHeight) {
      //开启wifi和打电话下
      systemInfo.statusBarHeight = systemInfo.screenHeight - systemInfo.windowHeight - 20;

      navBarHeight = function () {
        var gap = rect.top - systemInfo.statusBarHeight;
        return 2 * gap + rect.height;
      }();

      systemInfo.statusBarHeight = 0;
      systemInfo.navBarExtendHeight = 0; //下方扩展4像素高度 防止下方边距太小
    } else {
      navBarHeight = function () {
        var gap = rect.top - systemInfo.statusBarHeight;
        return systemInfo.statusBarHeight + 2 * gap + rect.height;
      }();

      if (ios) {
        systemInfo.navBarExtendHeight = 4; //下方扩展4像素高度 防止下方边距太小
      } else {
        systemInfo.navBarExtendHeight = 0;
      }
    }

    systemInfo.navBarHeight = navBarHeight; //导航栏高度不包括statusBarHeight

    systemInfo.capsulePosition = rect; //右上角胶囊按钮信息bottom: 58 height: 32 left: 317 right: 404 top: 26 width: 87 目前发现在大多机型都是固定值 为防止不一样所以会使用动态值来计算nav元素大小

    systemInfo.ios = ios; //是否ios

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.globalSystemInfo = systemInfo; //将信息保存到全局变量中,后边再用就不用重新异步获取了
    //console.log('systemInfo', systemInfo);

    return systemInfo;
  }
}

var globalSystemInfo = getSystemInfo();

var AtComponent = /*#__PURE__*/function (_Component) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AtComponent, _Component);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(AtComponent);

  function AtComponent(props) {
    var _this;

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, AtComponent);

    _this = _super.call(this, props);

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "state", {});

    _this.state = {
      configStyle: _this.setStyle(globalSystemInfo)
    };
    return _this;
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(AtComponent, [{
    key: "componentDidShow",
    value: function componentDidShow() {
      if (globalSystemInfo.ios) {
        globalSystemInfo = getSystemInfo();
        this.setState({
          configStyle: this.setStyle(globalSystemInfo)
        });
      }
    }
  }, {
    key: "handleBackClick",
    value: function handleBackClick() {
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_6___default()(this.props.onBack)) {
        this.props.onBack();
      } else {
        var pages = _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.getCurrentPages();

        if (pages.length >= 2) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.navigateBack({
            delta: this.props.delta
          });
        }
      }
    }
  }, {
    key: "handleGoHomeClick",
    value: function handleGoHomeClick() {
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_6___default()(this.props.onHome)) {
        this.props.onHome();
      }
    }
  }, {
    key: "handleSearchClick",
    value: function handleSearchClick() {
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_6___default()(this.props.onSearch)) {
        this.props.onSearch();
      }
    }
  }, {
    key: "setStyle",
    value: function setStyle(systemInfo) {
      var statusBarHeight = systemInfo.statusBarHeight,
          navBarHeight = systemInfo.navBarHeight,
          capsulePosition = systemInfo.capsulePosition,
          navBarExtendHeight = systemInfo.navBarExtendHeight,
          ios = systemInfo.ios,
          windowWidth = systemInfo.windowWidth;
      var _this$props = this.props,
          back = _this$props.back,
          home = _this$props.home,
          title = _this$props.title,
          color = _this$props.color;
      var rightDistance = windowWidth - capsulePosition.right; //胶囊按钮右侧到屏幕右侧的边距

      var leftWidth = windowWidth - capsulePosition.left; //胶囊按钮左侧到屏幕右侧的边距

      var navigationbarinnerStyle = ["color:".concat(color), //`background:${background}`,
      "height:".concat(navBarHeight + navBarExtendHeight, "px"), "padding-top:".concat(statusBarHeight, "px"), "padding-right:".concat(leftWidth, "px"), "padding-bottom:".concat(navBarExtendHeight, "px")].join(';');
      var navBarLeft = [];

      if (back && !home || !back && home) {
        navBarLeft = ["width:".concat(capsulePosition.width, "px"), "height:".concat(capsulePosition.height, "px"), "margin-left:0px", "margin-right:".concat(rightDistance, "px")].join(';');
      } else if (back && home || title) {
        navBarLeft = ["width:".concat(capsulePosition.width, "px"), "height:".concat(capsulePosition.height, "px"), "margin-left:".concat(rightDistance, "px")].join(';');
      } else {
        navBarLeft = ["width:auto", "margin-left:0px"].join(';');
      }

      return {
        navigationbarinnerStyle: navigationbarinnerStyle,
        navBarLeft: navBarLeft,
        navBarHeight: navBarHeight,
        capsulePosition: capsulePosition,
        navBarExtendHeight: navBarExtendHeight,
        ios: ios,
        rightDistance: rightDistance
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state$configSty = this.state.configStyle,
          navigationbarinnerStyle = _this$state$configSty.navigationbarinnerStyle,
          navBarLeft = _this$state$configSty.navBarLeft,
          navBarHeight = _this$state$configSty.navBarHeight,
          capsulePosition = _this$state$configSty.capsulePosition,
          navBarExtendHeight = _this$state$configSty.navBarExtendHeight,
          ios = _this$state$configSty.ios,
          rightDistance = _this$state$configSty.rightDistance;
      var _this$props2 = this.props,
          title = _this$props2.title,
          background = _this$props2.background,
          backgroundColorTop = _this$props2.backgroundColorTop,
          back = _this$props2.back,
          home = _this$props2.home,
          searchBar = _this$props2.searchBar,
          searchText = _this$props2.searchText,
          iconTheme = _this$props2.iconTheme,
          extClass = _this$props2.extClass;
      var nav_bar__center = null;

      if (title) {
        nav_bar__center = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("text", null, title);
      } else if (searchBar) {
        nav_bar__center = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
          className: "lxy-nav-bar-search",
          style: "height:".concat(capsulePosition.height, "px;"),
          onClick: this.handleSearchClick.bind(this)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
          className: "lxy-nav-bar-search__icon"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
          className: "lxy-nav-bar-search__input"
        }, searchText));
      } else {
        /* eslint-disable */
        nav_bar__center = this.props.renderCenter;
        /* eslint-enable */
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
        className: "lxy-nav-bar ".concat(ios ? 'ios' : 'android', " ").concat(extClass),
        style: "background: ".concat(backgroundColorTop ? backgroundColorTop : background, ";height:").concat(navBarHeight + navBarExtendHeight, "px;")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
        className: "lxy-nav-bar__placeholder ".concat(ios ? 'ios' : 'android'),
        style: "padding-top: ".concat(navBarHeight + navBarExtendHeight, "px;")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
        className: "lxy-nav-bar__inner ".concat(ios ? 'ios' : 'android'),
        style: "background:".concat(background, ";").concat(navigationbarinnerStyle, ";")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
        className: "lxy-nav-bar__left",
        style: navBarLeft
      }, back && !home && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
        onClick: this.handleBackClick.bind(this),
        className: "lxy-nav-bar__button lxy-nav-bar__btn_goback ".concat(iconTheme)
      }), !back && home && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
        onClick: this.handleGoHomeClick.bind(this),
        className: "lxy-nav-bar__button lxy-nav-bar__btn_gohome ".concat(iconTheme)
      }), back && home && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
        className: "lxy-nav-bar__buttons ".concat(ios ? 'ios' : 'android')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
        onClick: this.handleBackClick.bind(this),
        className: "lxy-nav-bar__button lxy-nav-bar__btn_goback ".concat(iconTheme)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
        onClick: this.handleGoHomeClick.bind(this),
        className: "lxy-nav-bar__button lxy-nav-bar__btn_gohome ".concat(iconTheme, "}")
      })), !back && !home && this.props.renderLeft), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
        className: "lxy-nav-bar__center",
        style: "padding-left: ".concat(rightDistance, "px")
      }, nav_bar__center), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__[/* View */ "s"], {
        className: "lxy-nav-bar__right",
        style: "margin-right: ".concat(rightDistance, "px")
      }, this.props.renderRight)));
    }
  }]);

  return AtComponent;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtComponent, "options", {
  multipleSlots: true,
  addGlobalClass: true
});

Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(AtComponent, "defaultProps", {
  extClass: '',
  background: 'rgba(255,255,255,1)',
  //导航栏背景
  color: '#000000',
  title: '',
  searchText: '点我搜索',
  searchBar: false,
  back: false,
  home: false,
  iconTheme: 'black',
  delta: 1
});

/* harmony default export */ __webpack_exports__["a"] = (AtComponent);

/***/ }),

/***/ "./src/components/navigator/navigator.scss":
/*!*************************************************!*\
  !*** ./src/components/navigator/navigator.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/page-activity/page-activity.jsx":
/*!********************************************************!*\
  !*** ./src/components/page-activity/page-activity.jsx ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageActivity; });
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _page_activity_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-activity.scss */ "./src/components/page-activity/page-activity.scss");
/* harmony import */ var _page_activity_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_page_activity_scss__WEBPACK_IMPORTED_MODULE_6__);








var PageActivity = /*#__PURE__*/function (_Component) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(PageActivity, _Component);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(PageActivity);

  function PageActivity() {
    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, PageActivity);

    return _super.apply(this, arguments);
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PageActivity, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "s"], null, "\u8BDD\u9898");
    }
  }]);

  return PageActivity;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ "./src/components/page-activity/page-activity.scss":
/*!*********************************************************!*\
  !*** ./src/components/page-activity/page-activity.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/page-recommend/page-recommend.jsx":
/*!**********************************************************!*\
  !*** ./src/components/page-recommend/page-recommend.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recommend; });
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
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/api */ "./src/common/api.js");
/* harmony import */ var _components_post_card_post_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/post-card/post-card */ "./src/components/post-card/post-card.jsx");
/* harmony import */ var _components_my_page_my_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/my-page/my-page */ "./src/components/my-page/my-page.jsx");
/* harmony import */ var _page_recommend_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-recommend.scss */ "./src/components/page-recommend/page-recommend.scss");
/* harmony import */ var _page_recommend_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_page_recommend_scss__WEBPACK_IMPORTED_MODULE_12__);














var Recommend = /*#__PURE__*/function (_Component) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Recommend, _Component);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Recommend);

  function Recommend() {
    var _this;

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Recommend);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "state", {
      pageState: 0,
      postList: [],
      page: 1,
      noMore: false,
      showMoreLoading: false
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "init", /*#__PURE__*/Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var page, postList;
      return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = _this.state.page;
              _context.next = 3;
              return _common_api__WEBPACK_IMPORTED_MODULE_9__[/* Post */ "f"].getNewPosts(page);

            case 3:
              postList = _context.sent;

              if (postList) {
                _this.setState({
                  postList: postList,
                  page: page + 1,
                  pageState: 3
                });
              } else {
                _this.setState({
                  pageState: 1
                });
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "onScrollToLower", /*#__PURE__*/Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var _this$state, page, postList, noMore, newPostList;

      return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$state = _this.state, page = _this$state.page, postList = _this$state.postList, noMore = _this$state.noMore;

              if (!noMore) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return");

            case 3:
              _this.setState({
                showMoreLoading: true
              });

              _context2.next = 6;
              return _common_api__WEBPACK_IMPORTED_MODULE_9__[/* Post */ "f"].getNewPosts(page);

            case 6:
              newPostList = _context2.sent;

              if (newPostList) {
                _this.setState({
                  postList: postList.concat(newPostList),
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
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "onRefresh", /*#__PURE__*/Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var postList, newPostList;
      return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              postList = _this.state.postList;
              _context3.next = 3;
              return _common_api__WEBPACK_IMPORTED_MODULE_9__[/* Post */ "f"].getNewPosts(1);

            case 3:
              newPostList = _context3.sent;

              if (newPostList && newPostList[0]['id'] !== postList[0]['id']) {
                _this.setState({
                  postList: newPostList,
                  page: 2
                });
              } else {
                _common_api__WEBPACK_IMPORTED_MODULE_9__[/* Post */ "f"].showToast('当前没有最新帖子');
              }

              _this.mypage.hideRefresh();

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "onRef", function (mypage) {
      _this.mypage = mypage;
    });

    return _this;
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Recommend, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          postList = _this$state2.postList,
          pageState = _this$state2.pageState,
          showMoreLoading = _this$state2.showMoreLoading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_my_page_my_page__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        enableRefresh: true,
        state: pageState,
        enableTips: false,
        showMoreLoading: showMoreLoading,
        onScrollToLower: this.onScrollToLower,
        onRefresh: this.onRefresh,
        onRef: this.onRef,
        onRetry: this.init
      }, postList.map(function (post) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_post_card_post_card__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
          key: post.id,
          post: post,
          showOption: true,
          canGoPost: true,
          canUserHome: true
        });
      }));
    }
  }]);

  return Recommend;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./src/components/page-recommend/page-recommend.scss":
/*!***********************************************************!*\
  !*** ./src/components/page-recommend/page-recommend.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/page-topic/page-topic.jsx":
/*!**************************************************!*\
  !*** ./src/components/page-topic/page-topic.jsx ***!
  \**************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTopic; });
/* harmony import */ var _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
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
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/api */ "./src/common/api.js");
/* harmony import */ var _my_page_my_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../my-page/my-page */ "./src/components/my-page/my-page.jsx");
/* harmony import */ var _page_topic_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page-topic.scss */ "./src/components/page-topic/page-topic.scss");
/* harmony import */ var _page_topic_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_page_topic_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _font_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../font.css */ "./src/font.css");
/* harmony import */ var _font_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_font_css__WEBPACK_IMPORTED_MODULE_16__);


















var PageTopic = /*#__PURE__*/function (_Component) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(PageTopic, _Component);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(PageTopic);

  function PageTopic() {
    var _this;

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, PageTopic);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "state", {
      pageState: 0,
      tracks: [],
      // 保存在本地的最近访问话题
      items: [],
      // 已关注话题列表
      recommends: [],
      // 推荐的话题列表
      // hasMore: true,
      // isLoadData: false,
      pageIndex: 1 // pageSize: 15

    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "init", /*#__PURE__*/Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var res;
      return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                pageState: 0
              });

              _context.next = 3;
              return _common_api__WEBPACK_IMPORTED_MODULE_13__[/* Topic */ "i"].myFollowTopics(1);

            case 3:
              res = _context.sent;

              if (!res) {
                _context.next = 15;
                break;
              }

              if (!(res.length > 0)) {
                _context.next = 9;
                break;
              }

              _this.setState({
                items: res,
                pageState: 3,
                pageIndex: ++_this.state.pageIndex
              });

              _context.next = 13;
              break;

            case 9:
              _context.next = 11;
              return _common_api__WEBPACK_IMPORTED_MODULE_13__[/* Topic */ "i"].getTopicList(1);

            case 11:
              res = _context.sent;

              if (res) {
                _this.setState({
                  pageState: 3,
                  recommends: res
                });
              } else {
                _this.setState({
                  pageState: 1
                });
              }

            case 13:
              _context.next = 16;
              break;

            case 15:
              _this.setState({
                pageState: 1
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "onScroll", function (detail) {
      console.log(detail);
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "onScrollToLower", function () {});

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "onRefresh", function () {
      console.log('刷新');
      setTimeout(function () {
        _this.mypage.hideRefresh();
      }, 2000);
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "onClean", function () {});

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "goMaidan", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.navigateTo({
        url: '/pages/topic-maidan/topic-maidan'
      });
    });

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "onRef", function (page) {
      _this.mypage = page;
    });

    return _this;
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(PageTopic, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var tracks = _common_api__WEBPACK_IMPORTED_MODULE_13__[/* Topic */ "i"].getTopicTrack();

      if (tracks) {
        this.setState({
          tracks: tracks
        });
      }
    }
  }, {
    key: "goTopic",
    value:
    /**
     * 进入话题页面
     * @param {number} id 话题的id
     */
    function goTopic(id) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_10___default.a.navigateTo({
        url: '/pages/subPackage/topic-home/topic-home?id=' + id
      });
    }
    /**
     * 进入话题广场
     */

  }, {
    key: "onFollow",
    value: function () {
      var _onFollow = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e, item, index) {
        var recommends, newRecommends, res;
        return _Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                recommends = this.state.recommends;
                newRecommends = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(recommends);
                res = false;

                if (!newRecommends[index].hasFollow) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 6;
                return _common_api__WEBPACK_IMPORTED_MODULE_13__[/* Follow */ "c"].cancelFollowTopic(item.id);

              case 6:
                res = _context2.sent;
                newRecommends[index].hasFollow = false;
                _context2.next = 14;
                break;

              case 10:
                _context2.next = 12;
                return _common_api__WEBPACK_IMPORTED_MODULE_13__[/* Follow */ "c"].followTopic(item.id);

              case 12:
                res = _context2.sent;
                newRecommends[index].hasFollow = true;

              case 14:
                if (res) {
                  this.setState({
                    recommends: newRecommends
                  });
                }

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onFollow(_x, _x2, _x3) {
        return _onFollow.apply(this, arguments);
      }

      return onFollow;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          pageState = _this$state.pageState,
          items = _this$state.items,
          recommends = _this$state.recommends,
          tracks = _this$state.tracks;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_my_page_my_page__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        enableRefresh: true,
        state: pageState,
        enableTips: false,
        showMoreLoading: false,
        onScroll: this.onScroll,
        onScrollToLower: this.onScrollToLower,
        onRefresh: this.onRefresh,
        onRef: this.onRef,
        onRetry: this.init
      }, tracks ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "tracks"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "title"
      }, "\u6700\u8FD1\u8BBF\u95EE\u7684\u8BDD\u9898"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "btn",
        onClick: this.onClean
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "icon icon-del-line"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* ScrollView */ "l"], {
        scrollX: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "list"
      }, tracks.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
          className: "item",
          key: item.id,
          onClick: function onClick() {
            return _this2.goTopic(item.id);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* Image */ "c"], {
          src: item.icon_path
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
          className: "item-title"
        }, item.title));
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "item item-more",
        onClick: this.goMaidan
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "ic"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* Text */ "q"], {
        className: "icon icon-more-line"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "item-title"
      }, "\u53D1\u73B0\u8BDD\u9898"))))) : null, items.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "follow recommends"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "left"
      }, "\u5173\u6CE8\u8BDD\u9898"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "right",
        onClick: this.goMaidan
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], null, "\u8BDD\u9898\u5E7F\u573A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_12__[/* AtIcon */ "h"], {
        value: "chevron-right",
        size: "16",
        color: "#409eff"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "list"
      }, items.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
          className: "item",
          key: item.id,
          "hover-className": "item-hover",
          onClick: function onClick() {
            return _this2.goTopic(item.id);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* Image */ "c"], {
          src: item.icon_path
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
          className: "item-content"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
          className: "item-title"
        }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
          className: "item-des"
        }, item.des)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
          className: "item-action"
        }));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "footer",
        onClick: this.goMaidan
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "icon icon-add"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], null, "\u5173\u6CE8\u66F4\u591A\u8BDD\u9898"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "empty"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "empty-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], null, "\u4F60\u8FD8\u6CA1\u6709\u5173\u6CE8\u8BDD\u9898,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], null, "\u5148\u5173\u6CE8\u4E00\u4E0B\u5427!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "recommends"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "left"
      }, "\u63A8\u8350\u8BDD\u9898"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "right",
        onClick: this.goMaidan
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* Text */ "q"], null, "\u8BDD\u9898\u5E7F\u573A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(taro_ui__WEBPACK_IMPORTED_MODULE_12__[/* AtIcon */ "h"], {
        value: "chevron-right",
        size: "16",
        color: "#409eff"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
        className: "list"
      }, recommends.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
          className: "item",
          key: item.id,
          onClick: function onClick() {
            return _this2.goTopic(item.id);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* Image */ "c"], {
          src: item.icon_path
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
          className: "item-content"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
          className: "item-title"
        }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
          className: "item-des"
        }, item.des)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* View */ "s"], {
          className: "item-action",
          onClick: function onClick(e) {
            e.stopPropagation();

            _this2.onFollow(e, item, index);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* Button */ "a"], {
          className: ['btn', item.hasFollow ? 'has' : '']
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* Text */ "q"], {
          className: ['icon', item.hasFollow ? 'icon-follow' : 'icon-add']
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__[/* Text */ "q"], null, item.hasFollow ? '已关注' : '关注'))));
      })))));
    }
  }]);

  return PageTopic;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ }),

/***/ "./src/components/page-topic/page-topic.scss":
/*!***************************************************!*\
  !*** ./src/components/page-topic/page-topic.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/tab-bar/tab-bar.jsx":
/*!********************************************!*\
  !*** ./src/components/tab-bar/tab-bar.jsx ***!
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_hometabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/hometabs */ "./src/actions/hometabs.js");
/* harmony import */ var _tab_bar_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab-bar.scss */ "./src/components/tab-bar/tab-bar.scss");
/* harmony import */ var _tab_bar_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tab_bar_scss__WEBPACK_IMPORTED_MODULE_8__);





var _dec, _class;






var TabBar = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[/* connect */ "b"])(function (_ref) {
  var hometabs = _ref.hometabs;
  return {
    hometabs: hometabs
  };
}, function (dispatch) {
  return {
    dispatchTabChange: function dispatchTabChange(index) {
      dispatch(Object(_actions_hometabs__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(index));
    }
  };
}), _dec(_class = /*#__PURE__*/function (_Component) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(TabBar, _Component);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(TabBar);

  function TabBar() {
    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, TabBar);

    return _super.apply(this, arguments);
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TabBar, [{
    key: "tabTap",
    value: function tabTap(index) {
      this.props.dispatchTabChange(index);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          selectedIndex = _this$props.selectedIndex,
          labels = _this$props.labels,
          tabIndex = _this$props.hometabs.tabIndex;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "s"], {
        className: "tab-bar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "s"], {
        className: "tabs"
      }, labels && labels.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "s"], {
          className: ['tab', index == selectedIndex ? 'active' : ''],
          key: "tabs_".concat(index),
          onClick: function onClick() {
            return _this.tabTap(index);
          }
        }, item);
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "s"], {
        className: "tab-bar",
        style: {
          left: "".concat(tabIndex * 60 + 25, "PX")
        }
      })));
    }
  }]);

  return TabBar;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"])) || _class);
/* harmony default export */ __webpack_exports__["a"] = (TabBar);

/***/ }),

/***/ "./src/components/tab-bar/tab-bar.scss":
/*!*********************************************!*\
  !*** ./src/components/tab-bar/tab-bar.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/with/with-auth.jsx":
/*!*******************************************!*\
  !*** ./src/components/with/with-auth.jsx ***!
  \*******************************************/
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





var WithAuth = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[/* connect */ "b"])(function (_ref) {
  var user = _ref.user;
  return {
    user: user
  };
}), _dec(_class = /*#__PURE__*/function (_Component) {
  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(WithAuth, _Component);

  var _super = Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(WithAuth);

  function WithAuth() {
    var _this;

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, WithAuth);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "isAuth", function () {
      var _this$props = _this.props,
          user = _this$props.user,
          onClick = _this$props.onClick;

      if (user.is_auth !== 2) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.showToast({
          icon: 'none',
          title: '请先认证学生身份'
        });
        return;
      }

      onClick();
    });

    return _this;
  }

  Object(_Users_zengkaiwen_Documents_workspace_sccollege_taro3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(WithAuth, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "s"], {
        onClick: this.isAuth
      }, children);
    }
  }]);

  return WithAuth;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"])) || _class);
/* harmony default export */ __webpack_exports__["a"] = (WithAuth);

/***/ }),

/***/ "./src/font.css":
/*!**********************!*\
  !*** ./src/font.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.jsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.jsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/index/index.jsx");


var config = {"navigationBarTitleText":"首页","navigationStyle":"custom"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index', {}, config || {}))



/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/index/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map