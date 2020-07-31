
define(["jquery.min"],function(){

    function fdj(){
        $(".imgsmall").on("mousemove",function(e){
            var l=e.clientX- $(this).offset().left-50;
             var t=e.clientY- $(this).offset().top-50;
            if(l<0){
                l=0
            }
            if(l>300){
                l=300
            }
            if(t<0){
                t=0
            }
            if(t>300){
                t=300
            }
        
           $(".small").css("left",l);
           $(".small").css("top",t);

           $(".big img").css("top",-2.5*t)
           $(".big img").css("left",-2.5*l)
           
        }) .on("mouseenter",function(){

            $(".small").css("display","block");
            $(".big ").css("display","block");
         
      }).on("mouseleave",function(){
        $(".small").css("display","none");
            $(".big ").css("display","none");
      })
      
    }
       return {
           fdj:fdj
       }
    
        })
    
      
       
      
        
         
       
       
       
   
    