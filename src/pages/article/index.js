// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";


import fullpage from "fullpage.js";

new fullpage("#fullpage", {
  // 指示器显示
  navigation: true,
  afterLoad(nu, that){
    $(".section").children(".fadeInDown").removeClass("on")
    $(that.item).children(".fadeInDown").addClass("on");
    if($(that.item).hasClass("page1")){
        $("#fp-nav ul li a span").addClass("white");
        $(".fp-slidesNav ul li a span").addClass("white");
    }else{
        $("#fp-nav ul li a span").removeClass("white");
        $(".fp-slidesNav ul li a span").removeClass("white");
    }
  }
});

if($(".product-item").height()){
  $(".product-box").height($(".product-item").height())
}

$(".thumb-item").on("click", function () {
  const index = $(this).index();
  $(this).addClass("on").siblings().removeClass("on");
  $(".product-item").eq(index).addClass("on").siblings().removeClass("on");
});
