


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
            // console.log(data[i].pprice*data[i].pnum);
            // console.log(data[i].pprice);
            // console.log(data[i].pid);
              str+=`
              <div class="Js_center_1">
              <div class="Shangpin">
                 <input class="checkbox" type="checkbox">
                 <img src="${pimg[0]}" alt="">
                  <p>${data[i].pdesc}</p>
              </div>
              <div class="price">${data[i].pprice}</div>
              <div class="number">
                 <span class="span1" data-id=${data[i].pid}>-</span>
                 <input type="text" value="${data[i].pnum}">
                 <span class="span2" data-id=${data[i].pid}>+</span>
                  <p>有货</p>
              </div>
              <div class="Zongjia">${data[i].pprice*data[i].pnum}</div>
              <div class="caozuo" data-id=${data[i].pid}>删除</div>
               </div>
              `; 
      

           }
        //    console.log(data[2].pprice);
         
        $(".SpJs").append(str);

       /* 点击加号加商品数量 */
         $(".number").find(".span2").click(function(){
             
             console.log($(this).siblings("input"));
             //
             let val = $(this).siblings("input").val();
             console.log(val);

             $(this).siblings("input").val(++val);

             let Num = Number($(".number input").val());
             console.log(Num);

             var price =parseInt($(".price").text());

             let Zongjia = $(".Zongjia").siblings().text();

             Zongjia=price*Num;  
             
             $(".Zongjia").text(Zongjia); 
             console.log(Zongjia);  
           
             let Pid = $(this).attr("data-id")
             console.log($(this).attr("data-id"));
             $.ajax({
                type:"get",
                url:"http://jx.xuzhixiang.top/ap/api/add-product.php",
                data:{
                    uid:43302,
                    pid:Pid,
                    pnum:1
                }
             })
         })
         
         // 点击减号修改商品
            $(".number").find(".span1").click(function(){
           
            let val1 = $(this).siblings("input").val();
            $(this).siblings("input").val(--val1); 
            if(val1<=1){
                val=1;
                $(this).siblings("input").val(1);
            } 
            // console.log($(this).siblings("input").val());
            var price =parseInt($(".price").text());
            
            //zongjia
            let Zongjia1 = $(".Zongjia").siblings(".Zongjia").text();

            Zongjia1 = price*Number(val1);
            console.log(Zongjia1);
            $(".Zongjia").text(Zongjia1);     
            let Pid = $(this).attr("data-id");
             
              


        })

        // 勾选框  全部
        $(".Js_center input").click(function(){
            
            if( $(".Js_center input").get(0).checked){
                $(".Shangpin input").prop("checked","true");
            }else{
                $(".Shangpin input").removeAttr("checked",false);
            }
        })
        // 单选框
        $(".Shangpin input").click(function(){
            if($(".Shangpin input:checked").length==$(".Shangpin input").length){
                $(".Js_center input").prop("checked","true")
            }else{
                $(".Js_center input").removeAttr("checked",false)
            }

        })


         // 点击删除  删除商品  
         $(".caozuo").click(function(){
            let Pid = $(this).attr("data-id");
            console.log(Pid);
            $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php?uid=43302&pid="+Pid)
            
             location.reload()
            // $(".Js_center_1").remove();
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






