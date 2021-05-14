// Load JS for EmailJS 

window.addEventListener("load", () => {

    // Actions to take when the contact form is submitted

    document.getElementById("contactForm").addEventListener("submit", function (event) {

        // If the event does not get explicitly handled, default action not taken

        event.preventDefault();

        // Send form information to the correct account and using the correct template and default email service

        emailjs.sendForm("gmail", "lh-roadtrip", this)

            // Show Sweet Alert pop-up and post-submit message

            .then(function () {
                swal("Hey Road Tripper!", "We've recieved your message and will be back in touch soon", "success", {
                    button: "Thank you!",
                });

                // Show a console error if form doesn't submit properly

            }, function (error) {
                console.log("FAILED...", error);
            });

        // Reset form after submission   

        document.getElementById("contactForm").reset();
    });
});