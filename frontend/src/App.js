import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SensorCard from './components/SensorCard';

const App = () => {
  const [sensorData, setSensorData] = useState({
    temperature: null,
    humidity: null,
    rain: null,
    windSpeed: null,
    pressure: null,
  });

  useEffect(() => {
    // Fetch data from the backend
    const fetchSensorData = async () => {
      try {
        const response = await fetch("https://weather-monitoring-backend.onrender.com/sensors");
        const data = await response.json();
        setSensorData(data);
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    };

    fetchSensorData();
  }, []);

  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '20px',
          padding: '10px',
        }}
      >
        <SensorCard title="Temperature" value={sensorData.temperature} unit="°C" />
        <SensorCard title="Humidity" value={sensorData.humidity} unit="%" />
        <SensorCard title="Rain" value={sensorData.rain} unit="" />
        <SensorCard title="Wind Speed" value={sensorData.windSpeed} unit="m/s" />
        <SensorCard title="Pressure" value={sensorData.pressure} unit="hPa" />
      </div>
    </div>
  );
};

export default App;
