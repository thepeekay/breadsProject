// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use (express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})

  
// Breads
  const breadsController = require('./Controller/bread_controller')
  app.use('/breads', breadsController)

//Bakers
const bakersController = require(`./Controller/bakers_controller`)
app.use(`/bakers`, bakersController)

// 404 Page
app.get('*', (req, res) => {
  res.render('404')
})
  
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('connected to mongo: ', process.env.MONGO_URI))

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})