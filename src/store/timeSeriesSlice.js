import { createSlice } from '@reduxjs/toolkit';
import { format, subDays } from 'date-fns';

// Generate sample time series data
const generateSampleData = (days = 30) => {
  const data = [];
  const today = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = subDays(today, i);
    data.push({
      date: format(date, 'yyyy-MM-dd'),
      timestamp: date.getTime(),
      value: Math.floor(Math.random() * 100) + 50,
      temperature: Math.floor(Math.random() * 30) + 10,
      humidity: Math.floor(Math.random() * 40) + 40,
      sales: Math.floor(Math.random() * 1000) + 500,
    });
  }
  return data;
};

const initialState = {
  data: generateSampleData(30),
  filteredData: generateSampleData(30),
  dateRange: {
    startDate: format(subDays(new Date(), 29), 'yyyy-MM-dd'),
    endDate: format(new Date(), 'yyyy-MM-dd'),
  },
  selectedMetrics: ['value', 'temperature'],
  chartType: 'line',
};

const timeSeriesSlice = createSlice({
  name: 'timeSeries',
  initialState,
  reducers: {
    setDateRange: (state, action) => {
      state.dateRange = action.payload;
      // Filter data based on date range
      state.filteredData = state.data.filter(item => {
        return item.date >= action.payload.startDate && item.date <= action.payload.endDate;
      });
    },
    setSelectedMetrics: (state, action) => {
      state.selectedMetrics = action.payload;
    },
    setChartType: (state, action) => {
      state.chartType = action.payload;
    },
    addDataPoint: (state, action) => {
      state.data.push(action.payload);
      // Re-filter data
      state.filteredData = state.data.filter(item => {
        return item.date >= state.dateRange.startDate && item.date <= state.dateRange.endDate;
      });
    },
    refreshData: (state, action) => {
      const days = action.payload || 30;
      state.data = generateSampleData(days);
      state.filteredData = state.data.filter(item => {
        return item.date >= state.dateRange.startDate && item.date <= state.dateRange.endDate;
      });
    },
  },
});

export const { 
  setDateRange, 
  setSelectedMetrics, 
  setChartType, 
  addDataPoint, 
  refreshData 
} = timeSeriesSlice.actions;

export default timeSeriesSlice.reducer;

