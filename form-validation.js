function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  if (userEntered.length >= 6 && !userEntered.includes(" ")) {
    document.getElementById("usernameGroup").classList.add("has-success");
  }

  else {
  //Show message that there is an error with the username...
  if (userEntered.length == "") {
    document.getElementById("usernameError").innerHTML=
    "You must enter a Username.";
  }
  else if (userEntered.length < 6) {
    document.getElementById("usernameError").innerHTML=
    "Username must be greater than or equal to 6 characters.";
  }
  else if (userEntered.includes(" ")) {
    document.getElementById("usernameError").innerHTML=
    "Username cannot contain a space(s).";
  }
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
  }

if (passEntered != "password" && passEntered != "Password" &&
passEntered != userEntered && passEntered.length >= 6 &&
passEntered.length <= 20) {
  document.getElementById("passwordGroup").classList.add("has-success");
}

else {
  //Show message that there is an error with the password...
  if (passEntered == "") {
    document.getElementById("passwordError").innerHTML=
    "You must enter a Password.";
  }
  else if (passEntered == "password" || passEntered == "Password") {
    document.getElementById("passwordError").innerHTML=
    "Password cannot be 'password' or 'Password'.";
  }
  else if (passEntered == userEntered) {
    document.getElementById("passwordError").innerHTML=
    "Password cannot be the same as the Username.";
  }
  else if (passEntered.length < 6 || passEntered.length > 20) {
    document.getElementById("passwordError").innerHTML=
    "Password must be greater than or equal to 6 characters and less than or equal to 20 characters.";
  }
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
  }
}
