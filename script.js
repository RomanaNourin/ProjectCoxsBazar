$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 70){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        // if(this.scroll > 500){
        //     $('.scroll-up-btn').addClass("show");
        // }
        // else{
        //     $('.scroll-up-btn').removeClass("show");
        // }
    });

    // slide-up-script
    // $('.scroll-up-btn').click(function(){
    //     $('html').animate({scrollTop: 0});
    // });

    // toggole menu/navbar
     $('.menu-btn').click(function(){
         $('.navbar .menu').toggleClass("active");
         $('.menu-btn i').toggleClass("active");
    });
    window.addEventListener('scroll', reveal);
    function reveal(){
        var reveals = document.querySelectorAll('.reveal');
        for(var i=0;i<reveals.length;i++){
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if(revealtop < windowheight - revealpoint){
                reveals[i].classList.add('active');
            }
            else{
                reveals[i].classList.remove('active');
            }
        }
    }
    const sr = reveal({
        distance: '100px',
        duration: 3800,
    });
    /*sr.reveal(`.home-text`,{
        origin: 'bottom',
        interval: 100,
    });*/
    // var swiper = new Swiper(".swiper-container", {
    //     effect: "coverflow",
    //     grabCursor: true,
    //     centeredSlides: true,
    //     slidesPerView: "auto",
    //     loop: true,
    //     spaceBetween: 32,
    //     coverflowEffect: {
    //       rotate: 0,
    //     },
    //     pagination: {
    //       el: ".swiper-pagination",
    //     },
    //   });
});
const tabs = document.querySelectorAll(".wrapper nav label");
    tabs.forEach((tab) => {
        tab.addEventListener("click",() => {
            // To remove acive class from previous tab
            tabs.forEach(tab => tab.classList.remove("acti"));
            tab.classList.add("acti");

            //To show content according to tab selected
            // contents[index].classList.add("act");
    });
 });
//  var slides=document.querySelector('.slider-items').children;
//  var nextSlide=document.querySelector(".right-slide");
// var prevSlide=document.querySelector(".left-slide");
// var totalSlides=slides.length;
// var index=0;

// nextSlide.onclick=function () {
//      next("next");
// }
// prevSlide.onclick=function () {
//      next("prev");
// }

// function next(direction){

//    if(direction=="next"){
//       index++;
//        if(index==totalSlides){
//         index=0;
//        }
//    } 
//    else{
//            if(index==0){
//             index=totalSlides-1;
//            }
//            else{
//             index--;
//            }
//     }

//   for(i=0;i<slides.length;i++){
//           slides[i].classList.remove("active");
//   }
//   slides[index].classList.add("active");     

// }
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// btn
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

