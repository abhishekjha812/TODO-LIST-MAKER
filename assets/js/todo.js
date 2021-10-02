

$(".input").on("keyup",function(e){
     if(e.keyCode==13 && $(".input").val()!="")
     {
       var task = $("<div class='task'></div>").text($(".input").val());
       var del = $("<i class = 'fas fa-trash-alt'></i>").click(function(){
         var p = $(this).parent();
         p.fadeOut(function(){
           p.remove();
         });
       });
       var check= $("<i class ='fas fa-check'></i>").click(function(){
         var p = $(this).parent();
         p.fadeOut(function(){
           $(".comp").append(p);
           p.fadeIn();
         });
         $(this).remove();
       });
       task.append(del,check);
       $(".notcomp").append(task);
       $(".input").val("");
     }

   });
