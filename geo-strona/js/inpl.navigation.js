!function(a,b,c){function d(){var a=c('<div class="nav-item-pin"></div>');return a.on("click",function(){var a=c(this).parent(".nav-item");a.hasClass("is-in-more")||i.removeClass("is-expanded"),g.not(a).not(".is-in-more").removeClass("is-open"),a.hasClass("is-open")?a.removeClass("is-open"):a.addClass("is-open")}),a}function e(){var a,b=!1,d=!1;l.detach(),i.removeClass("has-hidden-items"),j.css({"padding-right":0}),g.addClass("is-in-line").removeClass("is-in-more").each(function(){if(0!==c(this).position().top)return b=!0,!1}),b&&(j.hasItemMore||l.on("click",function(a){a.preventDefault(),g.removeClass("is-open"),i.hasClass("is-expanded")?(a.preventDefault(),i.removeClass("is-expanded")):i.addClass("is-expanded")}),j.css({"padding-right":j.paddingRight}),i.addClass("has-hidden-items"),j.hasItemMore=!0),g.removeClass("is-in-more").each(function(b){a=c(this),0===a.position().top?d=a.addClass("is-in-line"):(a.addClass("is-in-more"),a.removeClass("is-in-line"))}),j.css({"padding-right":0}),b&&l.insertAfter(d),i.addClass("is-ready")}function f(a){(i.hasClass("is-expanded")||g.hasClass("is-open"))&&0===c(a.target).closest("."+h).length&&(i.removeClass("is-expanded"),g.removeClass("is-open"))}var g,h="nav-top",i=c("."+h),j=c("."+h+" > .nav-top-list"),k="click",l=c('<li class="nav-item '+h+'-item-more"><a class="nav-item-link" href="#">Więcej</a></li>');c(function(){g=c("."+h+" > ."+h+"-list > .nav-item"),i.addClass("has-no-pins"),j.on(k,"li > a",function(a){if($parentLi=c(this).parent(),g.not($parentLi).not(".is-in-more").removeClass("is-open"),$parentLi.hasClass("nav-top-item-more")||$parentLi.hasClass("is-in-more")||i.removeClass("is-expanded"),($parentLi.hasClass("has-submenu")&&$parentLi.hasClass("is-in-more")||c("html").hasClass("touch")&&$parentLi.hasClass("has-submenu"))&&(a.preventDefault(),$parentLi.hasClass("is-open")?$parentLi.removeClass("is-open"):$parentLi.addClass("is-open"),!$parentLi.data("has-clone-link"))){var b=$parentLi.children("a"),d=c('<li class="nav-item"></li>');d.append(b.clone()),$parentLi.children("ul").prepend(d),$parentLi.data("has-clone-link",1)}}),j.append(l),j.paddingRight=l.outerWidth()+5,c(a).lazyresize(e,100),c(a).load(e),c(b).on("click",f),e()})}(window,document,jQuery);