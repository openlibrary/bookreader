(self.webpackChunk_internetarchive_bookreader=self.webpackChunk_internetarchive_bookreader||[]).push([[423],{4529:function(t,e,n){"use strict";n(2222),n(9826),n(6992),n(1249),n(9601),n(1539),n(4916),n(9714),n(3123),n(3948),n(5666);var r=n(7775);function o(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:u;return null==t?void 0:t.replace(/\{\{([^}]*?)\}\}/g,(function(t,i){if(!i)return t;var a=o(i.split("|").map((function(t){return t.trim()}))),u=a[0],c=a.slice(1);if(!(u in n)&&!(u in e))return t;var s=u in n?n[u]:u in e?e[u]:null;return c.map((function(t){return r[t]})).reduce((function(t,e){return e(t)}),s&&s.toString())}))}n(2526),n(1817),n(2165),n(1038),n(5827),n(7042),n(8783),n(5306),n(3210);var u={urlencode:encodeURIComponent},c=n(3609);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function v(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function y(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){v(i,r,o,a,u,"next",t)}function u(t){v(i,r,o,a,u,"throw",t)}a(void 0)}))}}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,e,n){return e&&b(t.prototype,e),n&&b(t,n),t}var S=window.BookReader,x={enabled:!0,fullDjvuXmlUrl:null,singlePageDjvuXmlUrl:null},P=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;m(this,t),this.maxSize=e,this.entries=[]}return w(t,[{key:"add",value:function(t){this.entries.length>=this.maxSize&&this.entries.shift(),this.entries.push(t)}}]),t}(),O=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,r.vU)(),i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:(0,r.G6)();m(this,t),this.options=e,this.optionVariables=n,this.djvuPagesPromise=null,this.svgParagraphElement="text",this.svgWordElement="tspan",this.insertNewlines=o,this.pointerEventsOnParagraph=i,o&&(this.svgParagraphElement="g",this.svgWordElement="text"),this.pageTextCache=new P,this.maxWordRendered=2500}var e,n;return w(t,[{key:"init",value:function(){this.options.singlePageDjvuXmlUrl||(this.djvuPagesPromise=c.ajax({type:"GET",url:a(this.options.fullDjvuXmlUrl,this.optionVariables),dataType:"html",error:function(t){}}).then((function(t){try{var e=c.parseXML(t);return e&&c(e).find("OBJECT")}catch(t){return}})))}},{key:"getPageText",value:(n=y(regeneratorRuntime.mark((function t(e){var n,r,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.options.singlePageDjvuXmlUrl){t.next=7;break}if(!(n=this.pageTextCache.entries.find((function(t){return t.index==e})))){t.next=4;break}return t.abrupt("return",n.response);case 4:return t.abrupt("return",c.ajax({type:"GET",url:a(this.options.singlePageDjvuXmlUrl,this.optionVariables,{pageIndex:e}),dataType:"html",error:function(t){}}).then((function(t){try{var n=c.parseXML(t),r=n&&c(n).find("OBJECT")[0];return o.pageTextCache.add({index:e,response:r}),r}catch(t){return}})));case 7:return t.next=9,this.djvuPagesPromise;case 9:if(!(r=t.sent)){t.next=12;break}return t.abrupt("return",r[e]);case 12:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"interceptCopy",value:function(t){t[0].addEventListener("copy",(function(t){var e=document.getSelection();t.clipboardData.setData("text/plain",e.toString()),t.preventDefault()}))}},{key:"defaultMode",value:function(t){var e=this;t.classList.remove("selectingSVG"),c(t).on("mousedown.textSelectPluginHandler",(function(n){c(n.target).is(".BRwordElement")&&(n.stopPropagation(),t.classList.add("selectingSVG"),c(t).one("mouseup.textSelectPluginHandler",(function(n){""!=window.getSelection().toString()?(n.stopPropagation(),c(t).off(".textSelectPluginHandler"),e.textSelectingMode(t)):t.classList.remove("selectingSVG")})))}))}},{key:"textSelectingMode",value:function(t){var e=this;c(t).on("mousedown.textSelectPluginHandler",(function(t){c(t.target).is(".BRwordElement")||""!=window.getSelection().toString()&&window.getSelection().removeAllRanges(),t.stopPropagation()})),c(t).on("mouseup.textSelectPluginHandler",(function(n){n.stopPropagation(),""==window.getSelection().toString()&&(c(t).off(".textSelectPluginHandler"),e.defaultMode(t))}))}},{key:"stopPageFlip",value:function(t){var e=this,n=t.find("svg.textSelectionSVG");n.length&&(n.each((function(t,n){return e.defaultMode(n)})),this.interceptCopy(t))}},{key:"createTextLayer",value:(e=y(regeneratorRuntime.mark((function t(e,n){var r,o,i,a,u,s=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.find(".textSelectionSVG").length){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,this.getPageText(e);case 5:if(r=t.sent){t.next=8;break}return t.abrupt("return");case 8:if(o=c(r).attr("width"),i=c(r).attr("height"),!((a=c(r).find("WORD").length)>this.maxWordRendered)){t.next=14;break}return console.log("Page ".concat(e," has too many words (").concat(a," > ").concat(this.maxWordRendered,"). Not rendering text layer.")),t.abrupt("return");case 14:(u=document.createElementNS("http://www.w3.org/2000/svg","svg")).setAttribute("xmlns","http://www.w3.org/2000/svg"),u.setAttribute("viewBox","0 0 ".concat(o," ").concat(i)),n.append(u),u.setAttribute("class","textSelectionSVG"),u.setAttribute("preserveAspectRatio","none"),c(u).css({width:"100%",position:"absolute",height:"100%",top:"0",left:"0"}),c(r).find("PARAGRAPH").each((function(t,e){var n=c(e).find("WORD");if(n.length){var r=document.createElementNS("http://www.w3.org/2000/svg",s.svgParagraphElement);r.setAttribute("class","BRparagElement"),s.pointerEventsOnParagraph&&(r.style.pointerEvents="all");for(var o=[],i=0;i<n.length;i++){var a=n[i],l=h(c(a).attr("coords").split(",").map(parseFloat),4),f=l[0],p=l[1],g=l[2],d=p-l[3];o.push(d);var v=document.createElementNS("http://www.w3.org/2000/svg",s.svgWordElement);if(v.setAttribute("class","BRwordElement"),v.setAttribute("x",f.toString()),v.setAttribute("y",p.toString()),v.setAttribute("textLength",(g-f).toString()),v.setAttribute("lengthAdjust","spacingAndGlyphs"),v.textContent=a.textContent,r.appendChild(v),i<n.length-1){var y=n[i+1],m=h(c(y).attr("coords").split(",").map(parseFloat),4),b=m[0],w=(m[1],m[2],m[3],document.createElementNS("http://www.w3.org/2000/svg",s.svgWordElement));w.setAttribute("class","BRwordElement"),w.setAttribute("x",g.toString()),w.setAttribute("y",p.toString()),b-g>0&&w.setAttribute("textLength",(b-g).toString()),w.setAttribute("lengthAdjust","spacingAndGlyphs"),w.textContent=" ",r.appendChild(w)}i==n.length-1&&s.insertNewlines&&r.appendChild(document.createTextNode("\n"))}o.sort();var S=o[Math.floor(.85*o.length)];r.setAttribute("font-size",S.toString()),u.appendChild(r)}})),this.stopPageFlip(n);case 23:case"end":return t.stop()}}),t,this)}))),function(t,n){return e.apply(this,arguments)})}]),t}(),j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(o,t);var e,n,r=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=g(e);if(n){var o=g(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return p(this,t)});function o(){return m(this,o),r.apply(this,arguments)}return w(o,[{key:"init",value:function(){var t=Object.assign({},x,this.options.plugins.textSelection);t.enabled&&(this.textSelectionPlugin=new O(t,this.options.vars),this.options.plugins.textSelection=t,this.textSelectionPlugin.init()),l(g(o.prototype),"init",this).call(this)}},{key:"_createPageContainer",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=l(g(o.prototype),"_createPageContainer",this).call(this,t,n),i=this.getNumLeafs()-1;return this.mode!==this.constModeThumb&&t>=0&&t<=i&&(null===(e=this.textSelectionPlugin)||void 0===e||e.createTextLayer(t,r)),r}}]),o}(S);window.BookReader=j},7775:function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:navigator.userAgent,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:navigator.vendor;return/chrome/i.test(t)&&/google inc/i.test(e)}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:navigator.userAgent;return/firefox/i.test(t)}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:navigator.userAgent;return/safari/i.test(t)&&!/chrome|chromium/i.test(t)}n.d(e,{i7:function(){return r},vU:function(){return o},G6:function(){return i}})},7235:function(t,e,n){var r=n(857),o=n(6656),i=n(6061),a=n(3070).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},1156:function(t,e,n){var r=n(5656),o=n(8006).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(r(t))}},6091:function(t,e,n){var r=n(7293),o=n(1361);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},3111:function(t,e,n){var r=n(4488),o="["+n(1361)+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),u=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},6061:function(t,e,n){var r=n(5112);e.f=r},1361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},3210:function(t,e,n){"use strict";var r=n(2109),o=n(3111).trim;r({target:"String",proto:!0,forced:n(6091)("trim")},{trim:function(){return o(this)}})},1817:function(t,e,n){"use strict";var r=n(2109),o=n(9781),i=n(7854),a=n(6656),u=n(111),c=n(3070).f,s=n(9920),l=i.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};s(p,l);var g=p.prototype=l.prototype;g.constructor=p;var h=g.toString,d="Symbol(test)"==String(l("test")),v=/^Symbol\((.*)\)[^)]+$/;c(g,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,e=h.call(t);if(a(f,t))return"";var n=d?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},2165:function(t,e,n){n(7235)("iterator")},2526:function(t,e,n){"use strict";var r=n(2109),o=n(7854),i=n(5005),a=n(1913),u=n(9781),c=n(133),s=n(3307),l=n(7293),f=n(6656),p=n(3157),g=n(111),h=n(9670),d=n(7908),v=n(5656),y=n(7593),m=n(9114),b=n(30),w=n(1956),S=n(8006),x=n(1156),P=n(5181),O=n(1236),j=n(3070),A=n(5296),E=n(8880),R=n(1320),k=n(2309),C=n(6200),T=n(3501),D=n(9711),N=n(5112),_=n(6061),G=n(7235),L=n(8003),M=n(9909),U=n(2092).forEach,B=C("hidden"),W="Symbol",I=N("toPrimitive"),V=M.set,X=M.getterFor(W),H=Object.prototype,F=o.Symbol,$=i("JSON","stringify"),J=O.f,z=j.f,Q=x.f,q=A.f,K=k("symbols"),Y=k("op-symbols"),Z=k("string-to-symbol-registry"),tt=k("symbol-to-string-registry"),et=k("wks"),nt=o.QObject,rt=!nt||!nt.prototype||!nt.prototype.findChild,ot=u&&l((function(){return 7!=b(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=J(H,e);r&&delete H[e],z(t,e,n),r&&t!==H&&z(H,e,r)}:z,it=function(t,e){var n=K[t]=b(F.prototype);return V(n,{type:W,tag:t,description:e}),u||(n.description=e),n},at=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof F},ut=function(t,e,n){t===H&&ut(Y,e,n),h(t);var r=y(e,!0);return h(n),f(K,r)?(n.enumerable?(f(t,B)&&t[B][r]&&(t[B][r]=!1),n=b(n,{enumerable:m(0,!1)})):(f(t,B)||z(t,B,m(1,{})),t[B][r]=!0),ot(t,r,n)):z(t,r,n)},ct=function(t,e){h(t);var n=v(e),r=w(n).concat(pt(n));return U(r,(function(e){u&&!st.call(n,e)||ut(t,e,n[e])})),t},st=function(t){var e=y(t,!0),n=q.call(this,e);return!(this===H&&f(K,e)&&!f(Y,e))&&(!(n||!f(this,e)||!f(K,e)||f(this,B)&&this[B][e])||n)},lt=function(t,e){var n=v(t),r=y(e,!0);if(n!==H||!f(K,r)||f(Y,r)){var o=J(n,r);return!o||!f(K,r)||f(n,B)&&n[B][r]||(o.enumerable=!0),o}},ft=function(t){var e=Q(v(t)),n=[];return U(e,(function(t){f(K,t)||f(T,t)||n.push(t)})),n},pt=function(t){var e=t===H,n=Q(e?Y:v(t)),r=[];return U(n,(function(t){!f(K,t)||e&&!f(H,t)||r.push(K[t])})),r};c||(R((F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),n=function(t){this===H&&n.call(Y,t),f(this,B)&&f(this[B],e)&&(this[B][e]=!1),ot(this,e,m(1,t))};return u&&rt&&ot(H,e,{configurable:!0,set:n}),it(e,t)}).prototype,"toString",(function(){return X(this).tag})),R(F,"withoutSetter",(function(t){return it(D(t),t)})),A.f=st,j.f=ut,O.f=lt,S.f=x.f=ft,P.f=pt,_.f=function(t){return it(N(t),t)},u&&(z(F.prototype,"description",{configurable:!0,get:function(){return X(this).description}}),a||R(H,"propertyIsEnumerable",st,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:F}),U(w(et),(function(t){G(t)})),r({target:W,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(Z,e))return Z[e];var n=F(e);return Z[e]=n,tt[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(f(tt,t))return tt[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!u},{create:function(t,e){return void 0===e?b(t):ct(b(t),e)},defineProperty:ut,defineProperties:ct,getOwnPropertyDescriptor:lt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:l((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(d(t))}}),$&&r({target:"JSON",stat:!0,forced:!c||l((function(){var t=F();return"[null]"!=$([t])||"{}"!=$({a:t})||"{}"!=$(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(g(e)||void 0!==t)&&!at(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!at(e))return e}),o[1]=e,$.apply(null,o)}}),F.prototype[I]||E(F.prototype,I,F.prototype.valueOf),L(F,W),T[B]=!0}},0,[[4529,898]]]);
//# sourceMappingURL=plugin.text_selection.js.map