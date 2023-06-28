const userSchema = require('./../models/User.model.js');
const bcrypt = require('bcrypt');

module.exports.SignUp = async (req, res) => {
  const { username, email, password, repassword } = req.body;
  const userAccount = await userSchema.findOne({ email });
  if (userAccount) {
    res.send('This email is already registered');
  } else {
      bcrypt.hash(password, 4, async function (err, hash) {
          await userSchema.insertMany({ username, email, password:hash, repassword });
    res.send('Successfully registered');
          
});
    
  }
};

module.exports.Login = async (req, res) => {
  const { username,email, password } = req.body;
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
res.send("Welcome!"+ username);
      } else {
        res.send("Invalid password");
      }
    });
  }
};

