const userSchema = require('./../models/User.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sendEmail } = require('../email/user.email.js');


module.exports.SignUp = async (req, res) => {
  sendEmail();           
  const { username, email, password, repassword } = req.body;
  const userAccount = await userSchema.findOne({ email });
  if (userAccount) {
    res.send('This email is already registered');
  } else {
      bcrypt.hash(password, 4, async function (err, hash) {
        await userSchema.insertMany({ username, email, password: hash, repassword });
       
          
});
    res.send('success')
  }
};

module.exports.Login = async (req, res) => {
  const { email, password } = req.body;
  const userAccount = await userSchema.findOne({ email });
  if (!userAccount) {
    res.send("This email is not found");
  } else {
    bcrypt.compare(password, userAccount.password, function (err, result) {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      }
      if (result === true) {
        let token = jwt.sign({ userid: userAccount._id, username: userAccount.username }, "secretkey");
        res.json({ token: token, message: "Successfully logged in" });
      } else {
        res.send("Invalid password");
      }
    });
  }
};

