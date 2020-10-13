





/* 商品详情 */
$(function(){

  $.ajax({       
        type:"get",
        url:"http://localhost:3000/Xq",
        success:function(Xq){
           console.log(Xq);
            var str = "";
            for(var i in Xq){
                
                str =  `
                <div class="Xq_left">
                 <div class="Xq_left_mall">
                     <img src="${Xq[i].imgsrc1}" alt="">
                     <div class="Zhezhao"></div>
                 </div>
                  <div class="Xq_left_big">
                      <img src="${Xq[i].imgsrc1}" alt="">
                  </div>
                  <div class="Xq_left_xiao">
                    <li>
                        <img src="${Xq[i].imgsrc1}" alt="">
                    </li>
                    <li>
                        <img src="${Xq[i].imgsrc2}" alt="">
                    </li> 
                    <li>
                        <img src="${Xq[i].imgsrc3}" alt="">
                    </li>
                    <li>
                        <img src="${Xq[i].imgsrc4}" alt="">
                    </li>                  
                     <li>
                         <img src="${Xq[i].imgsrc5}" alt="">
                     </li>  
                 </div>
              </div>
            <div class="Xq_right">           
                 <p>${Xq[i].jieshao}</p>
                  <div class="Xq_right_1">
                     ${Xq[i].price}
                  </div>  
                  <div class="Xq_right_2">
                      <span>-</span>
                      <input type="text" value="1">
                      <span>+</span>
                      <li>${Xq[i].Gw}</li>
                  </div>
            </div>
                
                `;

            } 
           $(".SpXq").html(str);

        }

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
       console.log(l);
        let t = e.pageY - $(this).offset().top - 50;
         console.log(t); 
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
           console.log(  $(".Xq_left_big").find("img"));
        $(".Xq_left_big").find("img").css({
            left:l*-4,
            top:t*-4,
        })
 
    })
     // var img = $("li").length();
 
 
 
 })



})














