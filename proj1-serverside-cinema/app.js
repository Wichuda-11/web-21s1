const express = require('express')
const { json, urlencoded } = require('body-parser')

const app = express()

// Templates

// Middleware
app.use(express.static('public'))
app.use(json())
app.use(urlencoded({ extended: false }))

// Routes

const PORT = 3000
app.listen(PORT,
  () => console.log(`Listening: http://localhost:${PORT}`))
