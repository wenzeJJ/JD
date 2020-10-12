// const { registry } = require("gulp");

/* 跳转 */
$(function(){
  $(".Hea3_1").click(function(){
      location.href="http://localhost:8080/index/Dr.html";
  })
  $(".Hea1_1").click(function(){
      location.href="http://127.0.0.1:5500/html/Sy.html"
  })

})


/* 注册账号 */
  /* 填写手机号 */
$(function(){

 $(".box1 input").change(function(){
  var Reg1 = /^1(3|4|5|7|8)\d{9}$/;
  var username = $(".box1 input").val();
  console.log(username);
   
  if(Reg1.test(username)){
    $(".box2").text("格式正确").css({
      color:"green"
    })
  }else{
    $(".box2").text("手机号有误").css({
      color:"red"
    })
  }
 })




})


  /* 输入密码 */
$(function(){
  var Reg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
   $(".box3 input").change(function(){
      var password = $(".box3 input").val();
      console.log(password);
      
       if(Reg2.test(password)){
         $(".box2_1").text("密码格式正确").css({
           color:"green",
           fontWeight:900
         })
       }else{
         $(".box2_1").text("密码强度太低").css({
           color:"red",
           fontWeight:900
         })
       }
   })



   $(".box3_1 input").change(function(){
    console.log($(".box3_1 input").val());
   if( $(".box3_1 input").val() == $(".box3 input").val()){
    
    $(".box2_2").text("密码正确").css({
      color:"green",
      fontWeight:900
    })
   } else{
    $(".box2_2").text("密码错误 ").css({
      color:"red"
    })
   }
   
    
   /*   if(Reg2.test($(".box3_1 input").val())){
       $(".box2_2").text("密码正确").css({
         color:"green",
         fontWeight:900
       })
     }else{
       $(".box2_2").text("密码错误 ").css({
         color:"red"
       })
     } */
 })




})


/* 注册成功 */
$(function(){
  
  $(".box4 button").click(function(){
    
    $.get("http://jx.xuzhixiang.top/ap/api/reg.php",{
      username:$(".box1 input").val(),
      password:$(".box3 input").val()
    },data=>{
      
      if(data.code==1){
        location.href="http://localhost:8080/index/Dr.html";
        
      }else{
        location.href="http://127.0.0.1:5500/html/Sy.html";
      }
    })



  })   
   

})











