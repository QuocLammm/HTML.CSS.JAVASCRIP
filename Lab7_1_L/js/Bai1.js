$(document).ready(function() {
    // Xác định tab được chọn mặc định
    $('.tab-nav li:first').addClass('active');
    $('.tab-content:first').addClass('active');
  
    // Xử lý khi click vào tab
    $('.tab-nav li').click(function() {
      var tab_id = $(this).find('a').attr('href');
  
      // Ẩn tab-content hiện tại và tab-nav active hiện tại
      $('.tab-nav li').removeClass('active');
      $('.tab-content').removeClass('active');
  
      // Hiển thị tab-content mới và tab-nav được click active
      $(this).addClass('active');
      $(tab_id).addClass('active');
      $('tab li:first-child');
    });
  });