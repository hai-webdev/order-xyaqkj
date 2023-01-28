// 页尾的js代码
import "./index.less";

$(window).scroll(function () {
  const scrollTop = $(window).scrollTop();
  if (scrollTop > 200) {
    $(".return-top").fadeIn();
  } else {
    $(".return-top").fadeOut();
  }
});
$(".return-top").on("click", function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500
  );
  return false;
});
