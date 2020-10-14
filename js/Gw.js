


/* 结算 全选   单选 */
$(function(){
    
   $.ajax({
       type:"get",
       url:"http://jx.xuzhixiang.top/ap/api/cart-list.php",
       data:{
           id:43302
       },
       success:function(data){
        //   console.log(data);
          var data =data.data;
           var str= "";
           for(var i in data){
            //    console.log(i)
            let pimg = data[i].pimg.split(",")
            console.log(data[i].pprice);
              str+=`
              <div class="Js_center_1">
              <div class="Shangpin">
                 <input class="checkbox" type="checkbox">
                 <img src="${pimg[0]}" alt="">
                  <p>${data[i].pdesc}</p>
              </div>
              <div class="price">${data[i].pprice}</div>
              <div class="number">
                  <span>-</span>
                 <input type="text" value="1">
                 <span>+</span>
                  <p>有货</p>
              </div>
              <div class="Zongjia"></div>
              <div class="caozuo">删除</div>
               </div>
              `; 
      

           }
        //    console.log(data[2].pprice);
         
        $(".SpJs").append(str);
            
        var price =parseInt($(".price").text());
        var Num = Number($(".number input").val());
         console.log(Num);
         var Zongjia = $(".Zongjia").text();
         Zongjia=price*Num;  
         $(".Zongjia").text(Zongjia) 
         console.log(Zongjia); 
       
         $(".number").find("span").click(function(){
             
             console.log($(this).siblings("input"));

             let val = $(this).siblings("input").val();
             console.log(val);

             $(this).siblings("input").val(++val);

             let Num = Number($(".number input").val());
             console.log(Num);

             let Zongjia = $(".Zongjia").siblings().text();
             Zongjia=price*Num;  

             $(".Zongjia").text(Zongjia) 
             console.log(Zongjia);  
           
             $.ajax({
                type:"get",
                url:"http://jx.xuzhixiang.top/ap/api/add-product.php",
                data:{
                    uid:43302,
                    pid:data[i].pid,
                    pnum:1
                }
             })
              
 
         })
         
         
       }
   })
  /*  .then(function(){
        // console.log(parseInt($(".price").text()))
        // let Price=$(".price").text();
        // for(let i=0;i<Price.length;i++){
        //     console.log(Price[i])
        //       console.log(parseInt(Price[i]));
        //       parseInt(Price[i]);
        // }
    
        


   }) */





   /* 大function */
})






