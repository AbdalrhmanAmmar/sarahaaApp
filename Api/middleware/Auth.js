const jwt = require('jsonwebtoken')
module.exports.Auth = (req, res, next) => {
    const token = req.header('token')
    jwt.verify(token, 'secretkey', (error, decoded) => {
        if (error) return res.json(error)
        req.id = decoded.id
           next()
            
    })
    
}