function validate() {
    var validatefName= document.forms["signForm"]["fname"].value;
    var validatelName= document.forms["signForm"]["lname"].value;
    var validateEmail= document.forms["signForm"]["email"].value;
    var validatePassword=document.forms["signForm"]["password"].value;
    if ( validatefName === "") {
      alert("First Name must be filled out");
      return false;
    }
    if ( validatelName === "") {
        alert("last Name must be filled out");
        return false;
      }
      if ( validateEmail === "") {
        alert("Email must be filled out");
        return false;
      }
      if ( validatePassword === "") {
        alert("Email must be filled out");
        return false;
      }
    
  }