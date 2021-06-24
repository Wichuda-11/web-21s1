// Import libraries
const express = require('express')

// Setup app
const app = express()

// Middleware
app.use(express.static('public'))

// Routes
app.get('/', (req, res) => {
    res.send('better world')
  })

// html
app.get('/html', (req, res) => {
    res.send(`
      <html><body>
        <h1>Technologies</h1>
        <ul>
          <li>JavaScript</li>
          <li>Node</li>
          <li>Express</li>
        </ul>
      </body></html>
    `)
  })

// json
app.get('/json', (req, res) => {
    res.json({
      technologies: [
        'JavaScript', 'Node', 'Express'
      ]
    })
  })

// status  
app.get('/status', (req, res) => {
    res.sendStatus(403)
  })

// 
app.get('/status-200', (req, res) => {
    res.sendStatus(200)
  })

//   
app.get('/status-400', (req, res) => {
    res.sendStatus(400)
  })

// status2  
app.get('/status2', (req, res) => {
    res.status(500).send('Oh no, something went wrong')
  })
  
app.get('/html-pic', (req, res) => {
    res.send(`
      <html><body>
        <h1>Hello</h1>
        <img src="/images/cat.jpg" width="300" />
      </html></body>
    `)
   })

// /labs
app.get('/labs', (req, res) => {
    res.send(`
    <html><body>
    <li>1. <a href="/profiles/jib">/profiles/jib</a></li>
    <li>2. <a href="/api/profiles/jib">/api/profiles/jib</a></li>
    <li>3. <a href="/cat-simulator">/cat-simulator</a></li>
    <li>4. <a href="/admin/grades">/admin/grades</a> AND <a href="/api/grades">/api/grades</a> AND <a href="/boredom">/boredom</a></li>
  </body></html>  
    `)
   })

// /profiles/jib
app.get('/profiles/jib', (req, res) => {
    res.send(`
      <html><body>
        <h1>Jib APN</h1>
        <h3>Nickname: Jib</h3>
        <h3>Likes: Web Development,Play game</h3>
        <h3>Motto: Diligent,Study hard,Happiness</h3>
      </html></body>
    `)
   })

// api/profiles/jib
app.get('/api/profiles/jib', (req, res) => {
  res.json({
     "name": "Jib APN", 
     "nickname": "jib",
     "likes": [
       "Web Development",
       "Play game",
     ],
   "motto": "Diligent,Study hard,Happiness"
 })
})
   
// /cat-simulator
app.get('/cat-simulator', (req, res) => {
    res.send(`
      <html>
      <head><link rel="stylesheet" href="/styles.css"></head>
      <body class="cats">
        <li><a href="/cat-result">Pet the cat</a></li>
        <img src="/images/cat2.jpg" width="500"/>
      </html></body>
    `)
   })

// /cat-result
app.get('/cat-result', (req, res) => {
    res.send(`
      <html>
      <head><link rel="stylesheet" href="/styles.css"></head>
      <body class="cats">
        <li><a href="/cat-simulator">Ignore the cat</a></li>
        <img src="/images/cat3.jpg" width="500"/>
      </html></body>
    `)
   })

app.get('/admin/grades', (req, res) => {
    res.sendStatus(401)
  })

app.get('/api/grades', (req, res) => {
    res.status(401).send('Invalid OAuth token')
  })

app.get('/boredom', (req, res) => {
    res.status(404).send('Sorry - we don`t have that here!')
  })


// Start server
const PORT = 3000
app.listen(PORT, () => console.log(
  `listening on http://localhost:${PORT}`))