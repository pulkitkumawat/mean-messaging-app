const express = require("express");
const Message = require("../models/message");
const Conversation = require("../models/conversation");

const router = express.Router();

router.get("", (req, res, send) => {
  Message.find().then((messages) => {
    res.status(200).send({
      outputMessage: "All messages fetched",
      messages: messages,
    });
  });
});

router.get("/:conversationId", (req, res, next) => {
  Message.find({ conversationId: req.params.conversationId }).then(
    (messages) => {
      res.status(200).send({
        outputMessage: `All messages fetched for ${req.params.conversationId}`,
        messages: messages,
      });
    }
  );
});

router.post("", (req, res, next) => {
  const conversation = new Conversation({
    participants: [req.body.sender, req.body.recipient],
  });

  Conversation.findOneAndUpdate(
    {
      $or: [
        { participants: [req.body.sender, req.body.recipient] },
        { participants: [req.body.recipient, req.body.sender] },
      ],
    },
    { participants: [req.body.sender, req.body.recipient] },
    {
      new: true,
      upsert: true, // Make this update into an upsert
    }
  ).then((createdConversation) => {
    const message = new Message({
      sender: req.body.sender,
      recipient: req.body.recipient,
      conversationId: createdConversation._id,
      text: req.body.text,
      date: req.body.date,
    });
    message.save().then((createdMessage) => {
      res.status(201).send({
        outputMessage: "Message successfully added",
        messageId: createdMessage._id,
        conversationId: message.conversationId,
      });
    });
  });
});

router.post("/:conversationId", (req, res, next) => {
  const message = new Message({
    sender: req.body.sender,
    recipient: req.body.recipient,
    conversationId: req.params.conversationId,
    text: req.body.text,
    date: req.body.date,
  });
  message.save().then((createdMessage) => {
    res.status(201).send({
      outputMessage: "Message successfully added",
      messageId: createdMessage._id,
      conversationId: message.conversationId,
    });
  });
});

router.delete("/:conversationId", (req, res, next) => {
  Conversation.deleteMany({ _id: req.params.conversationId }).then((mes) => {
    Message.deleteMany({ conversationId: req.params.conversationId }).then(
      (deleteMessage) => {
        res.status(201).send({
          outputMessage: "Message successfully deleted",
          deleted: deleteMessage,
        });
      }
    );
  });
});

module.exports = router;
