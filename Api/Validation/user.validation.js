const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
        .trim()
        .email()
        .min(6)
        .required(),
    password: Joi.string(),
repassword: Joi.ref('password')
    
       
})

module.exports.UserValidation =  (req, res, next)=>{
const { error } = schema.validate((req.body), { abortEarly: false })
    if (error) {
res.send(error.message)
    } else {
next()
}
    
}