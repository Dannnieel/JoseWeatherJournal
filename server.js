// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// Middleware
const bodyParser = require('body-parser');
const cors = require('cors');

// Configure Express to use body-parser and cors
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const projectData = {};

app.get ('/data', (req, res) => {
  res.send(projectData);
});
app.post('/data', (req, res) => {
  const newData = req.body;
  projectData.temp = newData.temp;
  projectData.date = newData.date;
  projectData.feelings = newData.feelings;
  res.send(projectData);
});