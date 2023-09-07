$(".news1").on("click",function(){
    $(".selected_news1").show();
});
$(".hide1").on("click",function(){
    $(".selected_news1").hide();
  });

$(".news2").on("click",function(){
    $(".selected_news2").fadeToggle();
});
$(".hide2").on("click",function(){
    $(".selected_news2").hide();
  });
   /*Pagination Script*/
  $(".p1").on("click",function(){
    ;
  $("#page1").show();
  $("#page2").hide();
  $("#page3").hide();
});
$(".p2").on("click",function(){
  
 
  $("#page2").fadeToggle();
  $("#page1").hide();
  $("#page3").hide();
});
$(".p3").on("click",function(){
  
 
  $("#page3").fadeToggle();
  $("#page1").hide();
  $("#page2").hide();
});


