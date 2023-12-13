var express = require('express');
var router = express.Router();
//Router này sẽ là webhook nhận thông tin giao dịch từ casso gọi qua được bảo mật bằng secure_token trong header
router.route('/webhook/handler-bank-transfer')
    .post(async (req, res, next) => {
        res.status(200).json({ message: "Hello world" })
    })
// Router này sẽ thực hiện tính năng đồng bộ giao dịch tức thì.
// Ví dụ: Khi người dùng chuyển khoản cho bạn và họ ấn nút tôi đã thanh toán thì nên xử lí gọi qua casso đề đồng bộ giao dịch vừa chuyển khoản
router.route('/users-paid')
    .post(async (req, res, next) => {
        res.status(200).json({ message: "Hello world" })
    })
// Route này sẽ thực hiện đăng kí webhook dựa vào API KEY và lấy thông tin về business và banks
router.route('/register-webhook')
    .post(async (req, res, next) => {
        res.status(200).json({ message: "Hello world" })
    })

module.exports = router;