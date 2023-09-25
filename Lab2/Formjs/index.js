//
let pass_text = document.querySelector('.password');
let pass_icon=document.querySelector('.icon');
    pass_icon.addEventListener('click',()=>{
        if(pass_text.type=='password'){
            pass_text.type='text';
            pass_icon.setAttribute('name','eye-outline');
        }
        else{
            pass_text.type='password';
            pass_icon.setAttribute('name','eye-off-outline');
        }
    })


//

const form = document.querySelector('.login-form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
form.addEventListener('submit', (event) => {
	event.preventDefault();

	// Perform validation
	if (username.value === '' || password.value === '') {
		alert('Vui lòng nhập tên đăng nhập và mật khẩu của bạn!');
	} else if (username.value === 'admin' && password.value === 'password') {
		alert('Đăng nhập thành công!.');
	} else {
		alert('Tên đăng nhập hoặc mật khẩu không chính xác!.');
	}
});