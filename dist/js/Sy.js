$(function () {
  /*  header下的网站导航 显示隐藏 */
//   console.log($(".r").find("li").eq(6));
//   $(".r").find("li").eq(6).mouseover(function (e) {
//       $(this).find("ul").show();
//       e.stopPropagation();
//     });
  /* nav  左侧导航栏 */
  $(".navl_1 p").mouseover(function () {
    $(".navl_1_1").show().next().siblings().hide();
  });
  $(".navl_1 p").mouseout(function () {
    $(".navl_1_1").hide();
  });
 
});

/*  nav 中间的轮播 */
$(document).ready(function () {
  var i = 0;
  var timer;
  $(".item").eq(0).show().siblings(".item").hide();
  showTime();
  //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
  $(".tab").hover(
    function () {
      //获取当前i的值，并显示，同时还要清除定时器
      i = $(this).index();
      Show();
      clearInterval(timer);
    },
    function () {
      showTime();
    }
  );

  //鼠标点击左侧的箭头
  $(".prev").click(function () {
    clearInterval(timer);
    if (i == 0) {
      i = 7; //注意此时i的值
    }
    i--;
    Show();
    showTime();
  });

  //鼠标点击右侧的箭头
  $(".next").click(function () {
    clearInterval(timer);
    if (i == 7) {
      i = -1; //注意此时i的值
    }
    i++;
    Show();
    showTime();
  });
  //创建一个showTime函数
  function showTime() {
    //定时器
    timer = setInterval(function () {
      Show();
      i++;
      //当图片是最后一张的后面时，设置图片为第一张
      if (i == 7) {
        i = 0;
      }
    }, 2000);
  }
  //创建一个Show函数
  function Show() {
    //在这里可以用其他jquery的动画
    $(".item").eq(i).fadeIn(300).siblings(".item").fadeOut(300);
    //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
    $(".tab").eq(i).addClass("active").siblings(".tab").removeClass("active");
  }
});
