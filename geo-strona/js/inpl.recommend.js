!function(){function a(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent("CustomEvent");return c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail),c}if(window.callbackNr=0,"function"==typeof window.CustomEvent)return!1;a.prototype=window.Event.prototype,window.CustomEvent=a}();var jQueryVerValid="function"==typeof jQuery(".test").on;jQueryVerValid||(jQuery.fn.extend({on:function(a,b,c,d){"function"==typeof b?jQuery(this).live(a,b):jQuery(b).live(a,c)},off:function(a,b,c,d){jQuery(this).die(a)}}),jQuery.fn.outerHeight=function(){var a=0;return this.style&&(a=this.style.paddingTop+this.style.paddingBottom),this.height()+a});var console=console||{log:function(){}};!function(a,b,c,d){"use strict";function e(c,d){var e=this,f={isUpgradedVersion:!0,initDelay:200,wrapperStart:'<div class="wrapper">',wrapperEnd:"</div>",enableFlybar:!1,flybarWrapperStart:'<ul class="row">',flybarWrapperEnd:"</ul>",onlyStoreVisited:!1,storageLimit:5,storageKey:"recommend",elementsListCssClass:"",elementCssClass:"col-xs-6 every-xs-2 col-rs-6 every-rs-2 col-sm-3 every-sm-4 col-md-3 every-md-4 col-lg-3 every-lg-4",flybarElementCssClass:"col-xs-6 every-xs-2 col-rs-6 every-rs-2 col-sm-3 every-sm-4 col-md-3 every-md-4 col-lg-3 every-lg-4",renderLimit:6,elementHtmlRenderer:e._renderElement,elementsListHtmlRenderer:e._renderElementsList,headerHtmlRenderer:e._renderHeader,enableTypeIcons:!1,ajaxUrl:"",ajaxUrlActualIndex:0,ajaxTimeout:5e3,actualPageId:"",actualPageType:"",pageTypeAllow:["article","photo","video","album"],nPack:1,nPackUrlParamName:"nPack",nPackSize:8,startNoUrlParamName:"startNo",startNo:0,uid:"",ref:"",cfg:"",forumElement:null,imageServerUrl:b.CONFIG.servers.image||"i.iplsc.com",thumbImageType:"C436",flybarThumbImageType:"C459",thumbImageFormat:"jpg",elementsInFlybar:4,flybarFixedBottom:"0",flybarOpenOnStart:!0,flybarAlwaysFix:!1,flybarActionShowPointOffset:0,flybarActionShowPointSelector:!1,flybarActionHidePointSelector:!1,flybarActionShowAddHeight:!1,flybarActionHideAddHeight:!1,flybarActionPointsMinimumPositionDif:700,flybarHideHeight:700,loadRecommendsCallback:null,customEventName:"recommended",ec1IwaParam:"see_also",iwaUrlSufixValue:"zobacz_takze"};e.element=c,e.settings=a.extend({},f,d),e.settings.wrapperStart=e.settings.isUpgradedVersion?'<div class="wrapper">':e.settings.wrapperStart,e.settings.wrapperEnd=e.settings.isUpgradedVersion?"</div>":e.settings.wrapperEnd,e._defaults=f,e.name=d.name||"recommend",e.rekValue="",e.loadedPack=[],e.currentPack=[],e.guid="",e.dsgUserType="",e.eventParams={scroll:{name:"scroll."+e.name+" touchmove."+e.name+" gesturechange."+e.name,startName:"scroll."+e.name+".start"}},e._iwaCount={view:!1,viewFlybar:!1,flybarHide:!1,flybarWasOpen:!0},setTimeout(function(){e.init()},e.settings.initDelay)}var f="recommend";a.extend(e.prototype,{init:function(){var a=this;if(a.userInteraction=!1,a._addActualPage(),a.settings.onlyStoreVisited)return!0;var c=setInterval(function(){b.recommendationsLoading||(b.recommendationsReady||(b.recommendationsLoading=!0),a._initElements(),a._scrollLoader(),clearInterval(c))},100)},_initElements:function(){var c=this;c.$window=a(b),c.dsgUserType=Inpl&&Inpl.dsg&&Inpl.dsg.getUserType?Inpl.dsg.getUserType():"",c.noMoreItemsInAnySource=!1,c.isDomBlock=!1,c.isDomFlybar=!1,c.$flybar=a('<div class="recommend-flybar-block"></div>'),c.$flybar.isFixed="",c.$elementsAppendPlace=a(c.settings.wrapperStart+c.settings.wrapperEnd),c.$flybarAppendPlace=a('<div class="recommend-flybar container"></div>'),c.$flybarButtonAll=a('<span class="recommend-flybar-button-all"></span>'),c.$flybarButton=a('<div class="recommend-flybar-button"></div>').append('<span class="recommend-flybar-button-inside"></span>').append(c.$flybarButtonAll),!1!==c.settings.flybarActionShowPointSelector?(c.$flybarActionShowPointElement=a(c.settings.flybarActionShowPointSelector),c.$flybarActionShowPointElement.length<1&&(c.$flybarActionShowPointElement=!1)):c.$flybarActionShowPointElement=!1,!1!==c.settings.flybarActionHidePointSelector?(c.$flybarActionHidePointElement=a(c.settings.flybarActionHidePointSelector),c.$flybarActionHidePointElement.length<1&&(c.$flybarActionHidePointElement=!1)):c.$flybarActionHidePointElement=!1,c.flybarActionShowPointPosition=!1,c.flybarActionHidePointPosition=!1,c.scrollIsBinded=!1,c.scrollTimer=null,c.browser=["android"];var d=b.navigator.userAgent;d.indexOf("Android")>=0&&(c.browser.android=parseFloat(d.slice(d.indexOf("Android")+8))),c.browser.android<4&&(c.settings.enableFlybar=!1),c.tileHeight=0},_checkStorageSupport:function(){var a="check-storage";try{return localStorage.setItem(a,a),localStorage.removeItem(a),!0}catch(b){return!1}},_getActualPageHash:function(){return this.settings.actualPageId+"-"+this.settings.actualPageType},_addActualPage:function(){var b=this;if(!(!parseInt(b.settings.actualPageId)>0)){var c=b._getVisitedPages();return c.length>=b.settings.storageLimit&&c.shift(),a.inArray(b._getActualPageHash(),c)<0&&c.push(b._getActualPageHash()),b._saveVisitedPages(c)}},_getVisitedPages:function(){var a=this;return a._checkStorageSupport()&&null!==b.localStorage.getItem(a.settings.storageKey)?JSON.parse(b.localStorage.getItem(a.settings.storageKey)):[a._getActualPageHash()]},_saveVisitedPages:function(c){var d=this;return!!(d._checkStorageSupport()&&a.inArray(d.settings.actualPageType,d.settings.pageTypeAllow)>=0)&&(b.localStorage.setItem(d.settings.storageKey,JSON.stringify(c)),!0)},_ajaxData:function(){var a=this,b={},c=a._getVisitedPages();return c.length>0&&(b.e=c),b.uid=a.settings.uid,b.ref=a.settings.ref,b.cnt=a.settings.nPackSize,a.settings.cfg&&(b.cfg=a.settings.cfg),b},_ajaxDataWntt:function(){var a=this,b={},c=a._getVisitedPages();return c.length>0&&(b.e=[c.pop()]),b.cnt=a.settings.nPackSize,a.settings.cfg&&(b.cfg=a.settings.cfg),b},_ajaxUrl:function(){var c=this,d="",e=1;return b.rodoAPI&&(e=-1!==["1","7","8","9"].indexOf(rodoAPI.getStatus())?1:0),a.isArray(c.settings.ajaxUrl)?d+=c.settings.ajaxUrl[c.settings.ajaxUrlActualIndex]:d+=c.settings.ajaxUrl,iwa3&&iwa3(function(a){c.guid=a.get("globalId")}),d.indexOf("spider")>-1?(d+="pers="+e,d+="&packSize=20&packNr=1",d+="&guid="+c.guid,b.oldRecommendaitons=!1):(d+=","+c.settings.nPackUrlParamName+","+c.settings.nPack,d+=","+c.settings.startNoUrlParamName+","+c.settings.startNo,b.oldRecommendaitons=!0),d},_ajaxType:function(){return this.settings.nPack>1?"POST":"GET"},_ajaxUrlTryNext:function(){var a=this;a.settings.ajaxUrlActualIndex+1 in a.settings.ajaxUrl?(a.settings.ajaxUrlActualIndex+=1,a.settings.nPack=1):a.noMoreItemsInAnySource=!0},_scrollLoader:function(){var d=this;jQueryVerValid||d.loadRecommends(),a(c).outerHeight()-210<Math.max(c.documentElement.clientHeight,b.innerHeight||0)?d.loadRecommends():d.$window.on(d.eventParams.scroll.startName,function(){d.$window.scrollTop()>200&&(d.loadRecommends(),d.$window.off(d.eventParams.scroll.startName))})},loadRecommends:function(c){var d=this;if(d.noMoreItemsInAnySource)return a(d).add(c).removeClass("loading"),a(d).addClass("has-no-more-items"),a(c).addClass("hidden"),!0;if(!b.oldRecommendaitons&&b.recommendationsReady)return d.loadedPack=JSON.parse(b.iaSpidermanData),d.currentPack=d.loadedPack.splice(0,"zobacz_takze"===d.settings.iwaUrlSufixValue?9:8),d._renderHtml(d.currentPack),b.iaSpidermanData=JSON.stringify(d.loadedPack),b.recommendationsLoading=null,b.rrecommendationsReady=null,!0;a(d).add(c).addClass("loading");try{a.ajax({type:d._ajaxType(),url:d._ajaxUrl(),data:b.oldRecommendaitons?d._ajaxUrl().indexOf("recomendation-wntt")>-1?d._ajaxDataWntt():d._ajaxData():"",dataType:b.oldRecommendaitons?"jsonp":"json",jsonp:b.oldRecommendaitons?"callback":"",jsonpCallback:b.oldRecommendaitons?"recommendCallback"+b.callbackNr++:"",timeout:d.settings.ajaxTimeout,cache:!b.oldRecommendaitons}).done(function(e){1==e.status&&(e.data.length<d.settings.nPackSize?(d._ajaxUrlTryNext(),d.loadRecommends(c)):(d.rekValue=e.data[0].test||"",b.oldRecommendaitons||(d.loadedPack=Object.entries(e.data).map(function(a){return a[1]}),d.currentPack=d.loadedPack.splice(0,"zobacz_takze"===d.settings.iwaUrlSufixValue?9:8),b.iaSpidermanData=JSON.stringify(d.loadedPack)),d._renderHtml(b.oldRecommendaitons?e.data:d.currentPack),b.recommendationsReady=!0,b.recommendationsLoading=null,d.settings.nPack+=1),"function"==typeof d.settings.loadRecommendsCallback&&d.settings.loadRecommendsCallback()),a(d).add(c).removeClass("loading"),a(d).removeClass("has-ajax-error")}).fail(function(b,e){a(d).add(c).removeClass("loading"),d._ajaxUrlTryNext(),d.loadRecommends(c)})}catch(e){a(d).addClass("has-ajax-error")}},_appendHtml:function(c){var d=this;d.$elementsAppendPlace||(d.$elementsAppendPlace=a(d.settings.wrapperStart+d.settings.wrapperEnd)),d.$elementsAppendPlace.append(c),d.$elementsAppendPlace.on("mousedown",".tile-magazine-thumb, .tile-magazine-title-url",function(b){var c=d.$elementsAppendPlace.find(".brief-list-item").index(a(this).parents(".brief-list-item"))+1;iwa("trackEvent","spiderman",d.settings.ec1IwaParam,"klik",d.dsgUserType,"link_"+c)});var e=d.$elementsAppendPlace.find(".brief-list-item").eq(0);d.isDomBlock||(a(d.element).prepend(d.$elementsAppendPlace),d.tileHeight=e.outerHeight(),d.isDomBlock=!0),d.readFlybarActionPointPositions(),d.settings.flybarAlwaysFix?d._fixFlybar():d._unfixFlybar(),d.refreshFlybarPosition(),d._handleWhenOnScreen(d.element),d._bindScroll();var f=new CustomEvent(d.settings.customEventName);b.dispatchEvent(f)},toggleOpen:function(){var a=this,b=a.$flybarButton.parents(".recommend-flybar-block");b.toggleClass("is-open"),b.hasClass("is-open")?(iwa("trackEvent","spiderman","lotny","klik",a.dsgUserType,"rozwin"),a.$flybar.isOpen=!0,a._iwaCount.flybarWasOpen=!0):(iwa("trackEvent","spiderman","lotny","klik",a.dsgUserType,"zwin"),a.$flybar.isOpen=!1,a._iwaCount.flybarWasOpen=!1),a._fixFlybar()},closeFlybar:function(){var a=this;0!=a.$flybar.isShow&&(a.$flybarButton.parents(".recommend-flybar-block").removeClass("is-open"),a.$flybar.isOpen=!1,a.readFlybarActionPointPositions(),a._fixFlybar())},_appendHtmlToFlybar:function(b){var c=this;c.isDomFlybar||(c.$flybarButton.on("click",function(){c.userInteraction=!0,c.toggleOpen(),c.flybarHeight=c.$flybar.outerHeight()}),c.$flybarButtonAll.on("click",function(b){b.stopPropagation(),c.userInteraction=!0,a("html, body").stop().animate({scrollTop:c.flybarActionHidePointPosition-40},1e3,"linear"),iwa("trackEvent","spiderman","lotny","klik",c.dsgUserType,"pokaz_wszystkie")}),c.$flybarAppendPlace.append(c.settings.flybarWrapperStart+b+c.settings.flybarWrapperEnd),c.$flybarAppendPlace.on("mousedown",".tile-magazine-thumb, .tile-magazine-title-url",function(b){var d=c.$flybarAppendPlace.find(".brief-list-item").index(a(this).parents(".brief-list-item"))+1;iwa("trackEvent","spiderman","lotny","klik",c.dsgUserType,"link_"+d)}),c.settings.flybarOpenOnStart&&(c.$flybar.addClass("is-open"),c.$flybar.isOpen=!0),c.$flybar.append(c.$flybarButton).append(c.$flybarAppendPlace).appendTo("body"),c.isDomFlybar=!0,c.readFlybarActionPointPositions(),c.refreshFlybarPosition())},_replaceListElement:function(a,b,c){var d=a;if(a)return d[c]=b,d},_getRandomInt:function(a,b){return Math.floor(Math.random()*(b-a+1))+a},_renderHtml:function(a){var b=this,c="";a.length>0&&(b.settings.headerText&&(c+=b.settings.headerHtmlRenderer(b.settings.headerText)),b.settings.forumElement&&(a=b._replaceListElement(a,b.settings.forumElement,b._getRandomInt(0,a.length-1))),c+=b.settings.elementsListHtmlRenderer(a,b)),b._appendHtml(c)},_makeUrl:function(a){if(a!==d&&""!==a)return-1!==a.indexOf("parametr")?a=this._replaceUrlParam(a,"parametr",this.settings.iwaUrlSufixValue):a+="?parametr="+this.settings.iwaUrlSufixValue,-1!==a.indexOf("forum.interia.pl")&&-1!==a.indexOf("iwa_source")&&(a=this._replaceUrlParam(a,"iwa_source",this.rekValue)),a},_replaceUrlParam:function(a,b,c){null==c&&(c="");var d=new RegExp("\\b("+b+"=).*?(&|$)");return a.search(d)>=0?a.replace(d,"$1"+c+"$2"):(a=a.replace(/\?$/,""))+(a.indexOf("?")>0?"&":"?")+b+"="+c},_makeImageUrl:function(a,b,c){return"//"+this.settings.imageServerUrl+"/"+a+"-"+b+"."+c},_renderElement:function(a,b,c,d,e){var f="";return e=e||c.settings.thumbImageType,f+='<li class="brief-list-item i'+d+" "+b+'">',f+='<div class="tile-magazine'+(c.settings.enableTypeIcons&&"article"!==a.type.toLowerCase()?" "+a.type.toLowerCase():"")+'">',f+='<a class="tile-magazine-thumb" href="'+c._makeUrl(a.url,a.elementId?a.elementId:a.id,a.type,a.title)+'">',(a.attachmentId||a.attachment_ident)&&(f+='<img src="'+c._makeImageUrl(a.attachmentId?a.attachmentId:a.attachment_ident,e,c.settings.thumbImageFormat)+'" class="tile-magazine-img img-responsive" alt="'+a.title+'">'),f+="</a>",f+='<div class="tile-magazine-header">',(a.categoryName||a.category.name)&&(f+='<a class="tile-magazine-category">'+(a.categoryName?a.categoryName:a.category.name)+"</a>"),f+='<h2 class="tile-magazine-title header-font"><a class="tile-magazine-title-url" href="'+c._makeUrl(a.url,a.elementId?a.elementId:a.id,a.type,a.title)+'" title="'+a.title+'">',a.title&&(f+=a.title),f+="</a></h2>",f+="</div>",f+="</div>",f+="</li>"},_renderElementsList:function(b,c){var d="",e="",f=0;return d+='<ul class="row '+c.settings.elementsListCssClass+'">',a.each(b,function(a,b){f++,d+=c.settings.elementHtmlRenderer(b,c.settings.elementCssClass,c,f),c.settings.enableFlybar&&(e+=c.settings.elementHtmlRenderer(b,c.settings.flybarElementCssClass,c,f,c.settings.flybarThumbImageType),f>0&&f==c.settings.elementsInFlybar&&c._appendHtmlToFlybar(e))}),d+="</ul>"},_renderHeader:function(a){var b="";return b+='<div class="recommend-header">',b+='<div class="recommend-header-text">'+a+"</div>",b+="</div>"},readFlybarActionPointPositions:function(a){var d=this;if(d.scrollTimer=null,d.flybarAlwaysFix&&!0!==a)return!0;var e;if(!1===d.$flybarActionShowPointElement)return d._hideFlybar(),!0;e=d.$flybarActionShowPointElement.offset(),d.settings.flybarActionShowAddHeight?d.flybarActionShowPointPosition=e.top+d.$flybarActionShowPointElement.outerHeight():d.flybarActionShowPointPosition=e.top,!1!==d.$flybarActionHidePointElement&&(e=d.$flybarActionHidePointElement.offset(),d.flybarActionHidePointPosition=e.top,d.settings.flybarActionHideAddHeight?d.flybarActionHidePointPosition=e.top+d.$flybarActionHidePointElement.outerHeight():d.flybarActionHidePointPosition=e.top),d.flybarActionShowPointPosition>d.flybarActionHidePointPosition?(d._fixFlybar(a),d._flybarUnbindScroll()):d._flybarBindScroll(),d.windowHeight=Math.max(c.documentElement.clientHeight,b.innerHeight||0),d.flybarHeight=d.$flybar.outerHeight()},_flybarBindScroll:function(){var a=this;if(a.scrollIsBinded)return!0;a.$window.on(a.eventParams.scroll.name,a.throttle(function(){a.refreshFlybarPosition()},20,a)),a.$window.on(a.eventParams.scroll.name,a.throttle(function(){a.readFlybarActionPointPositions(),a.$flybar.isFixed||a.setFlybarDockedPosition()},500,a)),a.scrollIsBinded=!0},_bindScroll:function(){var a=this;a.$window.on(a.eventParams.scroll.name,a.throttle(function(){a._handleWhenOnScreen.call(a,a.element)},500,a))},_handleWhenOnScreen:function(a){this._isOnScreen(a)?0==this._iwaCount.view&&(iwa("trackEvent","spiderman",this.settings.ec1IwaParam,"view",this.dsgUserType,this.rekValue),this._iwaCount.view=!0):this._iwaCount.view=!1},throttle:function(a,b,c){b||(b=500);var d,e;return function(){var f=c||this,g=+new Date,h=arguments;d&&g<d+b?(clearTimeout(e),e=setTimeout(function(){d=g,a.apply(f,h)},b)):(d=g,a.apply(f,h))}},refreshFlybarPosition:function(a){var b=this,c=b.$window.scrollTop();c>b.flybarActionShowPointPosition-b.windowHeight+.8*(b.flybarHeight-20)?0==b._iwaCount.viewFlybar&&1==b.$flybar.isShow&&1==b.$flybar.isOpen&&(iwa("trackEvent","spiderman","lotny","view",b.dsgUserType,b.rekValue),b._iwaCount.viewFlybar=!0):b._iwaCount.viewFlybar=!1,c>b.flybarActionShowPointPosition-b.windowHeight+b.flybarHeight+b.settings.flybarActionShowPointOffset?b._fixFlybar(a):b._unfixFlybar(a),c>b.flybarActionHidePointPosition-b.windowHeight+b.flybarHeight?b._hideFlybar("isAfterHidePoint"):b.flybarActionHidePointPosition-b.flybarActionShowPointPosition<b.settings.flybarActionPointsMinimumPositionDif?b._hideFlybar("isTooSmallHeight"):b._showFlybar(a),c>b.flybarActionShowPointPosition-b.windowHeight+b.flybarHeight+b.settings.flybarHideHeight&&0==b.userInteraction&&1==b.$flybar.isShow&&b.closeFlybar(a)},_flybarUnbindScroll:function(){var a=this;a.$window.off("scroll.recommend touchmove.recommend gesturechange.recommend"),a.scrollIsBinded=!1},_fixFlybar:function(a){var b=this;!0===b.$flybar.isFixed&&!0!==a||(b.$flybar.removeClass("is-docked").addClass("is-fixed").css({top:"",bottom:b.settings.flybarFixedBottom}),b.$flybar.isFixed=!0,0!=b.browser.android&&b.browser.android<4.3&&b.$flybar.css({display:"block"}))},setFlybarFixedBottom:function(a){var b=this.$flybar;this.settings.flybarFixedBottom=a,b.isFixed&&b.css({bottom:a})},setFlybarDockedPosition:function(){var a=this;a.$flybar.css({top:a.flybarActionShowPointPosition+a.settings.flybarActionShowPointOffset+"px"})},_unfixFlybar:function(a){var b=this;!1===b.$flybar.isFixed&&!0!==a||(b.$flybar.removeClass("is-fixed").addClass("is-docked").css("bottom",""),b.$flybar.isFixed=!1,b.setFlybarDockedPosition(),0!=b.browser.android&&b.browser.android<4.3&&b.$flybar.css({display:"none"}))},unfixFlybar:function(a){this._unfixFlybar(a)},_showFlybar:function(){var a=this;a.$flybar.removeClass("is-hidden"),a.$flybar.isShow=!0,a._iwaCount.flybarHide=!1,a.$flybar.isOpen?a._iwaCount.flybarWasOpen=!0:a._iwaCount.flybarWasOpen=!1},_hideFlybar:function(a){var b=this;0!=b.$flybar.isShow&&(b.$flybar.addClass("is-hidden"),b.$flybar.isShow=!1,"isAfterHidePoint"==a&&b.$flybar.isOpen?b._iwaCount.flybarWasOpen=!0:b._iwaCount.flybarWasOpen=!1,b._iwaCount.flybarHide=a)},_isOnScreen:function(a){var c=.8*this.tileHeight,d=a.getBoundingClientRect();return d.top+c<b.innerHeight&&d.bottom-c>0}}),a.fn[f]=function(b){var c=arguments;if(b===d||"object"==typeof b)return this.each(function(){a.data(this,"plugin_"+f)||a.data(this,"plugin_"+f,new e(this,b))});if("string"==typeof b&&"_"!==b[0]&&"init"!==b){var g;return this.each(function(){var d=a.data(this,"plugin_"+f);d instanceof e&&"function"==typeof d[b]&&(g=d[b].apply(d,Array.prototype.slice.call(c,1)))}),g!==d?g:this}}}(jQuery,window,document);