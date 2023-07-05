const MsgSchema  = require('./../models/message.model')

module.exports.Addmessage = async (req, res)=>{
    const { message, UserId } = req.body;
    await MsgSchema.insertMany({ message,  UserId  })
    
res.send('message has been send successfully')
}


module.exports.GetAllmessage = async (req, res)=>{
    // const { userId ,message } = req.body;
const messages =  await MsgSchema.find({  userId:req.id }, {message:1, _id:0})
    
res.json({messages})
}