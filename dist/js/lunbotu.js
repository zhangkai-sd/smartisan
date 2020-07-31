define(["jquery.min"],function(){
    let index=0;
    let nextIndex=0;
    let timer;
   
    function annimate(){
        $(".banner img").eq(index).stop().fadeOut(500);
         $(".banner img").eq(nextIndex).stop().fadeIn(500);
        $(".banner ul li").eq(nextIndex).addClass("firstli").siblings().removeClass("firstli");
        }
    function autoPlay(){
        timer=setInterval(function(){
            if(nextIndex>=5){
                nextIndex=0;
            }else{
                nextIndex++;
            }
            annimate();
         index=nextIndex;
        },2000)
    }
    $(".banner ul li").mouseenter(function(){
        clearInterval(timer);
    }).mouseleave(function(){
        autoPlay()
    }).click(function(){
        nextIndex=$(this).index();
        annimate();
       index= nextIndex;
    })
   
    function annimatebtn(){
        
        $(".host p button:first").click(function(){
            $(".host .count").css("left","0");
           $(this).css("opacity","0.3")
           $(".host p button:last").css("opacity","1")
           
        })
        $(".host p button:last").click(function(){
            $(".host .count").css("left","-1220px");
            $(this).css("opacity","0.3")
            $(".host p button:first").css("opacity","1")
        })
}

    return{
        autoPlay:autoPlay,
        annimatebtn:annimatebtn
    }

})
  