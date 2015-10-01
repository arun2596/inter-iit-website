function bluron(){
  $('.logo').css({
        "-webkit-filter": "blur(5px)",
  "-moz-filter": "blur(5px)",
  "-o-filter": "blur(5px)",
  "-ms-filter": "blur(5px)",
  "filter": "blur(5px)"
      });
      $('.footer').css({
        "-webkit-filter": "blur(2px)",
  "-moz-filter": "blur(2px)",
  "-o-filter": "blur(2px)",
  "-ms-filter": "blur(2px)",
  "filter": "blur(2px)"
      });
}
function bluroff(){
  $('.logo').css({
        "-webkit-filter": "blur(0px)",
  "-moz-filter": "blur(0px)",
  "-o-filter": "blur(0px)",
  "-ms-filter": "blur(0px)",
  "filter": "blur(0px)"
      });
      $('.footer').css({
        "-webkit-filter": "blur(0px)",
  "-moz-filter": "blur(0px)",
  "-o-filter": "blur(0px)",
  "-ms-filter": "blur(0px)",
  "filter": "blur(0px)"
      });
}
function bluron1(){
  $('.logo').css({
        "-webkit-filter": "blur(5px)",
  "-moz-filter": "blur(5px)",
  "-o-filter": "blur(5px)",
  "-ms-filter": "blur(5px)",
  "filter": "blur(5px)"
      });
      $('.footer').css({
        "-webkit-filter": "blur(2px)",
  "-moz-filter": "blur(2px)",
  "-o-filter": "blur(2px)",
  "-ms-filter": "blur(2px)",
  "filter": "blur(2px)"
      });
      $('.navbar').css({
        "-webkit-filter": "blur(2px)",
  "-moz-filter": "blur(2px)",
  "-o-filter": "blur(2px)",
  "-ms-filter": "blur(2px)",
  "filter": "blur(2px)"
      });
}
function bluroff1(){
  $('.logo').css({
        "-webkit-filter": "blur(0px)",
  "-moz-filter": "blur(0px)",
  "-o-filter": "blur(0px)",
  "-ms-filter": "blur(0px)",
  "filter": "blur(0px)"
      });
      $('.footer').css({
        "-webkit-filter": "blur(0px)",
  "-moz-filter": "blur(0px)",
  "-o-filter": "blur(0px)",
  "-ms-filter": "blur(0px)",
  "filter": "blur(0px)"
      });
    $('.navbar').css({
        "-webkit-filter": "blur(0px)",
  "-moz-filter": "blur(0px)",
  "-o-filter": "blur(0px)",
  "-ms-filter": "blur(0px)",
  "filter": "blur(0px)"
      });
}
$(function() {
       $('.hi-icon-map').click(function() {
           $('#map_wrapper').css({'visibility':'visible'});
           return false;
       });
       $('#close').click(function() {
           $('#map_wrapper').css({'visibility':'hidden'});
           return false;
       });
       $('#close1').click(function() {
           $('#wrapper').css({'visibility':'hidden'});
           return false;
       });
       $('#close2').click(function() {
           $('#his_wrapper').css({'visibility':'hidden'});
           return false;
       });
       $('#close3').click(function() {
           $('#sch_wrapper').css({'visibility':'hidden'});
           return false;
       });
       $('#close4').click(function() {
           $('#up_wrapper').css({'visibility':'hidden'});
           return false;
       });
       $('.under').click(function() {
           $('#wrapper').css({'visibility':'visible'});
           return false;
       });
       $('.hist').click(function() {
           $('#his_wrapper').css({'visibility':'visible'});
           return false;
       });       
       $('.sch').click(function() {
           $('#sch_wrapper').css({'visibility':'visible'});
           return false;
       });
       $('.up').click(function() {
           $('#up_wrapper').css({'visibility':'visible'});
           return false;
       });        
       
   });
