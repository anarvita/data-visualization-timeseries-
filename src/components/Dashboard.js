import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  AppBar,
  Toolbar,
} from '@mui/material';
import { ShowChart as ShowChartIcon } from '@mui/icons-material';
import TimeSeriesChart from './TimeSeriesChart';
import FilterForm from './FilterForm';
import DataInputForm from './DataInputForm';
import MetricsCards from './MetricsCards';

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <ShowChartIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Time Series Data Visualization Dashboard
          </Typography>
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

          {/* Chart */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Time Series Chart
              </Typography>
              <TimeSeriesChart />
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

export default Dashboard;

