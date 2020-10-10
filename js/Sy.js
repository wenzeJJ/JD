/* nav 导航显示隐藏 */
$(function () {
  /*  header下的网站导航 显示隐藏 */
  //   console.log($(".r").find("li").eq(6));
  //   $(".r").find("li").eq(6).mouseover(function (e) {
  //       $(this).find("ul").show();
  //       e.stopPropagation();
  //     });
  /* nav  左侧导航栏 */
  $(".navl_1").find("p").hover(function () {
   
      $(".navl_1_1").eq(0).show();
    },
    function () {
      $(".navl_1_1").eq(0).hide();
    }
  );
  $(".navl_1").find("p").hover(function () {
   
    $(".navl_1_1").eq(1).show();
  },
  function () {
    $(".navl_1_1").eq(1).hide();
  }
);
});

/*  nav 中间的轮播 */
$(document).ready(function () {
  var i = 0;
  var timer;
  $(".navC_1 .item").eq(0).show().siblings(".item").hide();
  showTime();
  //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
  $(".navC_1 .tab").hover(
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
  $(".navC_1 .prev").click(function () {
    clearInterval(timer);
    if (i == 0) {
      i = 7; //注意此时i的值
    }
    i--;
    Show();
    showTime();
  });

  //鼠标点击右侧的箭头
  $(".navC_1 .next").click(function () {
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

/* 京东秒杀的大轮播 */

$(document).ready(function () {
  var i = 0;
  var timer;
  $(".item1").eq(0).show().siblings(".item1").hide();
  showTime();
  //鼠标点击左侧的箭头
  $(".prev1").click(function () {
    clearInterval(timer);
    if (i == 0) {
      i = 3; //注意此时i的值
    }
    i--;
    Show();
    showTime();
  });

  //鼠标点击右侧的箭头
  $(".next1").click(function () {
    clearInterval(timer);
    if (i == 3) {
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
      //调用一个Show()函数
      Show();
      i++;
      //当图片是最后一张的后面时，设置图片为第一张
      if (i == 3) {
        i = 0;
      }
    }, 2000);
  }
  //创建一个Show函数
  function Show() {
    //在这里可以用其他jquery的动画
    $(".item1").eq(i).fadeIn(300).siblings(".item1").fadeOut(300);
  }
});

/* 京东秒杀 小轮播 */
$(document).ready(function () {
  var i = 0;
  var timer;

  //用jquery方法设置第一张图片显示，其余隐藏
  $(".item2").eq(0).show().siblings(".item2").hide();

  //调用showTime()函数（轮播函数）
  showTime();

  //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
  $(".tab2").hover(
    function () {
      //获取当前i的值，并显示，同时还要清除定时器
      i = $(this).index();
      Show();
      clearInterval(timer);
    },
    function () {
      //
      showTime();
    }
  );

  //创建一个showTime函数
  function showTime() {
    //定时器
    timer = setInterval(function () {
      //调用一个Show()函数
      Show();
      i++;
      //当图片是最后一张的后面时，设置图片为第一张
      if (i == 2) {
        i = 0;
      }
    }, 2000);
  }

  //创建一个Show函数
  function Show() {
    //在这里可以用其他jquery的动画
    $(".item2").eq(i).fadeIn(300).siblings(".item2").fadeOut(300);

    //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
    $(".tab2")
      .eq(i)
      .addClass("active2")
      .siblings(".tab2")
      .removeClass("active2");
  }
});

/* 特价 切换*/
$(function(){

   $(".Tj_right").find("li").eq(0).click(function(){
     $(".Tj_right_1").css({
       display:"block"
     })      
     $(".Tj_right_6").css({
      display:"none"
    })    
   $(this).css({
      borderBottom:"3px sloid red",
      color:"red"
    }).siblings().css({
      color:"gray"
    })    
   })
   
   $(".Tj_right").find("li").eq(1).click(function(){
    $(".Tj_right_6").css({
      display:"block"
    })      
    $(".Tj_right_1").css({
     display:"none"
   })     
   $(this).css({
    borderBottom:"3px sloid red",
    color:"red"
  }).siblings().css({
    color:"gray"
  }) 
  })

})

 
/* 新品首发  排行榜切换 */
$(function(){

$(".Ph_daohang").find("li").eq(0).click(function(){

 $(this).css({
   color:"#fff",
   background:"red"
 }).siblings().css({
   color:"gray",
   background:"#f4f4f4"
 })
 $(".Paihang_bottom1").css({
   display:"block"
 })
 $(".Paihang_bottom2").css({
  display:"none"
})

})

$(".Ph_daohang").find("li").eq(1).click(function(){

  $(this).css({
    color:"#fff",
    background:"red"
  }).siblings().css({
    color:"gray",
    background:"#f4f4f4"
  })
  $(".Paihang_bottom2").css({
    display:"block"
  })
  $(".Paihang_bottom1").css({
   display:"none"
 })
 
 })


})

