$(document).mouseup(function (e)
{
    var container = $("#underconst");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $('#wrapper').css({'visibility':'hidden'});
        bluroff1();     
    }
});
$(document).mouseup(function (e)
{
    var container = $("#history");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $('#his_wrapper').css({'visibility':'hidden'});
        bluroff1();     
    }
});
$(document).mouseup(function (e)
{
    var container = $("#schedule");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $('#sch_wrapper').css({'visibility':'hidden'});
        bluroff1();     
    }
});
$(document).mouseup(function (e)
{
    var container = $("#update");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $('#up_wrapper').css({'visibility':'hidden'});
        bluroff1();     
    }
});
$(document).mouseup(function (e)
{
    var container = $("#map_canvas");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $('#map_wrapper').css({'visibility':'hidden'});
        bluroff1();
    }
});

$(document).mouseup(function (e)
{
    var container = $(".modal-dialog");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $('.modal').css({'display':'none'});
        bluroff1();
    }
});

$(document).ready(function() {
    
    checkSize();

    $(window).resize(checkSize);

    var array=["Welcome to Inter IIT Sports Meet 2015.","IIT Madras is hosting the 51st Inter IIT Sports Meet.","The first Inter IIT Sports Meet was conducted at Bombay in 1961.","From 1970 to 1980, for eleven consecutive years, IIT Madras won the GC.","Upto 1978, the Inter IIT Sports Meet was conducted on a knock-out basis and later this was changed to a league structure.","A seperate GC was introduced for women from 1983","In 1990, Gymnastics and Kabaddi were dropped from the Inter IIT competition.","In 1983, GC was not awarded because the meet was incomplete due to heavy rains in Chennai."];
    i=1;x=0;
    $('#text').text(array[0]);

    // function func1(){
    //   $('.facts').css({
    //     "-webkit-transform":"translateX(50px)",
    //     "transform":"translateX(50px)"
    //   });​
    // }
    setInterval(function(){
      $('.facts').css({
        "-webkit-transform":"translateX(-100%)",
        "-moz-transform":"translateX(-100%)",
        "-ms-transform":"translateX(-100%)",
        "-o-transform":"translateX(-100%)",
        "transform":"translateX(-100%)"
      });
        
      setTimeout(function(){
        $('.facts').css({
        "-webkit-transform":"translateX(0px)",
        "-moz-transform":"translateX(0px)",
        "-ms-transform":"translateX(0px)",
        "-o-transform":"translateX(0px)",
        "transform":"translateX(0px)"
      });
        $('#text').text(array[i]);
        $box = $('#wrap');
        if(x==0){
          $('#text').unwrap();
          x=1;
        }
    if ($('.facts').width() < $('#text').width()) {
      $('#text').wrap('<marquee>');
      x=0;
    }
      i++;
      i=i%8;
      },2000);
        
    },18000);

   $(".navbar-toggle").click(function(){
    if ($(".collapse.in").css("display")!="block"){
      bluron();
    }
    if ($(".collapse.in").css("display")=="block"){
      bluroff();
    }
  });
   $(".under").click(function(){
    if ($("#wrapper").css("visibility")=="visible"){
      bluron1();
    }
    });
   $(".hist").click(function(){
    if ($("#his_wrapper").css("visibility")=="visible"){
      bluron1();
    }
  });
    $(".sch").click(function(){
    if ($("#sch_wrapper").css("visibility")=="visible"){
      bluron1();
    }
    });
    $(".up").click(function(){
    if ($("#up_wrapper").css("visibility")=="visible"){
      bluron1();
    }
    });
   $(".hi-icon-map").click(function(){
    if ($("#map_wrapper").css("visibility")=="visible"){
      bluron1();
    }
    });
  $(".hi-icon-contact").click(function(){
    if ($(".modal").css("display")!="block"){
      bluron1();
    }
    });
    setInterval(function(){
      setTimeout(function(){
      $('.hi-icon-trivia').css({
        "background": "#f5dc1d",
 "box-shadow": "0 0 0 8px rgba(245,220,29,0.6)",
  "color":"rgba(255,255,255,1)"  

      });
    },500);
      
        $('.hi-icon-trivia').css({
        "box-shadow": "0 0 0 4px rgba(0,0,0,0.6)",
  "background-color": "rgba(0,0,0,1)",
  "color":"rgba(255,255,255,1)"  

      });
      
    },1500);
    
    // function func(){
    //   setTimeout(fun1,3000);
    //   setTimeout(function{})
    // },5000);

});

