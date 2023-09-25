const nodemailer = require('nodemailer');

// Hàm gửi email đặt lại mật khẩu
function sendPasswordResetEmail(userEmail, resetCode) {
  // Tạo một transporter sử dụng thông tin cấu hình email
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  // Cấu hình các thông tin email
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: userEmail,
    subject: 'Yêu cầu đặt lại mật khẩu',
    text: `Mã đặt lại mật khẩu của bạn là: ${resetCode}`,
  };

  // Gửi email
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email gửi thành công: ' + info.response);
    }
  });
}

// Gọi hàm sendPasswordResetEmail để gửi email đặt lại mật khẩu
const userEmail = 'user@example.com'; // Địa chỉ email của người dùng
const resetCode = '123456'; // Mã đặt lại mật khẩu
sendPasswordResetEmail(userEmail, resetCode);