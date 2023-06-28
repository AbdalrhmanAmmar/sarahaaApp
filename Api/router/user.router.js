const router = require('express').Router();
const { SignUp, Login } = require('../Services/user.Services');
const { UserValidation } = require('../Validation/user.validation');

            

router.route('/')
    .post(UserValidation,SignUp)
.get(Login)



    module.exports = router