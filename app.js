require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const PORT = process.env.PORT || '3000';

app.use(cors());
app.use(morgan('dev'));

app.use('/', (req, res) => {
    res.send('Alou');
});

app.listen(PORT, () => console.log(`listening in port ${PORT}`));
