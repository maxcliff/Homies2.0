$(function(){

  // PP and BTC icons
  $(".icon").click(function(){
    alert("Sorry we currently do not support this feature!");
  });

  // Navbar
  $(".navbar-burger").click(function(){
    $(".navbar-burger").toggleClass("is-active");
    $("#navMenu").toggleClass("is-hidden-touch");
    $("#logo").toggleClass("is-hidden-touch");
  });
});
