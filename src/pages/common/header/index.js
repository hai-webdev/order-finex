// 头部的js代码
import "./index.less";
import "fullpage.js/dist/fullpage.min.css";
import "swiper/css/swiper.min.css";
$(".pc-header .nav-item").hover(function(){
    $(this).addClass("on");
    $(this).find(".nav-sublist").slideDown();
},function(){
    $(this).removeClass("on");
    $(this).find(".nav-sublist").slideUp();
})

$(".pc-header .language .text").on("click", function(){
    $(this).parent().toggleClass("on");
    $(this).find(".icon").toggleClass("on");
    $(this).next(".language-list").slideToggle();
})

$(".m-header .nav-container .nav-list .nav-item .text .icon").on("click", function(){
    $(this).toggleClass("on");
    $(this).parent().next(".nav-sublist").slideToggle();
})
$(".m-header .head-box .menu").on("click", function(){
    $(".nav-container").slideToggle();
})