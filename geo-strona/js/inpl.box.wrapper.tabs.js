jQuery.fn.boxWrapperTabs=function(a){function b(a){return void 0!==a}var c={};c.startIndex=0,c.fadeSpeed=200,c.headerSelector=".single-tab-header";var d=jQuery(this),e=jQuery([]),f=jQuery([]),g=-1,h=[];({}).getClassData=function(a,b,c){b=" "+b,c+=" ";var d=" "+jQuery(a).attr("class")+" ",e=d.indexOf(b),f=d.indexOf(c,e+b.length);return-1===e||-1===f?"":d.slice(e+b.length,f)};var i=function(a){c=jQuery.extend(c,a),e=d.find(".tabs-list"),d.find(".tabs-list").before(f=jQuery("<ul>").addClass("tabs")),e.find(".tabs-list-item").hide().each(function(a){var b=jQuery(this).attr("data-index");f.append(jQuery("<li>").addClass("tab").attr("data-index",b).addClass("tab-"+b).text(jQuery.trim(jQuery(this).find(c.headerSelector).text()))),jQuery(this).find(c.headerSelector).remove()}),f.find(".tab").click(function(){j(jQuery(this).attr("data-index"))}),j(c.startIndex)},j=function(a){h.push(a),d.queue(function(){if(jQuery.browser.opera)return void d.dequeue();var a=e.find(".tabs-list-item").eq(h[0]);if(h[0]===g||0===a.length)return void d.dequeue();e.animate({height:a.outerHeight({margin:!0})},{duration:2*c.fadeSpeed,queue:!1}),d.dequeue()}),d.queue(function(){var a=e.find(".tabs-list-item").eq(g);if(h[0]===g||0===a.length)return void d.dequeue();a.animate({opacity:"hide"},{duration:c.fadeSpeed,queue:!1,complete:function(){d.dequeue()}})}),d.queue(function(){f.find("li").removeClass("active").eq(h[0]).addClass("active"),d.dequeue(),b(Inpl)&&b(Inpl.LazyLoad)&&setTimeout(function(){Inpl.LazyLoad.update()},0)}),d.queue(function(){var a=e.find(".tabs-list-item").eq(h[0]);if(h[0]===g||0===a.length)return void d.dequeue();a.animate({opacity:"show"},{duration:c.fadeSpeed,queue:!1,complete:function(){d.dequeue()}})}),d.queue(function(){g=h.shift(),d.dequeue()})};jQuery(document).ready(function(){i(a)})};