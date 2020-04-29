const express = require("express");
const app = express();
const mongoose = require("mongoose");
const messagesRoute = require("./routes/messages");
const conversationsRoute = require("./routes/conversations");

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
//"mongodb+srv://pulkit:8764012666@cluster0-ldmvn.mongodb.net/node-angular?retryWrites=true&w=majority",
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.connect(
  "mongodb+srv://Admin:admin123@cluster0-tokfm.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to db")  ;
  }
);

app.use("/api/messages", messagesRoute);
app.use("/api/conversations", conversationsRoute);

module.exports = app;
