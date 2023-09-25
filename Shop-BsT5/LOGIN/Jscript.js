const loginForm = document.querySelector('#login-form');
const registerForm = document.querySelector('#register-form');
const registerBtn = document.querySelector('#register-btn');
const loginBtn = document.querySelector('#login-btn');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmpassword');
const errorUsername = document.querySelector('#er-name');
const errorPassword = document.querySelector('#er-pw');
const errorConfirmPassword = document.querySelector('#er-cpw');

//hide/show register
const showLoginForm = () => {
  loginForm.classList.remove('hiden');
  registerForm.classList.add('hiden');
  registerForm.classList.remove('right');
}

const showRegisterForm = () => {
  loginForm.classList.add('hiden');
  registerForm.classList.remove('hiden');
  registerForm.classList.add('right');
}

loginBtn.addEventListener('click', showLoginForm);
registerBtn.addEventListener('click', showRegisterForm);


//Hide/show password
var pass_text = document.querySelector('.password');
var pass_icon = document.querySelector('.icon');
pass_icon.addEventListener('click', () => {
    if (pass_text.type == 'password') {
        pass_text.type = 'text';
        pass_icon.setAttribute('name', 'eye-outline');
    }
    else {
        pass_text.type = 'password';
        pass_icon.setAttribute('name', 'eye-off-outline');
    }
});

//form register
registerForm.addEventListener('submit', function(event){
    event.preventDefault();
    const usernameValue = username.value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    //KT username
    if(!usernameValue){
        errorUsername.innerText = "Vui lòng nhập tên đăng nhập";
    } else{
        errorUsername.innerText = "";
    }

    //KT password
    if (!passwordValue) {
        errorPassword.innerText = "Vui lòng nhập mật khẩu";
    } else if (passwordValue.length < 8) {
        errorPassword.innerText = "Mật khẩu phải có ít nhất có 8 kí tự";
    } else if (passwordValue.includes('?')) {
        errorPassword.innerText = "Mật khẩu không được chứa kí tự ?";
    } else {
        errorPassword.innerText = "";
    }

    //KT confirm password
    if (!confirmPasswordValue) {
        errorConfirmPassword.innerText = "Vui lòng nhập lại mật khẩu";
    } else if (confirmPasswordValue !== passwordValue) {
        errorConfirmPassword.innerText = "Mật khẩu không khớp";
    } else {
        errorConfirmPassword.innerText = "";
    }

    //Thông báo đăng kí thành công
    if (!errorUsername.innerText && !errorPassword.innerText && !errorConfirmPassword.innerText) {
        alert("Đăng ký thành công!");
        registerForm.submit();
    }
})
