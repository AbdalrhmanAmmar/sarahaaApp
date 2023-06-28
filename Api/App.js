const express = require('express')
const app = express()
const port = 7000


//Midlleware

app.use(express.json())
//user
app.use('/user', require('./router/user.router.js'))

//messages
app.use('/message', require('./router/message.router.js'))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))