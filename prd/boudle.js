/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function () {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for (var i = 0; i < this.length; i++) {
			var item = this[i];
			if (item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let comUntils = {
	render(container, str) {
		document.querySelector(container).innerHTML = str;
	}
};

/* harmony default export */ __webpack_exports__["a"] = comUntils;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__untils_commonUntils_js__ = __webpack_require__(1);
var footballTpl = __webpack_require__(7);



__WEBPACK_IMPORTED_MODULE_0__untils_commonUntils_js__["a" /* default */].render('.box', footballTpl);

var navSwiper = null;
var homeSwiper = null;
new Vue({
	el: "#wrapFlex",
	data: {
		navTitle: ["足球现场", "足球生活", "足球美女"],
		navActive: 0,
		renderData: []
	},
	methods: {
		changePage(index) {
			homeSwiper.slideTo(index);
		}
	},
	mounted() {
		this.$http.get('./livelist.json').then(res => {
			console.log(res.data.data);
			this.renderData = res.data.data;
		}, res => {
			console.log("error" + res);
		});
		var that = this;
		setTimeout(function () {
			navSwiper = new Swiper('.guide-img', {
				onSlideChangeStart: function () {
					console.log(navSwiper.activeIndex);
					$("#titles span").eq(navSwiper.activeIndex).addClass('active').siblings().removeClass('active');
				}
			});

			homeSwiper = new Swiper('#home-content', {
				onSlideChangeStart: function () {
					that.navActive = homeSwiper.activeIndex;
					console.log(that.navActive);
				}
			});

			new IScroll('.cont');
		}, 500);
	}
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__untils_commonUntils_js__ = __webpack_require__(1);
var indexTpls = __webpack_require__(8);
// console.log(indexTpls)


__WEBPACK_IMPORTED_MODULE_0__untils_commonUntils_js__["a" /* default */].render('#app', indexTpls);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(9)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/lib/loader.js!./app.scss", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/lib/loader.js!./app.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports
exports.i(__webpack_require__(6), "");

// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * Yo框架全局Variables\n -----------------------\n * Yo基础变量map，如果不想定义某属性，将其value设置为null；\n * Yo仅使用2种长度单位：px用于边框，rem用于除边框之外的所有地方\n *\n * @class variables\n * @module Yo\n */\n/**\n * Yo框架全局基础方法\n -----------------------\n * Yo内置了包括响应式方案，CSS3兼容性方案，厂商前缀方案，iconfont方案，flex布局等全局方法\n *\n * @class classes\n * @module Yo\n */\n/**\n * 给需要的属性加厂家前缀\n * @method prefix\n * @param {String} $property 指定属性\n * @param {String} $value 指定属性值\n */\n/**\n * 四则运算\n * @method calc\n * @param {String} $property 指定需要进行计算的CSS属性\n * @param {String} $value 与原生CSS语法一致，使用方式如：@include calc(width, 100% - 0.1rem);\n */\n/**\n * 定义渐变色值\n * @method gradient\n * @param {String} $type 指定渐变的4种类型：linear, repeating-linear, radial, repeating-radial\n * @param {String} $gradient 指定渐变取值，与w3c最新原生语法一致\n */\n/**\n * 定义响应式方案\n * @method responsive\n * @param {String} $media 指定媒体查询条件\n */\n/**\n * 定义字体图标\n * @method yofont\n */\n/**\n * 滤镜\n * @method filter\n * @param {String} $filter 取值与原生语法一致\n */\n/**\n * 定义UA默认外观\n * @method appearance\n * @param {String} $appearance 指定UA外观类型\n */\n/**\n * 定义是否可以选中元素\n * @method user-select\n * @param {String} $user-select 指定是否可以选中\n */\n/**\n * 定义背景图像缩放（Android Browser2.3.*还需要厂商前缀）\n * @method background-size\n * @param {String | Length} $background-size 指定背景图缩放值\n */\n/**\n * 定义背景裁减（Android Browser2.3.*还需要厂商前缀）\n * @method background-clip\n * @param {String} $background-clip 指定背景图缩放值\n */\n/**\n * 定义背景显示区域（Android Browser2.3.*还需要厂商前缀）\n * @method background-origin\n * @param {String} $background-origin 指定背景图缩放值\n */\n/**\n * 定义盒模型\n * @method box-sizing\n * @param {String} $box-sizing 的2个值分别为：content-box(标准盒模型) | border-box(怪异盒模型)\n */\n/**\n * 定义圆角\n * @method border-radius\n * @param {String} $border-radius 取值与原生语法一致\n */\n/**\n * 定义简单变换\n * @method transform\n * @param {String} $transform 取值与原生语法一致\n */\n/**\n * 定义变换原点\n * @method transform-origin\n * @param {String} $transform-origin 取值与原生语法一致\n */\n/**\n * 定义动画\n * @method animation\n * @param {String} $animation 取值与原生语法一致\n */\n/**\n * 定义补间\n * @method transition\n * @param {String} $transition 取值与原生语法一致\n */\n/**\n * 定义显示类型为伸缩盒\n * @method flexbox\n * @param {String} $flexbox 默认值：flex，取值与最新原生语法一致\n */\n/**\n * 定义伸缩盒子元素如何分配空间\n * @method flex\n * @param {String} $flex 默认值：1，取值与最新原生语法一致\n * @param {String} $direction 默认值: row\n */\n/**\n * 定义伸缩盒子元素的排版顺序\n * @method order\n * @param {String} $order 默认值：1，取值与最新原生语法一致\n */\n/**\n * 定义伸缩盒子元素的流动方向\n * @method flex-direction\n * @param {String} $flex-direction 默认值：row，取值与最新原生语法一致\n */\n/**\n * 定义伸缩盒子元素溢出排版\n * @method flex-wrap\n * @param {String} $flex-wrap 默认值：nowrap，取值与最新原生语法一致\n */\n/**\n * 定义伸缩盒子元素的水平对齐方式\n * @method justify-content\n * @param {String} $justify-content 默认值：center，取值与最新原生语法一致\n */\n/**\n * 定义伸缩盒子元素的垂直对齐方式\n * @method align-items\n * @param {String} $align-items 默认值：center，取值与最新原生语法一致\n */\n/**\n * 定义伸缩盒子元素自身的垂直对齐方式\n * @method align-self\n * @param {String} $align-self 默认值：center，取值与最新原生语法一致\n */\n/**\n * 定义root root-scroll\n * @method root-scroll\n * @param {String} $root-scroll 指定scroll类型，取值overflow属性的标准值\n */\n/**\n * 定义是否有滚动条\n * @method overflow\n * @param {String} $overflow 默认值：auto，取值与最新原生语法一致\n */\n/**\n * 生成矩形方法\n * @method rect\n * @param {Length} $width 定义矩形的长度\n * @param {Length} $height 定义矩形的高度\n */\n/**\n * 生成正方形方法\n * @method square\n * @param {Length} $size 定义正方形的边长\n */\n/**\n * 生成圆形方法\n * @method circle\n * @param {Length} $size 定义圆的半径长度\n * @param {Length} $radius 定义圆的圆角半径长度\n */\n/**\n * 生成全屏方法\n * @method fullscreen\n * @param {Integer} $z-index 定义层叠级别\n */\n/**\n * 清除浮动方案\n * @method clearfix\n */\n/**\n * 链接处理方法\n * @method link\n * @param {Color} $color 定义链接颜色\n */\n/**\n * 强制换行方案\n * @method wrap\n */\n/**\n * 单行文本溢出显示方案\n * @method ellipsis\n * @param {Boolen} $ellipsis 定义是否需要省略号\n */\n/**\n * 文字隐藏方案\n * @method texthide\n */\n/**\n * 清除间隙方案-容器\n * @method killspace\n */\n/**\n * 清除间隙方案-子级\n * @method killspace-item\n */\n/**\n * 未知尺寸元素垂直居中解决方案-容器\n * @method valign\n */\n/**\n * 未知尺寸元素垂直居中解决方案-子级\n * @method valign-item\n */\n/**\n * 已经尺寸元素垂直居中解决方案\n * @method alignment\n * @param {Length} $width 居中元素的宽度\n * @param {Length} $height 居中元素的高度\n */\n/* border */\n/**\n * Yo框架全局Reset\n -----------------------\n * Yo重置Mobile及高级浏览器上常见的差异\n *\n * @class reset\n * @module Yo\n */\n*,\n::before,\n::after {\n  -webkit-tap-highlight-color: transparent; }\n\nhtml {\n  background-color: #fafafa;\n  color: #212121;\n  font-size: 100px;\n  -webkit-user-select: none;\n  user-select: none; }\n\nbody {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.5;\n  font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif; }\n\nul,\nol,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nfigure,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\nbutton,\np,\nblockquote,\nth,\ntd,\npre,\nxmp {\n  margin: 0;\n  padding: 0; }\n\ninput,\ntextarea,\nbutton,\nselect,\npre,\nxmp,\ntt,\ncode,\nkbd,\nsamp {\n  line-height: inherit;\n  font-family: inherit; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nsmall,\nbig,\ninput,\ntextarea,\nbutton,\nselect {\n  font-size: inherit; }\n\naddress,\ncite,\ndfn,\nem,\ni,\noptgroup,\nvar {\n  font-style: normal; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n  text-align: left; }\n\nul,\nol,\nmenu {\n  list-style: none; }\n\nfieldset,\nimg {\n  border: 0;\n  vertical-align: middle; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nvideo {\n  display: inline-block; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \" \"; }\n\ntextarea,\npre,\nxmp {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n\ntextarea {\n  resize: vertical; }\n\ninput,\ntextarea,\nbutton,\nselect\na {\n  outline: 0 none; }\n\ninput,\ntextarea,\nbutton,\nselect {\n  color: inherit; }\n  input:disabled,\n  textarea:disabled,\n  button:disabled,\n  select:disabled {\n    opacity: 1; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0; }\n\ninput[type=\"button\"],\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"file\"]::-webkit-file-upload-button,\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n  appearance: none; }\n\nmark {\n  background-color: transparent; }\n\na,\nins,\ns,\nu,\ndel {\n  text-decoration: none; }\n\na,\nimg {\n  -webkit-touch-callout: none; }\n\na {\n  color: #00afc7; }\n\n.g-clear::after,\n.g-mod::after {\n  display: block;\n  overflow: hidden;\n  clear: both;\n  height: 0;\n  content: \" \"; }\n\n@font-face {\n  font-family: yofont;\n  src: url(\"http://source.qunarzz.com/fonts/yo/1.0.0/yofont.woff\") format(\"woff\"), url(\"http://source.qunarzz.com/fonts/yo/1.0.0/yofont.ttf\") format(\"truetype\"); }\n\n.yo-ico {\n  font-family: yofont !important;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  vertical-align: middle; }\n\n.guide-img {\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n  .guide-img img {\n    width: 100%;\n    height: 100%; }\n\n.skip {\n  width: 113px;\n  height: 25px;\n  display: inline-block;\n  position: absolute;\n  bottom: 77px;\n  right: 69px; }\n\n.wrap {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column; }\n\n.wrap-flex {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n  width: .1px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  width: 100%;\n  height: 100%; }\n\n.box {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n  width: .1px;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column; }\n\n.header {\n  height: 44px;\n  line-height: 44px;\n  background-color: #0cc140; }\n  .header ul {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    text-align: center; }\n  .header ul li:not(:nth-child(2)) {\n    width: 44px;\n    font-size: 0.2rem;\n    color: #9effb0; }\n  .header ul li:nth-child(2) {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    flex: 1;\n    width: .1px;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    align-items: center; }\n    .header ul li:nth-child(2) p {\n      width: 1.18rem;\n      height: 0.25rem;\n      background: #abcdef;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      font-size: .12rem;\n      color: rgba(255, 255, 255, 0.7);\n      background: rgba(100, 217, 133, 0.7);\n      border-radius: 0.5rem;\n      -webkit-background-clip: padding-box !important;\n      background-clip: padding-box !important;\n      overflow: hidden; }\n      .header ul li:nth-child(2) p span {\n        width: 0.59rem;\n        height: .25rem;\n        text-align: center;\n        line-height: .25rem; }\n        .header ul li:nth-child(2) p span.active {\n          color: white;\n          background: #64d985; }\n\n.section {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  height: 100%;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column; }\n  .section ul {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    height: 44px;\n    width: 100%;\n    line-height: 44px;\n    text-align: center;\n    border-bottom: 1px solid #ccc; }\n    .section ul li {\n      -webkit-box-flex: 1;\n      -webkit-flex: 1;\n      flex: 1;\n      width: .1px; }\n      .section ul li.active {\n        color: #43a35c;\n        border-bottom: 1px solid #43a35c; }\n  .section .cont {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    flex: 1;\n    width: .1px;\n    width: 100%;\n    height: 100%;\n    overflow: hidden; }\n  .section .home-content {\n    width: 100%;\n    height: 100%;\n    overflow-y: auto; }\n    .section .home-content .main {\n      margin-top: 5px;\n      height: 100%; }\n    .section .home-content .main-one {\n      display: inline-block;\n      width: 50%;\n      /*&:nth-child(even){\r\n\t\t\t\tmargin-left: 9px;\r\n\t\t\t};*/ }\n      .section .home-content .main-one img {\n        width: 182.5px;\n        height: 182.5px;\n        display: block; }\n  .section .hotTitle {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    flex-direction: column; }\n\n.app {\n  height: 44px;\n  width: 100%;\n  text-align: center;\n  position: relative; }\n  .app::after {\n    pointer-events: none;\n    position: absolute;\n    z-index: 999;\n    top: 0;\n    left: 0;\n    content: \" \";\n    border-color: #ccc;\n    border-style: solid;\n    border-width: 1px 0 0 0;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0; }\n    @media screen and (orientation: portrait) {\n      .app::after {\n        width: 100%;\n        height: 100%; } }\n    @media (min--moz-device-pixel-ratio: 1.5), (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi), (min-resolution: 1.5dppx) {\n      .app::after {\n        width: 200%;\n        height: 200%;\n        -webkit-transform: scale(0.5);\n        transform: scale(0.5); } }\n    @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n      .app::after {\n        width: 300%;\n        height: 300%;\n        -webkit-transform: scale(0.33333);\n        transform: scale(0.33333); } }\n\n.footer {\n  height: 44px;\n  width: 100%;\n  text-align: center;\n  position: relative; }\n  .footer::after {\n    pointer-events: none;\n    position: absolute;\n    z-index: 999;\n    top: 0;\n    left: 0;\n    content: \" \";\n    border-color: #ccc;\n    border-style: solid;\n    border-width: 1px 0 0 0;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0; }\n    @media screen and (orientation: portrait) {\n      .footer::after {\n        width: 100%;\n        height: 100%; } }\n    @media (min--moz-device-pixel-ratio: 1.5), (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi), (min-resolution: 1.5dppx) {\n      .footer::after {\n        width: 200%;\n        height: 200%;\n        -webkit-transform: scale(0.5);\n        transform: scale(0.5); } }\n    @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n      .footer::after {\n        width: 300%;\n        height: 300%;\n        -webkit-transform: scale(0.33333);\n        transform: scale(0.33333); } }\n  .footer ul {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex; }\n  .footer ul li {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    flex: 1;\n    width: .1px;\n    color: #ccc;\n    /*position: relative;*/ }\n    .footer ul li i {\n      display: block;\n      font-size: 18px; }\n    .footer ul li b {\n      display: block;\n      margin-top: -4px;\n      font-size: 14px; }\n    .footer ul li.act {\n      color: green; }\n    .footer ul li:nth-child(3) i {\n      position: absolute !important;\n      background: #fff;\n      left: 50%;\n      top: -0.06rem;\n      width: 0.5rem;\n      height: 0.5rem;\n      position: relative;\n      border-radius: 50%;\n      -webkit-transform: translate(-50%, 0);\n      transform: translate(-50%, 0);\n      z-index: 1001;\n      font-size: .38rem;\n      line-height: 0.5rem; }\n      .footer ul li:nth-child(3) i::after {\n        pointer-events: none;\n        position: absolute;\n        z-index: 999;\n        top: 0;\n        left: 0;\n        content: \" \";\n        border-color: #333;\n        border-style: solid;\n        border-width: 1px;\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n        -webkit-transform-origin: 0 0;\n        transform-origin: 0 0; }\n        @media screen and (orientation: portrait) {\n          .footer ul li:nth-child(3) i::after {\n            width: 100%;\n            height: 100%;\n            border-radius: 50%; } }\n        @media (min--moz-device-pixel-ratio: 1.5), (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5), (min-resolution: 144dpi), (min-resolution: 1.5dppx) {\n          .footer ul li:nth-child(3) i::after {\n            width: 200%;\n            height: 200%;\n            -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n            border-radius: 100%; } }\n        @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n          .footer ul li:nth-child(3) i::after {\n            width: 300%;\n            height: 300%;\n            -webkit-transform: scale(0.33333);\n            transform: scale(0.33333);\n            border-radius: 150%; } }\n\n.wraps {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  flex-direction: column; }\n\n.box {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n  width: .1px;\n  width: 100%; }\n\n@font-face {\n  font-family: yofont;\n  src: url(\"/images/iconfont/iconfont.woff\") format(\"woff\"), url(\"/images/iconfont/iconfont.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: yofont;\n  src: url(\"/images/iconfont/iconfont-menu.woff\") format(\"woff\"), url(\"/images/iconfont/iconfont-menu.ttf\") format(\"truetype\"); }\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "/**\n * Swiper 3.3.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * \n * http://www.idangero.us/swiper/\n * \n * Copyright 2016, Vladimir Kharlampidi\n * The iDangero.us\n * http://www.idangero.us/\n * \n * Licensed under MIT\n * \n * Released on: February 7, 2016\n */\n.swiper-container{margin:0 auto;position:relative;overflow:hidden;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-moz-box-orient:vertical;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-transition-property:-webkit-transform;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-ms-transition-property:-ms-transform;transition-property:transform;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-o-transform:translate(0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.swiper-container-multirow>.swiper-wrapper{-webkit-box-lines:multiple;-moz-box-lines:multiple;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-ms-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex:0 0 auto;flex-shrink:0;width:100%;height:100%;position:relative}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-transition-property:-webkit-transform,height;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-ms-transition-property:-ms-transform;transition-property:transform,height}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-wp8-horizontal{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-wp8-vertical{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;-moz-background-size:27px 44px;-webkit-background-size:27px 44px;background-size:27px 44px;background-position:center;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-white .swiper-pagination-bullet{background:#fff}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);-moz-transform:translate3d(0,-50%,0);-o-transform:translate(0,-50%);-ms-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:5px 0;display:block}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 5px}.swiper-pagination-progress{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progress .swiper-pagination-progressbar{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);-o-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-moz-transform-origin:left top;-ms-transform-origin:left top;-o-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar{-webkit-transform-origin:right top;-moz-transform-origin:right top;-ms-transform-origin:right top;-o-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progress{width:100%;height:4px;left:0;top:0}.swiper-container-vertical>.swiper-pagination-progress{width:4px;height:100%;left:0;top:0}.swiper-pagination-progress.swiper-pagination-white{background:rgba(255,255,255,.5)}.swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar{background:#fff}.swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar{background:#000}.swiper-container-3d{-webkit-perspective:1200px;-moz-perspective:1200px;-o-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-coverflow .swiper-wrapper,.swiper-container-flip .swiper-wrapper{-ms-perspective:1200px}.swiper-container-cube,.swiper-container-flip{overflow:visible}.swiper-container-cube .swiper-slide,.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-cube .swiper-slide .swiper-slide,.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active,.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top,.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-slide{visibility:hidden;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-moz-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-ms-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-moz-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-moz-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;-moz-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}.swiper-lazy-preloader:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;-webkit-background-size:100%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{transform:rotate(360deg)}}", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-flex\" id=\"wrapFlex\">		<header class=\"header\">		<ul>			<li><i class=\"yo-ico menu\">&#xe745;</i></li>			<li>				<p id=\"titles\">					<span class=\"active\">热点</span>					<span>关注</span>				</p>			</li>			<li><i class=\"yo-ico sm\">&#xe684;</i></li>		</ul>	</header>	<section class=\"section\">		<div class=\"swiper-container guide-img\">			<div class=\"swiper-wrapper\">				<div class=\"swiper-slide hotTitle\">					<ul  id=\"title\">						<li v-for=\"(items,index) in navTitle\" :class=\"index == navActive? \'active\' : \' \' \" @click = \"changePage(index)\">{{index}}=={{items}}</li>					</ul>					<div class=\"cont\" id=\"cont\">						     <div>						<div class=\"swiper-container home-content\" id=\"home-content\">							<div class=\"swiper-wrapper\">								<div class=\"swiper-slide\">									<div class=\"main\">										<div class=\"main-one\" v-for=\"render in renderData\">											<img :src=\"render.img\">											<b>{{render.title}}</b>										</div>									</div>								</div>								<div class=\"swiper-slide\">									足球生活								</div>								<div class=\"swiper-slide\">									足球美女								</div>							</div>						</div>					     </div>					</div>				</div>				<div class=\"swiper-slide\">					关注中……				</div>			</div>		</div>			</section></div>"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\"></div><footer class=\"footer\">	<ul>		<li><i class=\"yo-ico\" >&#xe6bb;</i><b >首页</b></li>		<li><i class=\"yo-ico\" >&#xe65c;</i><b >发现</b></li>		<li><i class=\"yo-ico\">&#xe664;</i><b ></b></li>		<li><i class=\"yo-ico\" >&#xe735;</i><b >我的</b></li>		<li><i class=\"yo-ico\" >&#xe603;</i><b >退出</b></li>	</ul></footer> "

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_app_scss__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_app_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_app_scss__);
// 引入css


__webpack_require__(3);
__webpack_require__(2);

/***/ })
/******/ ]);
//# sourceMappingURL=boudle.js.map