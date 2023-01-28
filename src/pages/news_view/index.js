// 关于页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
import "../common/aside";

import "swiper";
import Swiper from "swiper";

const picsSwiper = new Swiper(".pics", {
    slidesPerView : 4,
    spaceBetween : 10,
    breakpoints:{
        768:{
            slidesPerView : 5,
            spaceBetween : 10,
        }
    }
})

$(".pics-item").hover(function(){
    $(this).addClass("active").siblings().removeClass("active");
    const src = $(this).find("img").attr("src");
    $("#img").find("img").attr("src", src);
})