const mp = require('mercadopago');
mp.configurations.setAccessToken(process.env.ACCESS_TOKEN_DEV);

exports.processPayment = (req, res) => {
    console.log(req.body);
    let paymentData = req.body;

    mp.payment.create(paymentData).then((data) => {
        res.status(200).json({ message: data });
    });
};
