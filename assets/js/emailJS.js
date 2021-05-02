window.addEventListener('load', () => {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('gmail', 'lh-roadtrip', this)
            .then(function() {
                alert('Your form has been sent to the LH Road Trip team!')
            }, function(error) {
                console.log('FAILED...', error);
            });

        document.getElementById('contactForm').reset(); 
    });
});