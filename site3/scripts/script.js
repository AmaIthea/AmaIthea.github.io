$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        speed: 0,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
});
let openButton = document.getElementById("menu");
let closeButton = document.getElementById("close");
openButton.onclick = function(){
    document.getElementById("rhtSide").style.width = "400px";
  }
closeButton.onclick = function() {
  document.getElementById("rhtSide").style.width = "0";
}



