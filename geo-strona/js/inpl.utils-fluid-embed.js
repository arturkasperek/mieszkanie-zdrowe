var utils=utils||{};utils.fluidEmbed=function(){setTimeout(function(){var a,b,c,d,e,f,g,h=jQuery,i=1,j=[],k=new RegExp("^((http(s?):)?//)?(www.)?(youtube.com|player.vimeo.com|dailymotion.com|interia.tv|video.interia.pl|wideo.interia.pl|get.x-link.pl|vine.co|w.soundcloud.com|cdnapisec.kaltura.com|www.tvp.pl|redir.atmcdn.pl|partner.ipla.tv/embed|embed.pluscdn.pl)"),l=function(a){var b,c;return!!((b=a.attr("class"))&&b.search("ad")>=0)||!!((c=a.attr("id"))&&c.search("ad")>=0)},m=function(a,b){return b=b||0,a=a.parent(),!!l(a)||++b<=3&&m(a,b)},n=function(a){var b,c=""+h(window).outerWidth();return!c.match(/[^\d]/)&&(c=parseInt(c,10),!(isNaN(c)||c<=0)&&(b=""+a.width(),!b.match(/[^\d]/)&&(b=parseInt(b,10),!(isNaN(b)||b<=0)&&(b>c?-c:b))))},o=function(a,b,c,d){var e=!1,f=0,g={};if(width=n(a),width<0&&(e=!0,width=Math.abs(width)),width)return g=p(b),e&&"youtube"==d&&(f=200,a.css({width:width+"px"})),g.width="100%",g.height="",f>0?a.css(g).delay(f):a.css(g),!0},p=function(a){return{paddingBottom:100*a+"%"}};h(".article-container .embed iframe, .article-container object").each(function(){if(c=h(this),!c.hasClass("js-embed-iframe-resized js-advert-miss")){if(g=c.attr("src"),e="string"==typeof g&&g.match(k),d=!1,!e&&"object"==c.prop("tagName").toLowerCase()){if(m(c,0))return void c.addClass("js-advert-miss");d=!0}if(e||d){if(a=c.parent(),b=a.parent(),gaps=parseInt(b.attr("data-gaps"),10),isNaN(gaps)&&(gaps=0),f=b.attr("data-type"),void 0===f&&(f="interia"),width=""+c.attr("width"),height=""+c.attr("height"),width.match(/[^\d]/)||height.match(/[^\d]/))return;if(width=parseInt(width,10),height=parseInt(height,10),!isNaN(width)&&!isNaN(height)&&0<width&&0<height){if(i=height/width,a.hasClass("embed-video-player")||(c.wrap('<div class="embed-video-player"></div>'),a=c.parent()),!o(a,i,gaps,f))return;a.addClass("js-embed-resized"),c.addClass("js-embed-iframe-resized").removeAttr("width").removeAttr("height")}}}}),j.length>0&&h(window).lazyresize(function(){h.each(j,function(){var a=h(this);a=a.length>0?a[0]:a,o(a.embed,a.ratio,a.gaps,a.type)})})},1e3)};