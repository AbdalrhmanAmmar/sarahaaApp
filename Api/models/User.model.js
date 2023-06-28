let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sarahaa');

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    rePassword: String,
    emailConfirm: {
        type: Boolean,
        default: false,
    } 
})

module.exports = mongoose.model('user', userSchema);