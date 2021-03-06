const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Configure express server
app.set('view engine', 'pug');
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/projects', (req, res) => {
  res.render('myprojects')
})

// Portfolio
app.get('/portfolio', (req, res) => {
  res.render('projects/portfolio/home')
});

app.get('/portfolio/projects', (req, res) => {
  res.render('projects/portfolio/projects')
});



// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})