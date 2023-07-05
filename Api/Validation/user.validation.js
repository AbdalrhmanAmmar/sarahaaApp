const Joi = require('joi');
const methods = ['body', 'params'];

const UserSchema = Joi.object({
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
});

module.exports.UserValidation = (req, res, next) => {
  const { error } = UserSchema.validate(req.body, { abortEarly: false });
  if (error) return res.send(error)
  
  return next();
};