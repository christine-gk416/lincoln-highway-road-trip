// Load JS for EmailJS 

window.addEventListener("load", () => {

    // Actions to take when the contact form is submitted

    document.getElementById("newsletterForm").addEventListener("submit", function (event) {

        // If the event does not get explicitly handled, default action not taken

        event.preventDefault();

        // Send form information to the correct account and using the correct template and default email service

        emailjs.sendForm("gmail", "newsletter", this)
            .then(function () {

                // Show Sweet Alert pop-up and post-submit message

                swal("Hey Road Tripper!", "You've signed up for our newsletter, so we'll send you updates on LH events", "success", {
                    button: "Thank you!",
                });

                // Show a console error if form doesn't submit properly

            }, function (error) {
                console.log("FAILED...", error);
            });

        // Reset form after submission      

        document.getElementById("newsletterForm").reset();
    });
});