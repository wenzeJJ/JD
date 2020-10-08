$(function(){
    /*  header下的网站导航 显示隐藏 */
    console.log($(".r").find("li").eq(6));
       $(".r").find("li").eq(6).mouseover(function(e){
        
           $(this).find("ul").show();
           e.stopPropagation();
       })


    /* nav  左侧导航栏 */
    $(".navl_1 p").mouseover(function(){
        $(".navl_1_1").show().next().siblings().hide();
    });
    $(".navl_1 p").mouseout(function(){
        $(".navl_1_1").hide();
    })
    /* nav  中间的轮播 */
  
   
   

})