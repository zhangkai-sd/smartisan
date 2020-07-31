define(["jquery.min"],
 function(){
    function login(){
        var bool=true;
        $("#check").click(function(){
          bool=!bool;
           if(bool){
            $("#check a").css("backgroundPosition","right")
              
           }else{
            $("#check a").css("backgroundPosition","left")
           
           }
        })
    }
    
    function reg(){
        $(".info form ul li div input").on("focus",function(){
            let parent=$(this).parent();
            $( parent).css("border","1px solid #6b93f2");
        }).on("blur",function(){
            let parent=$(this).parent();
            $(parent).css("border","1px solid  #ccc " );
        })

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


          $("#password").on("input",function(){
            var val= $(this).val();
            var ret = /^[a-zA-Z][a-zA-Z0-9_]{5,20}$/;
            let parent=$(this).parent();
            console.log(parent)
            if(ret.test(val)){
            $(".btn button").attr("disabled",false).css("opacity",1)
           $( parent).css("border","1px solid #6b93f2");
           
          }else{
              $(parent).css("border","1px solid  #d16d62");
              $(".btn button").css("opacity",0.5).attr("disabled",true)
             
          }
          })

    }
        $(".btn button").click(function(e){
            e.preventDefault();
            $.ajax({
                method: "post",
                url: "../server/login.php",
                data: {
                    username: $("#user").val(),
                    password: $("#password").val()
                },
                success: function(result){
                    
                    var obj = JSON.parse(result);
                    if(obj.code){
                        $(".usertitle").text(obj.message).css("display","block");
                    }else{
                       $(".usertitle").css({
                                "display":"none"
                       })
                    var timer=setTimeout(function(){
                        window.location.href="./index.html"
                            clearInterval(timer);
                        },1000)
                    }
                  










                },
                error: function(msg){
                    alert(msg);
                }
            })
        })



    return{
        login:login,
        reg:reg
    }

 })