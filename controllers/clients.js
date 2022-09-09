const mp = require('mercadopago');
mp.configurations.setAccessToken(process.env.ACCESS_TOKEN_PRD);

exports.createClient = (req, res) => {
    try {
        let customerData = {
            email: 'joogui2010@hotmail.com'
        };

        mp.customers.create(customerData).then(function (customer) {
            let card_data = {
                token: 'a911dbda8daf3a61324c5f142600b009',
                customer_id: customer.body.id
            };

            console.log(card_data);

            mp.card.create(card_data).then(function (card) {
                console.log(card);
            });

            res.status(200).json({ message: customer });
        });
    } catch (error) {
        console.error(error);
    }
};
