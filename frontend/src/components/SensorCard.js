import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const SensorCard = ({ title, value, unit }) => (
  <Card sx={{ width: 250, textAlign: 'center', margin: '10px' }}>
    <CardContent>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h4">
        {value} <span style={{ fontSize: '18px' }}>{unit}</span>
      </Typography>
    </CardContent>
  </Card>
);

export default SensorCard;
