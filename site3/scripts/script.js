$(document).ready(function(){
  let owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateIn: 'animate__fadeIn',
    animateOut: 'animate__fadeOut'
});
$('.sidetwo__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplayTimeout: 4000,
});
});

let openButton = document.getElementById("menu");
let closeButton = document.getElementById("close");
let rhtSide = document.getElementById("rhtSide");

openButton.onclick = function(){
  if(document.documentElement.clientWidth > 500){
    rhtSide.style.width = "400px";} 
    else{rhtSide.style.width = "100%";}
    
  }
closeButton.onclick = function() {
  rhtSide.style.width = "0";
}
let openButton2 = document.getElementById("openButton");
let openButton3 = document.getElementById("openButton-mobile")
let closeButton2 = document.getElementById("close2");
let leftSide = document.getElementById("leftSide");

openButton2.onclick = function(){
  leftSide.style.width = "800px";
}
openButton3.onclick = function(){
  leftSide.style.width = "100%";
}
closeButton2.onclick = function() {
leftSide.style.width = "0";
}



