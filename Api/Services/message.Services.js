const MsgSchema  = require('./../models/message.model')

module.exports.Addmessage = async (req, res)=>{
    const { message, userId } = req.body;
    await MsgSchema.insertMany({ message, userId })
    
res.send('message has been send successfully')
}


module.exports.GetAllmessage = async (req, res)=>{
    const { message, userId } = req.body;
    await MsgSchema.findOne({ message, userId })
    
res.send('This All Message has been sent successfully')
}