function checkSize(){
    if($(".container").css("width")>="1000px"){
      $('#image').hover(
      function(){$(this).attr('src', 'static/icons/brand2.png');
      $('.circle').css({
        "background": "rgba(0,0,0,0.8)",
        "box-shadow": "0 0 0 45px rgba(0,0,0,0.8)",
        WebkitTransition: "background 0.2s, color 0.2s, box-shadow 0.2s",  
        MozTransition: "background 0.2s, color 0.2s,box-shadow 0.2s",
        MsTransition: "background 0.2s, color 0.2s,box-shadow 0.2s",
        OTransition: "background 0.2s, color 0.2s,box-shadow 0.2s",
       transition: "background 0.2s, color 0.2s, box-shadow 0.2s"});
      },function(){$(this).attr('src', 'static/icons/brand.png');
      $('.circle').css({
        "background":"transparent",
        "box-shadow": "0 0 0 0px rgba(0,0,0,0.8)",
        WebkitTransition: "background 0.2s, color 0.2s, box-shadow 0.2s",  
        MozTransition: "background 0.2s, color 0.2s,box-shadow 0.2s",
        OTransition: "background 0.2s, color 0.2s,box-shadow 0.2s",
        MsTransition: "background 0.2s, color 0.2s,box-shadow 0.2s",
       transition: "background 0.2s, color 0.2s, box-shadow 0.2s"});
    });
    }
    
    if($(".container").css("width") == "830px"){

      $('#image').hover(
      function(){$(this).attr('src', 'static/icons/brand2.png');
      $('.circle').css({
        "background": "rgba(0,0,0,0.8)",
        "box-shadow": "0 0 0 30px rgba(0,0,0,0.8)",
        WebkitTransition: "background 0.2s, color 0.2s, box-shadow 0.2s",  
        MozTransition: "background 0.2s, color 0.2s,box-shadow 0.2s",
        MsTransition: "background 0.2s, color 0.2s,box-shadow 0.2s",
        OTransition: "background 0.2s, color 0.2s,box-shadow 0.2s",
       transition: "background 0.2s, color 0.2s, box-shadow 0.2s"});
      },function(){$(this).attr('src', 'static/icons/brand.png');
      $('.circle').css({
        "background":"transparent",
        "box-shadow": "0 0 0 0px rgba(0,0,0,0.8)",
        WebkitTransition: "background 0.2s, color 0.2s, box-shadow 0.2s",  
        MozTransition: "background 0.2s, color 0.2s,box-shadow 0.2s",
        MsTransition: "background 0.2s, color 0.2s,box-shadow 0.2s",
        OTransition: "background 0.2s, color 0.2s,box-shadow 0.2s",
       transition: "background 0.2s, color 0.2s, box-shadow 0.2s"});
    });
    }
    if($(".social").css("clear")=="right"){
      $('#image').hover(
      function(){$(this).attr('src', 'static/icons/brand2.png');
      $('.circle').css({
        "background": "rgba(0,0,0,0.8)",
        "box-shadow": "0 0 0 35px rgba(0,0,0,0.8)",
        WebkitTransition: "background 0.2s, color 0.2s, box-shadow 0.2s",  
        MozTransition: "background 0.2s, color 0.2s,box-shadow 0.2s",
        MsTransition: "background 0.2s, color 0.2s,box-shadow 0.2s",
        OTransition: "background 0.2s, color 0.2s,box-shadow 0.2s",
       transition: "background 0.2s, color 0.2s, box-shadow 0.2s"});
      },function(){$(this).attr('src', 'static/icons/brand.png');
      $('.circle').css({
        "background":"transparent",
        "box-shadow": "0 0 0 0px rgba(0,0,0,0.8)",
        WebkitTransition: "background 0.2s, color 0.2s, box-shadow 0.2s",  
        MozTransition: "background 0.2s, color 0.2s,box-shadow 0.2s",
        OTransition: "background 0.2s, color 0.2s,box-shadow 0.2s",
        MsTransition: "background 0.2s, color 0.2s,box-shadow 0.2s",
       transition: "background 0.2s, color 0.2s, box-shadow 0.2s"});
    });    
    }
}
    
