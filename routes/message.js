const express = require('express')
const router = express.Router()
const message = require("../controller/message")

router.get('/message',message.message)

module.exports= router