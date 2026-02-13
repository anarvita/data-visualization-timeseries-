import React from 'react';
import { useSelector } from 'react-redux';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import {
  TrendingUp,
  Thermostat,
  WaterDrop,
  ShoppingCart,
} from '@mui/icons-material';

const MetricsCards = () => {
  const { filteredData } = useSelector((state) => state.timeSeries);

  const calculateAverage = (metric) => {
    if (filteredData.length === 0) return 0;
    const sum = filteredData.reduce((acc, item) => acc + item[metric], 0);
    return (sum / filteredData.length).toFixed(2);
  };

  const calculateChange = (metric) => {
    if (filteredData.length < 2) return 0;
    const first = filteredData[0][metric];
    const last = filteredData[filteredData.length - 1][metric];
    return (((last - first) / first) * 100).toFixed(1);
  };

  const metrics = [
    {
      title: 'Average Value',
      value: calculateAverage('value'),
      change: calculateChange('value'),
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      color: '#8884d8',
    },
    {
      title: 'Avg Temperature',
      value: `${calculateAverage('temperature')}°C`,
      change: calculateChange('temperature'),
      icon: <Thermostat sx={{ fontSize: 40 }} />,
      color: '#82ca9d',
    },
    {
      title: 'Avg Humidity',
      value: `${calculateAverage('humidity')}%`,
      change: calculateChange('humidity'),
      icon: <WaterDrop sx={{ fontSize: 40 }} />,
      color: '#ffc658',
    },
    {
      title: 'Total Sales',
      value: filteredData.reduce((acc, item) => acc + item.sales, 0).toLocaleString(),
      change: calculateChange('sales'),
      icon: <ShoppingCart sx={{ fontSize: 40 }} />,
      color: '#ff7c7c',
    },
  ];

  return (
    <Grid container spacing={3}>
      {metrics.map((metric, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card
            elevation={3}
            sx={{
              background: `linear-gradient(135deg, ${metric.color}15 0%, ${metric.color}30 100%)`,
              borderLeft: `4px solid ${metric.color}`,
            }}
          >
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography color="textSecondary" gutterBottom variant="body2">
                    {metric.title}
                  </Typography>
                  <Typography variant="h4" component="div" fontWeight="bold">
                    {metric.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: parseFloat(metric.change) >= 0 ? 'success.main' : 'error.main',
                      mt: 1,
                    }}
                  >
                    {parseFloat(metric.change) >= 0 ? '↑' : '↓'} {Math.abs(metric.change)}%
                  </Typography>
                </Box>
                <Box sx={{ color: metric.color, opacity: 0.7 }}>
                  {metric.icon}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MetricsCards;

