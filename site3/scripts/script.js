$(document).ready(function(){
  let owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    dots: true,
     
});
});

let openButton = document.getElementById("menu");
let closeButton = document.getElementById("close");
let rhtSide = document.getElementById("rhtSide");
openButton.onclick = function(){
    rhtSide.style.width = "400px";
  }
closeButton.onclick = function() {
  rhtSide.style.width = "0";
}



