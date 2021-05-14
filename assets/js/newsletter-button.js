// Get modal by Id

let modalNewsletter = document.getElementById("modal2");

// Get the button that pops out the modal and newsletter form

let newsletterButton = document.getElementById("newsletterButton");

// Get the <span> element that closes the modal

let closeNewsletter = document.getElementById("close-form2");

// Newsletter form and modal open when button is clicked on 

newsletterButton.onclick = function () {
  modalNewsletter.style.display = "block";
};

// Newsletter form and modal close when <span> element is clicked on

closeNewsletter.onclick = function () {
  modalNewsletter.style.display = "none";
};

// Newsletter form closes if anywhere outside the form is clicked

window.onclick = function (event) {
  if (event.target == modalNewsletter) {
    modalNewsletter.style.display = "none";
  }
};