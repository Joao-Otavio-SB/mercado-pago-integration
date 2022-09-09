const express = require('express');
const router = express.Router();

const clientsController = require('../controllers/clients');

router.post('/', clientsController.createClient);

module.exports = router;
