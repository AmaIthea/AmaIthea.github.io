

let isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function() {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}



document.addEventListener("DOMContentLoaded", scrolling, false);
 
    let contentAboutMe = document.querySelector("#contentAboutMe");
    let contentProjects = document.querySelector("#contentProjects");
    let contentDesign = document.querySelector("#contentDesign");

    let post1 = document.querySelector("#post1");
    let post2 = document.querySelector("#post2");
    let post3 = document.querySelector("#post3");


    function scrolling(e) {
 
      if (isPartiallyVisible(contentAboutMe)) {
        document.body.classList.remove("black");
        document.body.classList.remove("blue");
        document.body.classList.add("white");
        post1.classList.remove("postBlack");
        post2.classList.remove("postBlack");
        post3.classList.remove("postBlack");
        post1.classList.remove("postBlue");
        post2.classList.remove("postBlue");
        post3.classList.remove("postBlue");
      } 
      else {
        post1.classList.add("postBlack");
        post2.classList.add("postBlack");
        post3.classList.add("postBlack");
        post1.classList.remove("postBlue");
        post2.classList.remove("postBlue");
        post3.classList.remove("postBlue");
        document.body.classList.remove("white");
        document.body.classList.add("black");
      }
      if (isPartiallyVisible(contentDesign)) {
        document.body.classList.remove("black");
        document.body.classList.remove("white");
        document.body.classList.add("blue");  
        post1.classList.remove("postBlack");
        post2.classList.remove("postBlack");
        post3.classList.remove("postBlack");
        post1.classList.add("postBlue");
        post2.classList.add("postBlue");
        post3.classList.add("postBlue");
      }
      else {
        post1.classList.add("postBlack");
        post2.classList.add("postBlack");
        document.body.classList.remove("white");
        document.body.classList.remove("blue");
      }
    }




    function isPartiallyVisible(el) {
      let elementBoundary = el.getBoundingClientRect();
 
      let top = elementBoundary.top;
      let bottom = elementBoundary.bottom;
      let height = elementBoundary.height;
 
      return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }
 
    function isFullyVisible(el) {
      let elementBoundary = el.getBoundingClientRect();
 
      let top = elementBoundary.top;
      let bottom = elementBoundary.bottom;
 
      return ((top >= 0) && (bottom <= window.innerHeight));
    }