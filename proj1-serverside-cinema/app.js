const express = require('express')
const { json, urlencoded } = require('body-parser')
const { cinemaList } = require('./features/cinema-controller')

const app = express()

// Templates

// Middleware
app.use(express.static('public'))
app.use(json())
app.use(urlencoded({ extended: false }))

// Routes
app.get('/cinemas', cinemaList)

module.exports = { app }
