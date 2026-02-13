import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  AppBar,
  Toolbar,
  ToggleButton,
  ToggleButtonGroup,
  Chip,
} from '@mui/material';
import { 
  ShowChart as ShowChartIcon,
  BarChart as BarChartIcon,
  Timeline as TimelineIcon 
} from '@mui/icons-material';
import TimeSeriesChart from './TimeSeriesChart';
import EChartsTimeSeries from './EChartsTimeSeries';
import FilterForm from './FilterForm';
import DataInputForm from './DataInputForm';
import MetricsCards from './MetricsCards';

const DashboardWithECharts = () => {
  const [chartLibrary, setChartLibrary] = useState('echarts'); // 'recharts' or 'echarts'

  const handleChartLibraryChange = (event, newLibrary) => {
    if (newLibrary !== null) {
      setChartLibrary(newLibrary);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <ShowChartIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Time Series Data Visualization Dashboard
          </Typography>
          <Chip 
            label="Updated 2026" 
            color="secondary" 
            size="small" 
            sx={{ mr: 2 }}
          />
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {/* Metrics Cards */}
          <Grid item xs={12}>
            <MetricsCards />
          </Grid>

          {/* Filter Form */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Filters & Settings
              </Typography>
              <FilterForm />
            </Paper>
          </Grid>

          {/* Chart with Library Toggle */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">
                  Time Series Chart
                </Typography>
                <ToggleButtonGroup
                  value={chartLibrary}
                  exclusive
                  onChange={handleChartLibraryChange}
                  size="small"
                  color="primary"
                >
                  <ToggleButton value="echarts">
                    <BarChartIcon sx={{ mr: 1 }} />
                    Apache ECharts
                  </ToggleButton>
                  <ToggleButton value="recharts">
                    <TimelineIcon sx={{ mr: 1 }} />
                    Recharts
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>

              {/* Chart Library Info */}
              <Box sx={{ mb: 2 }}>
                {chartLibrary === 'echarts' ? (
                  <Chip 
                    label="🔥 Advanced Features: Zoom, Export, Data View, Magic Type" 
                    color="success" 
                    size="small"
                    sx={{ mr: 1 }}
                  />
                ) : (
                  <Chip 
                    label="⚡ Simple & Fast Rendering" 
                    color="info" 
                    size="small"
                    sx={{ mr: 1 }}
                  />
                )}
              </Box>

              {/* Render Selected Chart */}
              {chartLibrary === 'echarts' ? (
                <EChartsTimeSeries />
              ) : (
                <TimeSeriesChart />
              )}
            </Paper>
          </Grid>

          {/* Data Input Form */}
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Add New Data Point
              </Typography>
              <DataInputForm />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DashboardWithECharts;

