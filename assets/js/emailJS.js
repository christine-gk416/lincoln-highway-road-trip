function sendMail(contactForm) {
    emailjs.send ("service_bmmh32m", "template_n85a6ph", {
    "from_name": contactForm.name.value,
    "from_email": contactForm.email.value,
    "project_enquiry": contactForm.project-enquiry.value,
    })

    .then(
        function(response) {
            console.log("SUCCESS", response)
        },
        function(error) {
            console.log("FAILED", error)
        }
    )
}