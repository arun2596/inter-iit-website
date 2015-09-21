$(document).ready(function(){
  //$('.c1').show(0);
  $(".c1").fadeIn(0).addClass("sel");
  $("#cl1").addClass("activ");
  //$(".c1").animate({left:"-=10px"},150);
  $("#cl1").click(function(){
    if(!($(".c1").hasClass("sel")))
     {$(".sel").fadeOut(0).removeClass("sel");
      $(".activ").removeClass("activ ");
      $(this).addClass("activ ");
     $(".c1").addClass("sel").fadeIn(0);}
   });
   $("#cl2").click(function(){
    if(!($(".c2").hasClass("sel")))
     {$(".sel").fadeOut(0).removeClass("sel");
      $(".activ").removeClass("activ ");
      $(this).addClass("activ ");
     $(".c2").addClass("sel").fadeIn(0);
    }
   });
   $("#cl3").click(function(){
    if(!($(".c3").hasClass("sel")))
     {$(".sel").fadeOut(0).removeClass("sel");
   $(".activ").removeClass("activ ");
      $(this).addClass("activ ");
     $(".c3").addClass("sel").fadeIn(0);
    }
   });
   $("#cl4").click(function(){
    if(!($(".c4").hasClass("sel")))
     {$(".sel").fadeOut(0).removeClass("sel");
   $(".activ").removeClass("activ ");
      $(this).addClass("activ ");
     $(".c4").addClass("sel").fadeIn(0);
    }
   });
   $("#cl5").click(function(){
    if(!($(".c5").hasClass("sel")))
     {$(".sel").fadeOut(0).removeClass("sel");
   $(".activ").removeClass("activ ");
      $(this).addClass("activ ");
     $(".c5").addClass("sel").fadeIn(0);
    }
   });
   $("#cl6").click(function(){
    if(!($(".c6").hasClass("sel")))
     {$(".sel").fadeOut(0).removeClass("sel");
   $(".activ").removeClass("activ ");
      $(this).addClass("activ ");
     $(".c6").addClass("sel").fadeIn(0);
    }
   });
   $("#cl7").click(function(){
    if(!($(".c7").hasClass("sel")))
     {$(".sel").fadeOut(0).removeClass("sel");
   $(".activ").removeClass("activ ");
      $(this).addClass("activ ");
     $(".c7").addClass("sel").fadeIn(0);
    }
   });
  
});