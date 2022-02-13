let slideIndex = 1;
showSlides();

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n );
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n < 1) {slideIndex = slides.length}
  if(n > slides.length) {slideIndex = 1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active" , "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// card animation
window.onscroll = function() {scrollFunction()};

let card = document.getElementsByClassName("card-animation");
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    for (i = 0; i < card.length; i++) {
      card[i].classList.add("animation");
    }
  } 
}




// Get the modal contact 
let clicMessage = document.getElementById('contact');
let formMessage = document.getElementById("form-message");
let closeMessage = document.getElementById("close");

clicMessage.onclick = function(){
  formMessage.style.display='block';
}

closeMessage.onclick = function(){
  formMessage.style.display = "none";
}
