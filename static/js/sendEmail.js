function sendMail(contactForm) {
    emailjs.send("gmail", "online_profile", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "from_phone_number": contactForm.phone.value,
        "information_request": contactForm.message.value
    })
    
    .then(
        function(response) {
            
            console.log("SUCCESS", response);
      },
        function(error) {
            
            console.log("FAILED", error);
        }
    );
    return false;
}

