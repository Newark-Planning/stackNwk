(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{mZ3n:function(t,e,o){"use strict";o.r(e),o.d(e,"AsToolbar",(function(){return r}));var n=o("3axi"),r=function(){function t(){}return t.prototype.componentWillLoad=function(){this.actions=this.element.querySelector(".as-toolbar__actions")},t.prototype.componentWillUpdate=function(){this.actions=this.element.querySelector(".as-toolbar__actions")},t.prototype.render=function(){return Object(n.b)("header",{class:"as-toolbar"},this._renderToggleButton(),Object(n.b)("slot",null))},t.prototype._toggleDrawer=function(){this.actions.classList.toggle("as-toolbar__actions--visible")},t.prototype._renderToggleButton=function(){if(this.actions)return Object(n.b)("button",{onClick:this._toggleDrawer.bind(this),class:"as-toolbar__item as-toolbar__toggle"},Object(n.b)("i",{class:"as-icon as-icon-hamburger as-title as-m--0"}))},Object.defineProperty(t,"is",{get:function(){return"as-toolbar"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{element:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"as-toolbar{display:block;z-index:3}"},enumerable:!0,configurable:!0}),t}()}}]);