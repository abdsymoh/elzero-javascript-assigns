let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let jobTitle = document.getElementById("jobTitle");
let option = document.querySelectorAll("select option");

if (window.sessionStorage.getItem("firstName")) {
  firstName.value = window.sessionStorage.getItem("firstName");
  lastName.value = window.sessionStorage.getItem("lastName");
  email.value = window.sessionStorage.getItem("email");
  jobTitle.value = window.sessionStorage.getItem("jobTitle");
}

// add the inputs values to session storage
// firstName
firstName.onchange = function () {
  window.sessionStorage.setItem("firstName", firstName.value);
  firstName.value = window.sessionStorage.getItem("firstName");
};
// lastName
lastName.onchange = function () {
  window.sessionStorage.setItem("lastName", lastName.value);
  lastName.value = window.sessionStorage.getItem("lastName");
};
// email
email.onchange = function () {
  window.sessionStorage.setItem("email", email.value);
  email.value = window.sessionStorage.getItem("email");
};
// jobTitle
jobTitle.onchange = function () {
  window.sessionStorage.setItem("jobTitle", jobTitle.value);
  jobTitle.value = window.sessionStorage.getItem("jobTitle");
};
