// const { MongoClient } = require('mongodb')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

const app = express()
const urlDb = process.env.URL_DB || 'mongodb://localhost:27017/test'
const PORT = process.env.PORT || 3001

mongoose.Promise = global.Promise
mongoose.connect(urlDb, {useMongoClient: true})

const routerPetitions = require('./routes/petitions')

app.use(express.static(path.join(__dirname, '../public')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* DEBUG req.body */
app.use((req, res, next) => {
  require('debug')('body-parser')(req.body)
  next()
})

app.use('/api', routerPetitions)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}.........`)
