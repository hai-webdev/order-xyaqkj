// 头部的js代码
import "swiper/css/swiper.min.css";
import "./index.less";

$("#menu").on("click", function () {
  $(this).toggleClass("active");
  $(".m-nav").slideToggle(400, "swing");
});

$(".m-nav-item > a").on("click", function () {
  $(this).toggleClass("on");
  $(this).next(".subnav-list").slideToggle();
});
$(".sublist-item > a").on("click", function () {
  $(this).toggleClass("on");
  $(this).next(".sublist3-list").slideToggle();
});
// document.oncontextmenu = function (evt) {
//   evt.preventDefault();
// };
// document.onselectstart = function (evt) {
//   evt.preventDefault();
// };
