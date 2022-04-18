$(document).ready(function () {
    var b = $(".instytucje"), c = b.length, a = 0;

    function d() {
        b.eq(a % c).fadeIn(600, function () {
            b.eq(a % c).delay(2000).fadeOut(600, d);
            a++
        })
    }

    if (c > 1) {
        d()
    }
    $('.formularz-leadowy .formularz-etap1 input[type=submit]').click(function (event) {
        event.preventDefault();
        $('.formularz-leadowy .formularz-etap2').css('display', 'block');
        $('.formularz-leadowy .formularz-etap1').css('display', 'none');
    });
    $('.formularz-leadowy .formularz-etap3 #back').click(function (event) {
        event.preventDefault();
        $('.formularz-leadowy .formularz-etap1').css('display', 'block');
        $('.formularz-leadowy .formularz-etap3').css('display', 'none');
        document.getElementById("bank1").style.display = "none";
        document.getElementById("bank2").style.display = "none";
        document.getElementById("bank3").style.display = "none";
        document.getElementById("bank4").style.display = "none";
    });
    $('.sekcja-korzysci .seemore .icona').on('click', function(){
        $(this).toggleClass('aktywny');
        $(this).parent('div').find('.more').slideToggle();
    });
});
var tImg = ['img/down-arrow.png','img/up-arrow.png'];

var vImg = true;
function fSetImg(){
    if (vImg){
        document.getElementById('less-down').src = tImg[1];
        vImg = false;
    }

    else {
        document.getElementById('less-down').src = tImg[0];
        vImg = true;
    }
}
function wypisz() {
    const liczba = document.getElementById("kwota").value;
    const liczba1 = document.getElementById("wkladwlasny").value;
    const liczba2 = document.getElementById("okres").value;
    const formatter = new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
        minimumFractionDigits: 0
    })
    document.getElementById("wynik1").innerHTML = formatter.format(liczba);
    document.getElementById("wynik2").innerHTML = liczba1 + " %";
    document.getElementById("wynik3").innerHTML = liczba2 + " lat";
}
function move() {
    var i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 10;
        var id = setInterval(frame, 30);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
            if (width >= 20) {
                document.getElementById("bank1").style.display = "block";
            }
            if (width >= 40) {
                document.getElementById("bank1").style.display = "block";
                document.getElementById("bank2").style.display = "block";
            }
            if (width >= 60) {
                document.getElementById("bank1").style.display = "block";
                document.getElementById("bank2").style.display = "block";
                document.getElementById("bank3").style.display = "block";
            }
            if (width >= 80) {
                document.getElementById("bank1").style.display = "block";
                document.getElementById("bank2").style.display = "block";
                document.getElementById("bank3").style.display = "block";
                document.getElementById("bank4").style.display = "block";
            }
            if (width == 100) {
                $('.formularz-leadowy .formularz-etap2').css('display', 'none');
                $('.formularz-leadowy .formularz-etap3').css('display', 'block');
            }
        }
    }
}


var scrolltotop={
    setting:{
        startline:100,
        scrollto:0,
        scrollduration:1e3,
        fadeduration:[500,0]
    },
    controlHTML:'<img src="img/up-arrow-orange.png" />',
    controlattrs:{
        offsetx:95,
        offsety:26
    },
    anchorkeyword:"#top",
    state:{
        isvisible:!1,
        shouldvisible:!1
    },
    scrollup:function(){
        this.cssfixedsupport||this.$control.css({opacity:0});
        var t=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);
        t="string"==typeof t&&1==jQuery("#"+t).length?jQuery("#"+t).offset().top:0,this.$body.animate({scrollTop:t},this.setting.scrollduration)},keepfixed:function(){var t=jQuery(window),o=t.scrollLeft()+t.width()-this.$control.width()-this.controlattrs.offsetx,s=t.scrollTop()+t.height()-this.$control.height()-this.controlattrs.offsety;this.$control.css({left:o+"px",top:s+"px"})},togglecontrol:function(){var t=jQuery(window).scrollTop();this.cssfixedsupport||this.keepfixed(),this.state.shouldvisible=t>=this.setting.startline?!0:!1,this.state.shouldvisible&&!this.state.isvisible?(this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]),this.state.isvisible=!0):0==this.state.shouldvisible&&this.state.isvisible&&(this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]),this.state.isvisible=!1)},init:function(){jQuery(document).ready(function(t){var o=scrolltotop,s=document.all;o.cssfixedsupport=!s||s&&"CSS1Compat"==document.compatMode&&window.XMLHttpRequest,o.$body=t(window.opera?"CSS1Compat"==document.compatMode?"html":"body":"html,body"),o.$control=t('<div id="topcontrol">'+o.controlHTML+"</div>").css({position:o.cssfixedsupport?"fixed":"absolute",bottom:o.controlattrs.offsety,right:o.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"Scroll to Top"}).click(function(){return o.scrollup(),!1}).appendTo("body"),document.all&&!window.XMLHttpRequest&&""!=o.$control.text()&&o.$control.css({width:o.$control.width()}),o.togglecontrol(),t('a[href="'+o.anchorkeyword+'"]').click(function(){return o.scrollup(),!1}),t(window).bind("scroll resize",function(t){o.togglecontrol()})})}};scrolltotop.init();

const rangeInputs = document.querySelectorAll('input[type="range"]')
const numberInput = document.querySelector('input[type="number"]')

function handleInputChange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
        target = document.getElementById('range')
    }
    const min = target.min
    const max = target.max
    const val = target.value

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
    input.addEventListener('input', handleInputChange)
})

numberInput.addEventListener('input', handleInputChange)

