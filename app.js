require('dotenv').config();

// Imports
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || '3000';

const payments = require('./routes/payment');
const clients = require('./routes/clients');

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

// Routes
app.use('/create_client', clients);
app.use('/process_payment', payments);
app.use('/', (req, res) => {
    res.status(200).json({ message: 'OK' });
});

app.listen(PORT, () => console.log(`listening in port ${PORT}`));
