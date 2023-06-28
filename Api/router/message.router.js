const router = require('express').Router();
const { Addmessage } = require('./../Services/message.Services')

router.route('/')
    .post(Addmessage)

    module.exports = router