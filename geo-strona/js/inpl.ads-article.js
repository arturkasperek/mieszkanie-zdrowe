!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("inpl.ads-article",[],n):"object"==typeof exports?exports["inpl.ads-article"]=n():e["inpl.ads-article"]=n()}(window,(function(){return function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="https://js.iplsc.com/inpl.ads-article/1.0.7/",t(t.s=0)}([function(e,n){var t,a;t=parent.document,a={params:{allAdPlace:[],chosenElArray:[],paragraphLength:0,adNr:0,timer:null},findAdPlaceInit:function(){if(a.params.firstEl=t.querySelector("#news1"),a.params.firstEl){for(;a.params.firstEl=a.params.firstEl.nextElementSibling;){var e=a.params.firstEl.previousElementSibling?window.getComputedStyle(a.params.firstEl.previousElementSibling,null).getPropertyValue("float"):"none";("P"==a.params.firstEl.nodeName.toUpperCase()&&"none"==e||"UL"==a.params.firstEl.nodeName.toUpperCase()||"ASIDE"==a.params.firstEl.nodeName.toUpperCase()&&-1!=a.params.firstEl.className.indexOf("embed-citation"))&&a.params.firstEl.textContent.length>0&&a.params.chosenElArray.push(a.params.firstEl)}a.findAdPlace(a.params.chosenElArray)}},findAdPlace:function(e){e.forEach((function(e){"UL"==e.nodeName.toUpperCase()||"ASIDE"==e.nodeName.toUpperCase()||"P"==e.nodeName.toUpperCase()&&(e.textContent.length<400||"aj-description"==e.className)?(a.params.paragraphLength=a.params.paragraphLength+e.textContent.length,a.params.paragraphLength>1e3&&a.insertAd(e)):e.childNodes.forEach((function(e){a.params.paragraphLength=a.params.paragraphLength+e.textContent.length,"#text"==e.nodeName&&e.nextSibling&&"B"!=e.nextSibling.nodeName.toUpperCase()&&"A"!=e.nextSibling.nodeName.toUpperCase()&&a.params.paragraphLength>1e3&&a.insertAd(e)}))}))},padAdNr:function(e){return e<10?"0"+e:e},insertAfter:function(e,n,t){n.parentNode.insertBefore(e,n.nextSibling)},insertAd:function(e){a.params.adNr++;var n=t.createElement("div");n.className="box ad news ad-rectangle",n.style.minHeight="370px",n.innerHTML='<div class="boxBegin"></div><div class="boxHeader"><h3>Reklama</h3></div><div class="boxBody" data-iwa-viewability-name="rectangle_news"><div id="rectangle_news_'+a.padAdNr(a.params.adNr)+'" align="center"></div></div><div class="boxEnd"></div>',a.params.paragraphLength=0;var r=t.createElement("div");r.id="ad-view-rectangle_news_"+a.padAdNr(a.params.adNr),a.params.allAdPlace.push("rectangle_news_"+a.padAdNr(a.params.adNr)),r.appendChild(n),a.insertAfter(r,e,a.params.adNr)},elemInViewRefresh(e){let n=e;for(;null!==n&&1===n.nodeType;){if("none"===getComputedStyle(n).getPropertyValue("display"))return!1;n=n.parentElement||n.parentNode}const a=e.getBoundingClientRect();return a.top>=0&&a.bottom<=(window.innerHeight||t.documentElement.clientHeight)},refreshAds:function(){a.params.allAdPlace.forEach(e=>{const n=t.querySelector("#ad-view-"+e);n&&a.elemInViewRefresh(n)&&Inpl.Ad.refreshAd("rectangle_news",e)})},initAdsRefresh:function(){if(!window.Inpl.Ad.config.refreshAds.enabled)return!1;let e,n;clearInterval(a.params.timer),void 0!==t.hidden?(e="hidden",n="visibilitychange"):void 0!==t.msHidden?(e="msHidden",n="msvisibilitychange"):void 0!==t.webkitHidden&&(e="webkitHidden",n="webkitvisibilitychange");const r=()=>{t[e]?clearInterval(a.params.timer):a.params.timer=setInterval(()=>{window.Inpl.Ad.config.refreshAds.enabled&&a.refreshAds()},1e3*window.Inpl.Ad.config.refreshAds.interval)};void 0===t.addEventListener||void 0===e?console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API."):t.addEventListener(n,r,!1),r()}},addEventListener("Inpl.slotLoaded",(function(e){e.detail&&"rectangle_news"===e.detail.name&&e.detail.placementId&&(adCont=t.getElementById(e.detail.placementId),adCont.parentElement.parentElement.style.display="flex")})),addEventListener("Inpl.empty",(function(e){e.detail&&"rectangle_news"===e.detail.name&&e.detail.placementId&&(adCont=t.getElementById(e.detail.placementId),adCont.parentElement.parentElement.style.display="none")})),addEventListener("Inpl.adsLoaded",(function(){a.findAdPlaceInit(),void 0!==a.params.allAdPlace&&a.params.allAdPlace.length>0&&(Inpl.Ad.lazyLoadInsertAd("rectangle_news",a.params.allAdPlace),a.initAdsRefresh())}))}])}));