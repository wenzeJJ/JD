
$(function(){
    let pid = location.search.replace("?","");
           console.log(pid);
    $.ajax({       
        type:"get",
        url:`http://jx.xuzhixiang.top/ap/api/detail.php?id=${pid}`,
        success:function(data){
           console.log(data);
          
            var data=data.data;
            var str = "";
            var pimg = data.pimg.split(",")
            console.log(pimg[0]);
            // 遍历图片
            // for(let i = 0 ; i<data.pimg.length;i++){
            //     data.pimg[i]=data.pimg[i].split(",")
            // }
            // console.log(data.pimg[0]);
         
            // for(var i in data){
                console.log(pimg[0]);
                str =  `
                <div class="Xq_left">
                 <div class="Xq_left_mall">
                     <img src="${pimg[0]}" alt="">
                     <div class="Zhezhao"></div>
                 </div>
                  <div class="Xq_left_big">
                      <img src="${pimg[0]}" alt="">
                  </div>
                  <div class="Xq_left_xiao">
                    <li>
                        <img src="${pimg[0]}" alt="">
                    </li>
                    <li>
                        <img src="${pimg[1]}" alt="">
                    </li> 
                    <li>
                        <img src="${pimg[2]}" alt="">
                    </li>
                    <li>
                        <img src="${pimg[3]}" alt="">
                    </li>                  
                     <li>
                         <img src="${pimg[4]}" alt="">
                     </li>  
                 </div>
              </div>
            <div class="Xq_right">           
                 <p>${data.pdesc}</p>
                  <div class="Xq_right_1">
                     ${data.pprice}
                  </div>  
                  <div class="Xq_right_2">
                      <span>-</span>
                      <input type="text" value="1">
                      <span>+</span>
                      <li>加入购物车</li>
                  </div>
            </div>
                
                `;
 
            // } 
          
            $(".SpXq").html(str);
        }
        /* 放大镜 */
  }).then(function(){

         /* 放大镜 */
        $(".Xq_left_mall").mouseenter(function(){
            //滑过让大图显示
            $(".Xq_left_big,.Zhezhao").show();
              
        }).mouseleave(function(){
            //划出大图消失
            $(".Xq_left_big,.Zhezhao").hide();
        }).mousemove(function(e){
           let l = e.pageX - $(this).offset().left - 50;
        //    console.log(l);
            let t = e.pageY - $(this).offset().top - 50;
            //  console.log(t); 
            if(l<=0){
                l=0
            }
            if(l>=200){
                l=200
            }
            if(t<=0){
                t=0
            }
            if(t>=200){
                t=200
            }
     
            $(".Zhezhao").css({
                left: l,
                top: t,
            })
            //    console.log(  $(".Xq_left_big").find("img"));
            $(".Xq_left_big").find("img").css({
                left:l*-4,
                top:t*-4,
            })
     
        })
         // var img = $("li").length();
          
     
     
     }).then(function(){
        console.log($(".Xq_right_2").find("span").eq(0));     
        console.log($(".Xq_right_2 input").val());
      
        //点击加号的时候添加商品
        $(".Xq_right_2").find("span").eq(1).click(function(){
          
            // $.get(`http://jx.xuzhixiang.top/ap/api/add-product.php?uid=43302&pid=${pid}&pnum=1`)
            var val = $(".Xq_right_2").find("input").val();
            $(".Xq_right_2").find("input").val(++val);
            
            $.ajax({
                type:"get",
                url:"http://jx.xuzhixiang.top/ap/api/add-product.php",
                 data:{
                    uid:43302,
                    pid:pid,
                    pnum:1
                 },success:(function(data){
                     
                    $(".Xq_right_2 li").click(function(){
                        window.location.href=`Gw.html`;
                    })
                 })

            })



        
        })

        
        $(".Xq_right_2").find("span").eq(0).click(function(){
          
            // $.get(`http://jx.xuzhixiang.top/ap/api/add-product.php?uid=43302&pid=${pid}&pnum=1`)
            var val = $(".Xq_right_2").find("input").val();
               $(".Xq_right_2").find("input").val(--val);
               if(val<=1){
                val=1;
                $(".Xq_right_2").find("input").val(1)
            }  

            // $.ajax({
            //     type:"get",
            //     url:"http://jx.xuzhixiang.top/ap/api/cart-delete.php",
            //     data:{
            //         uid:43302,
            //         pid:pid,
            //     },succ
            // })  
            

        
        })
        

     })
    





})













/* 商品详情 */
// $(function(){

//   $.ajax({       
//         type:"get",
//         url:"http://localhost:3000/Xq",
//         success:function(Xq){
//         //    console.log(Xq);
//             var str = "";
//             for(var i in Xq){
                
//                 str =  `
//                 <div class="Xq_left">
//                  <div class="Xq_left_mall">
//                      <img src="${Xq[i].imgsrc1}" alt="">
//                      <div class="Zhezhao"></div>
//                  </div>
//                   <div class="Xq_left_big">
//                       <img src="${Xq[i].imgsrc1}" alt="">
//                   </div>
//                   <div class="Xq_left_xiao">
//                     <li>
//                         <img src="${Xq[i].imgsrc1}" alt="">
//                     </li>
//                     <li>
//                         <img src="${Xq[i].imgsrc2}" alt="">
//                     </li> 
//                     <li>
//                         <img src="${Xq[i].imgsrc3}" alt="">
//                     </li>
//                     <li>
//                         <img src="${Xq[i].imgsrc4}" alt="">
//                     </li>                  
//                      <li>
//                          <img src="${Xq[i].imgsrc5}" alt="">
//                      </li>  
//                  </div>
//               </div>
//             <div class="Xq_right">           
//                  <p>${Xq[i].jieshao}</p>
//                   <div class="Xq_right_1">
//                      ${Xq[i].price}
//                   </div>  
//                   <div class="Xq_right_2">
//                       <span>-</span>
//                       <input type="text" value="1">
//                       <span>+</span>
//                       <li>${Xq[i].Gw}</li>
//                   </div>
//             </div>
                
//                 `;

//             } 
//            $(".SpXq").html(str);

//         }

//   }).then(function(){

//      /* 放大镜 */
//     $(".Xq_left_mall").mouseenter(function(){
//         //滑过让大图显示
//         $(".Xq_left_big,.Zhezhao").show();
          
//     }).mouseleave(function(){
//         //划出大图消失
//         $(".Xq_left_big,.Zhezhao").hide();
//     }).mousemove(function(e){
//        let l = e.pageX - $(this).offset().left - 50;
//     //    console.log(l);
//         let t = e.pageY - $(this).offset().top - 50;
//         //  console.log(t); 
//         if(l<=0){
//             l=0
//         }
//         if(l>=200){
//             l=200
//         }
//         if(t<=0){
//             t=0
//         }
//         if(t>=200){
//             t=200
//         }
 
//         $(".Zhezhao").css({
//             left: l,
//             top: t,
//         })
//         //    console.log(  $(".Xq_left_big").find("img"));
//         $(".Xq_left_big").find("img").css({
//             left:l*-4,
//             top:t*-4,
//         })
 
//     })
//      // var img = $("li").length();
      
 
 
//  })

// })

// })

/* 接受列表页的商品 */
// console.log(location.search.replace("?",""));
// $(function(){
//     // console.log(location.search("?"));
//      let pid = location.search.replace("?","");
//      console.log(pid);
//     $.get(`http://jx.xuzhixiang.top/ap/api/detail.php?id=${pid}`,data=>{
//     console.log(data);
//     }
//     )
// })

