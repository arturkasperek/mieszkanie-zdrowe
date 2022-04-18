!function(e){e.timepicker.regional.pl={timeOnlyTitle:"Wybierz godzinę",timeText:"Czas",hourText:"Godzina",minuteText:"Minuta",secondText:"Sekunda",millisecText:"Milisekunda",microsecText:"Mikrosekunda",timezoneText:"Strefa czasowa",currentText:"Teraz",closeText:"Gotowe",timeFormat:"HH:mm",timeSuffix:"",amNames:["AM","A"],pmNames:["PM","P"],isRTL:!1},e.timepicker.setDefaults(e.timepicker.regional.pl)}(jQuery),function(e){"function"==typeof define&&define.amd?define(["../widgets/datepicker"],e):e(jQuery.datepicker)}(function(e){return e.regional.pl={closeText:"Zamknij",prevText:"&#x3C;Poprzedni",nextText:"Następny&#x3E;",currentText:"Dziś",monthNames:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],monthNamesShort:["Sty","Lu","Mar","Kw","Maj","Cze","Lip","Sie","Wrz","Pa","Lis","Gru"],dayNames:["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"],dayNamesShort:["Nie","Pn","Wt","Śr","Czw","Pt","So"],dayNamesMin:["N","Pn","Wt","Śr","Cz","Pt","So"],weekHeader:"Tydz",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},e.setDefaults(e.regional.pl),e.regional.pl}),function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;e.define("select2/i18n/pl",[],function(){function o(e,i){return 1===e?i[0]:1<e&&e<=4?i[1]:5<=e?i[2]:void 0}var t=["znak","znaki","znaków"],i=["element","elementy","elementów"];return{errorLoading:function(){return"Nie można załadować wyników."},inputTooLong:function(e){var i=e.input.length-e.maximum;return"Usuń "+i+" "+o(i,t)},inputTooShort:function(e){var i=e.minimum-e.input.length;return"Podaj przynajmniej "+i+" "+o(i,t)},loadingMore:function(){return"Trwa ładowanie…"},maximumSelected:function(e){return"Możesz zaznaczyć tylko "+e.maximum+" "+o(e.maximum,i)},noResults:function(){return"Brak wyników"},searching:function(){return"Trwa wyszukiwanie…"},removeAllItems:function(){return"Usuń wszystkie przedmioty"}}}),e.define,e.require}(),function(e){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){return e.extend(e.validator.messages,{required:"To pole jest wymagane.",remote:"Proszę o wypełnienie tego pola.",email:"Proszę o podanie prawidłowego adresu email.",url:"Proszę o podanie prawidłowego URL.",date:"Proszę o podanie prawidłowej daty.",dateISO:"Proszę o podanie prawidłowej daty (ISO).",number:"Proszę o podanie prawidłowej liczby.",digits:"Proszę o podanie samych cyfr.",creditcard:"Proszę o podanie prawidłowej karty kredytowej.",equalTo:"Proszę o podanie tej samej wartości ponownie.",extension:"Proszę o podanie wartości z prawidłowym rozszerzeniem.",nipPL:"Proszę o podanie prawidłowego numeru NIP.",phonePL:"Proszę o podanie prawidłowego numeru telefonu",maxlength:e.validator.format("Proszę o podanie nie więcej niż {0} znaków."),minlength:e.validator.format("Proszę o podanie przynajmniej {0} znaków."),rangelength:e.validator.format("Proszę o podanie wartości o długości od {0} do {1} znaków."),range:e.validator.format("Proszę o podanie wartości z przedziału od {0} do {1}."),max:e.validator.format("Proszę o podanie wartości mniejszej bądź równej {0}."),min:e.validator.format("Proszę o podanie wartości większej bądź równej {0}."),pattern:e.validator.format("Pole zawiera niedozwolone znaki.")}),e}),function(e,i){"object"==typeof exports&&"undefined"!=typeof module&&"function"==typeof require?i(require("../moment")):"function"==typeof define&&define.amd?define(["../moment"],i):i(e.moment)}(this,function(e){"use strict";var o="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),t="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");function n(e){return e%10<5&&1<e%10&&~~(e/10)%10!=1}function i(e,i,o){var t=e+" ";switch(o){case"ss":return t+(n(e)?"sekundy":"sekund");case"m":return i?"minuta":"minutę";case"mm":return t+(n(e)?"minuty":"minut");case"h":return i?"godzina":"godzinę";case"hh":return t+(n(e)?"godziny":"godzin");case"MM":return t+(n(e)?"miesiące":"miesięcy");case"yy":return t+(n(e)?"lata":"lat")}}return e.defineLocale("pl",{months:function(e,i){return e?""===i?"("+t[e.month()]+"|"+o[e.month()]+")":/D MMMM/.test(i)?t[e.month()]:o[e.month()]:o},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedzielę o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W środę o] LT";case 6:return"[W sobotę o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:i,m:i,mm:i,h:i,hh:i,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:i,y:"rok",yy:i},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})});