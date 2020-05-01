const express = require("express");
const Conversation = require("../models/conversation");

const router = express.Router();

//api/conversations
router.get("", (req, res, next) => {
  Conversation.find().then((conversations) => {
    res.status(200).send({
      outputMessage: "Conversations fetched successfully",
      conversations: conversations,
    });
  });
});

//api/conversation/:name
router.get("/:participantName", (req, res, next) => {
  Conversation.find({ participants: req.params.participantName }).then(
    (conversations) => {
      res.status(200).send({
        outputMessage: "Conversation fetched successfully",
        conversations: conversations,
      });
    }
  );
});

router.post("", (req, res, next) => {
  const conversation = new Conversation({
    participants: [req.body.sender, req.body.recipient],
  });
  conversation.save().then((savedConversation) => {
    res.status(201).send({
      outputMessage: "Conversation Added Successfully",
      savedConversation: savedConversation,
    });
  });
});

module.exports = router;
