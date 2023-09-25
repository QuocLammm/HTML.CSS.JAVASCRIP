// Login form
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  // TODO: Perform login validation
});

// Registration form
const registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = registrationForm.username.value;
  const email = registrationForm.email.value;
  const password = registrationForm.password.value;
  // TODO: Perform registration validation
  // TODO: Submit registration form data to server
});

