function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  function validate() {
    const $result = $("#result");
    const email = $("#email").val();
    $result.text("");
  
    if (validateEmail(email)) {
      $result.text(email + " is valid");
      $result.css("color", "green");
    } else {
      $result.text("Please provide a valid email");
      $result.css("color", "hsl(0, 93%, 68%)");
      $('#email').css('border', 'hsl(0, 93%, 68%) solid 3px')
      $('#validate').removeClass('good');
      $('#validate').addClass('error');
      $('#email').addClass('error-img')

      setTimeout(function(){
        $result.text("");
        $('#email').removeClass('error-img');
        $('#validate').removeClass('error');
        $('#validate').addClass('good');
        $('#email').css('border', 'hsl(0, 6%, 24%) solid 1px')
      }, 4000)
    }
    return false;
  }
  
  $("#validate").on("click", validate);