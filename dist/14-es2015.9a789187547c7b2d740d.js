(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Fd2h:function(t,e,s){"use strict";s.r(e),s.d(e,"AsSwitch",(function(){return i}));var a=s("3axi"),i=function(){function t(){}return t.prototype.componentDidLoad=function(){this.el.addEventListener("click",this._onClick.bind(this))},t.prototype._onClick=function(){var t=this.el.querySelector("input");this.disabled||(t.checked=!t.checked,this.checked=t.checked,this.change.emit(t.checked))},t.prototype.render=function(){return this.label?Object(a.b)("div",{class:"as-switch"},Object(a.b)("div",{class:"as-switch__element"},this._renderSwitch()),Object(a.b)("label",{class:"as-switch__label as-body"},this.label)):this._renderSwitch()},t.prototype._renderSwitch=function(){return[Object(a.b)("input",{class:"as-switch__input",checked:this.checked,disabled:this.disabled,role:"switch",id:this.el.id,name:this.name,type:"checkbox",title:this.el.title}),Object(a.b)("label",{class:"as-switch__toggle",htmlFor:this.el.id}),Object(a.b)("svg",{class:"as-switch__thumb",width:"10",height:"8",xmlns:"http://www.w3.org/2000/svg"},Object(a.b)("path",{fill:"currentColor",d:"M3.315 7.858L.133 4.441a.506.506 0 0 1 0-.683l.643-.684a.437.437 0 0 1 .642 0l2.219 2.393L8.58.141a.437.437 0 0 1 .643 0l.643.683a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0"}))]},Object.defineProperty(t,"is",{get:function(){return"as-switch"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{checked:{type:Boolean,attr:"checked",reflectToAttr:!0,mutable:!0},disabled:{type:Boolean,attr:"disabled",reflectToAttr:!0},el:{elementRef:!0},label:{type:String,attr:"label"},name:{type:String,attr:"name",reflectToAttr:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return'as-switch{--as--switch--color--background-active:var(--as--color--complementary,#47db99);--as--switch--color--background-checked:var(--as--color--primary,#1785fb);--as--switch--color--background-default:var(--as--color--type-03,#bababa);--as--switch--color--background-disabled:var(--as--color--ui-02,#f5f5f5);--as--switch--color--checked-thumb:var(--as--color--ui-01,#fff);--as--switch--color--color-disabled:var(--as--color--ui-04,#d1d5d7);--as--switch--color--thumb:var(--as--color--ui-01,#fff);display:inline-block;position:relative}as-switch .as-switch{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}as-switch .as-switch__label{margin:0 0 0 4px}as-switch .as-switch__thumb{position:absolute;top:50%;left:4px;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);-webkit-transition:opacity .2s ease;transition:opacity .2s ease;opacity:0;color:var(--as--switch--color--thumb);pointer-events:none}as-switch .as-switch__input{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);border:0}as-switch .as-switch__input+.as-switch__toggle{display:block;position:relative;width:32px;height:16px;-webkit-transition:all .4s ease;transition:all .4s ease;border-radius:40px;outline:0;background:var(--as--switch--color--background-default);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}as-switch .as-switch__toggle:hover{background:var(--as--switch--color--background-active)}as-switch .as-switch__input+.as-switch__toggle:after{content:"";display:block;position:relative;top:2px;width:12px;height:12px;-webkit-transform:translateX(2px);transform:translateX(2px);-webkit-transition:all .2s ease;transition:all .2s ease;border-radius:50%;background:var(--as--switch--color--thumb)}as-switch .as-switch__input[disabled]+.as-switch__toggle{background:var(--as--switch--color--background-disabled);-webkit-box-shadow:inset 0 0 0 1px var(--as--color--ui-03);box-shadow:inset 0 0 0 1px var(--as--color--ui-03);cursor:not-allowed}as-switch .as-switch__input[disabled]+.as-switch__toggle:after{background:var(--as--switch--color--color-disabled)}as-switch .as-switch__input:checked+.as-switch__toggle,as-switch .as-switch__input:checked+.as-switch__toggle:hover{background:var(--as--switch--color--background-checked)}as-switch .as-switch__input:checked+.as-switch__toggle:after{-webkit-transform:translateX(18px);transform:translateX(18px);background:var(--as--switch--color--checked-thumb)}as-switch .as-switch__input:checked~svg{opacity:1;color:var(--as--switch--color--checked-thumb)}'},enumerable:!0,configurable:!0}),t}()}}]);