const express = require('express');
const router = express.Router();
const robotController = require('../controllers/robotController');


// rota para publicar uma mensagem
router.post("/llm", robotController.postLLM)

// router.get('/get/:component', componentsController.getComponents);
// router.post('/post', componentsController.postComponents);
// router.post('/update', authenticateToken, componentsController.updateComponents);

module.exports = router;