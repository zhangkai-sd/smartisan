define(["jquery.min","cookie"],
 function(){
  function download(){
  $.ajax({
    url: "../data/data.json",
    success: function (result) {
      //console.log(result)
        result[0].forEach(item => {
          data(item,".count");
         
          }) 
          result[1].forEach(item => {
            data(item,".list1");
            }) 
            result[2].forEach(item => {
              data(item,".list2");
              }) 
              result[3].forEach(item => {
                data(item,".list3");
                }) 
  
    },
    error: function (msg) {
      console.log(msg)
    }
  })
  }
     return {
    download:download
  }
 }
)




function data(item,parent){
  pricesymble(item);
  var node= $(`<div class="goodsCon">
 <a href="${item.href}" class="a">
     <div class="iconDiv">
     <img src="${item.icon[0]}"  class="icon">
     </div>
     <h4 class="title">${item.title}</h4>
     <h6 class="title2">${item.info}</h6>
     <div class="dotlist">
         <ul>
         </ul>
     </div>
 </a>
 <div class="priceCon">
     <span class="price">￥${item.price}</span>
     <span class="oldPrice">${item.oldPrice}</span>
 </div>
</div>`);

  if(item.priceDown){
      $(` <div class="condown">
      ${item.priceDown}
     </div>`).appendTo(node.find(".a"))
  }
  changeH6(node,item);
 
//创建li放到ul里面,li的颜色是data里写的颜色，移入li切换图片
 var li=item.color;
 li.forEach(function(color){
    $(`<li></li>`).css("backgroundColor",color).appendTo(node.find(".dotlist ul"));
 })
 

  node.find("ul").on("mouseover","li",function(e){
     // console.log(item.icon)
     var a=  e.target.closest(".a")
     var abc= node.find("ul li")
       var arr = Array.prototype.slice.call(abc)
   arr.forEach(function(src,index){
       if(e.target==src){
          var img= $(a).find(".icon");
          $(img).attr("src",item.icon[index])
       }
      })


      
})

node.appendTo(parent)
cookieid(item,node);



}

function changeH6(node,item){
    node.on("mouseenter",function(){
      var h6=  node.find("h6")
      if(item.enterInfo){
          h6.text(item.enterInfo).css("color","red")
      }else{
          h6.text(item.info)
      }
    }).on("mouseleave",function(){


      var h6=  node.find("h6")
      h6.text(item.info).css("color","#333")
    })
}



function pricesymble(item){
  if(item.oldPrice){
    item.oldPrice="￥"+item.oldPrice
  }
}



 function cookieid(item,node){
  //console.log(item.id)
  node.click(function(){
    console.log(item.id)
    var arr=[{id:item.id}]
    jQuery.cookie("pages", JSON.stringify(arr), { expires: 7 ,raw:true})
  })

}  