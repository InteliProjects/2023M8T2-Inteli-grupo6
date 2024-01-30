const database = require("../../database/db.chats");

const getChat = async (req, res) => {
  if (req.params) console.log(req.params);
  const { chat } = req.params;

  try {
    const response = await database.getChats(chat);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await database.getAll();
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postChat = async (req, res) => {
  console.log(req.body);
  const { chat, message, user } = req.body;

  try {
    const response = await database.postChats(chat, message, user);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getChat,
  postChat,
  getAll,
};
