const { supabase } = require("./db");

const table = "chats";

const getChats = async (chat = null) => {
  if (chat) {
    const { data, error } = await supabase
      .from(table)
      .select()
      .eq("chat", chat);
    return data;
  }
  const { data, error } = await supabase.from(table).select();
  return data;
};

const getAll = async () => {
  const { data, error } = await supabase.from(table).select();
  return data;
};

const postChats = async (chat, message, user) => {
  const { error } = await supabase
    .from(table)
    .insert([{ chat: chat, message: message, user: user }]);
  return error;
};

module.exports = {
  getChats,
  postChats,
  getAll,
};
