(function(){
   emailjs.init("user_MlMdk5SWptu2RtsNn6Osk");
   })();
  

function sendMail() {

    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let enquiry = document.getElementById("enquiry").value;

    var contactParams = {
    from_name: fullName,
    from_email: userEmail,
    enquiry: enquiry,
    };

    emailjs.send ("gmail", "lh-roadtrip", contactParams).then(function (res) {})

}