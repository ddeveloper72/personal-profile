function sendMail(contactForm) {
    emailjs.send("gmail", "online_profile", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "from_phone_number": contactForm.phone.value,
        "information_request": contactForm.message.value
    })
    
    .then(
        function(response) {
            alert('Your mail is sent!')

            console.log("SUCCESS", response);
      },
        function(error) {
            alert('Oops... ' + JSON.stringify(error));
            console.log("FAILED", error);
        }
    );
    document.getElementById("contactForm").reset();
    return false;
}

/* $("#contactForm").on("submit", function(event) {
    event.preventDefault(); // prevent reload
    
    var formData = new FormData(this);
    formData.append('service_id', 'gmail');
    formData.append('template_id', 'online_profile');
    formData.append('user_id', 'user_otJXtwN3f0lIaupelyNZO');
    formData.append('from_name', contactForm.name.value);
    formData.append('from_email', contactForm.email.value);
    formData.append('from_phone_number', contactForm.phone.value);
    formData.append('information_request', contactForm.message.value);
 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        alert('Your mail is sent!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
}); */








