!function o(l,t,r){function d(s,e){if(!t[s]){if(!l[s]){var a="function"==typeof require&&require;if(!e&&a)return a(s,!0);if(_)return _(s,!0);var i=new Error("Cannot find module '"+s+"'");throw i.code="MODULE_NOT_FOUND",i}var n=t[s]={exports:{}};l[s][0].call(n.exports,function(e){return d(l[s][1][e]||e)},n,n.exports,o,l,t,r)}return t[s].exports}for(var _="function"==typeof require&&require,e=0;e<r.length;e++)d(r[e]);return d}({1:[function(e,s,a){"use strict";$(document).ready(function(){function e(i,n){var o=$(".menu ul li");o.click(function(){var e=$(this).attr("class"),s=$(".sample_box div"),a=$(".bg__depth");e==i&&(s.removeClass("on"),a.removeClass("on"),o.removeClass("active"),$("."+n).addClass("on"),$(this).addClass("active"))})}var s,a,i,o,l,n,t,r,d;s=$(".bgL,.bgR"),a=$(".intro"),i=$(".wrap"),a.click(function(){i.removeClass("fadeout"),s.addClass("bg_ani_open"),s.removeClass("bg_ani_close"),setTimeout(function(){a.removeClass("on"),i.addClass("fadein")},1e3)}),$(".home").click(function(){a.addClass("on"),i.removeClass("fadein"),i.addClass("fadeout"),s.addClass("bg_ani_close"),s.removeClass("bg_ani_open")}),o="active",(l=$("nav ul li")).click(function(){var e=$(".bg__depth"),s=$(this).index(),a=s-1,i=$(".menu ul"),n=$(".menu ul:eq("+a+")");e.removeClass("on"),0<s&&s<4?(l.removeClass(o),i.removeClass(o),$(this).addClass(o),n.addClass(o),$(".bg_box").removeClass("on"),$(".sample_box div").removeClass("on")):4==s&&(l.removeClass(o),i.removeClass(o),$(this).addClass(o),n.addClass(o),$(".sample_box div").removeClass("on"),$(".bg_box").addClass("on"))}),e("fadeIn_li","basic"),e("fadeIn_li_2","fadeIn2"),e("fadeIn_li_4","fadeIn4"),e("popIn_li","popIn"),e("flip-img_li","flip-img"),e("unfold_bounce_li","unfold_bounce"),e("zoom_li","zoom"),e("vanish_li","vanish"),e("textfade_li","text_fadeIn"),e("text_li","trackingIn"),e("flip-txt_li","flip-txt"),e("effect_hover_li","effect_hover"),e("effect_infinite_li","effect_infinite"),e("ken_burns","ken_burns__li"),e("img_change","img_change__li"),n="ken_burns__li",t="img_change__li",r=$(".bg__depth ul li"),d=$(".bg_box"),r.click(function(){$(this).index();var e=$(this).parents("div").hasClass(n),s=$(this).parents("div").hasClass(t),a=$(this).text();r.removeClass("active"),$(this).addClass("active"),e?(d.removeClass(),d.addClass("bg_box"),d.addClass("on"),d.addClass(a)):s&&(d.removeClass(),d.addClass("bg_box"),d.addClass("on"),d.addClass(a))})})},{}]},{},[1]);
//# sourceMappingURL=animation_library.js.map
