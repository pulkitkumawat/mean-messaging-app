const mongoose = require("mongoose");

const convetsationSchema = mongoose.Schema({
  participants: { type: Array, required: true },
});

const myModel = mongoose.model("Conversation", convetsationSchema);
//myModel.collection.dropIndex({ participants: 1 });
module.exports = myModel;
