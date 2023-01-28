// 关于页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
import "../common/aside";

$(".player").on("click", function () {
  $(this).hide();
  var $video = $(`#${$(this).attr("data-video")}`);
  const video = $video.get(0);
  $video.prop("controls", true);
  video.play();
});

$("li.pro-subnav-item").hover(function () {
  const id = $(this).data("id");
  console.log(id);
  setTimeout(function () {
    $("li.product-item").hide();
    $(`li.product-item[data-id=${id}]`).show();
  }, 500);
});
$(".product-nav-item span").hover(function () {
  $(this).parent().addClass("active").siblings().removeClass("active");
  const cateId = $(this).data("cateid");
  setTimeout(function(){
    $("li.product-item").hide();
    $(`li.product-item[data-cateid=${cateId}]`).show();
  },500)
});
