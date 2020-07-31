define(["jquery.min"],
 function(){
    function reg(){
       
        $(".info form ul li div input").on("focus",function(){
            let parent=$(this).parent();
            $( parent).css("border","1px solid #6b93f2");

            $("#user") .on("input",function(){
                var val= $(this).val();
                var ret = /^[a-zA-Z][a-zA-Z0-9_]{5,20}$/;
                let parent=$(this).parent();
                if(ret.test(val)){
               $( parent).css("border","1px solid #6b93f2");
               $(".btn button").attr("disabled",false).css("opacity",1)
              }else{
                  $(parent).css("border","1px solid  #d16d62 ");
                  $(".btn button").css("opacity",0.5).attr("disabled",true)
                 
              }
              })
        })

     


          $("#password") .on("input",function(){
            var val= $(this).val();
            var ret = /^[a-zA-Z][a-zA-Z0-9_]{5,20}$/;
            let parent=$(this).parent();
           // console.log(parent)
            if(ret.test(val)){
            $(".btn button").attr("disabled",false).css("opacity",1)
           $( parent).css("border","1px solid #6b93f2");
           
          }else{
              $(parent).css("border","1px solid  #d16d62");
              $(".btn button").css("opacity",0.5).attr("disabled",true)
             
          }
          })


          $("#password2") .on("input",function(){
            var val= $(this).val();
            var val2=  $("#password").val();
            var ret = /^[a-zA-Z][a-zA-Z0-9_]{5,20}$/;
            let parent=$(this).parent();
            
            if(ret.test(val) && val===val2){
            $(".btn button").attr("disabled",false).css("opacity",1)
           $( parent).css("border","1px solid #6b93f2");
           
          }else{
              $(parent).css("border","1px solid  #d16d62");
              $(".btn button").css("opacity",0.5).attr("disabled",true)
             
          }
          })
         

    }


        function pre(){
            $(".btn .result").on("click",function(e){
                e.preventDefault();
                $.ajax({
                    method: "post",
                    url: "../server/register.php",
                    data: {
                        username: $("#user").val(),
                        password: $("#password").val(),
                        password: $("#password2").val(),
                        addTime: new Date().getTime()
                    },
                    success: function(result){
                       
                        var obj = JSON.parse(result);
                       
                        if(obj.code){
                          $(".usertitle").text(obj.message).css("display","block");
        
                        }else{
                            $(".usertitle").css({
                                "display":"none"
                              
                            });
                            setTimeout(function(){
                                window.location.href="./login.html"
                            }, 1000);
                        }
                    
                       
                    },
                    error: function(msg){
                        alert(msg);
                    }
                }) 
               
            })
        }

    return{
       
        reg:reg
        ,
        pre:pre
    }

 })