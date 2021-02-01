var inputEmail = "bonjour@gmail.com";
var inputPassword = "12345678";
var classNameDefault = "form-control is-invalid";
var classADD = "form-control is-valid";
var classEmail = "form-control is-invalid";
var classPassword = "form-control is-invalid";

function emailCheck() {
  if (inputEmail.length > 10) {
    console.log("mon email est bon !", inputEmail);
    console.log("alors on change sa classe");
    return true;
  } else {
    console.log("mon email est pas bon", inputEmail);
    console.log("la classe de mon email ne change pas 'rouge'");
    return false;
  }
}

function passwordCheck() {
  if (inputPassword.length >= 8) {
    console.log("mon mdp est bon !", inputPassword);
    return true;
  } else {
    console.log("mon mdp est pas bon", inputPassword);
    console.log("la classe de mon mdp ne change pas 'rouge'");
    return false;
  }
}

function check() {
  if (emailCheck() && passwordCheck()) {
    console.log("tous est bon");
    console.log("mon bouton est 'enabled'");
  } else {
    console.log("mon bouton est 'disabled'");
  }
}

check();
