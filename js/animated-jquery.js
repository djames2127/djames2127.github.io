jQuery(document).ready(function(a){function l(){m(a(".cd-headline.letters").find("b")),n(a(".cd-headline"))}function m(b){b.each(function(){var b=a(this),c=b.text().split(""),d=b.hasClass("is-visible");for(i in c)b.parents(".rotate-2").length>0&&(c[i]="<em>"+c[i]+"</em>"),c[i]=d?'<i class="in">'+c[i]+"</i>":"<i>"+c[i]+"</i>";var e=c.join("");b.html(e).css("opacity",1)})}function n(e){var f=b;e.each(function(){var b=a(this);if(b.hasClass("loading-bar"))f=c,setTimeout(function(){b.find(".cd-words-wrapper").addClass("is-loading")},d);else if(b.hasClass("clip")){var e=b.find(".cd-words-wrapper"),g=e.width()+10;e.css("width",g)}else if(!b.hasClass("type")){var h=b.find(".cd-words-wrapper b"),i=0;h.each(function(){var b=a(this).width();b>i&&(i=b)}),b.find(".cd-words-wrapper").css("width",i)}setTimeout(function(){o(b.find(".is-visible").eq(0))},f)})}function o(a){var i=s(a);if(a.parents(".cd-headline").hasClass("type")){var k=a.parent(".cd-words-wrapper");k.addClass("selected").removeClass("waiting"),setTimeout(function(){k.removeClass("selected"),a.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")},g),setTimeout(function(){p(i,f)},h)}else if(a.parents(".cd-headline").hasClass("letters")){var l=a.children("i").length>=i.children("i").length;q(a.find("i").eq(0),a,l,e),r(i.find("i").eq(0),i,l,e)}else a.parents(".cd-headline").hasClass("clip")?a.parents(".cd-words-wrapper").animate({width:"2px"},j,function(){u(a,i),p(i)}):a.parents(".cd-headline").hasClass("loading-bar")?(a.parents(".cd-words-wrapper").removeClass("is-loading"),u(a,i),setTimeout(function(){o(i)},c),setTimeout(function(){a.parents(".cd-words-wrapper").addClass("is-loading")},d)):(u(a,i),setTimeout(function(){o(i)},b))}function p(a,b){a.parents(".cd-headline").hasClass("type")?(r(a.find("i").eq(0),a,!1,b),a.addClass("is-visible").removeClass("is-hidden")):a.parents(".cd-headline").hasClass("clip")&&a.parents(".cd-words-wrapper").animate({width:a.width()+10},j,function(){setTimeout(function(){o(a)},k)})}function q(c,d,e,f){if(c.removeClass("in").addClass("out"),c.is(":last-child")?e&&setTimeout(function(){o(s(d))},b):setTimeout(function(){q(c.next(),d,e,f)},f),c.is(":last-child")&&a("html").hasClass("no-csstransitions")){var g=s(d);u(d,g)}}function r(a,c,d,e){a.addClass("in").removeClass("out"),a.is(":last-child")?(c.parents(".cd-headline").hasClass("type")&&setTimeout(function(){c.parents(".cd-words-wrapper").addClass("waiting")},200),d||setTimeout(function(){o(c)},b)):setTimeout(function(){r(a.next(),c,d,e)},e)}function s(a){return a.is(":last-child")?a.parent().children().eq(0):a.next()}function u(a,b){a.removeClass("is-visible").addClass("is-hidden"),b.removeClass("is-hidden").addClass("is-visible")}var b=2500,c=3800,d=c-3e3,e=50,f=150,g=500,h=g+800,j=600,k=1500;l()});