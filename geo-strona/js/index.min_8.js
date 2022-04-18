/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var l=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},m="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},n=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");
},q=n(this),r=function(a,b){if(b)a:{var c=q;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&m(c,a,{configurable:!0,writable:!0,value:b})}};
r("Symbol",function(a){if(a)return a;var b=function(g,h){this.l=g;m(this,"description",{configurable:!0,writable:!0,value:h})};b.prototype.toString=function(){return this.l};var c="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",d=0,e=function(g){if(this instanceof e)throw new TypeError("Symbol is not a constructor");return new b(c+(g||"")+"_"+d++,g)};return e});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=q[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&m(d.prototype,a,{configurable:!0,writable:!0,value:function(){return t(l(this))}})}return a});
var t=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a},u=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:l(a)}},v="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},w;
if("function"==typeof Object.setPrototypeOf)w=Object.setPrototypeOf;else{var x;a:{var y={a:!0},z={};try{z.__proto__=y;x=z.a;break a}catch(a){}x=!1}w=x?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var A=w,B=function(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var g=c++;return{value:b(g,a[g]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e};
r("Array.prototype.entries",function(a){return a?a:function(){return B(this,function(b,c){return[b,c]})}});r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var g=d[c];if(g===b||Object.is(g,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(b,c||0)}});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(k){return k};var e=[],g="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof g){b=g.call(b);for(var h=0;!(g=b.next()).done;)e.push(c.call(d,g.value,h++))}else for(g=b.length,h=0;h<g;h++)e.push(c.call(d,b[h],h));return e}});
var C=function(a,b){function c(){}c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.s=function(d,e,g){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[e].apply(d,h)}};/*

 SPDX-License-Identifier: Apache-2.0
*/
var D={};function E(a){if(Error.captureStackTrace)Error.captureStackTrace(this,E);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}C(E,Error);E.prototype.name="CustomError";function F(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");E.call(this,c+a[d])}C(F,E);F.prototype.name="AssertionError";var G=function(a,b){throw new F("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var I=function(a,b){this.i=b===H?a:""};I.prototype.toString=function(){return this.i.toString()};var H={};var J=function(){},K=function(a,b){if(b!==D)throw Error("Bad secret");this.j=a};K.prototype=v(J.prototype);K.prototype.constructor=K;if(A)A(K,J);else for(var L in J)if("prototype"!=L)if(Object.defineProperties){var M=Object.getOwnPropertyDescriptor(J,L);M&&Object.defineProperty(K,L,M)}else K[L]=J[L];K.o=J.prototype;K.prototype.toString=function(){return this.j};var N=new K("about:invalid#zTSz",D);function O(a){if(a instanceof J)if(a instanceof K)a=a.j;else throw Error("Unexpected type when unwrapping SafeUrl");else if(a instanceof I&&a.constructor===I)a=a.i;else{var b=typeof a;G("expected object of type SafeUrl, got '"+a+"' of type "+("object"!=b?b:a?Array.isArray(a)?"array":b:"null"));a="type_error:SafeUrl"}return a};var P=function(a){this.m=a};function Q(a){return new P(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}var R=[Q("data"),Q("http"),Q("https"),Q("mailto"),Q("ftp"),new P(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function S(a,b){b=void 0===b?R:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof P&&d.m(a))return new K(a,D)}};var T=function(){var a=document.querySelectorAll('[href*="policies.google.com/privacy"]'),b=document.querySelectorAll('[href*="support.google.com/"]'),c=document.querySelectorAll('[href*="../child-policy/"]');if(window.location.href.includes("color_scheme=dark")&&(document.documentElement.classList.add("darkmode"),!window.location.href.includes("embedded"))){var d=function(e,g,h){e=u(Array.from(e));for(var k=e.next();!k.done;k=e.next()){k=k.value;var f=k.getAttribute("href"),p="policy"===g?"?":"&";
(null===f||void 0===f?0:f.includes("?"))&&(null===f||void 0===f?0:f.includes("#"))?(p=null===f||void 0===f?void 0:f.split("#"),f=p[0]+"&"+h+"#"+p[1]):(null===f||void 0===f?0:f.includes("#"))?(f=null===f||void 0===f?void 0:f.split("#"),f=""+f[0]+p+h+"#"+f[1]):f=(null===f||void 0===f?0:f.includes("?"))?f+("&"+h):f+("?"+h);p=S(f);k.href=O(p)}};d(a,"policy","color_scheme=dark");d(b,"support","dark=1");d(c,"childpolicy","color_scheme=dark")}};var U=function(a){for(var b={},c=u(Array.from(a.h).entries()),d=c.next();!d.done;b={g:b.g},d=c.next())d=u(d.value).next().value,b.g=a.h[d],b.g.addEventListener("click",function(e){return function(){var g=e.g.getAttribute("data-id");window.history.replaceState("","","#"+g)}}(b))};var V=function(){var a=document.querySelector("#lang-selector");a&&a.addEventListener("change",function(b){if(!(b.target instanceof HTMLSelectElement))throw Error("Language switcher change event target is not a select element.");var c=window.location;var d=void 0===d?R:d;b=S(b.target.value,d)||N;c.href=O(b)})};var W=window.glue.ui.Header,aa=window.glue.ui.Tabs,ba=window.glue.ui.ExpansionPanelsPanelGroup;var X=document.querySelector(".glue-header");X&&new W(X);document.querySelector(".glue-footer")&&new V;var Y=document.querySelector(".glue-tabs");Y&&new aa(Y);var Z=document.querySelector(".glue-expansion-panels");Z&&new ba(Z);
new function(){this.h=document.querySelectorAll(".child-family-tab");var a=window.location.hash.replace("#",""),b=document.querySelector("[data-id='"+a+"']");if(null!=b)b.click(),b.focus(),U(this);else if(null==b&&void 0!==a){b=u(Array.from(this.h).entries());for(var c=b.next();!c.done;c=b.next()){c=u(c.value).next().value;c=this.h[c];var d=c.getAttribute("data-id");a.includes(d)&&(c.click(),window.history.replaceState("","","#"+a))}}U(this)};
new function(){var a=document.querySelector(".app-link"),b=navigator.userAgent.toLowerCase(),c=-1<b.indexOf("iphone")||-1<b.indexOf("ipad")||-1<b.indexOf("macintosh")&&"ontouchend"in document,d=-1<b.indexOf("macintosh")&&!("ontouchend"in document),e=document.createAttribute("href");e.value=-1<b.indexOf("ipad")||-1<b.indexOf("macintosh")&&"ontouchend"in document||c||d?"https://apps.apple.com/us/app/google-family-link/id1150085200":"https://play.google.com/store/apps/details?id=com.google.android.apps.kids.familylink";
a.attributes.setNamedItem(e)};new function(){document.querySelector("#darkmode")&&T()};