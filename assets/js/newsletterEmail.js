window.onload = function() {
    document.getElementById('newsletterForm').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('gmail', 'newsletter', this)
            .then(function() {
                alert('Thanks for subscribing to our newsletter!')
            }, function(error) {
                console.log('FAILED...', error);
            });
    });

}