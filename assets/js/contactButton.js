let modal = document.getElementById("modal");

let formBtn = document.getElementById("form-btn");

let close = document.getElementsByClassName("close-form")[1];

formBtn.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }