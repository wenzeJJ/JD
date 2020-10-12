
/* 跳转  登入 切换 */
$(function(){
    /* 点击京东log跳转页面 */
    $(".Hea1_1").click(function(){
        location.href="http://127.0.0.1:5500/html/Sy.html"
    })
  

    /*  扫码  登入 切换 */
     $(".Dr_2_t2 p").click(function(){

         $(".Dr_2_t3").css({
             display:"block"
         })
         $(".Dr_2_t4").css({
             display:"none"
         })
         $(".Dr_2_t2 span").css({
            color:"black"
        })
        $(".Dr_2_t2 p").css({
            color:"red"
        })
     })
     /* 登入 */
     $(".Dr_2_t2 span").click(function(){
        $(".Dr_2_t3").css({
            display:"none"
        })
        $(".Dr_2_t4").css({
            display:"block"
        })
        $(".Dr_2_t2 span").css({
            color:"red"
        })
        $(".Dr_2_t2 p").css({
            color:"black"
        })
     })

    /* 点击注册跳转页面 */
       $(".Dr_qq_1").click(function(){
           location.href="http://127.0.0.1:5500/index/Zc.html";
       })

})

/*   登入  */
$(function(){
    $(".Dr_2_t4 button").click(function(){
        console.log($(".Dr_2_t4 button"));
        console.log($(".Btn1 input").val());
        console.log($(".Btn2 input").val());
          $.get("http://jx.xuzhixiang.top/ap/api/login.php",{
              username:$(".Btn1 input").val(),
              password:$(".Btn2 input").val()
          },data=>{
              console.log(data);
              console.log(data.data.username);
              if(data.data.username==$(".Btn1 input").val()&&data.data.password==$(".Btn2 input").val()){
                  location.href="http://127.0.0.1:5500/html/Sy.html";
              }
          })
      
      })
})









