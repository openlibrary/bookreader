"use strict";(self.webpackChunk_internetarchive_bookreader=self.webpackChunk_internetarchive_bookreader||[]).push([[951],{5842:function(e,o,n){var t={};function r(e){return e&&decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null}function a(e,o,n,t,r,a){return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(o)+(n?"; expires=".concat(n.toUTCString()):"")+(r?"; domain=".concat(r):"")+(t?"; path=".concat(t):"")+(a?"; secure":""),!0}function u(e,o,n){return!!hasItem(e)&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain=".concat(n):"")+(o?"; path=".concat(o):""),!0)}n.r(t),n.d(t,{getItem:function(){return r},removeItem:function(){return u},setItem:function(){return a}}),n(1058),n(4916),n(4723),n(5306),n(4603),n(9714);var i,c=n(3609);BookReader.docCookies=t,c.extend(BookReader.defaultOptions,{enablePageResume:!0,resumeCookiePath:null}),BookReader.prototype.init=(i=BookReader.prototype.init,function(){var e=this;i.call(this),this.options.enablePageResume&&this.bind(BookReader.eventNames.fragmentChange,(function(){var o=e.paramsFromCurrent();e.updateResumeValue(o.index)}))}),BookReader.prototype.getResumeValue=function(){var e=BookReader.docCookies.getItem("br-resume");return null!==e?parseInt(e):null},BookReader.prototype.getCookiePath=function(e){return e.match(".+?(?=/page/|/mode/|$)")[0]},BookReader.prototype.updateResumeValue=function(e,o){var n=new Date(+new Date+12096e5),t=this.options.resumeCookiePath||this.getCookiePath(window.location.pathname);BookReader.docCookies.setItem(o||"br-resume",e,n,t,null,!1)}},4723:function(e,o,n){var t=n(7007),r=n(9670),a=n(7466),u=n(1340),i=n(4488),c=n(1530),s=n(7651);t("match",(function(e,o,n){return[function(o){var n=i(this),t=null==o?void 0:o[e];return void 0!==t?t.call(o,n):new RegExp(o)[e](u(n))},function(e){var t=r(this),i=u(e),d=n(o,t,i);if(d.done)return d.value;if(!t.global)return s(t,i);var l=t.unicode;t.lastIndex=0;for(var p,m=[],k=0;null!==(p=s(t,i));){var h=u(p[0]);m[k]=h,""===h&&(t.lastIndex=c(i,a(t.lastIndex),l)),k++}return 0===k?null:m}]}))}},function(e){e(e.s=5842)}]);
//# sourceMappingURL=plugin.resume.js.map