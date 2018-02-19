$(function(){
  // TODO fix hamburger menu
  $(".navbar-burger").click(function(){
    $(".navbar-burger").toggleClass("is-active");
    $("#navMenu").toggleClass("is-hidden-touch");
    $("#logo").toggleClass("is-hidden-touch");
  });
});
