(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{iIUY:function(e,i,n){"use strict";n.r(i),n.d(i,"AsLegendSizeBinsPoint",(function(){return a}));var s=n("3axi"),t=n("miZT"),a=function(){function e(){this.orientation="vertical",this.width=null}return e.prototype.render=function(){var e,i=this;if(!this.data)return null;var n=((e={"as-legend-size-bins-point--steps":!0})["as-legend-size-bins-point--"+this.orientation]=!0,e);return this.maxSize=this.width||this.data.slice().sort((function(e,i){return i.width-e.width}))[0].width,Object(s.b)("div",{class:n},this.data.map((function(e){return i.renderStep(e)})))},e.prototype.renderStep=function(e){var i="1px "+(e.strokeStyle||"solid")+" "+e.strokeColor,n=Object(t.a)(e.strokeStyle)?2:0,a=Math.round(e.width)+n,o=a+"px",l=(a>this.maxSize?a:this.maxSize+n)+"px",r=this.getMask(e),p={};"horizontal"===this.orientation?p.height=l:"vertical"===this.orientation&&(p.width=l);var d=Object.assign({backgroundColor:e.color,border:i,height:o,width:o},r);return Object(s.b)("div",{class:"as-legend-size-bins-point--step"},Object(s.b)("div",{style:p,class:"as-legend-size-bins-point--circle-wrapper"},Object(s.b)("div",{class:"as-legend-size-bins-point--circle",style:d})),Object(s.b)("span",{class:"as-legend-size-bins-point--label"},e.label))},e.prototype.getMask=function(e){return e.marker?{"-webkit-mask-image":"url("+e.marker+")","-webkit-mask-position":"center","-webkit-mask-repeat":"no-repeat","-webkit-mask-size":e.width+"px",maskImage:"url("+e.marker+")",maskPosition:"center",maskRepeat:"no-repeat",maskSize:e.width+"px"}:{}},Object.defineProperty(e,"is",{get:function(){return"as-legend-size-bins-point"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{data:{type:"Any",attr:"data"},orientation:{type:String,attr:"orientation"},width:{type:Number,attr:"width"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"as-legend-size-bins-point{--as-legend-size-bins-point--color:var(--as--color--type-01);--as-legend-size-bins-point--shadow:rgba(0,0,0,0.1);display:block}as-legend-size-bins-point .as-legend-size-bins-point--steps{display:-ms-flexbox;display:flex}as-legend-size-bins-point .as-legend-size-bins-point--step{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}as-legend-size-bins-point .as-legend-size-bins-point--circle{border-radius:50%;-webkit-box-shadow:-1px 0 2px 0 var(--as-legend-size-bins-point--shadow);box-shadow:-1px 0 2px 0 var(--as-legend-size-bins-point--shadow)}as-legend-size-bins-point .as-legend-size-bins-point--circle-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}as-legend-size-bins-point .as-legend-size-bins-point--label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:var(--as-legend-size-bins-point--color);font:var(--as--font--caption);text-transform:capitalize;white-space:nowrap}as-legend-size-bins-point .as-legend-size-bins-point--horizontal{-ms-flex-direction:row;flex-direction:row;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:distribute;justify-content:space-around}as-legend-size-bins-point .as-legend-size-bins-point--horizontal .as-legend-size-bins-point--step{-ms-flex-direction:column;flex-direction:column;margin:0 4px}as-legend-size-bins-point .as-legend-size-bins-point--horizontal .as-legend-size-bins-point--step:first-of-type{margin-left:0}as-legend-size-bins-point .as-legend-size-bins-point--horizontal .as-legend-size-bins-point--step:last-of-type{margin-right:0}as-legend-size-bins-point .as-legend-size-bins-point--horizontal .as-legend-size-bins-point--label{margin-top:8px}as-legend-size-bins-point .as-legend-size-bins-point--horizontal .as-legend-size-bins-point--circle-wrapper{-ms-flex-align:end;align-items:flex-end}as-legend-size-bins-point .as-legend-size-bins-point--vertical{-ms-flex-direction:column;flex-direction:column}as-legend-size-bins-point .as-legend-size-bins-point--vertical .as-legend-size-bins-point--label{margin-left:8px}as-legend-size-bins-point .as-legend-size-bins-point--vertical .as-legend-size-bins-point--step:not(:first-of-type){margin-top:8px}"},enumerable:!0,configurable:!0}),e}()}}]);