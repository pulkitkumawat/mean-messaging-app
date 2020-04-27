const express = require("express");
const Conversation = require("../models/conversation");

const router = express.Router();

router.get("", (req, res, next) => {
  Conversation.find().then((conversations) => {
    res.status(200).send({
      message: "Conversations fetched successfully",
      conversations: conversations,
    });
  });
});

module.exports = router;
