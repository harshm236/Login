const express = require('express')
const router = express.Router()

const logincontrol= require("../controller/login")
function Middleware(req, res, next) {
    console.log("middleware");
    next();
  }
router.post("/login",Middleware,logincontrol.Login)
module.exports= router