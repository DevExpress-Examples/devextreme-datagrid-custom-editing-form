(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/devextreme/dist/css/dx.common.css":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/devextreme/dist/css/dx.common.css ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/**\n* DevExtreme (dx.common.css)\n* Version: 20.2.5\n* Build date: Fri Jan 15 2021\n*\n* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED\n* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/\n*/\n.dx-clearfix::after,\n.dx-clearfix::before {\n  display: table;\n  content: \"\";\n  line-height: 0;\n}\n.dx-clearfix::after {\n  clear: both;\n}\n.dx-translate-disabled {\n  -webkit-transform: none!important;\n  transform: none!important;\n}\n.dx-hidden-input {\n  position: fixed;\n  top: -10px;\n  left: -10px;\n  width: 0;\n  height: 0;\n}\n.dx-user-select {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n.dx-hidden,\n.dx-state-invisible {\n  display: none!important;\n}\n.dx-gesture-cover {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  opacity: 0;\n  z-index: 2147483647;\n}\n.dx-animating {\n  pointer-events: none;\n}\n.dx-fade-animation.dx-enter,\n.dx-fade-animation.dx-leave.dx-leave-active,\n.dx-no-direction.dx-enter,\n.dx-no-direction.dx-leave.dx-leave-active {\n  opacity: 0;\n}\n.dx-fade-animation.dx-enter.dx-enter-active,\n.dx-fade-animation.dx-leave,\n.dx-no-direction.dx-enter.dx-enter-active,\n.dx-no-direction.dx-leave {\n  opacity: 1;\n}\n.dx-overflow-animation.dx-enter.dx-forward {\n  -webkit-transform: translate3d(100%,0,0);\n  transform: translate3d(100%,0,0);\n  z-index: 2;\n}\n.dx-overflow-animation.dx-enter.dx-enter-active.dx-forward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  z-index: 2;\n}\n.dx-overflow-animation.dx-enter.dx-backward,\n.dx-overflow-animation.dx-enter.dx-enter-active.dx-backward,\n.dx-overflow-animation.dx-leave.dx-forward,\n.dx-overflow-animation.dx-leave.dx-leave-active.dx-forward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  z-index: 1;\n}\n.dx-overflow-animation.dx-leave.dx-backward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  z-index: 2;\n}\n.dx-overflow-animation.dx-leave.dx-leave-active.dx-backward {\n  -webkit-transform: translate3d(100%,0,0);\n  transform: translate3d(100%,0,0);\n  z-index: 2;\n}\n.dx-slide-animation.dx-enter.dx-forward {\n  -webkit-transform: translate3d(100%,0,0);\n  transform: translate3d(100%,0,0);\n}\n.dx-slide-animation.dx-enter.dx-enter-active.dx-forward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n}\n.dx-slide-animation.dx-enter.dx-backward {\n  -webkit-transform: translate3d(-100%,0,0);\n  transform: translate3d(-100%,0,0);\n}\n.dx-slide-animation.dx-enter.dx-enter-active.dx-backward,\n.dx-slide-animation.dx-leave.dx-forward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n}\n.dx-slide-animation.dx-leave.dx-leave-active.dx-forward {\n  -webkit-transform: translate3d(-100%,0,0);\n  transform: translate3d(-100%,0,0);\n}\n.dx-slide-animation.dx-leave.dx-backward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n}\n.dx-slide-animation.dx-leave.dx-leave-active.dx-backward {\n  -webkit-transform: translate3d(100%,0,0);\n  transform: translate3d(100%,0,0);\n}\n.dx-opendoor-animation.dx-enter.dx-forward {\n  -webkit-transform: matrix3d(.71,0,.71,.001,0,1,0,0,-.71,0,.71,0,0,0,0,1);\n  transform: matrix3d(.71,0,.71,.001,0,1,0,0,-.71,0,.71,0,0,0,0,1);\n  -webkit-transform-origin: center left 0;\n  transform-origin: center left 0;\n  opacity: 0;\n}\n.dx-opendoor-animation.dx-enter.dx-enter-active.dx-backward,\n.dx-opendoor-animation.dx-enter.dx-enter-active.dx-forward {\n  -webkit-transform: none;\n  transform: none;\n  opacity: 1;\n}\n.dx-opendoor-animation.dx-leave.dx-backward,\n.dx-opendoor-animation.dx-leave.dx-forward {\n  -webkit-transform: none;\n  transform: none;\n  -webkit-transform-origin: center left 0;\n  transform-origin: center left 0;\n  opacity: 1;\n}\n.dx-opendoor-animation.dx-enter.dx-backward,\n.dx-opendoor-animation.dx-leave.dx-leave-active.dx-forward {\n  -webkit-transform: matrix3d(.5,0,.87,-.001,0,1,0,0,-.87,0,.5,0,0,0,0,1);\n  transform: matrix3d(.5,0,.87,-.001,0,1,0,0,-.87,0,.5,0,0,0,0,1);\n  -webkit-transform-origin: center left 0;\n  transform-origin: center left 0;\n  opacity: 0;\n}\n.dx-opendoor-animation.dx-leave.dx-leave-active.dx-backward {\n  -webkit-transform: matrix3d(.71,0,.71,.001,0,1,0,0,-.71,0,.71,0,0,0,0,1);\n  transform: matrix3d(.71,0,.71,.001,0,1,0,0,-.71,0,.71,0,0,0,0,1);\n  opacity: 0;\n}\n.dx-win-pop-animation.dx-enter.dx-forward {\n  -webkit-transform: scale(.5);\n  transform: scale(.5);\n  opacity: 0;\n}\n.dx-win-pop-animation.dx-enter.dx-enter-active.dx-forward {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1;\n}\n.dx-win-pop-animation.dx-enter.dx-backward,\n.dx-win-pop-animation.dx-leave.dx-leave-active.dx-forward {\n  -webkit-transform: scale(1.5);\n  transform: scale(1.5);\n  opacity: 0;\n}\n.dx-win-pop-animation.dx-enter.dx-enter-active.dx-backward {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1;\n}\n.dx-win-pop-animation.dx-leave.dx-leave-active.dx-backward {\n  -webkit-transform: scale(.5);\n  transform: scale(.5);\n  opacity: 0;\n}\n.dx-android-pop-animation.dx-enter.dx-forward,\n.dx-android-pop-animation.dx-leave.dx-leave-active.dx-backward {\n  -webkit-transform: translate3d(0,150px,0);\n  transform: translate3d(0,150px,0);\n  opacity: 0;\n}\n.dx-android-pop-animation.dx-enter.dx-enter-active.dx-forward,\n.dx-android-pop-animation.dx-leave.dx-backward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  opacity: 1;\n}\n.dx-android-pop-animation.dx-enter.dx-forward,\n.dx-android-pop-animation.dx-leave.dx-backward {\n  z-index: 1;\n}\n.dx-ios7-slide-animation.dx-enter.dx-forward {\n  z-index: 2;\n  -webkit-transform: translate3d(100%,0,0);\n  transform: translate3d(100%,0,0);\n}\n.dx-ios7-slide-animation.dx-enter.dx-enter-active.dx-forward {\n  z-index: 2;\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n}\n.dx-ios7-slide-animation.dx-enter.dx-backward {\n  -webkit-transform: translate3d(-20%,0,0);\n  transform: translate3d(-20%,0,0);\n  z-index: 1;\n}\n.dx-ios7-slide-animation.dx-enter.dx-enter-active.dx-backward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  z-index: 1;\n}\n.dx-ios7-slide-animation.dx-leave.dx-forward {\n  z-index: 1;\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n}\n.dx-ios7-slide-animation.dx-leave.dx-leave-active.dx-forward {\n  -webkit-transform: translate3d(-20%,0,0);\n  transform: translate3d(-20%,0,0);\n  z-index: 1;\n}\n.dx-ios7-slide-animation.dx-leave.dx-backward {\n  z-index: 2;\n}\n.dx-ios7-slide-animation.dx-leave.dx-leave-active.dx-backward {\n  -webkit-transform: translate3d(100%,0,0);\n  transform: translate3d(100%,0,0);\n  z-index: 2;\n}\n.dx-ios7-toolbar-animation.dx-enter.dx-forward {\n  -webkit-transform: translate3d(40%,0,0);\n  transform: translate3d(40%,0,0);\n  opacity: 0;\n  z-index: 2;\n}\n.dx-ios7-toolbar-animation.dx-enter.dx-enter-active.dx-forward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  opacity: 1;\n  z-index: 2;\n}\n.dx-ios7-toolbar-animation.dx-enter.dx-backward {\n  -webkit-transform: translate3d(-40%,0,0);\n  transform: translate3d(-40%,0,0);\n  opacity: 0;\n  z-index: 1;\n}\n.dx-ios7-toolbar-animation.dx-enter.dx-enter-active.dx-backward,\n.dx-ios7-toolbar-animation.dx-leave.dx-forward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  opacity: 1;\n  z-index: 1;\n}\n.dx-ios7-toolbar-animation.dx-leave.dx-leave-active.dx-forward {\n  -webkit-transform: translate3d(-40%,0,0);\n  transform: translate3d(-40%,0,0);\n  opacity: 0;\n  z-index: 1;\n}\n.dx-ios7-toolbar-animation.dx-leave.dx-backward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  opacity: 1;\n  z-index: 2;\n}\n.dx-ios7-toolbar-animation.dx-leave.dx-leave-active.dx-backward {\n  -webkit-transform: translate3d(40%,0,0);\n  transform: translate3d(40%,0,0);\n  opacity: 0;\n  z-index: 2;\n}\n.dx-drop-animation.dx-enter,\n.dx-drop-animation.dx-leave.dx-leave-active {\n  -webkit-transform: translate3d(0,-120%,0);\n  transform: translate3d(0,-120%,0);\n}\n.dx-drop-animation.dx-enter.dx-enter-active,\n.dx-drop-animation.dx-leave {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n}\n.dx-3d-drop-animation.dx-enter,\n.dx-3d-drop-animation.dx-leave.dx-leave-active {\n  -webkit-transform: rotate3d(1,0,0,10deg) translate3d(0,-10px,0) scale3d(1.1,1.1,1.1);\n  transform: rotate3d(1,0,0,10deg) translate3d(0,-10px,0) scale3d(1.1,1.1,1.1);\n  opacity: 0;\n}\n.dx-3d-drop-animation.dx-enter.dx-enter-active,\n.dx-3d-drop-animation.dx-leave {\n  -webkit-transform: rotate3d(1,0,0,0) translate3d(0,0,0) scale3d(1,1,1);\n  transform: rotate3d(1,0,0,0) translate3d(0,0,0) scale3d(1,1,1);\n  opacity: 1;\n}\n.dx-fade-drop-animation.dx-enter,\n.dx-fade-drop-animation.dx-leave.dx-leave-active {\n  -webkit-transform: translate3d(0,-10px,0) scale3d(1.1,1.1,1.1);\n  transform: translate3d(0,-10px,0) scale3d(1.1,1.1,1.1);\n  opacity: 0;\n}\n.dx-fade-drop-animation.dx-enter.dx-enter-active,\n.dx-fade-drop-animation.dx-leave {\n  -webkit-transform: translate3d(0,0,0) scale3d(1,1,1);\n  transform: translate3d(0,0,0) scale3d(1,1,1);\n  opacity: 1;\n}\n.dx-fade-rise-animation.dx-enter,\n.dx-fade-rise-animation.dx-leave.dx-leave-active {\n  -webkit-transform: translate3d(0,10px,0) scale3d(1.1,1.1,1.1);\n  transform: translate3d(0,10px,0) scale3d(1.1,1.1,1.1);\n  opacity: 0;\n}\n.dx-fade-rise-animation.dx-enter.dx-enter-active,\n.dx-fade-rise-animation.dx-leave {\n  -webkit-transform: translate3d(0,0,0) scale3d(1,1,1);\n  transform: translate3d(0,0,0) scale3d(1,1,1);\n  opacity: 1;\n}\n.dx-fade-slide-animation.dx-enter,\n.dx-fade-slide-animation.dx-leave.dx-leave-active {\n  -webkit-transform: translate3d(40%,0,0);\n  transform: translate3d(40%,0,0);\n  opacity: 0;\n}\n.dx-fade-slide-animation.dx-enter.dx-enter-active,\n.dx-fade-slide-animation.dx-leave {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  opacity: 1;\n}\n.dx-fade-zoom-animation.dx-enter,\n.dx-fade-zoom-animation.dx-leave.dx-leave-active {\n  -webkit-transform: scale3d(.3,.3,.3);\n  transform: scale3d(.3,.3,.3);\n  opacity: 0;\n}\n.dx-fade-zoom-animation.dx-enter.dx-enter-active,\n.dx-fade-zoom-animation.dx-leave {\n  -webkit-transform: scale3d(1,1,1);\n  transform: scale3d(1,1,1);\n  opacity: 1;\n}\n.dx-color-scheme {\n  font-family: \"#\";\n}\n.dx-widget {\n  display: block;\n  -ms-content-zooming: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-text-size-adjust: none;\n  -webkit-touch-callout: none;\n  padding: 0;\n  outline: 0;\n  -webkit-print-color-adjust: exact;\n  color-adjust: exact;\n}\n.dx-widget,\n.dx-widget *,\n.dx-widget ::after,\n.dx-widget ::before,\n.dx-widget::after,\n.dx-widget::before {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.dx-item {\n  outline: 0;\n}\n.dx-rtl {\n  direction: rtl;\n  unicode-bidi: embed;\n}\n.dx-state-disabled {\n  pointer-events: none;\n}\n.dx-draggable {\n  left: 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n}\n.dx-draggable.dx-state-disabled,\n.dx-state-disabled .dx-draggable {\n  cursor: default;\n}\n.dx-draggable-clone {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2147483647;\n}\n.dx-sortable {\n  overflow: hidden;\n}\n.dx-sortable-dragging.dx-sortable-clone {\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  opacity: .9;\n  z-index: 2147483647;\n}\n.dx-sortable-dragging.dx-sortable-clone * {\n  cursor: pointer;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.dx-sortable-source {\n  opacity: .5;\n}\n.dx-sortable-source-hidden {\n  opacity: 0;\n}\n.dx-sortable-placeholder {\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  z-index: 2147483647;\n}\n.dx-sortable-placeholder-inside {\n  border-width: 2px;\n}\n.dx-card {\n  overflow: hidden;\n}\n.dx-box-item-content {\n  font-size: 14px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  max-width: 100%;\n}\n.dx-box-fallback-item > .dx-box-item-content {\n  width: 100%;\n  height: 100%;\n}\n.dx-buttongroup {\n  display: inline-block;\n}\n.dx-buttongroup-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: row nowrap;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  height: 100%;\n  width: 100%;\n}\n.dx-buttongroup-item {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 1 auto;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n}\n.dx-buttongroup-item.dx-button-mode-contained,\n.dx-buttongroup-item.dx-button-mode-outlined {\n  border-left-width: 0;\n}\n.dx-buttongroup-item.dx-button-mode-contained.dx-button,\n.dx-buttongroup-item.dx-button-mode-outlined.dx-button {\n  border-radius: 0;\n}\n.dx-buttongroup-item.dx-button-mode-text {\n  margin-left: 1px;\n}\n.dx-buttongroup-item-has-width {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n}\n.dx-checkbox {\n  display: inline-block;\n  cursor: pointer;\n  line-height: 0;\n  -webkit-user-drag: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n}\n.dx-checkbox.dx-state-readonly {\n  cursor: default;\n}\n.dx-checkbox-icon {\n  display: inline-block;\n  position: relative;\n  background-position: 0 0;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.dx-checkbox-container {\n  height: 100%;\n  width: 100%;\n  display: inline-block;\n  vertical-align: middle;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dx-checkbox-has-text .dx-checkbox-icon,\n.dx-checkbox-has-text .dx-checkbox-text {\n  vertical-align: middle;\n}\n.dx-checkbox-text {\n  display: inline-block;\n  vertical-align: middle;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  line-height: normal;\n  height: 100%;\n  width: 100%;\n}\n.dx-rtl .dx-checkbox-text,\n.dx-rtl.dx-checkbox-text {\n  margin: 0;\n  padding: 0;\n}\n.dx-state-disabled .dx-checkbox,\n.dx-state-disabled.dx-checkbox {\n  cursor: default;\n}\n.dx-map-container,\n.dx-map-shield {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  color: #000;\n}\n.dx-map-shield {\n  top: -100%;\n  left: 0;\n  background: rgba(0,0,0,.01);\n  opacity: .01;\n}\n.dx-textarea .dx-texteditor-input-container {\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n}\n.dx-textarea .dx-texteditor-input {\n  resize: none;\n  font-family: inherit;\n  display: block;\n  overflow: auto;\n  white-space: pre-wrap;\n  margin: 0;\n}\n.dx-textarea .dx-texteditor-input-auto-resize {\n  overflow-y: hidden;\n}\n.dx-textarea .dx-placeholder {\n  height: auto;\n}\n.dx-textarea .dx-placeholder::before {\n  white-space: normal;\n}\n.dx-tileview div.dx-scrollable-container {\n  overflow-y: hidden;\n}\n.dx-tile {\n  position: absolute;\n  text-align: center;\n}\n.dx-tile.dx-state-active {\n  -webkit-transform: scale(.96);\n  transform: scale(.96);\n  -webkit-transition: -webkit-transform .1s linear;\n  transition: -webkit-transform .1s linear;\n  transition: transform .1s linear;\n  transition: transform .1s linear, -webkit-transform .1s linear;\n  transition: transform .1s linear,-webkit-transform .1s linear;\n}\n.dx-tile-content {\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n.dx-tileview-wrapper {\n  position: relative;\n  height: 1px;\n}\n.dx-device-ios-6 .dx-tile {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.dx-tooltip-wrapper .dx-overlay-content {\n  min-width: 34px;\n  min-height: 26px;\n  text-align: center;\n  line-height: 0;\n}\n.dx-tooltip-wrapper .dx-overlay-content::before {\n  display: inline-block;\n  height: 100%;\n  content: \"\";\n  vertical-align: middle;\n}\n.dx-tooltip-wrapper .dx-overlay-content .dx-popup-content {\n  display: inline-block;\n  padding: 12px 17px;\n  font-size: .85em;\n  line-height: normal;\n  white-space: nowrap;\n}\n.dx-loadpanel-content {\n  padding: 10px;\n  border: 1px solid #ccc;\n  background: #fefefe;\n  text-align: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-user-drag: none;\n  border-radius: 5px;\n}\n.dx-loadpanel-content::before {\n  display: inline-block;\n  height: 100%;\n  content: \"\";\n  vertical-align: middle;\n}\n.dx-loadpanel-content-wrapper {\n  display: inline-block;\n  width: 100%;\n  vertical-align: middle;\n}\n.dx-loadpanel-message {\n  text-align: center;\n}\n.dx-loadpanel-content.dx-loadpanel-pane-hidden {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border: none;\n  background: 0 0;\n}\n@-webkit-keyframes dx-loadpanel-opacity {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes dx-loadpanel-opacity {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.dx-selectbox {\n  cursor: pointer;\n}\n.dx-selectbox .dx-texteditor-input {\n  max-width: 100%;\n}\n.dx-selectbox .dx-texteditor-input:-moz-read-only {\n  cursor: pointer;\n}\n.dx-selectbox .dx-texteditor-input:read-only {\n  cursor: pointer;\n}\n.dx-selectbox-container {\n  position: relative;\n}\n.dx-state-disabled .dx-selectbox .dx-texteditor-input,\n.dx-state-disabled.dx-selectbox .dx-texteditor-input {\n  cursor: default;\n}\n.dx-slideoutview {\n  height: 100%;\n  width: 100%;\n  -ms-touch-action: pinch-zoom;\n  touch-action: pinch-zoom;\n}\n.dx-slideoutview-wrapper {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n}\n.dx-slideoutview-menu-content {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n}\n.dx-slideoutview-menu-content.dx-slideoutview-right {\n  right: 0;\n}\n.dx-slideoutview-menu-content.dx-slideoutview-left {\n  left: 0;\n}\n.dx-slideoutview-content {\n  position: absolute;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 100;\n}\n.dx-slideoutview-shield {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n}\n.dx-device-android .dx-slideoutview-content {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.dx-slideout {\n  height: 100%;\n  width: 100%;\n}\n.dx-slideout-menu {\n  min-width: 280px;\n  max-width: 350px;\n}\n.dx-slideout-menu .dx-list-item .dx-icon {\n  float: left;\n  margin-right: 15px;\n  width: 24px;\n  height: 24px;\n  background-size: 100% 100%;\n}\n.dx-slideout-item,\n.dx-slideout-item-content {\n  height: 100%;\n  width: 100%;\n}\n.dx-rtl .dx-slideout-menu .dx-list-item .dx-icon {\n  float: right;\n  margin-right: 0;\n  margin-left: 15px;\n}\n.dx-tabpanel-tabs {\n  width: 100%;\n}\n.dx-tabpanel-tabs .dx-tabs {\n  height: 100%;\n}\n.dx-tabpanel-container {\n  width: 100%;\n  height: 100%;\n}\n.dx-validationsummary-item {\n  cursor: pointer;\n}\n.dx-invalid-message.dx-overlay {\n  position: relative;\n}\n.dx-invalid-message.dx-overlay-wrapper {\n  width: 100%;\n  visibility: hidden;\n  pointer-events: none;\n}\n.dx-invalid-message > .dx-overlay-content {\n  display: inline-block;\n  border-width: 0;\n  padding: 10px;\n  font-size: .85em;\n  line-height: normal;\n  word-wrap: break-word;\n}\n.dx-dropdownbox.dx-dropdowneditor-active .dx-invalid-message-auto,\n.dx-invalid-message-visible.dx-invalid .dx-invalid-message-auto,\n.dx-invalid-message.dx-invalid-message-always,\n.dx-lookup.dx-dropdowneditor-active .dx-invalid-message-auto,\n.dx-state-focused.dx-invalid .dx-invalid-message-auto {\n  visibility: visible;\n}\n.dx-fa-button .dx-overlay-content {\n  border-radius: 50%;\n  cursor: pointer;\n}\n.dx-deferrendering .dx-deferrendering-loadindicator-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.dx-deferrendering.dx-pending-rendering .dx-invisible-while-pending-rendering,\n.dx-deferrendering:not(.dx-pending-rendering) .dx-visible-while-pending-rendering {\n  display: none!important;\n}\n.dx-badge {\n  padding: 0 5px;\n  border-radius: 14px;\n  color: #fff;\n  font-size: 13px;\n  line-height: 1;\n}\n.dx-dropdownlist-popup-wrapper .dx-list {\n  min-height: 35px;\n}\n.dx-dropdownlist-popup-wrapper .dx-list .dx-scrollable-content {\n  margin: 0;\n}\n.dx-dropdownmenu-popup-wrapper .dx-dropdownmenu-list {\n  min-height: 40px;\n  min-width: 100px;\n}\n.dx-dropdownmenu-popup-wrapper .dx-dropdownmenu-list .dx-list-item {\n  display: block;\n}\n.dx-dropdownmenu-popup-wrapper .dx-dropdownmenu-list .dx-list-item:last-of-type {\n  border-bottom: none;\n}\n.dx-dropdownmenu-popup-wrapper .dx-dropdownmenu-list .dx-list-item-content {\n  display: block;\n}\n.dx-overlay-wrapper.dx-dropdownmenu-popup .dx-overlay-content .dx-popover-arrow {\n  width: 0;\n  height: 0;\n}\n.dx-dropdownmenu-popup-wrapper .dx-list-item {\n  display: block;\n}\n.dx-splitter-wrapper {\n  height: 100%;\n  width: 0;\n  position: absolute;\n  z-index: 998;\n  top: 0;\n}\n.dx-splitter-wrapper .dx-splitter-border {\n  z-index: 997;\n  height: 100%;\n  width: 7px;\n  cursor: col-resize;\n}\n.dx-splitter-wrapper .dx-splitter-border .dx-splitter {\n  height: 100%;\n  width: 1px;\n  display: block;\n  cursor: col-resize;\n  z-index: 999;\n  margin: auto;\n}\n.dx-splitter-wrapper .dx-splitter-border .dx-splitter.dx-splitter-inactive {\n  z-index: 998;\n}\n.dx-splitter-wrapper .dx-splitter-border .dx-splitter.dx-state-disabled {\n  width: 0;\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9kZXZleHRyZW1lL2Rpc3QvY3NzL2R4LmNvbW1vbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Q0FPQztBQUNEOztFQUVFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztBQUNYO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsT0FBTztFQUNQLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTs7OztFQUlFLFVBQVU7QUFDWjtBQUNBOzs7O0VBSUUsVUFBVTtBQUNaO0FBQ0E7RUFDRSx3Q0FBd0M7RUFDeEMsZ0NBQWdDO0VBQ2hDLFVBQVU7QUFDWjtBQUNBO0VBQ0UscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUM3QixVQUFVO0FBQ1o7QUFDQTs7OztFQUlFLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFDN0IsVUFBVTtBQUNaO0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsNkJBQTZCO0VBQzdCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usd0NBQXdDO0VBQ3hDLGdDQUFnQztFQUNoQyxVQUFVO0FBQ1o7QUFDQTtFQUNFLHdDQUF3QztFQUN4QyxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLHFDQUFxQztFQUNyQyw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLHlDQUF5QztFQUN6QyxpQ0FBaUM7QUFDbkM7QUFDQTs7RUFFRSxxQ0FBcUM7RUFDckMsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSx5Q0FBeUM7RUFDekMsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSx3Q0FBd0M7RUFDeEMsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSx3RUFBd0U7RUFDeEUsZ0VBQWdFO0VBQ2hFLHVDQUF1QztFQUN2QywrQkFBK0I7RUFDL0IsVUFBVTtBQUNaO0FBQ0E7O0VBRUUsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFDQTs7RUFFRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLHVDQUF1QztFQUN2QywrQkFBK0I7RUFDL0IsVUFBVTtBQUNaO0FBQ0E7O0VBRUUsdUVBQXVFO0VBQ3ZFLCtEQUErRDtFQUMvRCx1Q0FBdUM7RUFDdkMsK0JBQStCO0VBQy9CLFVBQVU7QUFDWjtBQUNBO0VBQ0Usd0VBQXdFO0VBQ3hFLGdFQUFnRTtFQUNoRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjtBQUNBOztFQUVFLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsVUFBVTtBQUNaO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixVQUFVO0FBQ1o7QUFDQTs7RUFFRSx5Q0FBeUM7RUFDekMsaUNBQWlDO0VBQ2pDLFVBQVU7QUFDWjtBQUNBOztFQUVFLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFDN0IsVUFBVTtBQUNaO0FBQ0E7O0VBRUUsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysd0NBQXdDO0VBQ3hDLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsVUFBVTtFQUNWLHFDQUFxQztFQUNyQyw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLHdDQUF3QztFQUN4QyxnQ0FBZ0M7RUFDaEMsVUFBVTtBQUNaO0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsNkJBQTZCO0VBQzdCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHFDQUFxQztFQUNyQyw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLHdDQUF3QztFQUN4QyxnQ0FBZ0M7RUFDaEMsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLHdDQUF3QztFQUN4QyxnQ0FBZ0M7RUFDaEMsVUFBVTtBQUNaO0FBQ0E7RUFDRSx1Q0FBdUM7RUFDdkMsK0JBQStCO0VBQy9CLFVBQVU7RUFDVixVQUFVO0FBQ1o7QUFDQTtFQUNFLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUNBO0VBQ0Usd0NBQXdDO0VBQ3hDLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBQ0E7O0VBRUUscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBQ0E7RUFDRSx3Q0FBd0M7RUFDeEMsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixVQUFVO0FBQ1o7QUFDQTtFQUNFLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUNBO0VBQ0UsdUNBQXVDO0VBQ3ZDLCtCQUErQjtFQUMvQixVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBQ0E7O0VBRUUseUNBQXlDO0VBQ3pDLGlDQUFpQztBQUNuQztBQUNBOztFQUVFLHFDQUFxQztFQUNyQyw2QkFBNkI7QUFDL0I7QUFDQTs7RUFFRSxvRkFBb0Y7RUFDcEYsNEVBQTRFO0VBQzVFLFVBQVU7QUFDWjtBQUNBOztFQUVFLHNFQUFzRTtFQUN0RSw4REFBOEQ7RUFDOUQsVUFBVTtBQUNaO0FBQ0E7O0VBRUUsOERBQThEO0VBQzlELHNEQUFzRDtFQUN0RCxVQUFVO0FBQ1o7QUFDQTs7RUFFRSxvREFBb0Q7RUFDcEQsNENBQTRDO0VBQzVDLFVBQVU7QUFDWjtBQUNBOztFQUVFLDZEQUE2RDtFQUM3RCxxREFBcUQ7RUFDckQsVUFBVTtBQUNaO0FBQ0E7O0VBRUUsb0RBQW9EO0VBQ3BELDRDQUE0QztFQUM1QyxVQUFVO0FBQ1o7QUFDQTs7RUFFRSx1Q0FBdUM7RUFDdkMsK0JBQStCO0VBQy9CLFVBQVU7QUFDWjtBQUNBOztFQUVFLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFDN0IsVUFBVTtBQUNaO0FBQ0E7O0VBRUUsb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUM1QixVQUFVO0FBQ1o7QUFDQTs7RUFFRSxpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHdDQUF3QztFQUN4Qyw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixVQUFVO0VBQ1YsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjtBQUNBOzs7Ozs7RUFNRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsT0FBTztFQUNQLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsMkJBQTJCO0FBQzdCO0FBQ0E7O0VBRUUsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxvQkFBb0I7QUFDdEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7O0VBRUUsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBOztFQUVFLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7RUFDVixPQUFPO0VBQ1AsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLFNBQVM7QUFDWDtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLGdEQUFnRDtFQUNoRCx3Q0FBZ0M7RUFBaEMsZ0NBQWdDO0VBQWhDLDhEQUFnQztFQUNoQyw2REFBNkQ7QUFDL0Q7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBQ0E7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztBQUNYO0FBQ0E7RUFDRSxRQUFRO0FBQ1Y7QUFDQTtFQUNFLE9BQU87QUFDVDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLG1DQUFtQztFQUNuQywyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWiwwQkFBMEI7QUFDNUI7QUFDQTs7RUFFRSxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBQ0E7Ozs7O0VBS0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsU0FBUztBQUNYO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osTUFBTTtBQUNSO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFFBQVE7RUFDUixlQUFlO0FBQ2pCIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9kZXZleHRyZW1lL2Rpc3QvY3NzL2R4LmNvbW1vbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogRGV2RXh0cmVtZSAoZHguY29tbW9uLmNzcylcbiogVmVyc2lvbjogMjAuMi41XG4qIEJ1aWxkIGRhdGU6IEZyaSBKYW4gMTUgMjAyMVxuKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDIxIERldmVsb3BlciBFeHByZXNzIEluYy4gQUxMIFJJR0hUUyBSRVNFUlZFRFxuKiBSZWFkIGFib3V0IERldkV4dHJlbWUgbGljZW5zaW5nIGhlcmU6IGh0dHBzOi8vanMuZGV2ZXhwcmVzcy5jb20vTGljZW5zaW5nL1xuKi9cbi5keC1jbGVhcmZpeDo6YWZ0ZXIsXG4uZHgtY2xlYXJmaXg6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjb250ZW50OiBcIlwiO1xuICBsaW5lLWhlaWdodDogMDtcbn1cbi5keC1jbGVhcmZpeDo6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cbi5keC10cmFuc2xhdGUtZGlzYWJsZWQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZSFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogbm9uZSFpbXBvcnRhbnQ7XG59XG4uZHgtaGlkZGVuLWlucHV0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IC0xMHB4O1xuICBsZWZ0OiAtMTBweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cbi5keC11c2VyLXNlbGVjdCB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG59XG4uZHgtaGlkZGVuLFxuLmR4LXN0YXRlLWludmlzaWJsZSB7XG4gIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xufVxuLmR4LWdlc3R1cmUtY292ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDIxNDc0ODM2NDc7XG59XG4uZHgtYW5pbWF0aW5nIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uZHgtZmFkZS1hbmltYXRpb24uZHgtZW50ZXIsXG4uZHgtZmFkZS1hbmltYXRpb24uZHgtbGVhdmUuZHgtbGVhdmUtYWN0aXZlLFxuLmR4LW5vLWRpcmVjdGlvbi5keC1lbnRlcixcbi5keC1uby1kaXJlY3Rpb24uZHgtbGVhdmUuZHgtbGVhdmUtYWN0aXZlIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5keC1mYWRlLWFuaW1hdGlvbi5keC1lbnRlci5keC1lbnRlci1hY3RpdmUsXG4uZHgtZmFkZS1hbmltYXRpb24uZHgtbGVhdmUsXG4uZHgtbm8tZGlyZWN0aW9uLmR4LWVudGVyLmR4LWVudGVyLWFjdGl2ZSxcbi5keC1uby1kaXJlY3Rpb24uZHgtbGVhdmUge1xuICBvcGFjaXR5OiAxO1xufVxuLmR4LW92ZXJmbG93LWFuaW1hdGlvbi5keC1lbnRlci5keC1mb3J3YXJkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7XG4gIHotaW5kZXg6IDI7XG59XG4uZHgtb3ZlcmZsb3ctYW5pbWF0aW9uLmR4LWVudGVyLmR4LWVudGVyLWFjdGl2ZS5keC1mb3J3YXJkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gIHotaW5kZXg6IDI7XG59XG4uZHgtb3ZlcmZsb3ctYW5pbWF0aW9uLmR4LWVudGVyLmR4LWJhY2t3YXJkLFxuLmR4LW92ZXJmbG93LWFuaW1hdGlvbi5keC1lbnRlci5keC1lbnRlci1hY3RpdmUuZHgtYmFja3dhcmQsXG4uZHgtb3ZlcmZsb3ctYW5pbWF0aW9uLmR4LWxlYXZlLmR4LWZvcndhcmQsXG4uZHgtb3ZlcmZsb3ctYW5pbWF0aW9uLmR4LWxlYXZlLmR4LWxlYXZlLWFjdGl2ZS5keC1mb3J3YXJkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gIHotaW5kZXg6IDE7XG59XG4uZHgtb3ZlcmZsb3ctYW5pbWF0aW9uLmR4LWxlYXZlLmR4LWJhY2t3YXJkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gIHotaW5kZXg6IDI7XG59XG4uZHgtb3ZlcmZsb3ctYW5pbWF0aW9uLmR4LWxlYXZlLmR4LWxlYXZlLWFjdGl2ZS5keC1iYWNrd2FyZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwwLDApO1xuICB6LWluZGV4OiAyO1xufVxuLmR4LXNsaWRlLWFuaW1hdGlvbi5keC1lbnRlci5keC1mb3J3YXJkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7XG59XG4uZHgtc2xpZGUtYW5pbWF0aW9uLmR4LWVudGVyLmR4LWVudGVyLWFjdGl2ZS5keC1mb3J3YXJkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG59XG4uZHgtc2xpZGUtYW5pbWF0aW9uLmR4LWVudGVyLmR4LWJhY2t3YXJkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTtcbn1cbi5keC1zbGlkZS1hbmltYXRpb24uZHgtZW50ZXIuZHgtZW50ZXItYWN0aXZlLmR4LWJhY2t3YXJkLFxuLmR4LXNsaWRlLWFuaW1hdGlvbi5keC1sZWF2ZS5keC1mb3J3YXJkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG59XG4uZHgtc2xpZGUtYW5pbWF0aW9uLmR4LWxlYXZlLmR4LWxlYXZlLWFjdGl2ZS5keC1mb3J3YXJkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTtcbn1cbi5keC1zbGlkZS1hbmltYXRpb24uZHgtbGVhdmUuZHgtYmFja3dhcmQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbn1cbi5keC1zbGlkZS1hbmltYXRpb24uZHgtbGVhdmUuZHgtbGVhdmUtYWN0aXZlLmR4LWJhY2t3YXJkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7XG59XG4uZHgtb3BlbmRvb3ItYW5pbWF0aW9uLmR4LWVudGVyLmR4LWZvcndhcmQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoLjcxLDAsLjcxLC4wMDEsMCwxLDAsMCwtLjcxLDAsLjcxLDAsMCwwLDAsMSk7XG4gIHRyYW5zZm9ybTogbWF0cml4M2QoLjcxLDAsLjcxLC4wMDEsMCwxLDAsMCwtLjcxLDAsLjcxLDAsMCwwLDAsMSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGxlZnQgMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGxlZnQgMDtcbiAgb3BhY2l0eTogMDtcbn1cbi5keC1vcGVuZG9vci1hbmltYXRpb24uZHgtZW50ZXIuZHgtZW50ZXItYWN0aXZlLmR4LWJhY2t3YXJkLFxuLmR4LW9wZW5kb29yLWFuaW1hdGlvbi5keC1lbnRlci5keC1lbnRlci1hY3RpdmUuZHgtZm9yd2FyZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIG9wYWNpdHk6IDE7XG59XG4uZHgtb3BlbmRvb3ItYW5pbWF0aW9uLmR4LWxlYXZlLmR4LWJhY2t3YXJkLFxuLmR4LW9wZW5kb29yLWFuaW1hdGlvbi5keC1sZWF2ZS5keC1mb3J3YXJkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gIHRyYW5zZm9ybTogbm9uZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgbGVmdCAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgbGVmdCAwO1xuICBvcGFjaXR5OiAxO1xufVxuLmR4LW9wZW5kb29yLWFuaW1hdGlvbi5keC1lbnRlci5keC1iYWNrd2FyZCxcbi5keC1vcGVuZG9vci1hbmltYXRpb24uZHgtbGVhdmUuZHgtbGVhdmUtYWN0aXZlLmR4LWZvcndhcmQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogbWF0cml4M2QoLjUsMCwuODcsLS4wMDEsMCwxLDAsMCwtLjg3LDAsLjUsMCwwLDAsMCwxKTtcbiAgdHJhbnNmb3JtOiBtYXRyaXgzZCguNSwwLC44NywtLjAwMSwwLDEsMCwwLC0uODcsMCwuNSwwLDAsMCwwLDEpO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBsZWZ0IDA7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBsZWZ0IDA7XG4gIG9wYWNpdHk6IDA7XG59XG4uZHgtb3BlbmRvb3ItYW5pbWF0aW9uLmR4LWxlYXZlLmR4LWxlYXZlLWFjdGl2ZS5keC1iYWNrd2FyZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBtYXRyaXgzZCguNzEsMCwuNzEsLjAwMSwwLDEsMCwwLC0uNzEsMCwuNzEsMCwwLDAsMCwxKTtcbiAgdHJhbnNmb3JtOiBtYXRyaXgzZCguNzEsMCwuNzEsLjAwMSwwLDEsMCwwLC0uNzEsMCwuNzEsMCwwLDAsMCwxKTtcbiAgb3BhY2l0eTogMDtcbn1cbi5keC13aW4tcG9wLWFuaW1hdGlvbi5keC1lbnRlci5keC1mb3J3YXJkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC41KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSguNSk7XG4gIG9wYWNpdHk6IDA7XG59XG4uZHgtd2luLXBvcC1hbmltYXRpb24uZHgtZW50ZXIuZHgtZW50ZXItYWN0aXZlLmR4LWZvcndhcmQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIG9wYWNpdHk6IDE7XG59XG4uZHgtd2luLXBvcC1hbmltYXRpb24uZHgtZW50ZXIuZHgtYmFja3dhcmQsXG4uZHgtd2luLXBvcC1hbmltYXRpb24uZHgtbGVhdmUuZHgtbGVhdmUtYWN0aXZlLmR4LWZvcndhcmQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICBvcGFjaXR5OiAwO1xufVxuLmR4LXdpbi1wb3AtYW5pbWF0aW9uLmR4LWVudGVyLmR4LWVudGVyLWFjdGl2ZS5keC1iYWNrd2FyZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgb3BhY2l0eTogMTtcbn1cbi5keC13aW4tcG9wLWFuaW1hdGlvbi5keC1sZWF2ZS5keC1sZWF2ZS1hY3RpdmUuZHgtYmFja3dhcmQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKC41KTtcbiAgb3BhY2l0eTogMDtcbn1cbi5keC1hbmRyb2lkLXBvcC1hbmltYXRpb24uZHgtZW50ZXIuZHgtZm9yd2FyZCxcbi5keC1hbmRyb2lkLXBvcC1hbmltYXRpb24uZHgtbGVhdmUuZHgtbGVhdmUtYWN0aXZlLmR4LWJhY2t3YXJkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMTUwcHgsMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwxNTBweCwwKTtcbiAgb3BhY2l0eTogMDtcbn1cbi5keC1hbmRyb2lkLXBvcC1hbmltYXRpb24uZHgtZW50ZXIuZHgtZW50ZXItYWN0aXZlLmR4LWZvcndhcmQsXG4uZHgtYW5kcm9pZC1wb3AtYW5pbWF0aW9uLmR4LWxlYXZlLmR4LWJhY2t3YXJkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gIG9wYWNpdHk6IDE7XG59XG4uZHgtYW5kcm9pZC1wb3AtYW5pbWF0aW9uLmR4LWVudGVyLmR4LWZvcndhcmQsXG4uZHgtYW5kcm9pZC1wb3AtYW5pbWF0aW9uLmR4LWxlYXZlLmR4LWJhY2t3YXJkIHtcbiAgei1pbmRleDogMTtcbn1cbi5keC1pb3M3LXNsaWRlLWFuaW1hdGlvbi5keC1lbnRlci5keC1mb3J3YXJkIHtcbiAgei1pbmRleDogMjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7XG59XG4uZHgtaW9zNy1zbGlkZS1hbmltYXRpb24uZHgtZW50ZXIuZHgtZW50ZXItYWN0aXZlLmR4LWZvcndhcmQge1xuICB6LWluZGV4OiAyO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbn1cbi5keC1pb3M3LXNsaWRlLWFuaW1hdGlvbi5keC1lbnRlci5keC1iYWNrd2FyZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAlLDAsMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwJSwwLDApO1xuICB6LWluZGV4OiAxO1xufVxuLmR4LWlvczctc2xpZGUtYW5pbWF0aW9uLmR4LWVudGVyLmR4LWVudGVyLWFjdGl2ZS5keC1iYWNrd2FyZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICB6LWluZGV4OiAxO1xufVxuLmR4LWlvczctc2xpZGUtYW5pbWF0aW9uLmR4LWxlYXZlLmR4LWZvcndhcmQge1xuICB6LWluZGV4OiAxO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbn1cbi5keC1pb3M3LXNsaWRlLWFuaW1hdGlvbi5keC1sZWF2ZS5keC1sZWF2ZS1hY3RpdmUuZHgtZm9yd2FyZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAlLDAsMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwJSwwLDApO1xuICB6LWluZGV4OiAxO1xufVxuLmR4LWlvczctc2xpZGUtYW5pbWF0aW9uLmR4LWxlYXZlLmR4LWJhY2t3YXJkIHtcbiAgei1pbmRleDogMjtcbn1cbi5keC1pb3M3LXNsaWRlLWFuaW1hdGlvbi5keC1sZWF2ZS5keC1sZWF2ZS1hY3RpdmUuZHgtYmFja3dhcmQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwwLDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTtcbiAgei1pbmRleDogMjtcbn1cbi5keC1pb3M3LXRvb2xiYXItYW5pbWF0aW9uLmR4LWVudGVyLmR4LWZvcndhcmQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNDAlLDAsMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNDAlLDAsMCk7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDI7XG59XG4uZHgtaW9zNy10b29sYmFyLWFuaW1hdGlvbi5keC1lbnRlci5keC1lbnRlci1hY3RpdmUuZHgtZm9yd2FyZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAyO1xufVxuLmR4LWlvczctdG9vbGJhci1hbmltYXRpb24uZHgtZW50ZXIuZHgtYmFja3dhcmQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTQwJSwwLDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00MCUsMCwwKTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMTtcbn1cbi5keC1pb3M3LXRvb2xiYXItYW5pbWF0aW9uLmR4LWVudGVyLmR4LWVudGVyLWFjdGl2ZS5keC1iYWNrd2FyZCxcbi5keC1pb3M3LXRvb2xiYXItYW5pbWF0aW9uLmR4LWxlYXZlLmR4LWZvcndhcmQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTtcbn1cbi5keC1pb3M3LXRvb2xiYXItYW5pbWF0aW9uLmR4LWxlYXZlLmR4LWxlYXZlLWFjdGl2ZS5keC1mb3J3YXJkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00MCUsMCwwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNDAlLDAsMCk7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4uZHgtaW9zNy10b29sYmFyLWFuaW1hdGlvbi5keC1sZWF2ZS5keC1iYWNrd2FyZCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAyO1xufVxuLmR4LWlvczctdG9vbGJhci1hbmltYXRpb24uZHgtbGVhdmUuZHgtbGVhdmUtYWN0aXZlLmR4LWJhY2t3YXJkIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDQwJSwwLDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDQwJSwwLDApO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAyO1xufVxuLmR4LWRyb3AtYW5pbWF0aW9uLmR4LWVudGVyLFxuLmR4LWRyb3AtYW5pbWF0aW9uLmR4LWxlYXZlLmR4LWxlYXZlLWFjdGl2ZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLC0xMjAlLDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsLTEyMCUsMCk7XG59XG4uZHgtZHJvcC1hbmltYXRpb24uZHgtZW50ZXIuZHgtZW50ZXItYWN0aXZlLFxuLmR4LWRyb3AtYW5pbWF0aW9uLmR4LWxlYXZlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG59XG4uZHgtM2QtZHJvcC1hbmltYXRpb24uZHgtZW50ZXIsXG4uZHgtM2QtZHJvcC1hbmltYXRpb24uZHgtbGVhdmUuZHgtbGVhdmUtYWN0aXZlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDEsMCwwLDEwZGVnKSB0cmFuc2xhdGUzZCgwLC0xMHB4LDApIHNjYWxlM2QoMS4xLDEuMSwxLjEpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDEsMCwwLDEwZGVnKSB0cmFuc2xhdGUzZCgwLC0xMHB4LDApIHNjYWxlM2QoMS4xLDEuMSwxLjEpO1xuICBvcGFjaXR5OiAwO1xufVxuLmR4LTNkLWRyb3AtYW5pbWF0aW9uLmR4LWVudGVyLmR4LWVudGVyLWFjdGl2ZSxcbi5keC0zZC1kcm9wLWFuaW1hdGlvbi5keC1sZWF2ZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgxLDAsMCwwKSB0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUzZCgxLDEsMSk7XG4gIHRyYW5zZm9ybTogcm90YXRlM2QoMSwwLDAsMCkgdHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlM2QoMSwxLDEpO1xuICBvcGFjaXR5OiAxO1xufVxuLmR4LWZhZGUtZHJvcC1hbmltYXRpb24uZHgtZW50ZXIsXG4uZHgtZmFkZS1kcm9wLWFuaW1hdGlvbi5keC1sZWF2ZS5keC1sZWF2ZS1hY3RpdmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwtMTBweCwwKSBzY2FsZTNkKDEuMSwxLjEsMS4xKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLC0xMHB4LDApIHNjYWxlM2QoMS4xLDEuMSwxLjEpO1xuICBvcGFjaXR5OiAwO1xufVxuLmR4LWZhZGUtZHJvcC1hbmltYXRpb24uZHgtZW50ZXIuZHgtZW50ZXItYWN0aXZlLFxuLmR4LWZhZGUtZHJvcC1hbmltYXRpb24uZHgtbGVhdmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlM2QoMSwxLDEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZTNkKDEsMSwxKTtcbiAgb3BhY2l0eTogMTtcbn1cbi5keC1mYWRlLXJpc2UtYW5pbWF0aW9uLmR4LWVudGVyLFxuLmR4LWZhZGUtcmlzZS1hbmltYXRpb24uZHgtbGVhdmUuZHgtbGVhdmUtYWN0aXZlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMTBweCwwKSBzY2FsZTNkKDEuMSwxLjEsMS4xKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDEwcHgsMCkgc2NhbGUzZCgxLjEsMS4xLDEuMSk7XG4gIG9wYWNpdHk6IDA7XG59XG4uZHgtZmFkZS1yaXNlLWFuaW1hdGlvbi5keC1lbnRlci5keC1lbnRlci1hY3RpdmUsXG4uZHgtZmFkZS1yaXNlLWFuaW1hdGlvbi5keC1sZWF2ZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUzZCgxLDEsMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlM2QoMSwxLDEpO1xuICBvcGFjaXR5OiAxO1xufVxuLmR4LWZhZGUtc2xpZGUtYW5pbWF0aW9uLmR4LWVudGVyLFxuLmR4LWZhZGUtc2xpZGUtYW5pbWF0aW9uLmR4LWxlYXZlLmR4LWxlYXZlLWFjdGl2ZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0MCUsMCwwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0MCUsMCwwKTtcbiAgb3BhY2l0eTogMDtcbn1cbi5keC1mYWRlLXNsaWRlLWFuaW1hdGlvbi5keC1lbnRlci5keC1lbnRlci1hY3RpdmUsXG4uZHgtZmFkZS1zbGlkZS1hbmltYXRpb24uZHgtbGVhdmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgb3BhY2l0eTogMTtcbn1cbi5keC1mYWRlLXpvb20tYW5pbWF0aW9uLmR4LWVudGVyLFxuLmR4LWZhZGUtem9vbS1hbmltYXRpb24uZHgtbGVhdmUuZHgtbGVhdmUtYWN0aXZlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjMsLjMsLjMpO1xuICB0cmFuc2Zvcm06IHNjYWxlM2QoLjMsLjMsLjMpO1xuICBvcGFjaXR5OiAwO1xufVxuLmR4LWZhZGUtem9vbS1hbmltYXRpb24uZHgtZW50ZXIuZHgtZW50ZXItYWN0aXZlLFxuLmR4LWZhZGUtem9vbS1hbmltYXRpb24uZHgtbGVhdmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLDEsMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUzZCgxLDEsMSk7XG4gIG9wYWNpdHk6IDE7XG59XG4uZHgtY29sb3Itc2NoZW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiI1wiO1xufVxuLmR4LXdpZGdldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtbXMtY29udGVudC16b29taW5nOiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgb3V0bGluZTogMDtcbiAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xuICBjb2xvci1hZGp1c3Q6IGV4YWN0O1xufVxuLmR4LXdpZGdldCxcbi5keC13aWRnZXQgKixcbi5keC13aWRnZXQgOjphZnRlcixcbi5keC13aWRnZXQgOjpiZWZvcmUsXG4uZHgtd2lkZ2V0OjphZnRlcixcbi5keC13aWRnZXQ6OmJlZm9yZSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5keC1pdGVtIHtcbiAgb3V0bGluZTogMDtcbn1cbi5keC1ydGwge1xuICBkaXJlY3Rpb246IHJ0bDtcbiAgdW5pY29kZS1iaWRpOiBlbWJlZDtcbn1cbi5keC1zdGF0ZS1kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmR4LWRyYWdnYWJsZSB7XG4gIGxlZnQ6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xufVxuLmR4LWRyYWdnYWJsZS5keC1zdGF0ZS1kaXNhYmxlZCxcbi5keC1zdGF0ZS1kaXNhYmxlZCAuZHgtZHJhZ2dhYmxlIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmR4LWRyYWdnYWJsZS1jbG9uZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAyMTQ3NDgzNjQ3O1xufVxuLmR4LXNvcnRhYmxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5keC1zb3J0YWJsZS1kcmFnZ2luZy5keC1zb3J0YWJsZS1jbG9uZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG9wYWNpdHk6IC45O1xuICB6LWluZGV4OiAyMTQ3NDgzNjQ3O1xufVxuLmR4LXNvcnRhYmxlLWRyYWdnaW5nLmR4LXNvcnRhYmxlLWNsb25lICoge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcbiAgY3Vyc29yOiBncmFiYmluZztcbn1cbi5keC1zb3J0YWJsZS1zb3VyY2Uge1xuICBvcGFjaXR5OiAuNTtcbn1cbi5keC1zb3J0YWJsZS1zb3VyY2UtaGlkZGVuIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5keC1zb3J0YWJsZS1wbGFjZWhvbGRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB6LWluZGV4OiAyMTQ3NDgzNjQ3O1xufVxuLmR4LXNvcnRhYmxlLXBsYWNlaG9sZGVyLWluc2lkZSB7XG4gIGJvcmRlci13aWR0aDogMnB4O1xufVxuLmR4LWNhcmQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmR4LWJveC1pdGVtLWNvbnRlbnQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uZHgtYm94LWZhbGxiYWNrLWl0ZW0gPiAuZHgtYm94LWl0ZW0tY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZHgtYnV0dG9uZ3JvdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZHgtYnV0dG9uZ3JvdXAtd3JhcHBlciB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtd2Via2l0LWZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgLW1zLWZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmR4LWJ1dHRvbmdyb3VwLWl0ZW0ge1xuICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAtd2Via2l0LWZsZXg6IDAgMSBhdXRvO1xuICAtbXMtZmxleDogMCAxIGF1dG87XG4gIGZsZXg6IDAgMSBhdXRvO1xufVxuLmR4LWJ1dHRvbmdyb3VwLWl0ZW0uZHgtYnV0dG9uLW1vZGUtY29udGFpbmVkLFxuLmR4LWJ1dHRvbmdyb3VwLWl0ZW0uZHgtYnV0dG9uLW1vZGUtb3V0bGluZWQge1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbn1cbi5keC1idXR0b25ncm91cC1pdGVtLmR4LWJ1dHRvbi1tb2RlLWNvbnRhaW5lZC5keC1idXR0b24sXG4uZHgtYnV0dG9uZ3JvdXAtaXRlbS5keC1idXR0b24tbW9kZS1vdXRsaW5lZC5keC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmR4LWJ1dHRvbmdyb3VwLWl0ZW0uZHgtYnV0dG9uLW1vZGUtdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG59XG4uZHgtYnV0dG9uZ3JvdXAtaXRlbS1oYXMtd2lkdGgge1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtd2Via2l0LWZsZXg6IDEgMSBhdXRvO1xuICAtbXMtZmxleDogMSAxIGF1dG87XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLmR4LWNoZWNrYm94IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xufVxuLmR4LWNoZWNrYm94LmR4LXN0YXRlLXJlYWRvbmx5IHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmR4LWNoZWNrYm94LWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmR4LWNoZWNrYm94LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZHgtY2hlY2tib3gtaGFzLXRleHQgLmR4LWNoZWNrYm94LWljb24sXG4uZHgtY2hlY2tib3gtaGFzLXRleHQgLmR4LWNoZWNrYm94LXRleHQge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmR4LWNoZWNrYm94LXRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmR4LXJ0bCAuZHgtY2hlY2tib3gtdGV4dCxcbi5keC1ydGwuZHgtY2hlY2tib3gtdGV4dCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5keC1zdGF0ZS1kaXNhYmxlZCAuZHgtY2hlY2tib3gsXG4uZHgtc3RhdGUtZGlzYWJsZWQuZHgtY2hlY2tib3gge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uZHgtbWFwLWNvbnRhaW5lcixcbi5keC1tYXAtc2hpZWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogIzAwMDtcbn1cbi5keC1tYXAtc2hpZWxkIHtcbiAgdG9wOiAtMTAwJTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMDEpO1xuICBvcGFjaXR5OiAuMDE7XG59XG4uZHgtdGV4dGFyZWEgLmR4LXRleHRlZGl0b3ItaW5wdXQtY29udGFpbmVyIHtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IHN0cmV0Y2g7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIC1tcy1mbGV4LWFsaWduOiBzdHJldGNoO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbi5keC10ZXh0YXJlYSAuZHgtdGV4dGVkaXRvci1pbnB1dCB7XG4gIHJlc2l6ZTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBtYXJnaW46IDA7XG59XG4uZHgtdGV4dGFyZWEgLmR4LXRleHRlZGl0b3ItaW5wdXQtYXV0by1yZXNpemUge1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG4uZHgtdGV4dGFyZWEgLmR4LXBsYWNlaG9sZGVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmR4LXRleHRhcmVhIC5keC1wbGFjZWhvbGRlcjo6YmVmb3JlIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbi5keC10aWxldmlldyBkaXYuZHgtc2Nyb2xsYWJsZS1jb250YWluZXIge1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG4uZHgtdGlsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmR4LXRpbGUuZHgtc3RhdGUtYWN0aXZlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45Nik7XG4gIHRyYW5zZm9ybTogc2NhbGUoLjk2KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcyBsaW5lYXIsLXdlYmtpdC10cmFuc2Zvcm0gLjFzIGxpbmVhcjtcbn1cbi5keC10aWxlLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmR4LXRpbGV2aWV3LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMXB4O1xufVxuLmR4LWRldmljZS1pb3MtNiAuZHgtdGlsZSB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uZHgtdG9vbHRpcC13cmFwcGVyIC5keC1vdmVybGF5LWNvbnRlbnQge1xuICBtaW4td2lkdGg6IDM0cHg7XG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDA7XG59XG4uZHgtdG9vbHRpcC13cmFwcGVyIC5keC1vdmVybGF5LWNvbnRlbnQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb250ZW50OiBcIlwiO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmR4LXRvb2x0aXAtd3JhcHBlciAuZHgtb3ZlcmxheS1jb250ZW50IC5keC1wb3B1cC1jb250ZW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMnB4IDE3cHg7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZHgtbG9hZHBhbmVsLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kOiAjZmVmZWZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5keC1sb2FkcGFuZWwtY29udGVudDo6YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZHgtbG9hZHBhbmVsLWNvbnRlbnQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZHgtbG9hZHBhbmVsLW1lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZHgtbG9hZHBhbmVsLWNvbnRlbnQuZHgtbG9hZHBhbmVsLXBhbmUtaGlkZGVuIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IDAgMDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBkeC1sb2FkcGFuZWwtb3BhY2l0eSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZHgtbG9hZHBhbmVsLW9wYWNpdHkge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uZHgtc2VsZWN0Ym94IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmR4LXNlbGVjdGJveCAuZHgtdGV4dGVkaXRvci1pbnB1dCB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5keC1zZWxlY3Rib3ggLmR4LXRleHRlZGl0b3ItaW5wdXQ6LW1vei1yZWFkLW9ubHkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZHgtc2VsZWN0Ym94IC5keC10ZXh0ZWRpdG9yLWlucHV0OnJlYWQtb25seSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5keC1zZWxlY3Rib3gtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmR4LXN0YXRlLWRpc2FibGVkIC5keC1zZWxlY3Rib3ggLmR4LXRleHRlZGl0b3ItaW5wdXQsXG4uZHgtc3RhdGUtZGlzYWJsZWQuZHgtc2VsZWN0Ym94IC5keC10ZXh0ZWRpdG9yLWlucHV0IHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmR4LXNsaWRlb3V0dmlldyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIC1tcy10b3VjaC1hY3Rpb246IHBpbmNoLXpvb207XG4gIHRvdWNoLWFjdGlvbjogcGluY2gtem9vbTtcbn1cbi5keC1zbGlkZW91dHZpZXctd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmR4LXNsaWRlb3V0dmlldy1tZW51LWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xufVxuLmR4LXNsaWRlb3V0dmlldy1tZW51LWNvbnRlbnQuZHgtc2xpZGVvdXR2aWV3LXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG59XG4uZHgtc2xpZGVvdXR2aWV3LW1lbnUtY29udGVudC5keC1zbGlkZW91dHZpZXctbGVmdCB7XG4gIGxlZnQ6IDA7XG59XG4uZHgtc2xpZGVvdXR2aWV3LWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwO1xufVxuLmR4LXNsaWRlb3V0dmlldy1zaGllbGQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcbn1cbi5keC1kZXZpY2UtYW5kcm9pZCAuZHgtc2xpZGVvdXR2aWV3LWNvbnRlbnQge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmR4LXNsaWRlb3V0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5keC1zbGlkZW91dC1tZW51IHtcbiAgbWluLXdpZHRoOiAyODBweDtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbn1cbi5keC1zbGlkZW91dC1tZW51IC5keC1saXN0LWl0ZW0gLmR4LWljb24ge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cbi5keC1zbGlkZW91dC1pdGVtLFxuLmR4LXNsaWRlb3V0LWl0ZW0tY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZHgtcnRsIC5keC1zbGlkZW91dC1tZW51IC5keC1saXN0LWl0ZW0gLmR4LWljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4uZHgtdGFicGFuZWwtdGFicyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmR4LXRhYnBhbmVsLXRhYnMgLmR4LXRhYnMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZHgtdGFicGFuZWwtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5keC12YWxpZGF0aW9uc3VtbWFyeS1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmR4LWludmFsaWQtbWVzc2FnZS5keC1vdmVybGF5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmR4LWludmFsaWQtbWVzc2FnZS5keC1vdmVybGF5LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5keC1pbnZhbGlkLW1lc3NhZ2UgPiAuZHgtb3ZlcmxheS1jb250ZW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItd2lkdGg6IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbi5keC1kcm9wZG93bmJveC5keC1kcm9wZG93bmVkaXRvci1hY3RpdmUgLmR4LWludmFsaWQtbWVzc2FnZS1hdXRvLFxuLmR4LWludmFsaWQtbWVzc2FnZS12aXNpYmxlLmR4LWludmFsaWQgLmR4LWludmFsaWQtbWVzc2FnZS1hdXRvLFxuLmR4LWludmFsaWQtbWVzc2FnZS5keC1pbnZhbGlkLW1lc3NhZ2UtYWx3YXlzLFxuLmR4LWxvb2t1cC5keC1kcm9wZG93bmVkaXRvci1hY3RpdmUgLmR4LWludmFsaWQtbWVzc2FnZS1hdXRvLFxuLmR4LXN0YXRlLWZvY3VzZWQuZHgtaW52YWxpZCAuZHgtaW52YWxpZC1tZXNzYWdlLWF1dG8ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLmR4LWZhLWJ1dHRvbiAuZHgtb3ZlcmxheS1jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZHgtZGVmZXJyZW5kZXJpbmcgLmR4LWRlZmVycmVuZGVyaW5nLWxvYWRpbmRpY2F0b3ItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmR4LWRlZmVycmVuZGVyaW5nLmR4LXBlbmRpbmctcmVuZGVyaW5nIC5keC1pbnZpc2libGUtd2hpbGUtcGVuZGluZy1yZW5kZXJpbmcsXG4uZHgtZGVmZXJyZW5kZXJpbmc6bm90KC5keC1wZW5kaW5nLXJlbmRlcmluZykgLmR4LXZpc2libGUtd2hpbGUtcGVuZGluZy1yZW5kZXJpbmcge1xuICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcbn1cbi5keC1iYWRnZSB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5keC1kcm9wZG93bmxpc3QtcG9wdXAtd3JhcHBlciAuZHgtbGlzdCB7XG4gIG1pbi1oZWlnaHQ6IDM1cHg7XG59XG4uZHgtZHJvcGRvd25saXN0LXBvcHVwLXdyYXBwZXIgLmR4LWxpc3QgLmR4LXNjcm9sbGFibGUtY29udGVudCB7XG4gIG1hcmdpbjogMDtcbn1cbi5keC1kcm9wZG93bm1lbnUtcG9wdXAtd3JhcHBlciAuZHgtZHJvcGRvd25tZW51LWxpc3Qge1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBtaW4td2lkdGg6IDEwMHB4O1xufVxuLmR4LWRyb3Bkb3dubWVudS1wb3B1cC13cmFwcGVyIC5keC1kcm9wZG93bm1lbnUtbGlzdCAuZHgtbGlzdC1pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZHgtZHJvcGRvd25tZW51LXBvcHVwLXdyYXBwZXIgLmR4LWRyb3Bkb3dubWVudS1saXN0IC5keC1saXN0LWl0ZW06bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5keC1kcm9wZG93bm1lbnUtcG9wdXAtd3JhcHBlciAuZHgtZHJvcGRvd25tZW51LWxpc3QgLmR4LWxpc3QtaXRlbS1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZHgtb3ZlcmxheS13cmFwcGVyLmR4LWRyb3Bkb3dubWVudS1wb3B1cCAuZHgtb3ZlcmxheS1jb250ZW50IC5keC1wb3BvdmVyLWFycm93IHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cbi5keC1kcm9wZG93bm1lbnUtcG9wdXAtd3JhcHBlciAuZHgtbGlzdC1pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZHgtc3BsaXR0ZXItd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk4O1xuICB0b3A6IDA7XG59XG4uZHgtc3BsaXR0ZXItd3JhcHBlciAuZHgtc3BsaXR0ZXItYm9yZGVyIHtcbiAgei1pbmRleDogOTk3O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA3cHg7XG4gIGN1cnNvcjogY29sLXJlc2l6ZTtcbn1cbi5keC1zcGxpdHRlci13cmFwcGVyIC5keC1zcGxpdHRlci1ib3JkZXIgLmR4LXNwbGl0dGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICB6LWluZGV4OiA5OTk7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5keC1zcGxpdHRlci13cmFwcGVyIC5keC1zcGxpdHRlci1ib3JkZXIgLmR4LXNwbGl0dGVyLmR4LXNwbGl0dGVyLWluYWN0aXZlIHtcbiAgei1pbmRleDogOTk4O1xufVxuLmR4LXNwbGl0dGVyLXdyYXBwZXIgLmR4LXNwbGl0dGVyLWJvcmRlciAuZHgtc3BsaXR0ZXIuZHgtc3RhdGUtZGlzYWJsZWQge1xuICB3aWR0aDogMDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/devextreme/dist/css/dx.light.css":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/devextreme/dist/css/dx.light.css ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RSIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/devextreme/dist/css/dx.common.css":
/*!********************************************************!*\
  !*** ./node_modules/devextreme/dist/css/dx.common.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./dx.common.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/devextreme/dist/css/dx.common.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/devextreme/dist/css/dx.light.css":
/*!*******************************************************!*\
  !*** ./node_modules/devextreme/dist/css/dx.light.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./dx.light.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/devextreme/dist/css/dx.light.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************************************************************************************************************!*\
  !*** multi ./node_modules/devextreme/dist/css/dx.common.css ./node_modules/devextreme/dist/css/dx.light.css ./src/styles.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Projects\workspace\DataGrid-How-to-implement-a-custom-editing-form-using-dxForm-and-dxPopup_20.1.3+\Angular\node_modules\devextreme\dist\css\dx.common.css */"./node_modules/devextreme/dist/css/dx.common.css");
__webpack_require__(/*! C:\Projects\workspace\DataGrid-How-to-implement-a-custom-editing-form-using-dxForm-and-dxPopup_20.1.3+\Angular\node_modules\devextreme\dist\css\dx.light.css */"./node_modules/devextreme/dist/css/dx.light.css");
module.exports = __webpack_require__(/*! C:\Projects\workspace\DataGrid-How-to-implement-a-custom-editing-form-using-dxForm-and-dxPopup_20.1.3+\Angular\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map