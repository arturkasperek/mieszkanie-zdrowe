window.Inpl=window.Inpl||{},function(a){"use strict";function b(a,b){return b==typeof a}function c(a){return!b(a,s)}function d(a,b){return!!~(""+a).indexOf(b)}function e(a){return parseInt(a,10)}function f(a,b,d){d=d||{},null!==b&&c(b)?d.expires=86400:(d.expires=-1,b=""),c(d.path)||(d.path="/"),b=String(b);var e=new Date;return e.setTime(d.expires<0?0:e.getTime()+1e3*d.expires),document.cookie=[encodeURIComponent(a),"=",d.raw?b:encodeURIComponent(b),d.expires?"; expires="+e.toUTCString():"",d.path?"; path="+d.path:"",d.domain?"; domain="+d.domain:"",d.secure?"; secure":""].join("")}function g(a,b){var d,b=b||{},e="undefined"!=typeof b.raw?function(a){return a}:decodeURIComponent;return d=new RegExp("(?:^|; )"+encodeURIComponent(a)+"=([^;]*)").exec(document.cookie),null!=d&&c(d[1])?e(d[1]):void 0}function h(a,b){var c,d=u.createElement(a);for(c in b)b.hasOwnProperty(c)&&(-1!==c.indexOf("-")?d.setAttribute(c,b[c]):d[c]=b[c]);return d}function i(a){var b=u.getElementById(a);if(!b)throw new Error('Can not find "#'+a+'" element ');return b}function j(a){var b=parseInt(a.clientHeight||a.scrollHeight||a.offsetHeight,10);return!b||isNaN(b)?0:b}function k(a,b){a=a||{},b=b||{};var c;for(c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function l(b){if(t==typeof b){var c=function(){"complete"===u.readyState&&b.call(this,b,arguments)};"complete"===u.readyState?setTimeout(c):u.addEventListener?a.addEventListener("load",c,!1):a.attachEvent("onload",c)}}function m(a,d,e){var f=a.charAt(0).toUpperCase()+a.slice(1),g=(a+" "+E.join(f+" ")+f).split(" ");return b(d,"string")||!c(d)?n(g,d):(g=(a+" "+F.join(f+" ")+f).split(" "),o(g,d,e))}function n(a,b){for(var c in a){var e=a[c];if(!d(e,"-")&&void 0!==C[e])return"pfx"==b?e:!0}return!1}function o(a,c,d){for(var e in a){var f=c[a[e]];if(void 0!==f)return d===!1?a[e]:b(f,"function")?f.bind(d||c):f}return!1}function p(){if(c(a.Modernizr)&&c(a.Modernizr.csstransforms3d)&&!0===a.Modernizr.csstransforms3d)return!0;var b=!!m("perspective"),d="@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",e=u.documentElement;if(b&&"webkitPerspective"in e.style){var f,b,g,h=u.createElement("div"),i=u.body,j=i||u.createElement("body");f=["&#173;",'<style id="smodernizr">',d,"</style>"].join(""),h.id="modernizr",(i?h:j).innerHTML+=f,j.appendChild(h),i||(j.style.background="",j.style.overflow="hidden",g=e.style.overflow,e.style.overflow="hidden",e.appendChild(j)),b=9===h.offsetLeft&&3===h.offsetHeight,i?h.parentNode.removeChild(h):(j.parentNode.removeChild(j),e.style.overflow=g)}return!!b}Array.forEach||(Array.prototype.forEach=function(a,b){for(var c=0,d=this.length;d>c;++c)a.call(b||this,this[c],c,this)}),Array.isArray||(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)});var q=!1,r=a.location.hostname;if(["czaswojny.interia.pl","bloodwars.interia.pl"].forEach(function(a){-1!==r.indexOf(a)&&(q=!0)}),!0!==q){var s="undefined",t="function",a=window,u=(a.navigator,a.document),v=!1,w=[],x="",y="",z="",A=function(a){return s!=typeof Inpl.Mobile&&s!=typeof Inpl.Mobile.Detect&&"boolean"==typeof Inpl.Mobile.Detect.isMobile?Inpl.Mobile.Detect.isMobile:/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent||navigator.vendor||window.opera).substr(0,4))}(),B=document.createElement("moderznizr"),C=B.style,D="Webkit Moz O ms",E=D.split(" "),F=D.toLowerCase().split(" "),G=function(){function a(a,b){return a.style[b]||d(a,b)}function d(a,b){return(j?a.currentStyle:getComputedStyle(a))[b]}function f(a){var b=a.split("-"),c=b.length;if(c>1)for(;c-->1;){var d=b[c];b[c]=d.charAt(0).toUpperCase()+d.slice(1)}return b.join("")}var g=window,h=document,i=navigator.appVersion,j=i.search("MSIE")>-1,l=(e(i.slice(22,26)),"Ms Moz Webkit O".split(" ")),m=l.length,n=g.performance,o=!(!n||!n.now),p="AnimationFrame",q="cancel"+p,r="Cancel"+p,s="request"+p,t="Request"+p,u="margin",v="padding",w="scale",x="3d",y="translate",z="translate"+x,A="scrollLeft scrollTop",B=" fontSize height opacity width zoom",C="rotate",D=" ",E="Bottom",F="Left",G="Right",H="Top",I="ransform";!function(){var a=0;if(!g[s]){for(var b,c,d,e=0;m>e;e++)if(b=l[e],c=b.toLowerCase(),d=g[c+t]){g[s]=d,g[q]=g[c+r]||g[c+"CancelRequest"+p];break}g[s]||(g[s]=function(b){var c=+new Date,d=Math.max(0,16-(c-a)),e=setTimeout(function(){b(c+d)},d);return a=c+d,e},g[q]=clearTimeout)}}();var J=function(){var a=h.createElement("p").style,b="T"+I,d="t"+I;if(a[d])return d;for(var e=m;e--;){var f=l[e],g=f.toLowerCase()+b,i=f+b;if(c(a[g]))return g;if(c(a[i]))return i}}(),K={schemas:{css:"bottom left right top "+u+D+u+E+D+u+F+D+u+G+D+u+H+D+v+D+v+E+D+v+F+D+v+G+D+v+H+B,css3:y+D+z+D+C+D+C+x+D+w+D+w+x,nocss:A},no_negative:A+B,no_unit:A+" opacity zoom "+w+" "+w+x},L=function(c,d,h){var i=this;i.options={duration:300,animationStart:function(){},animationEnd:function(){},transition:"linear",unit:"px"};var j=i.options;h&&k(j,h),d=f(d);var l,m,p,r,t,u,v,w,A,B,C,D,E,F,G,H,I,L,M=Math.round,N=c.style,O=K.no_negative.indexOf(d)>0,P=d.indexOf(x)>-1,Q=d===y||d===z,R=K.no_unit.indexOf(d)<0,S=R?j.unit:"",T=0,U={linear:function(a){var b=[];return v&&b.push(H*a),w&&b.push(I*a),A&&b.push(L*a),b}},V=j.transition,W=b(V,"function")?V:U.linear;P&&(d=d.replace(x,""));var X,Y={css:function(a){N[d]=a+S},css3:J?function(a,b,c){var e=[];v&&e.push(a+S),w&&e.push(b+S),N[J]=d+"("+e.join(",")+")"}:function(a,b){Q&&(v&&(N.left=M(a)+S),w&&(N.top=M(b)+S))},nocss:function(a){c[d]=a}},Z={css:S?[0]:[1],css3:P?S?[0,0,0]:[1,1,1]:S?[0,0]:[1,1],nocss:[0]},$={css:function(){var b=e(a(c,d));return isNaN(b)?Z.css:[b]},css3:function(){var b=Z.css3,f={scale:6,rotate:7,scale3d:8,rotate3d:9,translate:10,translate3d:12}[d];if(J){var g=a(c,J),h=g.slice(f,-1).split(",");g&&(h[0]&&(b[0]=e(h[0])),h[1]&&(b[1]=e(h[1])),h[2]&&(b[2]=e(h[2])))}else if(Q){var i=a(c,"left"),j=a(c,"top");b=[e(i)||0,e(j)||0]}return b},nocss:function(){var a=c[d];return isNaN(a)?Z.nocss:[a]}},_=K.schemas;for(var aa in _){X=_[aa].split(" ");for(var ba=X.length;ba--;){var ca=X[ba];$[ca]=$[aa],Y[ca]=Y[aa]}}var da=Y[d],ea=$[d],fa=function(a){var b=W(a);v&&(l=B+b[0]),w&&(m=C+b[1]),A&&(p=D+b[2]),O&&(v&&0>l&&(l=0),w&&0>m&&(m=0),A&&0>p&&(p=0)),da(l,m,p)},ga=function(a){fa(a-t),++T,u>a?g[s](ga):(g[q](r),da(E,F,G),i.options.animationEnd(c,1e3*T/j.duration))},ha=function(a){B=a},ia=function(a,d,e){var f=j.duration;v=b(a,"number"),w=b(d,"number"),A=b(e,"number"),j.animationStart(c);var h=ea();l=h[0],m=h[1],p=h[2],v&&(B=l,E=a,H=(E-B)/f),w&&(C=m,F=d,I=(F-C)/f),A&&(D=p,G=e,L=(G-D)/f),T=0,t=o?n.now():+new Date,u=t+f,r=g[s](ga)};return i.element=c,i.property=d,i.get=ea,i.set=da,i.from=ha,i.to=ia,i};return L}(),H=function(){var a,b={},d=0,e={},f=0,g=function(a){return c(a._EID)?a._EID:a._EID=++d},h=function(a){return e[a._OID=c(a._OID)?a._OID:++f]=a,a._OID},i={bind:function(c,d,e){c&&(b[a=h(c)]=b[a]||{},b[a][d]=b[a][d]||{},b[a][d][g(e)]=e,c.addEventListener?c.addEventListener(d,e,!1):c.attachEvent&&c.attachEvent("on"+d,e))},unbind:function(c,d,e){if("number"==typeof c._OID)if(a=c._OID,"function"==typeof e)"number"==typeof e._EID&&(c.removeEventListener?c.removeEventListener(d,e,!1):c.detachEvent&&c.detachEvent("on"+d,e),delete b[a][d][e._EID]);else if(b[a][d]){var f,g=b[a][d];for(f in g)g.hasOwnProperty(f)&&"function"==typeof g[f]&&this.unbind(c,d,g[f])}},unbindAll:function(a){var c,d;if("number"==typeof a._OID&&(c=b[a._OID]))for(d in c)c.hasOwnProperty(d)&&this.unbind(a,d)}};return i}(),I=function(b){b=k({direction:1,newsList:[],duration:1e4,url:"//a.hub.com.pl/z-ostatniej-chwili/zoc.js",capping:2,gact:!0},b);var d,e,l,m,n,o,q,r,s,t,A=this,B=a.location.hostname?a.location.hostname:"",C={cssthemedefault:[".news-scroll-footer { height: 30px; width: 100%; position: fixed; left: 0; bottom: 0; font: 16px/1 opensansbold, arial, verdana, sans-serif; z-index: 10000; }",".news-scroll-footer-wrap-outer { width: 100%; height: 100%; position:relative; overflow: hidden; }",".news-scroll-footer-wrap { height: 100%; position: absolute; }",".news-scroll-footer-list { float: left; height: 100%; margin: 0; padding: 5px 0; list-style-type: none; line-height: 16px; background: #C10000 url(//w.iplsc.com/internal/inpl.scrollfooter/"+b.version+"/themes/default/bg-scrollfooter.png) repeat-x; }",".news-scroll-footer-item { display: block; float: left; padding: 0; overflow: hidden; }",".news-scroll-footer-item-wrap { display: block; padding: 0 25px; }",".news-scroll-footer-item .label,.news-scroll-footer-item .title,.news-scroll-footer-item .more { float: left; color: #fff; font-weight: bold; text-shadow: 1px 1px #500000; text-decoration: none; }",".news-scroll-footer-item .label { padding: 5px 12px; background: #f00; font-size: 10px; line-height: 1; text-transform: uppercase; font-weight: normal; }",".news-scroll-footer-item .title { display: block; margin: 0 8px 0 11px; line-height: 1.4; text-transform: uppercase; font-size: 16px; }",".news-scroll-footer-item .more { padding: 0 0 0 6px; margin: 4px 0 0 0; border-left: 1px solid #fff; font-size: 13px; line-height: .9; font-weight: normal; }"],getCss:function(a){return C["csstheme"+a].join(" ")},getNewsItem:function(a){var d="",e=a.url;return b.gact&&B&&(e+="#utm_source="+B+"&utm_medium=referer&utm_campaign=scroll_footer"),c(y)&&y.length&&(e="//interia.hit.gemius.pl/hitredir/id="+y+"/stparam=ohpepodtgu/url="+e),d+='<span class="label">'+(a.label||"z ost. chwili")+"</span>",d+='<a href="'+e+'" class="title" target="_blank">'+a.title+"</a>",d+='<a href="'+e+'" class="more" target="_blank">wi&#281;cej &raquo;</a>'},prepareNewsList:function(a){if(!Array.isArray(a))return"";var b="";return a.forEach(function(a){b+='<li class="news-scroll-footer-item"><span class="news-scroll-footer-item-wrap">'+C.getNewsItem(a)+"</span></li>"}),b},appendLists:function(){e=o.offsetWidth||o.scrollWidth,l=Math.max(u.documentElement.clientWidth,u.body.scrollWidth,u.documentElement.scrollWidth,u.body.offsetWidth,u.documentElement.offsetWidth),l=l>980?l:1280,q=3*Math.floor(l/e),5>q&&(q=5);var a,b;if(0<q-n.childNodes.length)for(a=1;q>=a;a++)b=o.cloneNode(!0),b&&n.appendChild(b);n.style.width=q*e+"px"}},D={doRequest:function(c){a.zocCallback=(c=c||{}).success||function(){},u.body.appendChild(h("script",{charset:"utf-8",type:"text/javascript",async:!0,src:c.url||b.url}))},retrieveNewsList:function(a){"function"==typeof(a||{}).success?this.doRequest({success:a.success}):0}},E=function(){var b,d=0;if(c(a.Inpl_Ad_ScrollFooter))try{s||(s=i("inpl_ad_scrollfooterc"));var e=i("inpl_ad_scrollfooterx");s&&e&&(m.style.display="none",H.bind(e,"click",function(){m.style.display="block"}))}catch(f){}if(c(a.Inpl_CookiePolicy)){if(!t){t=u.getElementById("inpl_cp_cnt");var g=u.getElementById("inpl_cp_close");t&&g&&H.bind(g,"click",E)}t&&(b=j(t))>d&&(d=b)}m.style.bottom=d+"px"};A.startAnimation=function(){if(!d){var a={duration:b.duration,animationEnd:function(){var a=n.childNodes[0];a&&(n.removeChild(a),n.appendChild(a),A.startAnimation())}};d=p()?new G(n,"translate3d",a):new G(n,"left",a)}d.set(0),d.to(-e*(b.direction>0?1:-1))},A.init=function(){var c=h("style",{type:"text/css"}),d=C.getCss(b.theme);c.styleSheet?c.styleSheet.cssText=d:c.appendChild(u.createTextNode(d)),(u.head||u.body).appendChild(c),m=h("div",{className:"news-scroll-footer"}),n=h("div",{className:"news-scroll-footer-wrap"}),o=h("ul",{className:"news-scroll-footer-list",innerHTML:C.prepareNewsList(w)});var e=h("div",{className:"news-scroll-footer-wrap-outer"});n.appendChild(o),e.appendChild(n),m.appendChild(e),u.body.appendChild(m),u.body.className+=" has-news-scroll-footer",m.style.visibility="hidden",C.appendLists(),E(),m.style.visibility="visible";var f=0;H.bind(a,"resize",function(){f++,setTimeout(function(){f--,0>=f&&(C.appendLists(),E())},500)}),z&&((new Image).src="//interia.hit.gemius.pl/_"+(new Date).getTime()+"/redot.gif/id="+z),A.setUserDisplayCount(A.getUserDisplayCount()+1)},A.hasHash=function(){return"string"==typeof x&&x.length>0},A.checkHasHash=function(){if(!A.hasHash())throw new Error('Brak obiektu "hash"')},A.getUserDisplayCount=function(){return A.checkHasHash(),"number"!=typeof r&&(r=parseInt(g("zoc_count_"+x),10),isNaN(r)&&(r=0)),r},A.setUserDisplayCount=function(a){if(A.checkHasHash(),a=a||A.getUserDisplayCount(),b.capping>0)try{f("zoc_count_"+x,a,{expires:7200})}catch(c){if(v)throw c}},A.canDisplay=function(){try{return!(!A.hasHash()||!w.length||b.capping>0&&b.capping<=A.getUserDisplayCount())}catch(a){if(v)throw a}return!1},D.retrieveNewsList({success:function(a){try{a&&a.linkList&&Array.isArray(a.linkList)&&a.linkList.length>0&&a.hash&&(w=a.linkList,x=a.hash,y=a.gemiusCodeClick,z=a.gemiusCodeView,!0===A.canDisplay()&&(A.init(),A.startAnimation()))}catch(b){if(v)throw b}}})};l(function(){if(!A){v=a.location.hash.indexOf("inpltesterad")>-1;var b={version:"1.0.1",duration:1e4,displayDelay:v?1:3e3,capping:v?0:2,gact:!0,theme:"default"};setTimeout(function(){try{new I(b)}catch(a){if(v)throw a}},b.displayDelay)}})}}(window);