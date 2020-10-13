$(function(){

  /* $.get("http://localhost:3000/Lb",{

  }) */

  $.ajax({
      type:"get",
      url:" http://localhost:3000/Xq",
      success:function(data){
          console.log(data);
          var str = "";
         for(var i in data){
          
            str+=`<ul>
            <img src="${data[i].imgsrc}" alt="">
            <span>${data[i].jieshao}</span>
            <p>${data[i].price1}</p>
            <li>${data[i].Gw}</li>
            </ul>
            `;
         } 
         $(".SpLb").html(str); 
      }
    

   


      
  })



})