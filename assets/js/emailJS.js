window.addEventListener('load', () => {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('gmail', 'lh-roadtrip', this)
            .then(function() {
                swal("Hey Road Tripper!", "We've recieved your message and will be back in touch soon", "success", {
                    button: "Thank you!",
                  });
            }, function(error) {
                console.log('FAILED...', error);
            });

        document.getElementById('contactForm').reset(); 
    });
});