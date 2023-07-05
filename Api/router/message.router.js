const router = require('express').Router();
const { Auth } = require('../middleware/Auth');
const { Addmessage, GetAllmessage } = require('./../Services/message.Services')


router.route('/')
    .post(Addmessage)
.get(Auth, GetAllmessage)

    module.exports = router