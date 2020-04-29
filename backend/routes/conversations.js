const express = require("express");
const Conversation = require("../models/conversation");

const router = express.Router();

//api/conversations
router.get("", (req, res, next) => {
  Conversation.find().then((conversations) => {
    res.status(200).send({
      message: "Conversations fetched successfully",
      conversations: conversations,
    });
  });
});

//api/conversation/:name
router.get("/:participantName", (req, res, next) => {
  Conversation.find({ participants: req.params.participantName }).then(
    (conversations) => {
      res.status(200).send({
        message: "Conversation fetched successfully",
        conversations: conversations,
      });
    }
  );
});

module.exports = router;
