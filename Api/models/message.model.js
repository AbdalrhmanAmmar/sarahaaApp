let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sarahaa');

const MsgSchema = mongoose.Schema({
    message: String,
    UserId:mongoose.SchemaTypes.ObjectId
})

module.exports = mongoose.model('message', MsgSchema);