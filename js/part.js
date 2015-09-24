 $(document).ready(function(){
    $(".1").mouseover(function(){
        $(".t1").css({"opacity" : "0.5"});
        $(".tt1").css({"opacity" : "1"});
    });
    $(".1").mouseleave(function(){
        $(".t1").css({"opacity" : "0"});
        $(".tt1").css({"opacity" : "0"});
    });
    $(".2").mouseover(function(){
        $(".t2").css({"opacity" : "0.5"});
        $(".tt2").css({"opacity" : "1"});
    });
    $(".2").mouseleave(function(){
        $(".t2").css({"opacity" : "0"});
        $(".tt2").css({"opacity" : "0"});
    });
     $(".3").mouseover(function(){
        $(".t3").css({"opacity" : "0.5"});
        $(".tt3").css({"opacity" : "1"});
    });
    $(".3").mouseleave(function(){
        $(".t3").css({"opacity" : "0"});
        $(".tt3").css({"opacity" : "0"});
    });
     $(".4").mouseover(function(){
        $(".t4").css({"opacity" : "0.5"});
        $(".tt4").css({"opacity" : "1"});
    });
    $(".4").mouseleave(function(){
        $(".t4").css({"opacity" : "0"});
        $(".tt4").css({"opacity" : "0"});
    });
    $(".5").mouseover(function(){
        $(".t5").css({"opacity" : "0.5"});
        $(".tt5").css({"opacity" : "1"});
    });
    $(".5").mouseleave(function(){
        $(".t5").css({"opacity" : "0"});
        $(".tt5").css({"opacity" : "0"});
    });
     $(".6").mouseover(function(){
        $(".t6").css({"opacity" : "0.5"});
        $(".tt6").css({"opacity" : "1"});
    });
    $(".6").mouseleave(function(){
        $(".t6").css({"opacity" : "0"});
        $(".tt6").css({"opacity" : "0"});
    });
    $(".7").mouseover(function(){
        $(".t7").css({"opacity" : "0.5"});
        $(".tt7").css({"opacity" : "1"});
    });
    $(".7").mouseleave(function(){
        $(".t7").css({"opacity" : "0"});
        $(".tt7").css({"opacity" : "0"});
    });
    $(".8").mouseover(function(){
        $(".t8").css({"opacity" : "0.5"});
        $(".tt8").css({"opacity" : "1"});
    });
    $(".8").mouseleave(function(){
        $(".t8").css({"opacity" : "0"});
        $(".tt8").css({"opacity" : "0"});
    });
     $(".9").mouseover(function(){
        $(".t9").css({"opacity" : "0.5"});
        $(".tt9").css({"opacity" : "1"});
    });
    $(".9").mouseleave(function(){
        $(".t9").css({"opacity" : "0"});
        $(".tt9").css({"opacity" : "0"});
    });
    $(".10").mouseover(function(){
        $(".t10").css({"opacity" : "0.5"});
        $(".tt10").css({"opacity" : "1"});
    });
    $(".10").mouseleave(function(){
        $(".t10").css({"opacity" : "0"});
        $(".tt10").css({"opacity" : "0"});
    });
    $(".11").mouseover(function(){
        $(".t11").css({"opacity" : "0.5"});
        $(".tt11").css({"opacity" : "1"});
    });
    $(".11").mouseleave(function(){
        $(".t11").css({"opacity" : "0"});
        $(".tt11").css({"opacity" : "0"});
    });
     $(".12").mouseover(function(){
        $(".t12").css({"opacity" : "0.5"});
        $(".tt12").css({"opacity" : "1"});
    });
    $(".12").mouseleave(function(){
        $(".t12").css({"opacity" : "0"});
        $(".tt12").css({"opacity" : "0"});
    });
     $(".13").mouseover(function(){
        $(".t13").css({"opacity" : "0.5"});
        $(".tt13").css({"opacity" : "1"});
    });
    $(".13").mouseleave(function(){
        $(".t13").css({"opacity" : "0"});
        $(".tt13").css({"opacity" : "0"});
    });
    $(".14").mouseover(function(){
        $(".t14").css({"opacity" : "0.5"});
        $(".tt14").css({"opacity" : "1"});
    });
    $(".14").mouseleave(function(){
        $(".t14").css({"opacity" : "0"});
        $(".tt14").css({"opacity" : "0"});
    });
    $(".15").mouseover(function(){
        $(".t15").css({"opacity" : "0.5"});
        $(".tt15").css({"opacity" : "1"});
    });
    $(".15").mouseleave(function(){
        $(".t15").css({"opacity" : "0"});
        $(".tt15").css({"opacity" : "0"});
    });
    $(".16").mouseover(function(){
        $(".t16").css({"opacity" : "0.5"});
        $(".tt16").css({"opacity" : "1"});
    });
    $(".16").mouseleave(function(){
        $(".t16").css({"opacity" : "0"});
        $(".tt16").css({"opacity" : "0"});
    });
});
$(document).mouseup(function (e)
{
    var container = $("#map_canvas");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $('#map_wrapper').css({'visibility':'hidden'});
    }
});
$(function() {

       $('.1').click(function() {
           $('#map_wrapper').css({'visibility':'visible'});
              $('#map_canvas').html("<h3>IIT BOMBAY</h3>Last year's hosts are looking to better their performance. With a strong shot at gold in womens' volleyball, cricket, football and athletics, the contingent will certainly put in their best and try to take home the crown of best sporting IIT. ");
       });
        $('.2').click(function() {
           $('#map_wrapper').css({'visibility':'visible'});
              $('#map_canvas').html("<h3>IIT MADRAS</h3>The Madras Sharks will be looking to give the contingent a head start after the aquatics meet, as they have invariably been doing for the last few years. After a lack luster performance at the 50th edition of the meet, the contingent is now fighting harder than ever to keep the trophy on home soil. In Madras, things are about to heat up, and a record 20th inter IIT title is on the cards. Favourites to win it at home? Maybe. Going for gold? Definitely.");
       });
         $('.3').click(function() {
           $('#map_wrapper').css({'visibility':'visible'});
              $('#map_canvas').html("<h3>IIT DELHI</h3>Volleyball, Badminton, Cricket and Football , all prospects for the Delhi contingent. Having a reputation for consistent performances, Delhi this time will be looking to win, and do so convincingly. Despite staunch opposition, spirits are high and a fight for the championship won't be through without seeing Delhi off.");
       });
          $('.4').click(function() {
           $('#map_wrapper').css({'visibility':'visible'});
              $('#map_canvas').html("<h3>IIT KANPUR</h3><p>With an exceptionally strong water polo team, Kanpur are looking to get their Championship conquests off to a good start. The undisputed stalwarts of athletics, Kanpur are also looking to take home golds in badminton and hockey.</p><br><p>With a sizable contingent, and 2 General Championships in the last 2 years, Kanpur remain favourites to keep the trophy for a 3rd time running.</p>");
       });
          $('.5').click(function() {
           $('#map_wrapper').css({'visibility':'visible'});
              $('#map_canvas').html("<h3>IIT KHARAGPUR</h3>The oldest established IIT, IIT Kharagpur boasts of a large and highly trained contingent. Cricket, Football, Girls' badminton and water polo are their strengths, and they are ever ready to expand their reaches and take home the championship. Year after year, Kharagpur comes close to lifting the championship, and this time, will be hoping to do so.");
       });
          $('.6').click(function() {
           $('#map_wrapper').css({'visibility':'visible'});
              $('#map_canvas').html("<h3>IIT GUWAHATI</h3>Hosts of the 49th inter IIT, and the oldest 'new' IIT has been unopposed for the last 3 years of women's table tennis. They also have good chances of bagging the gold in volleyball and girls' badminton. In search of their first championship, whether or not Guwahati can dethrone the ‘old IIT's' it a question that remains to be answered.");
       });
          $('.7').click(function() {
           $('#map_wrapper').css({'visibility':'visible'});
              $('#map_canvas').html("<h3>IIT ROORKEE</h3>IIT Roorkee have had a solid grip on girls' swimming events, football, squash and tennis over the last few editions of the sports meet. Narrowly missing out last year on the overall championship, the Roorkee contingent promises to bounce back and hit harder. Cricket, athletics, hockey and volleyball are other sports where Roorkee are poised to cause a few upsets.");
       });
          $('.8').click(function() {
           $('#map_wrapper').css({'visibility':'visible'});
              $('#map_canvas').html("<h3>IIT JODHPUR</h3>Table tennis champions Jodhpur are looking to keep the good times rolling by keeping the trophy with them this year as well. Apart from this, Jodhpur will be looking to bring everything they have to the 'table' - pun intended. One sport at a time, IIT Jodhpur is staring at the face of an era of domination.");
       });
          $('.9').click(function() {
           $('#map_wrapper').css({'visibility':'visible'});
              $('#map_canvas').html("<h3>IIT GANDHINAGAR</h3>A relatively small contingent, Gandhinagar will be looking to cause trouble in every sport that they participate in. With a contingent like this around, upsets can never be far away. Prepare to be surprised.");
       });
          $('.10').click(function() {
           $('#map_wrapper').css({'visibility':'visible'});
              $('#map_canvas').html("<h3>IIT HYDERABAD</h3>4th place finishers in football last year, Hyderabad are looking to improve their form, and make a big impact on the championship race. With renewed vigor, and oodles of talent, this contingent will take the game to their opponent. There's only one word on their minds. Win.");
       });
          $('.11').click(function() {
           $('#map_wrapper').css({'visibility':'visible'});
              $('#map_canvas').html("<h3>IIT BHUBHANESHWAR</h3>One of the newer IIT's, Bhubhaneshwar in it's search for it's first gold medal, will surely be looking to take one home this time. With a never say die attitude, and the willingness to fight till the last breath, the new kids on the block will be more ready than ever.");
       });
          $('.12').click(function() {
           $('#map_wrapper').css({'visibility':'visible'});
              $('#map_canvas').html("<h3>IIT BHU</h3>With an emerging presence in cricket and basketball, stiff competition awaits for those who must face IIT Varanasi. With a radical contingent, causing trouble for those who underestimate comes naturally. I wouldn't be surprise if this contingent took home a few golds this year. You were warned.");
       });
          $('.13').click(function() {
           $('#map_wrapper').css({'visibility':'visible'});
              $('#map_canvas').html("<h3>IIT PATNA</h3>After a commendable performance in the 50th inter IIT sports meet, IIT Patna will be looking to give their opponents a run for their money. With a fresh start and new hope, this is one contingent to be paid heed to.");
       });
          $('.14').click(function() {
           $('#map_wrapper').css({'visibility':'visible'});
              $('#map_canvas').html("<h3>IIT RORPAR</h3>Fierce competitors, IIT Ropar are hoping to take down the big guns this year. With preparations in full swing and spirits at an all time high, the Ropar contingent will be one to ruffle feathers, raise eyebrows and bruise egos.");
       });
          $('.15').click(function() {
           $('#map_wrapper').css({'visibility':'visible'});
              $('#map_canvas').html("<h3>IIT MANDI</h3>A wild card, in the sense that we don't know what to expect from them, the Mandi contingent will definitely be turning heads this year.  After a good stint in girls' table tennis, a good performance this year seems all the more likely. The underdogs this year will try their best to leave a mark.");
       });
          $('.16').click(function() {
           $('#map_wrapper').css({'visibility':'visible'});
              $('#map_canvas').html("<h3>IIT INDORE</h3>Recent entrants Indore are now accustomed to participating at the sports meet. With experience now under their belt, the opportunity to take things by storm now lies in their wake. Will IIT Indore take the championship this year? Will they excel at 'indoor' sports? All jokes apart, only time will tell, but what is sure is that Indore will not go down without a fight.");
       });
       $('#close').click(function() {
           $('#map_wrapper').css({'visibility':'hidden'});
       });
});
