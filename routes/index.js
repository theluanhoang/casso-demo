var express = require('express');
var router = express.Router();
//Router này sẽ là webhook nhận thông tin giao dịch từ casso gọi qua được bảo mật bằng secure_token trong header
router.route('/webhook/handler-bank-transfer')
    .post(async (req, res, next) => {
        if (!req.header('secure-token') || req.header('secure-token') != "R5G4cbnN7uSAwfTd") {
            console.log('error: ', 'Missing secure-token or wrong secure-token');
            return res.status(401).json({
                code: 401,
                message: 'Missing secure-token or wrong secure-token'
            })
        }

        console.log('req.data: ', req.body.data);
        // B2: Thực hiện lấy thông tin giao dịch 
        for (let item of req.body.data) {
            // Lấy thông orderId từ nội dung giao dịch
            let orderId = webhookUtil.parseOrderId(case_insensitive, transaction_prefix, item.description);
            // Nếu không có orderId phù hợp từ nội dung ra next giao dịch tiếp theo
            if (!orderId) continue;
            // Kiểm tra giao dịch còn hạn hay không? Nếu không qua giao dịch tiếp theo
            if ((((new Date()).getTime() - (new Date(item.when)).getTime()) / 86400000) >= expiration_date) continue;

            console.log(orderId);
            // Bước quan trọng đây.
            // Sau khi có orderId Thì thực hiện thay đổi các trang thái giao dịch
            // Ví dụ như kiểm tra orderId có tồn tại trong danh sách các đơn hàng của bạn?
            // Sau đó cập nhật trạng thái theo orderId và amount nhận được: đủ hay thiếu tiền...
            // Và một số chức năng khác có thể tùy biến
        }
        return res.status(200).json({
            code: 200,
            message: 'success',
            data: null
        })
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

router.route('/')
    .get(async (req, res, next) => {
        res.status(200).json({ message: "Hello world" })
    })

module.exports = router;