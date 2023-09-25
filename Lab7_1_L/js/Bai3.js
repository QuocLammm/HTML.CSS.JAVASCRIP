$(document).ready(function() {
  $('form').submit(function(event) {
    // Lấy giá trị của số điện thoại và email
    var phone = $('#phone').val();
    var email = $('#email').val();

    // Biểu thức chính quy để kiểm tra số điện thoại
    var phone_regex = /^[0-9]{10}$/;

    // Biểu thức chính quy để kiểm tra email
    var email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Kiểm tra số điện thoại và email
    if (!phone_regex.test(phone)) {
      alert('Số điện thoại không hợp lệ.');
      event.preventDefault();
    }

    if (!email_regex.test(email)) {
      alert('Email không hợp lệ.');
      event.preventDefault();
    }
  });
});
