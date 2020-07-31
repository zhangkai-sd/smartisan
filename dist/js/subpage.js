define(["jquery.min", "cookie"],
  function () {
    function subpage() {
      $.ajax({
        url: "../data/pagedata.json",
        success: function (arr) {
          //console.log(arr);
          data(arr)


        },
        error: function (msg) {
          console.log(msg)
        }
      })



    }
    return {
      subpage: subpage
    }
  }
)




function data(arr) {

  var cookieArr = JSON.parse($.cookie("pages"));
  //console.log(cookieArr[0].id) 
  var num = cookieArr[0].id;
  arr.filter(function (it) {
 



    if (it.id == num) {
      col(it);
      // console.log(it)
 var str=$(` 
   <h1>${it.title}</h1>
   <h2>${it.title2}</h2>
 <div class="price">
   <i> ¥${it.price}.00</i>
  
</div>`)

      $("#sales").text(it.sales);

     

      str.appendTo(".title")
     
      
      it.img[0].forEach(function (i) {
      $(`<li><img src=${i}></li>`).appendTo(".imgul")
      $(".big img").attr("src", it.img[0][0])
      $(".imgsmall img").attr("src", it.img[0][0])
      
      });
     
      var i = 1;
      $(".num1").click(function () {
        i++;
        $(".num").text(i);
        $(".bootomnewprice span").text(it.price*$(".num").text()+".00");
        $(".bottomoldprice span").text(it.oldprice*$(".num").text()+".00")
      })
      $(".num2").click(function () {
        i--;
        if (i <= 0) i = 0;
        $(".num").text(i);
        $(".bootomnewprice span").text(it.price*$(".num").text()+".00");
        $(".bottomoldprice span").text(it.oldprice*$(".num").text()+".00")
      })
      $(".priceinfo").text(it.info)




      if(it.oldprice){
        console.log(it.oldprice)
    //  $(".oldprice ").html(it.oldprice)
  $( ` <span > 原价：￥<strong >${it.oldprice}</strong>.00</span>`).appendTo(".price")
      } 
  
      
    }
    
    
    
  })

  
 


}   






function col(it) {
  if(it.color){
    it.color.forEach(function (color) {
      var col = $(` <li></li>`).css("backgroundColor", color).appendTo(".colorcontent ul");
      $(".product h1").text(it.title)
      $(".product h2").text(it.colortext[0])
      sc_btnHandleClick(it,index)
      col.click(function () {
       
        var index = $(this).index();
        bottomshopping(it,index);
       
        if( !$(".imgul").children().length){
          it.img[index].forEach(function (item2) {
            $(`<li><img src=${item2}></li>`).appendTo(".imgul")
          //  $(".imgul li img").attr("src", item2)
            $(".imgsmall img").attr("src", it.img[index][0])
          
          })
        }else{
          $(".imgul").empty();
          it.img[index].forEach(function (item2) {
            $(`<li><img src=${item2}></li>`).appendTo(".imgul")
          //  $(".imgul li img").attr("src", item2)
            $(".imgsmall img").attr("src", it.img[index][0])
            $(".big img").attr("src", it.img[index][0])
            
          })
        } 
        
        
      })
    })
  
  
    $(".left ul").on("click", "li", function () {
      $(".imgsmall img").attr("src", $(this).find("img").attr("src"))
      $(".big img").attr("src", $(this).find("img").attr("src"))
    })
  }else{
    console.log("aaa")
    it.colortext.forEach(function(item){
      console.log(item)
      var col = $(` <li>${item}</li>`).appendTo(".colorcontent ul").css({
        borderRadius:0,
       
        height:"46px",
        fontSize:"18px",
        textAlign:"center",
        lineHeight:"46px"
      });
      $(".product h1").text(it.title)
      $(".product h2").text(it.colortext[0])
      sc_btnHandleClick(it,index)
      col.click(function () {
       
        var index = $(this).index();
        bottomshopping(it,index);
       
        if( !$(".imgul").children().length){
          it.img[index].forEach(function (item2) {
            $(`<li><img src=${item2}></li>`).appendTo(".imgul")
          //  $(".imgul li img").attr("src", item2)
            $(".imgsmall img").attr("src", it.img[index][0])
          
          })
        }else{
          $(".imgul").empty();
          it.img[index].forEach(function (item2) {
            $(`<li><img src=${item2}></li>`).appendTo(".imgul")
          //  $(".imgul li img").attr("src", item2)
            $(".imgsmall img").attr("src", it.img[index][0])
            $(".big img").attr("src", it.img[index][0])
            
          })
        } 
        
        
      })
    })
  
  
    $(".left ul").on("click", "li", function () {
      $(".imgsmall img").attr("src", $(this).find("img").attr("src"))
      $(".big img").attr("src", $(this).find("img").attr("src"))
    })

      
    
  }
  
  
  
  
  
  
  
  
  
  function bottomshopping(it,index){
      $(".product h2").text(it.colortext[index])
      $(".product h1").text(it.title)
      $(".shoppingcar").click(function(){
      
      })
  }
 
}




function sc_btnHandleClick(it,index) {
  console.log(it.colortext)
  $(".shoppingcar").on("click", function () {
    var id = it.id;
    console.log($(".num").text());
    //1、先去是否是第一次添加
    var first = $.cookie("goods") == null ? true : false;
    if (first) {
      var arr = [{ id: id, num: $(".num").text(),color:it.colortext[0]}];
      $.cookie("goods", JSON.stringify(arr), { expires: 7 ,raw:true});
    } else {
      //2、判断之前是否添加过
      var cookieArr = JSON.parse($.cookie("goods"));
      var findIndex = cookieArr.findIndex((item) => item.id == id);
      if (findIndex == -1) {
        var obj = { id: id, num: 1 ,color:it.colortext[index]};
        cookieArr.push(obj);
      } else {
        cookieArr[findIndex].num++;
        cookieArr[findIndex].color=it.colortext[index];
      }
      //存回去
      $.cookie("goods", JSON.stringify(cookieArr), { expires: 7 ,raw:true});
    }
    
    sc_num();
    
  }); 
}



function sc_num() {
  var cookieStr = $.cookie("goods");
  if (!cookieStr) {
    $(".dot span").hide();
  } else {
    $(".dot span").show();
  }
}





