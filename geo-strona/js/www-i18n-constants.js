(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var e=this||self;function f(b,c){b=b.split(".");var a=e;b[0]in a||"undefined"==typeof a.execScript||a.execScript("var "+b[0]);for(var d;b.length&&(d=b.shift());)b.length||void 0===c?a[d]&&a[d]!==Object.prototype[d]?a=a[d]:a=a[d]={}:a[d]=c}
;var g={YEAR_FULL:"y",YEAR_FULL_WITH_ERA:"y G",YEAR_MONTH_ABBR:"MMM y",YEAR_MONTH_FULL:"MMMM y",YEAR_MONTH_SHORT:"MM/y",MONTH_DAY_ABBR:"MMM d",MONTH_DAY_FULL:"MMMM dd",MONTH_DAY_SHORT:"M/d",MONTH_DAY_MEDIUM:"MMMM d",MONTH_DAY_YEAR_MEDIUM:"MMM d, y",WEEKDAY_MONTH_DAY_MEDIUM:"EEE, MMM d",WEEKDAY_MONTH_DAY_YEAR_MEDIUM:"EEE, MMM d, y",DAY_ABBR:"d",MONTH_DAY_TIME_ZONE_SHORT:"MMM d, h:mm a zzzz"};
g={YEAR_FULL:"y",YEAR_FULL_WITH_ERA:"y G",YEAR_MONTH_ABBR:"LLL y",YEAR_MONTH_FULL:"LLLL y",YEAR_MONTH_SHORT:"MM.y",MONTH_DAY_ABBR:"d MMM",MONTH_DAY_FULL:"dd MMMM",MONTH_DAY_SHORT:"d.MM",MONTH_DAY_MEDIUM:"d MMMM",MONTH_DAY_YEAR_MEDIUM:"d MMM y",WEEKDAY_MONTH_DAY_MEDIUM:"EEE, d MMM",WEEKDAY_MONTH_DAY_YEAR_MEDIUM:"EEE, d MMM y",DAY_ABBR:"d",MONTH_DAY_TIME_ZONE_SHORT:"d MMM, HH:mm zzzz"};var h={ERAS:["BC","AD"],ERANAMES:["Before Christ","Anno Domini"],NARROWMONTHS:"JFMAMJJASOND".split(""),STANDALONENARROWMONTHS:"JFMAMJJASOND".split(""),MONTHS:"January February March April May June July August September October November December".split(" "),STANDALONEMONTHS:"January February March April May June July August September October November December".split(" "),SHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONESHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
WEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),STANDALONEWEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),STANDALONESHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),NARROWWEEKDAYS:"SMTWTFS".split(""),STANDALONENARROWWEEKDAYS:"SMTWTFS".split(""),SHORTQUARTERS:["Q1","Q2","Q3","Q4"],QUARTERS:["1st quarter","2nd quarter","3rd quarter","4th quarter"],AMPMS:["AM","PM"],DATEFORMATS:["EEEE, MMMM d, y",
"MMMM d, y","MMM d, y","M/d/yy"],TIMEFORMATS:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],DATETIMEFORMATS:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],FIRSTDAYOFWEEK:6,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:5};
h={ERAS:["p.n.e.","n.e."],ERANAMES:["przed nasz\u0105 er\u0105","naszej ery"],NARROWMONTHS:"slmkmclswplg".split(""),STANDALONENARROWMONTHS:"SLMKMCLSWPLG".split(""),MONTHS:"stycznia lutego marca kwietnia maja czerwca lipca sierpnia wrze\u015bnia pa\u017adziernika listopada grudnia".split(" "),STANDALONEMONTHS:"stycze\u0144 luty marzec kwiecie\u0144 maj czerwiec lipiec sierpie\u0144 wrzesie\u0144 pa\u017adziernik listopad grudzie\u0144".split(" "),SHORTMONTHS:"sty lut mar kwi maj cze lip sie wrz pa\u017a lis gru".split(" "),
STANDALONESHORTMONTHS:"sty lut mar kwi maj cze lip sie wrz pa\u017a lis gru".split(" "),WEEKDAYS:"niedziela poniedzia\u0142ek wtorek \u015broda czwartek pi\u0105tek sobota".split(" "),STANDALONEWEEKDAYS:"niedziela poniedzia\u0142ek wtorek \u015broda czwartek pi\u0105tek sobota".split(" "),SHORTWEEKDAYS:"niedz. pon. wt. \u015br. czw. pt. sob.".split(" "),STANDALONESHORTWEEKDAYS:"niedz. pon. wt. \u015br. czw. pt. sob.".split(" "),NARROWWEEKDAYS:"npw\u015bcps".split(""),STANDALONENARROWWEEKDAYS:"NPW\u015aCPS".split(""),
SHORTQUARTERS:["I kw.","II kw.","III kw.","IV kw."],QUARTERS:["I kwarta\u0142","II kwarta\u0142","III kwarta\u0142","IV kwarta\u0142"],AMPMS:["AM","PM"],DATEFORMATS:["EEEE, d MMMM y","d MMMM y","d MMM y","d.MM.y"],TIMEFORMATS:["HH:mm:ss zzzz","HH:mm:ss z","HH:mm:ss","HH:mm"],DATETIMEFORMATS:["{1} {0}","{1} {0}","{1}, {0}","{1}, {0}"],FIRSTDAYOFWEEK:0,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:3};function k(b,c){if(void 0===c){c=b+"";var a=c.indexOf(".");c=Math.min(-1===a?0:c.length-a-1,3)}a=Math.pow(10,c);return{g:c,f:(b*a|0)%a}}
function l(b,c){c=k(b,c);return 1==(b|0)&&0==c.g?"one":"other"}
l=function(b,c){var a=b|0;b=k(b,c);return 1==a&&0==b.g?"one":0==b.g&&2<=a%10&&4>=a%10&&(12>a%100||14<a%100)?"few":0==b.g&&1!=a&&0<=a%10&&1>=a%10||0==b.g&&5<=a%10&&9>=a%10||0==b.g&&12<=a%100&&14>=a%100?"many":"other"};f("YT_I18N_FORMATTING_GOOG_LOCALE","pl");f("YT_I18N_FORMATTING_DATE_TIME_PATTERNS",g);f("YT_I18N_FORMATTING_DATE_TIME_SYMBOLS",h);
f("YT_I18N_FORMATTING_RELATIVE_DATE_TIME_SYMBOLS",{DAY:{LONG:{R:{"-1":"wczoraj","-2":"przedwczoraj",0:"dzisiaj",1:"jutro",2:"pojutrze"},P:"few{# dni temu}many{# dni temu}one{# dzie\u0144 temu}other{# dnia temu}",F:"few{za # dni}many{za # dni}one{za # dzie\u0144}other{za # dnia}"},SHORT:{R:{"-2":"przedwczoraj",2:"pojutrze"},P:"few{# dni temu}many{# dni temu}one{# dzie\u0144 temu}other{# dnia temu}",F:"few{za # dni}many{za # dni}one{za # dzie\u0144}other{za # dnia}"},NARROW:{R:{"-1":"wcz.","-2":"przedwczoraj",
0:"dzi\u015b",1:"jutro",2:"pojutrze"},P:"few{# dni temu}many{# dni temu}one{# dzie\u0144 temu}other{# dnia temu}",F:"few{za # dni}many{za # dni}one{za # dzie\u0144}other{za # dnia}"}},HOUR:{LONG:{R:{0:"ta godzina"},P:"few{# godziny temu}many{# godzin temu}one{# godzin\u0119 temu}other{# godziny temu}",F:"few{za # godziny}many{za # godzin}one{za # godzin\u0119}other{za # godziny}"},SHORT:{R:{0:"ta godzina"},P:"few{# godz. temu}many{# godz. temu}one{# godz. temu}other{# godz. temu}",F:"few{za # godz.}many{za # godz.}one{za # godz.}other{za # godz.}"},
NARROW:{R:{0:"ta godzina"},P:"few{# g. temu}many{# g. temu}one{# g. temu}other{# g. temu}",F:"few{za # g.}many{za # g.}one{za # g.}other{za # g.}"}},MINUTE:{LONG:{R:{0:"ta minuta"},P:"few{# minuty temu}many{# minut temu}one{# minut\u0119 temu}other{# minuty temu}",F:"few{za # minuty}many{za # minut}one{za # minut\u0119}other{za # minuty}"},SHORT:{R:{0:"ta minuta"},P:"few{# min temu}many{# min temu}one{# min temu}other{# min temu}",F:"few{za # min}many{za # min}one{za # min}other{za # min}"}},MONTH:{LONG:{R:{"-1":"w zesz\u0142ym miesi\u0105cu",
0:"w tym miesi\u0105cu",1:"w przysz\u0142ym miesi\u0105cu"},P:"few{# miesi\u0105ce temu}many{# miesi\u0119cy temu}one{# miesi\u0105c temu}other{# miesi\u0105ca temu}",F:"few{za # miesi\u0105ce}many{za # miesi\u0119cy}one{za # miesi\u0105c}other{za # miesi\u0105ca}"},SHORT:{R:{"-1":"w zesz\u0142ym mies.",0:"w tym mies.",1:"w przysz\u0142ym mies."},P:"few{# mies. temu}many{# mies. temu}one{# mies. temu}other{# mies. temu}",F:"few{za # mies.}many{za # mies.}one{za # mies.}other{za # mies.}"}},QUARTER:{LONG:{R:{"-1":"w zesz\u0142ym kwartale",
0:"w tym kwartale",1:"w przysz\u0142ym kwartale"},P:"few{# kwarta\u0142y temu}many{# kwarta\u0142\u00f3w temu}one{# kwarta\u0142 temu}other{# kwarta\u0142u temu}",F:"few{za # kwarta\u0142y}many{za # kwarta\u0142\u00f3w}one{za # kwarta\u0142}other{za # kwarta\u0142u}"},SHORT:{R:{"-1":"w zesz\u0142ym kwartale",0:"w tym kwartale",1:"w przysz\u0142ym kwartale"},P:"few{# kw. temu}many{# kw. temu}one{# kw. temu}other{# kw. temu}",F:"few{za # kw.}many{za # kw.}one{za # kw.}other{za # kw.}"}},SECOND:{LONG:{R:{0:"teraz"},
P:"few{# sekundy temu}many{# sekund temu}one{# sekund\u0119 temu}other{# sekundy temu}",F:"few{za # sekundy}many{za # sekund}one{za # sekund\u0119}other{za # sekundy}"},SHORT:{R:{0:"teraz"},P:"few{# sek. temu}many{# sek. temu}one{# sek. temu}other{# sek. temu}",F:"few{za # sek.}many{za # sek.}one{za # sek.}other{za # sek.}"},NARROW:{R:{0:"teraz"},P:"few{# s temu}many{# s temu}one{# s temu}other{# s temu}",F:"few{za # s}many{za # s}one{za # s}other{za # s}"}},WEEK:{LONG:{R:{"-1":"w zesz\u0142ym tygodniu",
0:"w tym tygodniu",1:"w przysz\u0142ym tygodniu"},P:"few{# tygodnie temu}many{# tygodni temu}one{# tydzie\u0144 temu}other{# tygodnia temu}",F:"few{za # tygodnie}many{za # tygodni}one{za # tydzie\u0144}other{za # tygodnia}"},SHORT:{R:{"-1":"w zesz\u0142ym tyg.",0:"w tym tyg.",1:"w przysz\u0142ym tyg."},P:"few{# tyg. temu}many{# tyg. temu}one{# tydz. temu}other{# tyg. temu}",F:"few{za # tyg.}many{za # tyg.}one{za # tydz.}other{za # tyg.}"}},YEAR:{LONG:{R:{"-1":"w zesz\u0142ym roku",0:"w tym roku",
1:"w przysz\u0142ym roku"},P:"few{# lata temu}many{# lat temu}one{# rok temu}other{# roku temu}",F:"few{za # lata}many{za # lat}one{za # rok}other{za # roku}"}}});f("YT_I18N_FORMATTING_PLURAL_RULES_SELECT",l);}).call(this);