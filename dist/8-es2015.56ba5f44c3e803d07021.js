(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{MeHH:function(e,t,r){"use strict";r.r(t),r.d(t,"AsCategoryWidget",(function(){return c}));var a=r("uRwO"),i=r("3axi"),o=r("qzME"),s=r("8BBk"),n=r("12dI"),c=function(){function e(){this.categories=[],this.disableInteractivity=!1,this.valueFormatter=this.defaultFormatter,this.showClearButton=!1,this.showHeader=!0,this.useTotalPercentage=!1,this.visibleCategories=1/0,this.isLoading=!1,this.error="",this.errorDescription="",this.noDataHeaderMessage="NO DATA AVAILABLE",this.noDataBodyMessage="There is no data to display.",this.selectedCategories=[]}return e.prototype.defaultFormatter=function(e){return""+Object(o.a)(e)},e.prototype.getSelectedCategories=function(){return a.a(this,void 0,void 0,(function(){return a.b(this,(function(e){return[2,this.selectedCategories]}))}))},e.prototype.clearSelection=function(){return a.a(this,void 0,void 0,(function(){return a.b(this,(function(e){return this.selectedCategories.length?(this.selectedCategories=[],this._onCategoriesChanged(),[2]):[2]}))}))},e.prototype.render=function(){return[this._renderHeader(),this._renderSelection(),this._renderContent()]},e.prototype._renderSelection=function(){var e=this;if(this.isLoading||this._isEmpty()||this.error||!this.showClearButton)return"";var t=this.selectedCategories.length;return Object(i.b)("as-widget-selection",{selection:(t||"All")+" selected",clearText:"Clear selection",showClear:t>0,onClear:function(){return e.clearSelection()}})},e.prototype._renderHeader=function(){if(this.showHeader)return Object(i.b)("as-widget-header",{header:this.heading,subheader:this.description,"is-empty":this._isEmpty(),"is-loading":this.isLoading,error:this.error,"no-data-message":this.noDataHeaderMessage})},e.prototype._renderContent=function(){return Object(n.a)(this.isLoading,this.error,this._isEmpty(),this.heading,this.errorDescription,this.noDataBodyMessage,this._renderCategoryList())},e.prototype._renderCategoryList=function(){return Object(i.b)("ul",{class:{"as-category-widget__list":!0,"as-category-widget__list--disabled":this.disableInteractivity}},this._renderCategories())},e.prototype._renderCategories=function(){var e,t=this,r=this.categories.length>this.visibleCategories,a=this._parseCategories(),i=a.categories,o=a.otherCategory,s=i.slice(0,this.visibleCategories),n=this.useTotalPercentage?this._getCategoriesTotalValue(this.categories):this._getCategoriesMaximumValue(i,Boolean(o));return(o||r)&&(e=this._renderOtherCategory(o,{maximumValue:n})),[s.map((function(e){return t._renderCategory(e,{maximumValue:n})})),e]},e.prototype._renderCategory=function(e,t){var r=this,a=t.isOther,o=t.maximumValue,s=this._isSelected(e.name),n=this.selectedCategories.length>0,c={backgroundColor:this._getBarColor(e.color,{isSelected:s,isOther:a})||"var(--as--category-bar--color)",width:e.value/o*100+"%"},g={"as-category-widget__category":!0,"as-category-widget__category--not-selected":n&&(!s||a),"as-category-widget__category--other":a,"as-category-widget__category--selected":s},d=this.valueFormatter(e.value);return Object(i.b)("li",{class:g,onClick:function(){return r._toggleCategory(e)}},Object(i.b)("p",{class:"as-category-widget__info as-body"},Object(i.b)("div",{class:"as-category-widget__title"},e.name),d),Object(i.b)("div",{class:"as-category-widget__bar"},Object(i.b)("div",{class:"as-category-widget__bar-value",style:c})))},e.prototype._renderOtherCategory=function(e,t){var r=e||{name:"Other",value:this._getCategoriesTotalValue(this.categories.slice(this.visibleCategories,this.categories.length))};return this._renderCategory(r,{maximumValue:t.maximumValue,isOther:!0})},e.prototype._isSelected=function(e){return this.selectedCategories.includes(e)},e.prototype._toggleCategory=function(e){this.disableInteractivity||(this.selectedCategories=this._isSelected(e.name)?this.selectedCategories.filter((function(t){return t!==e.name})):this.selectedCategories.concat([e.name]),this._onCategoriesChanged())},e.prototype._onCategoriesChanged=function(){this.categoriesSelected.emit(this.selectedCategories)},e.prototype._getCategoriesMaximumValue=function(e,t){return void 0===t&&(t=!1),this._getVisibleCategories(e,t).reduce((function(e,t){return t.value>e?t.value:e}),0)},e.prototype._getCategoriesTotalValue=function(e){return e.reduce((function(e,t){return t.value+e}),0)},e.prototype._getBarColor=function(e,t){return void 0===t&&(t={}),t.isOther?"#747474":t.isSelected?Object(s.a)(-.16,e):e},e.prototype._parseCategories=function(){var e=this.categories.find((function(e){return"Other"===e.name}));return e?{categories:this.categories.filter((function(t){return t.name!==e.name})),otherCategory:e}:{categories:this.categories}},e.prototype._getVisibleCategories=function(e,t){return t?e:e.slice(0,this.visibleCategories)},e.prototype._isEmpty=function(){return!this.categories||!this.categories.length},Object.defineProperty(e,"is",{get:function(){return"as-category-widget"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{categories:{type:"Any",attr:"categories"},clearSelection:{method:!0},defaultBarColor:{type:String,attr:"default-bar-color"},description:{type:String,attr:"description"},disableInteractivity:{type:Boolean,attr:"disable-interactivity"},error:{type:String,attr:"error"},errorDescription:{type:String,attr:"error-description"},getSelectedCategories:{method:!0},heading:{type:String,attr:"heading"},isLoading:{type:Boolean,attr:"is-loading"},noDataBodyMessage:{type:String,attr:"no-data-body-message"},noDataHeaderMessage:{type:String,attr:"no-data-header-message"},selectedCategories:{state:!0},showClearButton:{type:Boolean,attr:"show-clear-button"},showHeader:{type:Boolean,attr:"show-header"},useTotalPercentage:{type:Boolean,attr:"use-total-percentage"},valueFormatter:{type:"Any",attr:"value-formatter"},visibleCategories:{type:Number,attr:"visible-categories"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"categoriesSelected",method:"categoriesSelected",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"as-category-widget{--as--category-bar--background-color:var(--as--color--ui-02,#f5f5f5);--as--category-bar--color:var(--as--color--complementary,#47db99);--as--category-widget--background-color:var(--as--color--ui-01,#fff);--as--category-widget--bar--height:4px;--as--category-widget--description--color:var(--as--color--type-02,#747474);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:228px;height:100%;overflow-y:auto;background:var(--as--category-widget--background-color)}as-category-widget .content{min-height:100px}as-category-widget .as-category-widget__count{color:var(--as--category-widget--description--color)}as-category-widget .as-category-widget__list{-ms-flex:1;flex:1;margin:0;padding:0;overflow-y:auto;list-style:none}as-category-widget .as-category-widget__list.as-category-widget__list--disabled li{pointer-events:none}as-category-widget .as-category-widget__footer{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}as-category-widget .as-category-widget__list+.as-category-widget__footer{margin-top:16px}as-category-widget .as-category-widget__info{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}as-category-widget .as-category-widget__title{-ms-flex:1;flex:1;width:100%;padding-right:8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}as-category-widget .as-category-widget__bar{position:relative;width:100%;height:var(--as--category-widget--bar--height);border-radius:2px;background-color:var(--as--category-bar--background-color)}as-category-widget .as-category-widget__bar-value{position:absolute;left:0;max-width:100%;height:var(--as--category-widget--bar--height);-webkit-transition:background .2s ease,opacity .5s ease;transition:background .2s ease,opacity .5s ease;border-radius:2px}as-category-widget .as-category-widget__category{margin-bottom:8px;cursor:pointer}as-category-widget .as-category-widget__category--other{pointer-events:none}as-category-widget .as-category-widget__category--not-selected{opacity:.5}as-category-widget .as-category-widget__category:not(.as-category-widget__category--selected):hover .as-category-widget__bar-value{opacity:.6}"},enumerable:!0,configurable:!0}),e}()},qzME:function(e,t,r){"use strict";function a(e){var t=Math.abs(Math.ceil(100*e)/100);if(t>=1e9)return((t/1e9).toFixed(1)+"G").padStart(5);if(t>=1e6)return((t/1e6).toFixed(1)+"M").padStart(5);if(t>=1e3)return((t/1e3).toFixed(1)+"K").padStart(5);var r=""+t;return r.padStart(6+Math.abs(r.length-3))}r.d(t,"a",(function(){return a}))}}]);