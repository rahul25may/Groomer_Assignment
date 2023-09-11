// server.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors'); // Import cors
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes
// Endpoint to store user data
app.post('/api/user', (req, res) => {
  const userData = req.body;

  // Read existing data (if any) from the JSON file
  let existingData = [];
  try {
    const data = fs.readFileSync('userdata.json', 'utf8');
    existingData = JSON.parse(data);
  } catch (error) {
    console.error('Error reading JSON file:', error);
  }

  // Add the new user data to the existing data
  existingData.push(userData);

  // Write the updated data back to the JSON file
  fs.writeFileSync('userdata.json', JSON.stringify(existingData, null, 2), 'utf8');

  res.status(200).json({ message: 'User data received and saved successfully.' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
