let modalNewsletter = document.getElementById("modal2");

let newsletterButton = document.getElementById("newsletterButton");

let closeNewsletter = document.getElementsByClassName("close-form")[0];

newsletterButton.onclick = function() {
    modalNewsletter.style.display = "block";
}

closeNewsletter.onclick = function() {
    modalNewsletter.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal2) {
      modalNewsletter.style.display = "none";
    }
  }