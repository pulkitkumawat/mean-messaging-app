const express = require("express");
const Message = require("../models/message");
const Conversation = require("../models/conversation");

const router = express.Router();

router.get("", (req, res, send) => {
  Message.find().then((messages) => {
    res.status(200).send({
      message: "All messages fetched",
      chat: messages,
    });
  });
});

router.post("", (req, res, next) => {
  const conversation = new Conversation({
    participants: [req.body.sender, req.body.recipient],
  });

  conversation.save().then((createdConversation) => {
    const message = new Message({
      sender: req.body.sender,
      recipient: req.body.recipient,
      conversationId: createdConversation._id,
      text: req.body.text,
      date: req.body.date,
    });
    message.save().then((createdMessage) => {
      res.status(201).send({
        message: "Message successfully added",
        messageId: createdMessage._id,
      });
    });
  });
});

module.exports = router;
