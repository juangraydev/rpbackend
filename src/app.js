require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port =  process.env.PORT || 5001

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//middleware
const authorize = require('./middleware/auth')

//routes
const token = require('./routes/token')

app.use('/auth', token)

app.get('/customer', authorize(), (req, res) => {
  res.send("Cunstomer information")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})