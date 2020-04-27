const mongoose = require("mongoose");

const convetsationSchema = mongoose.Schema({
  participants: { type: Array, required: true, unique: true },
});

module.exports = mongoose.model("Conversation", convetsationSchema);
