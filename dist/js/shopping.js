//必须遵从AMD规范
define(["jquery", "cookie"], function () {
  function shopping() {
    var bool = true;
    $.ajax({
      url: "../data/pagedata.json",
      success: function (arr) {



        down(arr);
        inputs();
        close(arr);

      },
      error: function (msg) {
        console.log(msg);
      },
    });
  }





  return {
    shopping: shopping
   

  }



});















function inputs() {
  var input = Array.from($(".check"))
  var arr2 = new Array(input.length).fill(false)

  var cookieStr = $.cookie("goods");
  var cookieArr = JSON.parse(cookieStr);
 
  input.forEach(function (item1, index) {
   
    //console.log(info)
  
     
    $(item1).on("click", function () {
      //  console.log( $(this).prop("checked"))
      if ($(this).prop("checked")) {
        arr2[index] = true;
      
      } else {
        arr2[index] = false;
      }
    //  console.log(arr2)

  
    
    
     


      var arr3 = arr2.filter(function (item) {
        return item == true;
      })

      $(".jisuan-left h4 i").text(arr3.length)


      var bool = arr2.every(function (item) {
        return item > 0;
      })


      //console.log(bool)

      $("#allcheck").prop("checked", bool)

      if (bool) {
        $(".allchecks").css("backgroundImage", "url(./images/logo/5.png)")

      } else {
        $(".allchecks").css("backgroundImage", "url(./images/logo/5.1.png)")
      }


    })

    var bool2;
    $(".allchecks").on("click", function () {

      $(item1).prop("checked", bool2/* $("#allcheck").prop("checked") */)
      if (bool2) {
        $(".allchecks").css("backgroundImage", "url(./images/logo/5.png)")
        bool2 = !bool2
      } else {

        $(".allchecks").css("backgroundImage", "url(./images/logo/5.1.png)")
        bool2 = !bool2
      }
    })

  })
}





function down(arr) {
  var cookieStr = $.cookie("goods");
  if (cookieStr) {
    var cookieArr = JSON.parse(cookieStr);
    var newArr = []; //符合条件数据
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < cookieArr.length; j++) {
        if (arr[i].id == cookieArr[j].id) {
          newArr.push(arr[i]);
          break;

        }
      }


    }
    // console.log(cookieArr)


    newArr.forEach(function (item, index) {
      // console.log(item.id)
      var str = $(`
      <div class="info-one" id=${item.id}>
      <p><input  type="checkbox" class="check" >
     
      </p>
      <div class="img">
        <img src="${item.img[0][0]}" alt="">
      </div>
      <div class="info2">
        <a href="#">${item.title}</a>

        

      </div>
      <div class="close">
        <a href="#"></a>
      </div>
      <div class="smallnum">￥<i>${cookieArr[index].num * item.price}</i>.00</div>
      <div class="num">
        <div class="num-num">
          <span class="num1"></span>
          <i class="num0">${cookieArr[index].num}</i>
          <span class="num2"></span>
        </div>
      </div>
      <div class="price">
        <i>￥</i>
        <span>${item.price}.00</span>
      </div>
    </div>
  </div>
      `).prependTo(".info");
if(cookieArr[index].color){
  $(`<span>${cookieArr[index].color}</span>`).appendTo(".info2")
}

      str.find(".num1").click(function () {

        var num = str.find(".num0").text(cookieArr[index].num--)

        cookieArr.num = str.find(".num0").text();
        $.cookie("goods", JSON.stringify(cookieArr), { expires: 7, raw: true });
        if (cookieArr[index].num <= 1) {
          cookieArr[index].num = 1
        }
        str.find(".smallnum i").text(cookieArr.num * item.price);
      })

      str.find(".num2").click(function () {

        str.find(".num0").text(cookieArr[index].num++)
        cookieArr.num = str.find(".num0").text();
        $.cookie("goods", JSON.stringify(cookieArr), { expires: 7, raw: true });
        var aaa = str.find(".smallnum i").text(cookieArr.num * item.price);
       // console.log(aaa[0].textContent)
      



     


    
     // sumprice(item,str);

   

     })
     $("h5 .nums").text(newArr.length)

   
    })

    
  }

 

}






function close(arr){
  var cookieStr = $.cookie("goods");
    var cookieArr = JSON.parse(cookieStr);
    var newArr = []; //符合条件数据
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < cookieArr.length; j++) {
        if (arr[i].id == cookieArr[j].id) {
          newArr.push(arr[i]);
          break;
      }

    }
  }
  


     //删除
    $(".info").on("click", ".close a", function (e) {
      e.preventDefault();
      var id = $(this).parent().parent().remove().attr("id");
      console.log(id);
      //在cookie中删除这个数据
   var cookieArr = JSON.parse($.cookie("goods"));
      cookieArr = cookieArr.filter((item) => item.id != id);

      cookieArr.length
        ? $.cookie("goods", JSON.stringify(cookieArr), { expires: 7 })
        : $.cookie("goods", null);
    
    }); 







//价格
/* 
$(".info").on("click", ".check", function () {
  var id = $(this).parent().parent().attr("id");
  console.log(id);


 var cookieArr = JSON.parse($.cookie("goods"));
  cookieArr = cookieArr.filter((item) => item.id == id);


 console.log(cookieArr[0].num)

 arr1=arr.filter((item)=>item.id==id);
 console.log(arr1)

   var price= cookieArr[0].num*arr1[0].price
   var arrs=[];
   arrs.push(price)
   console.log(arrs)
  // console.log(price)

  $(".sumparice").text(price) 



 
});  */
 
var cks=Array.from($(".check"));
//console.log(cks)
var arr2=Array.from($(".smallnum i"));
var arr3=arr2.map(function(item){
return item.innerText;
})
//console.log(arr3)

var sum=arr3.reduce(function(value,item,index){

    item=Number(item)
    value=Number(value)
   return value+item;

})
console.log(sum)
$(".sumparice").text(sum) 



cks.forEach(function(item,index){
item.click(function(){
  if($(this).prop("checked")==true){
    var price=0;
    price+=$(this).parent().parent().find(".smallnum i").text();
    console.log(price)
    $(".sumparice").text(price) 
  }
})
})

  }


   




