const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
const login = require("./routes/login");
const mes= require("./routes/message")
const body = require("body-parser")

app.use(body.json())
app.use(express.urlencoded({extended: true}))
app.set("feedbackform", path.join(__dirname, "feedbackform"));
app.set("view engine", "js");

app.use(cors());
app.use(login);
app.use(mes)

app.listen(3002, () => {
  console.log("hello i am server");
});
