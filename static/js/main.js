/* Sourced from https://stackoverflow.com/questions/11633726/phone-mask-with-jquery-and-masked-input-plugin */

$('#phone').mask("(999) 999-9999");

$("#phone").on("blur", function() {
  var last = $(this).val().substr( $(this).val().indexOf("-") + 1 );

  if( last.length == 4 ) {
      var move = $(this).val().substr( $(this).val().indexOf("-") - 1, 1 );
      var lastFour = move + last;
      var first = $(this).val().substr( 0, 9 );

      $(this).val( first + '-' + lastFour );
  }
});


/* Sourced & adapted from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript */
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var $result = $("#result");
  var email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text(email + " is valid :)");
    $result.css("color", "green");
  } else {
    $result.text("Please use a valid email address :(");
    $result.css("color", "red");
  }
  return false;
}

$("#sendMessageButton").on("click", validate);