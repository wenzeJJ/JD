

/* 登入的账号添加商品  取到商品 */

$(function(){

// $.get("http://jx.xuzhixiang.top/ap/api/productlist.php",{uid:43302},data=>{
//   console.log(data);
// })


//  $.ajax({
//       type:"get",
//       url:" http://localhost:3000/Xq",
//       success:function(data){
//           console.log(data);
          
//          for(var i in data){
//            console.log(data[i].price1);
//           $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php",{
//             uid:43302,
//             pimg:data[i].imgsrc,
//             pprice:data[i].price1,
//             pdesc:data[i].jieshao,
//           })
//          } 

//       }
//     })
 
     $.ajax({
       type:"get",
         url:"http://jx.xuzhixiang.top/ap/api/allproductlist.php",
         data:{
         uid:43302
       },
       success:function(data){
          console.log(data);
          var str = "";
          var data=data.data;
             //遍历图片 把图片编程数组的方式
           for(let i= 0;i<data.length;i++){
             data[i].pimg=data[i].pimg.split(",")
           }
            console.log(data[1].pimg[0]);

         for(var i in data){
          
            str+=`<ul data-id=${data[i].pid}>
         <a href="#"><img src="${data[i].pimg[0]}" alt=""></a>
            <span>${data[i].pdesc}</span>
            <p>${data[i].pprice}</p>
            <li>加入购物车</li>
            </ul>
            `;
         } 
         $(".SpLb").html(str); 
          
         $(".SpLb ul").click(function(){
           //存数据 属性名为data-id  
           console.log(this);
          //  setCookie("data-id",$(this).attr("data-id"),7);
          window.location.href=`Xq.html?${$(this).attr('data-id')}`;
             

         })
         

      }
      // error(e){
      //   alert(e)
      // } 
  }) 

  

})
















