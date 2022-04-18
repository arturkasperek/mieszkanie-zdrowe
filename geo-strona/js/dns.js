$('.rise-to-top').click(function(){
    $('html').animate({
        scrollTop: 0
    }, 500);
});
		$('.site .main-menu nav.main-menu-nav ul li:nth-child(3) a')
			.text('').append('<span>OFERTA</span>').append('<i class="fas fa-arrow-down"></i>');
		$('.site .main-menu nav.main-menu-nav ul li:nth-child(3) a i')
			.css({"float": "right", "margin-top": "6px"});
		$('.site .main-menu nav.main-menu-nav ul li:nth-child(3) a i').click(function(event) {
			event.preventDefault();			
			if ($(this).hasClass("fa-arrow-up")) {
				$(this).removeClass('fa-arrow-up');
				$(this).addClass('fa-arrow-down');
				$('.site .main-menu nav.main-menu-nav ul li:nth-child(4), .site .main-menu nav.main-menu-nav ul li:nth-child(5), .site .main-menu nav.main-menu-nav ul li:nth-child(6), .site .main-menu nav.main-menu-nav ul li:nth-child(7), .site .main-menu nav.main-menu-nav ul li:nth-child(8), .site .main-menu nav.main-menu-nav ul li:nth-child(9)').hide('slow');
			} else {
				$(this).removeClass('fa-arrow-down');
				$(this).addClass('fa-arrow-up');
				$('.site .main-menu nav.main-menu-nav ul li:nth-child(4), .site .main-menu nav.main-menu-nav ul li:nth-child(5), .site .main-menu nav.main-menu-nav ul li:nth-child(6), .site .main-menu nav.main-menu-nav ul li:nth-child(7), .site .main-menu nav.main-menu-nav ul li:nth-child(8), .site .main-menu nav.main-menu-nav ul li:nth-child(9)').show('slow');
			}
		});

if (!$('.site .main-menu nav.main-menu-nav ul li:nth-child(4)').hasClass('active') &&
	!$('.site .main-menu nav.main-menu-nav ul li:nth-child(5)').hasClass('active') &&
	!$('.site .main-menu nav.main-menu-nav ul li:nth-child(6)').hasClass('active') && 
	!$('.site .main-menu nav.main-menu-nav ul li:nth-child(7)').hasClass('active') && 
	!$('.site .main-menu nav.main-menu-nav ul li:nth-child(8)').hasClass('active') && 
	!$('.site .main-menu nav.main-menu-nav ul li:nth-child(9)').hasClass('active')
) {
	$('.site .main-menu nav.main-menu-nav ul li:nth-child(4), .site .main-menu nav.main-menu-nav ul li:nth-child(5), .site .main-menu nav.main-menu-nav ul li:nth-child(6), .site .main-menu nav.main-menu-nav ul li:nth-child(7), .site .main-menu nav.main-menu-nav ul li:nth-child(8), .site .main-menu nav.main-menu-nav ul li:nth-child(9)').hide();
} else {
	$('.site .main-menu nav.main-menu-nav ul li:nth-child(3) a i').removeClass('fa-arrow-down').addClass('fa-arrow-up');
}

$("#close-promo-sidebar").click(function(){
  $("#sidebar-prom").toggleClass("active");
});
$("#mobile-togle").click(function(){
    event.preventDefault();
  $(".main-menu").toggleClass("roll-mobile");
});

$("#more-1").click(function(){
    event.preventDefault();
  $(".more1").toggleClass("show-more");
  $("#no-more1").toggleClass("show-more");
  $("#more-1").toggleClass("show-more");
});
$("#no-more-1").click(function(){
    event.preventDefault();
  $(".more1").toggleClass("show-more");
  $("#no-more1").toggleClass("show-more");
  $("#more-1").toggleClass("show-more");
});

$("#more-2").click(function(){
    event.preventDefault();
  $(".more2").toggleClass("show-more");
  $("#no-more2").toggleClass("show-more");
  $("#more-2").toggleClass("show-more");  
});
$("#no-more-2").click(function(){
    event.preventDefault();
  $(".more2").toggleClass("show-more");
  $("#no-more2").toggleClass("show-more");
  $("#more-2").toggleClass("show-more");
});

$("#more-3").click(function(){
    event.preventDefault();
  $(".more3").toggleClass("show-more");
  $("#no-more3").toggleClass("show-more");
  $("#more-3").toggleClass("show-more");  
});
$("#no-more-3").click(function(){
    event.preventDefault();
  $(".more3").toggleClass("show-more");
  $("#no-more3").toggleClass("show-more");
  $("#more-3").toggleClass("show-more");  
});

