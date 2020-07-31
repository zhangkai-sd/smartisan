define(["jquery.min"],function(){
    function nav(){
        $(window).scroll(function(){
            if( $(window).scrollTop()>=45){
                $(".search").hide();
                $(".user").show();
            }else{
                $(".search").show();
                $(".user").hide();
            }
        })


      $(".login").mouseenter(function(){
        $(".userlist").show();
        })

        $(".userlist").mouseleave(function(){
           $(this).hide();
        })

        $(".shopping").mouseenter(function(){
            $(".shoppingnone").show();
            })
    
            $(".shoppingnone").mouseleave(function(){
               $(this).hide();
            })




    }
    function navdata(){
        $.ajax({
            url:"../data/nav.json",
            success:function(result){
               // console.log(result)
               
                   index(result[0])
                    self(result[1],$("#ul2"))
                    self(result[2],$("#ul3"))
            },
            error:function(msg){
               console.log(msg)
            }
        })
    }
    return {
        nav:nav,
        navdata:navdata,
        showhide:showhide

    }
}   
);

    function index(item){
    // console.log(item)
        item.forEach(function(item2){
       // console.log(item2)
             var li=$(`<li> <div>
                <h2>${item2.info}</h2> 
                 <ul class="ul2">
                                 
            </ul>
            </div>
            </li>`)
         // console.log(item2.img[i])
        // console.log(item2.title)
         var aaa= item2.title
           for(var j in aaa){
               //console.log(aaa[j])
                $ (`<li> <a href="#">
               <img src="${item2.img[j]}">
               <span>${aaa[j]}</span></a>
              </li>`).appendTo(li.find(".ul2"))  

           }

           
            li.appendTo($(".ul1"))    
            
    })  
 
    }
            function self(item,parent){
              for(var i in item[0].title){
                 // console.log(item[0].title[i])
                
                  $(`  <li>
                  <a href="#">
                    <img src="${item[0].img[i]}" alt="">
                    <p class="p1">${item[0].title[i]}</p>
                    <p>￥${item[0].price[i]}起</p>
                  </a>
                </li>`).appendTo(parent)
              }
            }

             function showhide(){
                $(".aaa").on("mouseover","li",function(e){
                    $(".nav-info").show();

                     if($(this).attr("class")=="one"){
                        console.log("aaa")
                        $(".ul1").show().siblings().hide();
                      
                    }else if($(this).attr("class")=="two"){
                        console.log("bbb")
                        
                        $("#ul2").show().siblings().hide();
                      
                    }else if($(this).attr("class")=="three"){
                        console.log("cc")
                     
                        $("#ul3").show().siblings().hide();
                    }else{
                        $(".nav-info").hide();
                    }
 
                  
                })
        
                 $(".nav-info") .mouseleave(function(){
                    $(this).hide();
            }); 
               
            } 
  

           