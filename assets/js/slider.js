// Note: much of the code for this slideshow comes directly from the W3 schools guide cited in my ReadMe for this feature

let slideIndex = 1;
showSlides(slideIndex);

// Next/Previous Controls

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail Image Controls

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Start with the first slide image, then go through each image when controls or dots are clicked on

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}