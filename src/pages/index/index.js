// 首页使用的js
import Swiper from "swiper";
// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
import "../common/aside";

// 轮播图

const banners = new Swiper(".swiper-banners", {
  loop: true,
  navigation: {
    nextEl: ".banners-next",
    prevEl: ".banners-prev",
  },
  autoplay:{
    delay: 5000
  },
  speed: 1500
});

const caseShow = new Swiper(".case-show", {
  loop: true,
  navigation: {
    nextEl: ".case-show-next",
    prevEl: ".case-show-prev",
  },
  speed: 1500
});

// 点击打开视频
function playChange(video){
  if(!video.paused){
    $(".video-popup .video-popup-box .player").hide();
  }else{
    $(".video-popup .video-popup-box .player").show()
  }
}

$("section.company .info .right .video-box .player").on("click", function(){
  const video = $("#home-video").get(0);
  video.play();
  video.addEventListener("play", function(){
    playChange(video);
  })
  video.addEventListener("pause", function(){
    playChange(video);
  })
  $(".video-popup").fadeIn();
  
})
$(".video-popup .video-popup-box .close").on("click", function(){
  $(".video-popup").fadeOut();
  const video = $("#home-video").get(0);
  video.pause();
  video.addEventListener("play", function(){
    playChange(video);
  })
  video.addEventListener("pause", function(){
    playChange(video);
  })
})