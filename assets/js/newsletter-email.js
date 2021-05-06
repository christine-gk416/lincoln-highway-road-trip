window.addEventListener("load", () => { 
    document.getElementById("newsletterForm").addEventListener("submit", function(event) {
        event.preventDefault();

        emailjs.sendForm("gmail", "newsletter", this)
        .then(function() {
            swal("Hey Road Tripper!", "You've signed up for our newsletter, so we'll send you updates on LH events", "success", {
            button: "Thank you!",
            });
            }, function(error) {
                console.log("FAILED...", error);
            });

        document.getElementById("newsletterForm").reset();     
    });
});