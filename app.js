const express = require('express')
const app = express()
const port = process.env.port || 3000

// Configure express server
app.set('view engine', 'pug');
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('home')
})

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})