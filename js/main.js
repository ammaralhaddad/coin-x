// Initiate the wowjs
new WOW().init();

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

$("#bar-1").animate({ 
  width: "99%", 
}, 2500); 

$("#bar-2").animate({ 
  width: "96%", 
}, 2500); 

$("#bar-3").animate({ 
  width: "97%", 
}, 2500); 

