var utils=utils||{};utils.fluidTwitterEmbed=function(){var a,b=jQuery,c=0,d=[],e=b(".embed-twitter");(c=e.length)<=0||(a=setInterval(function(){if(e.each(function(a){if(!(b.inArray(a,d)>=0)){var c,e=b(this).find(".twitter-tweet");e.length&&e.hasClass("twitter-tweet-rendered")&&(c=""+e.attr("height"),c.match(/[^\d]/)||(e.css({width:"100%"}).parent().css({width:"100%"}),d.push(a)))}}),d.length==c)return void clearInterval(a)},2e3))};