$("#more-4").click(function(){
    event.preventDefault();
  $(".more4").toggleClass("show-more");
  $("#no-more4").toggleClass("show-more");
  $("#more-4").toggleClass("show-more");  
});
$("#no-more-4").click(function(){
    event.preventDefault();
  $(".more4").toggleClass("show-more");
  $("#no-more4").toggleClass("show-more");
  $("#more-4").toggleClass("show-more");  
});

$("#add-dinfo-1").click(function(){
  $('#billing_nip').toggleClass('d-block');
  $('#billing_company_field').toggleClass('d-block');
});
$("#add-dinfo-2").click(function(){
  $('.woocommerce-additional-fields').toggleClass('d-block');
});

$(document).ready(function(){

$('#my-welcome-message').firstVisitPopup({
  cookieName : 'rednetdom'
});

$("a.scrollLink").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top-125 }, 500);
});

var intro = document.querySelector('.banner');
var introPlayer = document.querySelector('.banner__video');


    $('.owl-one').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots: false,
        loop:true,
        autoplay:true,
        autoplayHoverPause:true,

        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });
    $('.owl-two').owlCarousel({
        loop:true,
        margin:40,
        nav:false,
        loop:true,
        dots: false,
        autoplay:true,
        autoplayHoverPause:true,

        responsive:{
            0:{
                items:2
            },
            800:{
                items:4
            },
            1200:{
                items:7
            }
        }
    });

    $('.owl-bestsell').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: false,
        loop:true,
        autoplay:false,
        autoplayHoverPause:true,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    $('.owl-four').owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        nav:false,
        dots: false,
        autoplayHoverPause:true,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1200:{
                items:4
            }
        }
    });
    $('.owl-single').owlCarousel({
        loop:true,
        autoplay: true,
        margin:0,
        dots: false,
        nav:false,
        autoplayHoverPause:true,
        items: 1
    });
    $('.owl-karty').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots: false,
        loop:true,
        autoplay:false,
        autoplayHoverPause:true,

        responsive:{
            0:{
                items:2,
                autoplay:true
            },
            600:{
                items:3,
                autoplay:true
            },
            800:{
                items:4,
                autoplay:true
            },
            1000:{
                items:5,
                autoplay:true
            },
            1200:{
                items:6,
                autoplay:false
            }
        }
    });
    $('.owl-doladowania').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots: false,
        loop:true,

        autoplayHoverPause:true,

        responsive:{
            0:{
                items:2,
                autoplay:true
            },
            600:{
                items:3,
                autoplay:true
            },
            800:{
                items:4,
                autoplay:true
            },
            1000:{
                items:5,
                autoplay:false
            }
        }
    });
});

(function ($) {
    'use strict';

    $.fn.firstVisitPopup = function (settings) {

        var $body = $('body');
        var $dialog = $(this);
        var $blackout;
        var setCookie = function (name, value) {
            var date = new Date(),
                expires = 'expires=';
            date.setTime(date.getTime() + 31536000000);
            expires += date.toGMTString();
            document.cookie = name + '=' + value + '; ' + expires + '; path=/';
        }
        var getCookie = function (name) {
            var allCookies = document.cookie.split(';'),
                cookieCounter = 0,
                currentCookie = '';
            for (cookieCounter = 0; cookieCounter < allCookies.length; cookieCounter++) {
                currentCookie = allCookies[cookieCounter];
                while (currentCookie.charAt(0) === ' ') {
                    currentCookie = currentCookie.substring(1, currentCookie.length);
                }
                if (currentCookie.indexOf(name + '=') === 0) {
                    return currentCookie.substring(name.length + 1, currentCookie.length);
                }
            }
            return false;
        }
        var showMessage = function () {
            $blackout.show();
            $dialog.show();
        }
        var hideMessage = function () {
            $blackout.hide();
            $dialog.hide();
            setCookie('fvpp' + settings.cookieName, 'true');
        }

        $body.append('<div id="fvpp-blackout"></div>');
        $dialog.append('<a id="fvpp-close">&#10006;</a>');
        $blackout = $('#fvpp-blackout');

        if (getCookie('fvpp' + settings.cookieName)) {
            hideMessage();
        } else {
            showMessage();
        }

        $(settings.showAgainSelector).on('click', showMessage);
        $body.on('click', '#fvpp-blackout, #fvpp-close', hideMessage);
		
    };


})(jQuery);


