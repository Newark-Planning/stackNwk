(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{QsLC:function(e,t,i){"use strict";i.r(t),i.d(t,"AsYAxis",(function(){return n}));var r=i("B0T9"),n=(i("qzME"),i("5H7m"),function(){function e(){this.from=0,this.to=0,this.responsive=!0,this._resizeListener=this._resizeListener.bind(this)}return e.prototype.componentWillLoad=function(){addEventListener("resize",this._resizeListener)},e.prototype.componentDidUnload=function(){removeEventListener("resize",this._resizeListener)},e.prototype.render=function(){r.a.renderYAxis(this.element.previousElementSibling,[this.from,this.to])},e.prototype._resizeListener=function(){this.responsive&&this.element.forceUpdate()},Object.defineProperty(e,"is",{get:function(){return"as-y-axis"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{element:{elementRef:!0},from:{type:Number,attr:"from"},responsive:{type:Boolean,attr:"responsive"},to:{type:Number,attr:"to"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".y-axis{--widget-axis-text-color:var(--as--color--type-01,#2c2c2c);--widget-axis-line-color:var(--as--color--ui-05,#b3b3b3)}.y-axis .tick text{width:30px;fill:var(--widget-axis-text-color);white-space:pre}.y-axis .tick line{stroke:var(--widget-axis-line-color);opacity:.1}.y-axis .tick line.zero{opacity:.5}.y-axis .domain{display:none}"},enumerable:!0,configurable:!0}),e}())}}]);