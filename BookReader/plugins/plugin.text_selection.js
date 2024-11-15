/*! For license information please see plugin.text_selection.js.LICENSE.txt */
"use strict";(self.webpackChunk_internetarchive_bookreader=self.webpackChunk_internetarchive_bookreader||[]).push([[326],{3036:function(t,e,r){r(2675),r(9463),r(6412),r(2259),r(5700),r(8125),r(8706),r(113),r(3418),r(3792),r(8598),r(2062),r(4490),r(4782),r(6910),r(9572),r(2010),r(4731),r(6033),r(479),r(8130),r(9085),r(3851),r(875),r(6099),r(8459),r(3362),r(825),r(888),r(7495),r(8781),r(9449),r(7764),r(2762),r(3500),r(2953);var n=r(1774),o=r(1669);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,l(n.key),n)}}function c(t,e,r){return(e=l(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t){var e=function(t,e){if("object"!=i(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==i(e)?e:e+""}var u=function(){return t=function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,"selecting",!1),c(this,"startedInSelector",!1),c(this,"target",null),c(this,"_onSelectionChange",(function(){var t=window.getSelection();if(!n.selecting&&t.toString()){var e=o(t.anchorNode).closest(n.selector)[0];if(!e)return;n.target=e,n.selecting=!0,n.handler("started",n.target)}!n.selecting||!t.isCollapsed&&t.toString()&&o(t.anchorNode).closest(n.selector)[0]||(n.selecting=!1,n.handler("cleared",n.target))})),this.selector=e,this.handler=r},(e=[{key:"attach",value:function(){document.addEventListener("selectionchange",this._onSelectionChange)}},{key:"detach",value:function(){document.removeEventListener("selectionchange",this._onSelectionChange)}}])&&a(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function f(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:h;return null==t?void 0:t.replace(/\{\{([^}]*?)\}\}/g,(function(t,o){if(!o)return t;var i,a=function(t){if(Array.isArray(t))return t}(i=o.split("|").map((function(t){return t.trim()})))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(i)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}(i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),c=a[0],l=a.slice(1);if(!(c in r)&&!(c in e))return t;var u=c in r?r[c]:c in e?e[c]:null;return l.map((function(t){return n[t]})).reduce((function(t,e){return e(t)}),u&&u.toString())}))}r(2712),r(5440);var h={urlencode:encodeURIComponent},p=r(1669);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}var y=R().mark(U),v=R().mark(H),g=R().mark(X);function m(t,e,r){return e=S(e),function(t,e){if(e&&("object"==d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,b()?Reflect.construct(e,r||[],S(t).constructor):e.apply(t,r))}function b(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(b=function(){return!!t})()}function w(t,e,r,n){var o=x(S(1&n?t.prototype:t),e,r);return 2&n&&"function"==typeof o?function(t){return o.apply(r,t)}:o}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},x.apply(null,arguments)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function P(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],l=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(t,e)||k(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=k(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function k(t,e){if(t){if("string"==typeof t)return O(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(t,e):void 0}}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function R(){R=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new _(n||[]);return o(a,"_invoke",{value:O(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="suspendedYield",y="executing",v="completed",g={};function m(){}function b(){}function w(){}var x={};u(x,a,(function(){return this}));var S=Object.getPrototypeOf,E=S&&S(S(B([])));E&&E!==r&&n.call(E,a)&&(x=E);var P=w.prototype=m.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var l=f(t[o],t,i);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==d(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function O(e,r,n){var o=h;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var l=L(c,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=f(e,r,n);if("normal"===u.type){if(o=n.done?v:p,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=v,n.method="throw",n.arg=u.arg)}}}function L(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function B(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(d(e)+" is not iterable")}return b.prototype=w,o(P,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:b,configurable:!0}),b.displayName=u(w,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,l,"GeneratorFunction")),t.prototype=Object.create(P),t},e.awrap=function(t){return{__await:t}},j(k.prototype),u(k.prototype,c,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(P),u(P,l,"Generator"),u(P,a,(function(){return this})),u(P,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=B,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:B(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function L(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function C(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){L(i,n,o,a,c,"next",t)}function c(t){L(i,n,o,a,c,"throw",t)}a(void 0)}))}}function A(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,T(n.key),n)}}function B(t,e,r){return e&&_(t.prototype,e),r&&_(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function T(t){var e=function(t,e){if("object"!=d(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==d(e)?e:e+""}var I=window.BookReader,D={enabled:!0,fullDjvuXmlUrl:null,singlePageDjvuXmlUrl:null,jsonp:!1},M=function(){return B((function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;A(this,t),this.maxSize=e,this.entries=[]}),[{key:"add",value:function(t){this.entries.length>=this.maxSize&&this.entries.shift(),this.entries.push(t)}}])}(),F=function(){return B((function t(){var e,r,n,o=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,a=arguments.length>1?arguments[1]:void 0,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"lr";A(this,t),e=this,n=function(t,e){if("started"===t)o.textSelectingMode(e);else{if("cleared"!==t)throw new Error("Unknown type ".concat(t));o.defaultMode(e)}},(r=T(r="_onSelectionChange"))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,this.options=i,this.optionVariables=a,this.djvuPagesPromise=null,this.rtl="rl"===c,this.pageTextCache=new M,this.maxWordRendered=2500,this.selectionObserver=new u(".BRtextLayer",this._onSelectionChange)}),[{key:"init",value:function(){this.selectionObserver.attach(),this.options.singlePageDjvuXmlUrl||(this.djvuPagesPromise=p.ajax({type:"GET",url:f(this.options.fullDjvuXmlUrl,this.optionVariables),dataType:this.options.jsonp?"jsonp":"html",cache:!0,error:function(t){}}).then((function(t){try{var e=p.parseXML(t);return e&&p(e).find("OBJECT")}catch(t){return}})))}},{key:"getPageText",value:(e=C(R().mark((function t(e){var r,n,o,i,a;return R().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.options.singlePageDjvuXmlUrl){t.next=19;break}if(!(r=this.pageTextCache.entries.find((function(t){return t.index==e})))){t.next=4;break}return t.abrupt("return",r.response);case 4:return t.next=6,p.ajax({type:"GET",url:f(this.options.singlePageDjvuXmlUrl,this.optionVariables,{pageIndex:e}),dataType:this.options.jsonp?"jsonp":"html",cache:!0,error:function(t){}});case 6:return n=t.sent,t.prev=7,o=p.parseXML(n),i=o&&p(o).find("OBJECT")[0],this.pageTextCache.add({index:e,response:i}),t.abrupt("return",i);case 14:return t.prev=14,t.t0=t.catch(7),t.abrupt("return",void 0);case 17:t.next=24;break;case 19:return t.next=21,this.djvuPagesPromise;case 21:if(!(a=t.sent)){t.next=24;break}return t.abrupt("return",a[e]);case 24:case"end":return t.stop()}}),t,this,[[7,14]])}))),function(t){return e.apply(this,arguments)})},{key:"interceptCopy",value:function(t){t[0].addEventListener("copy",(function(t){var e=document.getSelection();t.clipboardData.setData("text/plain",e.toString()),t.preventDefault()}))}},{key:"defaultMode",value:function(t){var e=this,r=p(t).closest(".BRpagecontainer");t.style.pointerEvents="none",r.find("img").css("pointer-events","auto"),p(t).off(".textSelectPluginHandler");var n=this.mouseIsDown,o=this.mouseIsDown;n&&(t.style.pointerEvents="auto"),p(t).on("mousedown.textSelectPluginHandler",(function(t){e.mouseIsDown=!0,p(t.target).is(".BRwordElement, .BRspace")&&t.stopPropagation()})),p(t).on("mouseup.textSelectPluginHandler",(function(r){e.mouseIsDown=!1,t.style.pointerEvents="none",o&&(o=!1,r.stopPropagation())}))}},{key:"textSelectingMode",value:function(t){var e=this,r=p(t).closest(".BRpagecontainer");t.style.pointerEvents="all",r.find("img").css("pointer-events","none"),p(t).off(".textSelectPluginHandler"),p(t).on("mousedown.textSelectPluginHandler",(function(t){e.mouseIsDown=!0,t.stopPropagation()})),p(t).on("mouseup.textSelectPluginHandler",(function(t){e.mouseIsDown=!1,t.stopPropagation()}))}},{key:"stopPageFlip",value:function(t){var e=this,r=t.find(".BRtextLayer");r.length&&(r.each((function(t,r){return e.defaultMode(r)})),this.interceptCopy(t))}},{key:"createTextLayer",value:(t=C(R().mark((function t(e){var r,o,i,a,c,l,u,s,f,h,d,y,v,g,m,b,w,x,S,E,k,O,L,C,A=this;return R().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.page.index,!(o=e.$container).find(".BRtextLayer").length){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,this.getPageText(r);case 7:if(i=t.sent){t.next=10;break}return t.abrupt("return");case 10:if($(i),!((a=p(i).find("WORD").length)>this.maxWordRendered)){t.next=15;break}return console.log("Page ".concat(r," has too many words (").concat(a," > ").concat(this.maxWordRendered,"). Not rendering text layer.")),t.abrupt("return");case 15:c=(0,n.Ql)(e.page,"BRtextLayer"),l=parseFloat(e.$container[0].style.width)/e.page.width,u=parseFloat(e.$container[0].style.height)/e.page.height,c.style.transform="scale(".concat(l,", ").concat(u,")"),c.setAttribute("dir",this.rtl?"rtl":"ltr"),s=p(i).find("PARAGRAPH[coords]").toArray(),f=s.map((function(t){var e=A.renderParagraph(t);return c.appendChild(e),e})),h=W(c,".BRparagraphElement"),d=0,y=j(X(s,f));try{for(y.s();!(v=y.n()).done;)g=P(v.value,2),m=g[0],b=g[1],w=p(m).attr("coords").split(",").map(parseFloat),x=h.get(b),S=P(w,4),E=S[0],k=S[2],O=S[3],L=this.rtl?x.right-k:E-x.left,C=O-(x.top+d),b.style[this.rtl?"marginRight":"marginLeft"]="".concat(L,"px"),b.style.marginTop="".concat(C,"px"),d+=C,c.appendChild(b)}catch(t){y.e(t)}finally{y.f()}o.append(c),this.stopPageFlip(o);case 28:case"end":return t.stop()}}),t,this)}))),function(e){return t.apply(this,arguments)})},{key:"renderParagraph",value:function(t){var e=document.createElement("p");e.classList.add("BRparagraphElement");var r=P(p(t).attr("coords").split(",").map(parseFloat),4),n=r[0],o=r[1],i=r[2],a=r[3],c=[],l=p(t).find("LINE[coords]").toArray();if(!l.length)return e;var u,s=j(H(U(l,G)));try{for(s.s();!(u=s.n()).done;){var f=P(u.value,3),h=f[0],d=f[1],y=f[2],v=d.ocrElement==l[l.length-1],g=document.createElement("span");g.classList.add("BRlineElement");var m,b=j(d.words.entries());try{for(b.s();!(m=b.n()).done;){var w=P(m.value,2),x=w[0],S=w[1],E=P(p(S).attr("coords").split(",").map(parseFloat),4),R=E[1],L=E[2],C=E[3],A=R-C;if(c.push(A),0==x&&null!=h&&h.lastWord.textContent.trim().endsWith("-")){var _=P(p((y||h).firstWord).attr("coords").split(",").map(parseFloat),3)[0];p(S).attr("coords","".concat(_,",").concat(R,",").concat(L,",").concat(C))}var B=document.createElement("span");if(B.setAttribute("class","BRwordElement"),B.textContent=S.textContent.trim(),x>0){var T=document.createElement("span");T.classList.add("BRspace"),T.textContent=" ",g.append(T),g.appendChild(document.createTextNode(" "))}g.appendChild(B)}}catch(t){b.e(t)}finally{b.f()}var I=d.lastWord.textContent.trim().endsWith("-"),D=g.children[g.children.length-1];I&&!v&&(D.textContent=D.textContent.trim().slice(0,-1),D.classList.add("BRwordElement--hyphen")),e.appendChild(g),v||I||e.appendChild(document.createTextNode(" "))}}catch(t){s.e(t)}finally{s.f()}c.sort((function(t,e){return t-e}));var M=c[Math.floor(.85*c.length)]+4;e.style.left="".concat(n,"px"),e.style.top="".concat(a,"px"),e.style.width="".concat(i-n,"px"),e.style.height="".concat(o-a,"px"),e.style.fontSize="".concat(M,"px");var F,N=W(e,".BRwordElement"),$=j(X(p(t).find("WORD").toArray(),e.querySelectorAll(".BRwordElement")));try{for($.s();!(F=$.n()).done;){var q=P(F.value,2),z=q[0],V=q[1],Y=N.get(V),J=P(p(z).attr("coords").split(",").map(parseFloat),3),Q=J[0],K=J[2]-Q;z.textContent.endsWith(" ")&&(K=K*(z.textContent.length-1)/z.textContent.length);var Z=K-Y.width;V.style.letterSpacing="".concat(Z/(z.textContent.length-1),"px")}}catch(t){$.e(t)}finally{$.f()}N=W(e,".BRwordElement");var tt,et,rt=W(e,".BRspace"),nt=p(t).find("LINE[coords]").toArray(),ot=Array.from(e.querySelectorAll(".BRlineElement")),it=a,at=j(X(nt,ot));try{for(at.s();!(tt=at.n()).done;){var ct,lt=P(tt.value,2),ut=lt[0],st=lt[1],ft=p(ut).find("WORD").toArray(),ht=this.rtl?i:n,pt=j(X(ft,st.querySelectorAll(".BRwordElement")));try{for(pt.s();!(ct=pt.n()).done;){var dt=P(ct.value,2),yt=dt[0],vt=dt[1],gt=N.get(vt),mt=P(p(yt).attr("coords").split(",").map(parseFloat),3),bt=mt[0],wt=mt[2],xt=this.rtl?-(wt-ht):bt-ht;if(vt.previousElementSibling){var St=vt.previousElementSibling;St.style.letterSpacing="".concat(xt-rt.get(St).width,"px")}else vt.style[this.rtl?"paddingRight":"paddingLeft"]="".concat(xt,"px");this.rtl?ht-=xt+gt.width:ht+=xt+gt.width}}catch(t){pt.e(t)}finally{pt.f()}var Et=Math.min.apply(Math,function(t){if(Array.isArray(t))return O(t)}(et=ft.map((function(t){return parseFloat(p(t).attr("coords").split(",")[3])})))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(et)||k(et)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())-it;st.previousElementSibling&&(st.previousElementSibling.style.lineHeight="".concat(Et,"px"),it+=Et)}}catch(t){at.e(t)}finally{at.f()}return ot[ot.length-1].style.lineHeight="".concat(o-it,"px"),e.appendChild(document.createElement("br")),e}}]);var t,e}(),N=function(t){function e(){return A(this,e),m(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(e,t),B(e,[{key:"init",value:function(){var t=this,r=Object.assign({},D,this.options.plugins.textSelection);r.enabled&&(this.textSelectionPlugin=new F(r,this.options.vars,this.pageProgression),this.options.plugins.textSelection=r,this.textSelectionPlugin.init(),new u(".BRtextLayer",(function(e){var r;"started"==e&&(null===(r=t.archiveAnalyticsSendEvent)||void 0===r||r.call(t,"BookReader","SelectStart"),t.refs.$br.find(".BRpagecontainer--hasSelection").removeClass("BRpagecontainer--hasSelection"),p(window.getSelection().anchorNode).closest(".BRpagecontainer").addClass("BRpagecontainer--hasSelection"))})).attach()),w(e,"init",this,3)([])}},{key:"_createPageContainer",value:function(t){var r,n=w(e,"_createPageContainer",this,3)([t]);return this.mode!==this.constModeThumb&&n.page&&(null===(r=this.textSelectionPlugin)||void 0===r||r.createTextLayer(n)),n}}])}(I);function W(t,e){var r={position:t.style.position,visibility:t.style.visibility,top:t.style.top,left:t.style.left,transform:t.style.transform};t.style.position="absolute",t.style.visibility="hidden",t.style.top="0",t.style.left="0",t.style.transform="none",document.body.appendChild(t);var n=new Map(Array.from(t.querySelectorAll(e)).map((function(t){var e=t.getBoundingClientRect();return[t,new q(e.left+window.scrollX,e.top+window.scrollY,e.width,e.height)]})));return document.body.removeChild(t),Object.assign(t.style,r),n}function G(t){var e=p(t).find("WORD").toArray();return{ocrElement:t,words:e,firstWord:e[0],lastWord:e[e.length-1]}}function U(t,e){var r,n,o;return R().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:r=j(t),i.prev=1,r.s();case 3:if((n=r.n()).done){i.next=9;break}return o=n.value,i.next=7,e(o);case 7:i.next=3;break;case 9:i.next=14;break;case 11:i.prev=11,i.t0=i.catch(1),r.e(i.t0);case 14:return i.prev=14,r.f(),i.finish(14);case 17:case"end":return i.stop()}}),y,null,[[1,11,14,17]])}function H(t){var e,r,n,o,i,a;return R().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:e=void 0,r=void 0,n=void 0,o=j(t),c.prev=4,o.s();case 6:if((i=o.n()).done){c.next=17;break}if(a=i.value,void 0===r){c.next=12;break}return n=a,c.next=12,[e,r,n];case 12:e=r,r=a,n=void 0;case 15:c.next=6;break;case 17:c.next=22;break;case 19:c.prev=19,c.t0=c.catch(4),o.e(c.t0);case 22:return c.prev=22,o.f(),c.finish(22);case 25:if(void 0===r){c.next=28;break}return c.next=28,[e,r,n];case 28:case"end":return c.stop()}}),v,null,[[4,19,22,25]])}function X(t,e){var r,n,o,i;return R().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=t[Symbol.iterator](),n=e[Symbol.iterator]();case 2:if(o=r.next(),i=n.next(),!o.done||!i.done){a.next=7;break}return a.abrupt("return");case 7:if(!o.done&&!i.done){a.next=9;break}throw new Error("zip: one of the iterators is done");case 9:return a.next=11,[o.value,i.value];case 11:a.next=2;break;case 13:case"end":return a.stop()}}),g)}function $(t){if(!p(t).attr("coords")&&t.children){var e=p(t).children().toArray();if(0!==e.length){var r,n=j(e);try{for(n.s();!(r=n.n()).done;)$(r.value)}catch(t){n.e(t)}finally{n.f()}var o,i=[],a=j(e);try{for(a.s();!(o=a.n()).done;){var c=o.value;p(c).attr("coords")&&i.push(p(c).attr("coords").split(",").map(parseFloat))}}catch(t){a.e(t)}finally{a.f()}var l=function(t){var e,r=1/0,n=-1/0,o=-1/0,i=1/0,a=j(t);try{for(a.s();!(e=a.n()).done;){var c=P(e.value,4),l=c[0],u=c[1],s=c[2],f=c[3];r=Math.min(r,l),n=Math.max(n,u),o=Math.max(o,s),i=Math.min(i,f)}}catch(t){a.e(t)}finally{a.f()}return[r,n,o,i]}(i);Math.abs(l[0])!=1/0&&p(t).attr("coords",l.join(","))}}}window.BookReader=N;var q=function(){return B((function t(e,r,n,o){A(this,t),this.x=e,this.y=r,this.width=n,this.height=o}),[{key:"right",get:function(){return this.x+this.width}},{key:"bottom",get:function(){return this.y+this.height}},{key:"top",get:function(){return this.y}},{key:"left",get:function(){return this.x}}])}()},706:function(t,e,r){var n=r(350).PROPER,o=r(9039),i=r(7452);t.exports=function(t){return o((function(){return!!i[t]()||"​᠎"!=="​᠎"[t]()||n&&i[t].name!==t}))}},2762:function(t,e,r){var n=r(6518),o=r(3802).trim;n({target:"String",proto:!0,forced:r(706)("trim")},{trim:function(){return o(this)}})}},function(t){t(t.s=3036)}]);
//# sourceMappingURL=plugin.text_selection.js.map