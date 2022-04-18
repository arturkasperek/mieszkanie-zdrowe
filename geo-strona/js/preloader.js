$(window).on("load", function () {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("html").delay(350).css({"overflow-y": "visible"});
    $("body").delay(350).css({"overflow-y": "visible"});
    setTimeout(function () {
        $(".box-left").addClass("fadeInLeft");
        $(".box-right").addClass("fadeInRight")
    }, 400)
});

$(document).ready(function () {
    $("#toggleme").on("click", function () {
        $(this).toggle();
        $("#toogled").slideToggle();
        $("html, body").animate({scrollTop: $("#toogled").offset().top}, 1000)
    })
});