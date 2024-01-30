const express = require('express');
const router = express.Router();
const componentsController = require('../controllers/componentsController');
const authenticateToken = require('../middleware/auth');

router.get('/get/:component', componentsController.getComponents);
router.post('/post', componentsController.postComponents);
router.post('/update', componentsController.updateComponents);

module.exports = router;