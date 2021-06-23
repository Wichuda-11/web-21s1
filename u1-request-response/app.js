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
    res.Status(500).send('Oh no, something went wrong')
  })
  
app.get('/html-pic', (req, res) => {
    res.send(`
      <html><body>
        <h1>Hello</h1>
        <img src="/images/cat.jpg" width="300" />
      </html></body>
    `)
   })
   

// Start server
const PORT = 3000
app.listen(PORT, () => console.log(
  `listening on http://localhost:${PORT}`))