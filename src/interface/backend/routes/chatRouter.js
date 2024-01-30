const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController");

router.get("/all", chatController.getAll);
router.get("/:chat", chatController.getChat);
router.post("/", chatController.postChat);

module.exports = router;
