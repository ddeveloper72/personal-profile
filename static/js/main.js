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
