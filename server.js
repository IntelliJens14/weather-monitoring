const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000; // Use Render's provided PORT or default to 3000

// Middleware
const corsOptions = {
  origin: "https://weather-monitoring-frontend-i81c.onrender.com", // Frontend URL
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));
app.use(express.json());

// Mock sensor data (replace with actual sensor integration)
let weatherData = {
  temperature: 25.3, // °C
  humidity: 60, // %
  rain: "No Rain", // Description
  windSpeed: 3.5, // m/s
  pressure: 1012.3, // hPa
};

// Simulate dynamic data changes (for testing purposes)
function updateWeatherData() {
  weatherData = {
    temperature: (20 + Math.random() * 10).toFixed(1),
    humidity: Math.floor(50 + Math.random() * 30),
    rain: Math.random() > 0.8 ? "Heavy Rain" : Math.random() > 0.5 ? "Light Rain" : "No Rain",
    windSpeed: (1 + Math.random() * 5).toFixed(2),
    pressure: (1000 + Math.random() * 20).toFixed(1),
  };
}

// Refresh data every second
setInterval(updateWeatherData, 1000);

// API endpoint for fetching weather data
app.get('/data', async (req, res) => {
  try {
    const sensorData = weatherData; // Replace with real sensor data if available
    res.json(sensorData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Weather Monitoring Backend is running on http://localhost:${PORT}`);
});
