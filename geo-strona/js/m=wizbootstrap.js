"use strict";this.fiwiz=this.fiwiz||{};(function(_){var window=this;
try{
var aa,ea,m;aa=function(a,b){if(null===b)return!1;if("contains"in a&&1==b.nodeType)return a.contains(b);if("compareDocumentPosition"in a)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};
ea=function(a,b,d){if("click"==b.type||b.targetTouches&&1<b.targetTouches.length)return b;var c=g,f=b.target;if(f&&m(f))return b;f=r(b);if("touchstart"!=b.type||d.touchstart||d.touchend)if("touchend"==b.type&&c&&g.node==a)if(b.defaultPrevented||f&&4<Math.abs(f.clientX-g.x)+Math.abs(f.clientY-g.y))g=null;else{v=a=ba(b);b.stopPropagation();b.preventDefault();document.createEvent?(b=document.createEvent("MouseEvent"),b.initMouseEvent(a.type,!0,!0,window,a.detail||1,a.screenX||0,a.screenY||0,a.clientX||
0,a.clientY||0,a.ctrlKey||!1,a.altKey||!1,a.shiftKey||!1,a.metaKey||!1,a.button||0,a.relatedTarget||null)):(b=document.createEventObject(),b.type=a.type,b.clientX=a.clientX,b.clientY=a.clientY,b.button=a.button,b.detail=a.detail,b.ctrlKey=a.ctrlKey,b.altKey=a.altKey,b.shiftKey=a.shiftKey,b.metaKey=a.metaKey);b.F=a.timeStamp;b._fastclick=!0;a:{for(d=a.target;d&&d.getAttribute;){c=d.tagName||"";if("A"==c||"INPUT"==c||"TEXTAREA"==c||"SELECT"==c||"BUTTON"==c||d.getAttribute("tabIndex"))break a;d=d.parentNode}d=
null}d?d.focus():document.activeElement&&document.activeElement.blur();a.target.dispatchEvent(b);if(!b.defaultPrevented){if(document.activeElement&&document.activeElement!=b.target&&document.activeElement!=d&&m(document.activeElement))try{document.activeElement.blur()}catch(t){}try{window.getSelection().removeAllRanges()}catch(t){}}return null}else"touchmove"==b.type&&g&&f&&4<Math.abs(f.clientX-g.x)+Math.abs(f.clientY-g.y)&&(g=null);else return g={node:a,x:f?f.clientX:0,y:f?f.clientY:0},v=null,clearTimeout(ca),
ca=setTimeout(da,400),null;return b};m=function(a){var b=a.tagName||"";return"TEXTAREA"==b||"INPUT"==b||"SELECT"==b||"OPTION"==b||a.isContentEditable};_._DumpException=function(a){window.fiHadScriptErrors=!0;throw a;};window._DumpException=_._DumpException;window.google=window.google||{};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var x=this||self;
/*

 Copyright 2011 Google LLC.
 SPDX-License-Identifier: Apache-2.0
*/
/*

 Copyright 2013 Google LLC.
 SPDX-License-Identifier: Apache-2.0
*/
var fa={};
var ha=function(a,b){return function(d){d||(d=window.event);return b.call(a,d)}},z=function(a){a=a.target||a.srcElement;!a.getAttribute&&a.parentNode&&(a=a.parentNode);return a},ia="undefined"!=typeof navigator&&/Macintosh/.test(navigator.userAgent),ja="undefined"!=typeof navigator&&!/Opera/.test(navigator.userAgent)&&/WebKit/.test(navigator.userAgent),la={A:1,INPUT:1,TEXTAREA:1,SELECT:1,BUTTON:1},r=function(a){return(a=a.changedTouches&&a.changedTouches[0]||a.touches&&a.touches[0])?{clientX:a.clientX,
clientY:a.clientY,screenX:a.screenX,screenY:a.screenY}:null},ba=function(a){var b={};b.originalEventType=a.type;b.type="click";for(var d in a){var c=a[d];"type"!=d&&"srcElement"!=d&&"function"!==typeof c&&(b[d]=c)}b.timeStamp=Date.now();b.defaultPrevented=!1;b.preventDefault=ma;b._propagationStopped=!1;b.stopPropagation=na;if(a=r(a))b.clientX=a.clientX,b.clientY=a.clientY,b.screenX=a.screenX,b.screenY=a.screenY;return b},oa=function(){this._mouseEventsPrevented=!0},ma=function(){this.defaultPrevented=
!0},na=function(){this._propagationStopped=!0},pa={Enter:13," ":32},qa={A:13,BUTTON:0,CHECKBOX:32,COMBOBOX:13,FILE:0,GRIDCELL:13,LINK:13,LISTBOX:13,MENU:0,MENUBAR:0,MENUITEM:0,MENUITEMCHECKBOX:0,MENUITEMRADIO:0,OPTION:0,RADIO:32,RADIOGROUP:32,RESET:0,SUBMIT:0,SWITCH:32,TAB:0,TREE:13,TREEITEM:13},ra={CHECKBOX:!0,FILE:!0,OPTION:!0,RADIO:!0},sa={COLOR:!0,DATE:!0,DATETIME:!0,"DATETIME-LOCAL":!0,EMAIL:!0,MONTH:!0,NUMBER:!0,PASSWORD:!0,RANGE:!0,SEARCH:!0,TEL:!0,TEXT:!0,TEXTAREA:!0,TIME:!0,URL:!0,WEEK:!0},
ta={A:!0,AREA:!0,BUTTON:!0,DIALOG:!0,IMG:!0,INPUT:!0,LINK:!0,MENU:!0,OPTGROUP:!0,OPTION:!0,PROGRESS:!0,SELECT:!0,TEXTAREA:!0};
/*

 Copyright 2020 Google LLC.
 SPDX-License-Identifier: Apache-2.0
*/
var v=null,ca=0,g=null,A=function(a){if(!a._fastclick){var b=v;if(b)if(800<Date.now()-b.timeStamp)v=null;else{var d=4>=Math.abs(a.clientX-b.clientX)+Math.abs(a.clientY-b.clientY);b.target==a.target||d?(a.stopPropagation(),a.preventDefault(),"click"==a.type&&(v=null)):v=null}}},da=function(){g=null},B=x._jsa||{};B._cfc=void 0;B._aeh=void 0;
/*

 Copyright 2005 Google LLC.
 SPDX-License-Identifier: Apache-2.0
*/
var ua=function(){this.D=[];this.j=[];this.v=[];this.C={};this.o=null;this.B=[]},va=function(a){return String.prototype.trim?a.trim():a.replace(/^\s+/,"").replace(/\s+$/,"")},za=function(a,b){return function t(c,f){f=void 0===f?!0:f;var n=b;if("click"==n&&(ia&&c.metaKey||!ia&&c.ctrlKey||2==c.which||null==c.which&&4==c.button||c.shiftKey))n="clickmod";else{var h=c.which||c.keyCode;!h&&c.key&&(h=pa[c.key]);ja&&3==h&&(h=13);if(13!=h&&32!=h)h=!1;else{var e=z(c),k;(k="keydown"!=c.type||!!(!("getAttribute"in
e)||(e.getAttribute("type")||e.tagName).toUpperCase()in sa||"BUTTON"==e.tagName.toUpperCase()||e.type&&"FILE"==e.type.toUpperCase()||e.isContentEditable)||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey||(e.getAttribute("type")||e.tagName).toUpperCase()in ra&&32==h)||((k=e.tagName in la)||(k=e.getAttributeNode("tabindex"),k=null!=k&&k.specified),k=!(k&&!e.disabled));if(k)h=!1;else{k=(e.getAttribute("role")||e.type||e.tagName).toUpperCase();var y=!(k in qa)&&13==h;e="INPUT"!=e.tagName.toUpperCase()||!!e.type;
h=(0==qa[k]%h||y)&&e}}h&&(n="clickkey")}e=c.srcElement||c.target;h=D(n,c,e,"",null);for(k=e;k&&k!=this;k=k.__owner||k.parentNode){var l=k;var q=void 0;y=l;var u=n,Ba=c;var p=y.__jsaction;if(!p){var F;p=null;"getAttribute"in y&&(p=y.getAttribute("jsaction"));if(F=p){p=fa[F];if(!p){p={};for(var M=F.split(wa),Da=M?M.length:0,N=0;N<Da;N++){var C=M[N];if(C){var O=C.indexOf(":"),ka=-1!=O;p[ka?va(C.substr(0,O)):xa]=ka?va(C.substr(O+1)):C}}fa[F]=p}y.__jsaction=p}else p=ya,y.__jsaction=p}"maybe_click"==u&&
p.click?(q=u,u="click"):"clickkey"==u?u="click":"click"!=u||p.click||(u="clickonly");q=B._cfc&&p.click?B._cfc(y,Ba,p,u,q):{eventType:q?q:u,action:p[u]||"",event:null,ignore:!1};if(q.ignore||q.action)break}q&&(h=D(q.eventType,q.event||c,e,q.action||"",l,h.timeStamp));h&&"touchend"==h.eventType&&(h.event._preventMouseEvents=oa);if(q&&q.action){if(e="clickkey"==n)e=z(c),e=(e.type||e.tagName).toUpperCase(),(e=32==(c.which||c.keyCode)&&"CHECKBOX"!=e)||(e=z(c),k=e.tagName.toUpperCase(),q=(e.getAttribute("role")||
"").toUpperCase(),e="BUTTON"===k||"BUTTON"===q?!0:!(e.tagName.toUpperCase()in ta)||"A"===k||"SELECT"===k||(e.getAttribute("type")||e.tagName).toUpperCase()in ra||(e.getAttribute("type")||e.tagName).toUpperCase()in sa?!1:!0);e&&(c.preventDefault?c.preventDefault():c.returnValue=!1);if("mouseenter"==n||"mouseleave"==n||"pointerenter"==n||"pointerleave"==n)if(e=c.relatedTarget,!("mouseover"==c.type&&"mouseenter"==n||"mouseout"==c.type&&"mouseleave"==n||"pointerover"==c.type&&"pointerenter"==n||"pointerout"==
c.type&&"pointerleave"==n)||e&&(e===l||aa(l,e)))h.action="",h.actionElement=null;else{n={};for(var w in c)"function"!==typeof c[w]&&"srcElement"!==w&&"target"!==w&&(n[w]=c[w]);n.type="mouseover"==c.type?"mouseenter":"mouseout"==c.type?"mouseleave":"pointerover"==c.type?"pointerenter":"pointerleave";n.target=n.srcElement=l;n.bubbles=!1;h.event=n;h.targetElement=l}}else h.action="",h.actionElement=null;l=h;a.o&&!l.event.a11ysgd&&(w=D(l.eventType,l.event,l.targetElement,l.action,l.actionElement,l.timeStamp),
"clickonly"==w.eventType&&(w.eventType="click"),a.o(w,!0));if(l.actionElement){if(a.o){if(!l.actionElement||"A"!=l.actionElement.tagName||"click"!=l.eventType&&"clickmod"!=l.eventType||(c.preventDefault?c.preventDefault():c.returnValue=!1),(c=a.o(l))&&f){t.call(this,c,!1);return}}else{if((f=x.document)&&!f.createEvent&&f.createEventObject)try{var P=f.createEventObject(c)}catch(Ka){P=c}else P=c;l.event=P;a.B.push(l)}B._aeh&&B._aeh(l)}}},D=function(a,b,d,c,f,t){return{eventType:a,event:b,targetElement:d,
action:c,actionElement:f,timeStamp:t||Date.now()}},Aa=function(a,b){return function(d){var c=a,f=b,t=!1;"mouseenter"==c?c="mouseover":"mouseleave"==c?c="mouseout":"pointerenter"==c?c="pointerover":"pointerleave"==c&&(c="pointerout");if(d.addEventListener){if("focus"==c||"blur"==c||"error"==c||"load"==c)t=!0;d.addEventListener(c,f,t)}else d.attachEvent&&("focus"==c?c="focusin":"blur"==c&&(c="focusout"),f=ha(d,f),d.attachEvent("on"+c,f));return{eventType:c,m:f,capture:t}}},E=function(a,b){if(!a.C.hasOwnProperty(b)){var d=
za(a,b),c=Aa(b,d);a.C[b]=d;a.D.push(c);for(d=0;d<a.j.length;++d){var f=a.j[d];f.j.push(c.call(null,f.div))}"click"==b&&E(a,"keydown");"click"==b&&(E(a,"touchstart"),E(a,"touchend"),E(a,"touchmove"),document.addEventListener&&(document.addEventListener("click",A,!0),document.addEventListener("mouseup",A,!0),document.addEventListener("mousedown",A,!0)))}};ua.prototype.m=function(a){return this.C[a]};
var Ea=function(a){var b=G,d=a.div;Ca&&(d.style.cursor="pointer");for(d=0;d<b.D.length;++d)a.j.push(b.D[d].call(null,a.div))},Ha=function(a){for(var b=Fa,d=0;d<b.length;++d)if(b[d].div!=a.div&&Ga(b[d].div,a.div))return!0;return!1},Ga=function(a,b){for(;a!=b&&b.parentNode;)b=b.parentNode;return a==b},Ca="undefined"!=typeof navigator&&/iPhone|iPad|iPod/.test(navigator.userAgent);
B._cfc=function(a,b,d,c,f){a=ea(a,b,d);if(!a)return{eventType:c,action:"",event:null,ignore:!0};if(a!=b){var t=a;c=a.type}return{eventType:f?f:c,action:d[c]||"",event:t,ignore:!1}};B._aeh=function(a){"touchend"==a.event.type&&a.event._mouseEventsPrevented&&(v=ba(a.event))};var wa=/\s*;\s*/,xa="click",ya={};
var G=new ua,Ia=window.document.documentElement,H=new function(a){this.div=a;this.j=[]}(Ia),I;a:{for(var J=0;J<G.j.length;J++)if(Ga(G.j[J].div,Ia)){I=!0;break a}I=!1}
if(I)G.v.push(H);else{Ea(H);G.j.push(H);for(var Fa=G.v.concat(G.j),K=[],L=[],Q=0;Q<G.j.length;++Q){var R=G.j[Q];if(Ha(R)){K.push(R);for(var S=0;S<R.j.length;++S){var T=R.div,U=R.j[S];T.removeEventListener?T.removeEventListener(U.eventType,U.m,U.capture):T.detachEvent&&T.detachEvent("on"+U.eventType,U.m)}R.j=[]}else L.push(R)}for(var V=0;V<G.v.length;++V){var W=G.v[V];Ha(W)?K.push(W):(L.push(W),Ea(W))}G.j=L;G.v=K}E(G,"click");E(G,"focus");E(G,"focusin");E(G,"blur");E(G,"focusout");E(G,"input");
E(G,"keydown");E(G,"keypress");E(G,"keyup");E(G,"mouseup");E(G,"mousedown");E(G,"mouseover");E(G,"mouseout");E(G,"mouseenter");E(G,"mouseleave");E(G,"touchstart");E(G,"touchend");E(G,"touchmove");var Ja=function(a){return{trigger:function(b){var d=a.m(b.type);d||(E(a,b.type),d=a.m(b.type));var c=b.target||b.srcElement;d&&d.call(c.ownerDocument.documentElement,b)},bind:function(b){a.o=b;a.B&&(0<a.B.length&&b(a.B),a.B=null)}}}(G),X=["nova","attach"],Y=window||x;
X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===Ja?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=Ja;

}catch(e){_._DumpException(e)}
}).call(this,this.fiwiz);
// Google Inc.
