const express = require('express');
const router = express.Router();
const logController = require('../controllers/logController');

router.post('/post', logController.postlog);

module.exports = router;