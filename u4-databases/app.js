const express = require('express')
const expHbs = require('express-handlebars')
const { json, urlencoded } = require('body-parser')
const { bookDetails, bookSearch, bookCreateForm, bookCreate } = require('./features/book-controller')
const { index } = require('./features/index-controller')
const { iterationLists, iterationDetails, studentDetails, courseLists, courseDetails } = require('./features/uni-controller')

const app = express()

// Templates
app.set('views', './views')
app.set('view engine', 'hbs')
app.engine('hbs', expHbs({
  extname: '.hbs',
  defaultLayout: false,
  partialsDir: ['./views/partials', './views/layouts']
}))

// Middleware
app.use(express.static('public'))
app.use(json())
app.use(urlencoded({ extended: false }))

// Routes
app.get('/', index)
app.get('/books', bookSearch)
app.post('/books', bookCreate)
app.get('/books/new', bookCreateForm)
app.get('/books/:isbn13', bookDetails)
app.get('/iterations', iterationLists)
app.get('/iterations/:code', iterationDetails)
app.get('/students/:code', studentDetails)
app.get('/courses', courseLists)
app.get('/courses/:code', courseDetails)

app.get('/images/:catchall',
  (_req, res) => res.redirect('/images/404.jpg'))
// TODO later

const PORT = 3000
app.listen(PORT,
  () => console.log(`Listening: http://localhost:${PORT}`))
