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


const records = [];


app.get ('/data', async (req, res) => {
  res.send(records);
});


app.post('/data', async (req, res) => {
  const newData = req.body;
  const projectData = {};
  projectData.temp = newData.temp;
  projectData.date = newData.date;
  projectData.feelings = newData.feelings;

  records.push(projectData);
  res.status(200).send({ message: "Ya guardé tu registro."});
});