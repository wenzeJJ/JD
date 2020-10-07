$(function(){
    /*  header下的网站导航 显示隐藏 */
     /*   $("header").find(".r").find("li").eq(6).mouseover(function(e){
           console.log($(".r").find("li").eq(6));
           $("ul").show();
           e.stopPropagation();
       }) */


    /* nav  左侧导航栏 */
    $(".navl_1 p").mouseover(function(){
        $(".navl_1_1").show();
    })
    $(".navl_1 p").mouseout(function(){
        $(".navl_1_1").hide();
    })
    /* nav  中间的轮播 */
    setInterval(function(){
        $("navC_1 li").find("img").stop().animate({
            "left":0
        },800).next().show().stop().animate({
            "left":0
        },800)
    },2000)
   
   

})