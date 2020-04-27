const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  sender: { type: String, required: true },
  recipient: { type: String, required: true },
  conversationId: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: String, default: new Date() },
});

module.exports = mongoose.model("Message", messageSchema);
