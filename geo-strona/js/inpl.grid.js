!function(a,b){"use strict";function c(a,b,c){return void 0===b?a<=c:void 0===c?a>=b:a>=b&&a<=c}function d(a){b("body").removeClass("size-xs size-rs size-sm size-md size-lg").addClass("size-"+a.name)}a.Inpl=a.Inpl||{};var e=a.Inpl.Grid=a.Inpl.Grid||{},f=e.RANGE_XS="xs",g=e.RANGE_RS="rs",h=e.RANGE_SM="sm",i=e.RANGE_MD="md",j=e.RANGE_LG="lg",k=e.ranges=[{name:f,widthmax:479},{name:g,widthmin:480,widthmax:767},{name:h,widthmin:768,widthmax:999},{name:i,widthmin:1e3,widthmax:1297},{name:j,widthmin:1280,widthmax:9999}];b.fn.rangechange=function(c){if("function"==typeof c){var d,f,g=b(this),h=g.get(0),i=h.__ranges||k;void 0===h.__rangechange&&(h.__rangechange=[],h.__rangechange.ranges=i,h.__rangechange.lastrange=e.getRangeName(g,i),b(a).lazyresize(function(){if((d=e.getRange(g,i))&&d.name!==h.__rangechange.lastrange)for(h.__rangechange.lastrange=d.name,f=0;f<h.__rangechange.length;f++)h.__rangechange[f](d)})),h.__rangechange.push(c)}},e.getRange=function(d,e){e=e||k,d=d||b(a);var f,g,h=d.width(),i=e.length;for(g=0;g<i;g++)if(f=e[g],c(h,f.widthmin,f.widthmax))return f},e.getRangeName=function(a,b){var c=e.getRange(a,b);return c&&c.name?c.name:""},e.isGreaterThan=function(a,b){var c=e.getRangeByName(b)||e.getRange();return e.getRangeByName(a).widthmax<c.widthmax},e.isLessThan=function(a,b){var c=e.getRangeByName(b)||e.getRange();return e.getRangeByName(a).widthmax>c.widthmax},e.inRanges=function(a,b){for(var c=0;c<b.length;c++)if(a===b[c])return!0;return!1},e.getRangeByName=function(a){switch(a){case f:return k[0];case g:return k[1];case h:return k[2];case i:return k[3];case j:return k[4]}},d(e.getRange(b(a))),b(a).rangechange(d)}(window,jQuery);