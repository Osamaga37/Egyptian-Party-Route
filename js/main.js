$(document).ready(function () {
  $("aside #hide").on("click", function () {
    $(".sidebar").hide(1000);
    $("#show").animate({left: "0px"}, 1000);
  });
  $("aside #show").on("click", function () {
    $(".sidebar").show(1000);
    $("#show").animate({left: "185px"}, 1000);
  });

  $("aside span").on("click", function(e) {
    let currentColor = $(e.target).css("backgroundColor");
    $("h1,h2,h3,p,div").css("color", currentColor);
  })

  $(".item h3").on("click", function (e) {
    $(".item div").not($(e.target).next()).slideUp(1000);
    $(e.target).next().slideToggle(1000);
  });

  $("#txt").on("input", function(){
    let maxLength = $(this).attr("maxlength");
    let currentLength = $(this).val().length;
    let counter = maxLength - currentLength;
    $("#counter").html(counter);
  })
});





function countdown(startDate) {
  let d, h,m, s;
  startDate = new Date(startDate).getTime();

  if (isNaN(startDate)){
    return;
  }

  setInterval(function(){
    let today = new Date().getTime();
    let timeDown = parseInt((startDate - today) / 1000);

    if (timeDown >= 0){
      d = parseInt(timeDown / 86400);
      timeDown = (timeDown % 86400);

      h = parseInt(timeDown / 3600);
      timeDown = (timeDown % 3600);

      m = parseInt(timeDown / 60);
      s = parseInt(timeDown % 60);

      $("#days").html(parseInt(d, 10));
      $("#hours").html(("0"+ h).slice(-2));
      $("#minutes").html(("0"+ m).slice(-2));
      $("#seconds").html(("0"+ s).slice(-2));
    } 
  })
};

countdown("July 30, 2024 00:00:00");


