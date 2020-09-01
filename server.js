//bring in .env for secret key protection
require('dotenv').config()
//bring in express app
const express = require('express')
//bring in middleware
const { join } = require('path')
//define app for express
const app = express()

//define middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

require('./connections')
    .sync()
    .then(() => app.listen(process.env.PORT || 3000, () => console.log('http://localhost:3000')))
    .catch(err => console.error(err))
