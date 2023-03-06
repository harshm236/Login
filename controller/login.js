const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const bcrypt = require("bcrypt");

app.use(bodyparser.json());

const Login = async (req, res) => {
  let { name, username, password } = req.body;
  // let hashedPass
  console.log(name, username, password);
  try {
    const salt = 10;
    const hash = await bcrypt.hash(password, salt);
    console.log(hash);
    password = hash;
  } catch {
    if (err) console.log(err);
  }
  res.send({ name, username, password });
};
module.exports = { Login };
