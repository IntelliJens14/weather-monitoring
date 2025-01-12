const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Example sensor data
const sensorData = {
  temperature: 25,
  humidity: 60,
  rain: 'No',
  windSpeed: 15,
  pressure: 1015,
};

// API endpoint to serve sensor data
app.get('/sensors', (req, res) => {
  res.json(sensorData);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
