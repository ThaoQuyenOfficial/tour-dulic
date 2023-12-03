// Lắng nghe sự kiện submit của form
var formElement = document.querySelector('form');
formElement.addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    // Lấy thông tin khách hàng từ các trường input
    var nameInput = document.getElementById('name');
    var phoneInput = document.getElementById('phone');
    var customerName = nameInput.value;
    var phoneNumber = phoneInput.value;

    // Lấy thông tin tour du lịch từ các phần tử HTML
    var tourImage = document.querySelector('.table tbody tr td img').src;
    var tourName = document.querySelector('.table tbody tr td:nth-child(3)').textContent;
    var tourDeparture = document.querySelector('.table tbody tr td:nth-child(4)').textContent;
    var tourTransportation = document.querySelector('.table tbody tr td:nth-child(5)').textContent;
    var tourDuration = document.querySelector('.table tbody tr td:nth-child(6)').textContent;
    var tourStartingPoint = document.querySelector('.table tbody tr td:nth-child(7)').textContent;
    var tourPrice = document.querySelector('.table tbody tr td:nth-child(8)').textContent;

    // Tạo thông báo thành công
    var successMessage = 'Thanh toán thành công!\n\n';
    successMessage += 'Thông tin khách hàng:\n';
    successMessage += 'Tên khách hàng: ' + customerName + '\n';
    successMessage += 'Số điện thoại: ' + phoneNumber + '\n\n';
    successMessage += 'Thông tin tour du lịch:\n';
    successMessage += 'Hình ảnh: ' + tourImage + '\n';
    successMessage += 'Tên tour: ' + tourName + '\n';
    successMessage += 'Khởi hành: ' + tourDeparture + '\n';
    successMessage += 'Phương tiện: ' + tourTransportation + '\n';
    successMessage += 'Thời lượng: ' + tourDuration + '\n';
    successMessage += 'Xuất phát: ' + tourStartingPoint + '\n';
    successMessage += 'Giá tour: ' + tourPrice;

    // Hiển thị thông báo thành công
    alert(successMessage);
});