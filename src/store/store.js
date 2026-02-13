import { configureStore } from '@reduxjs/toolkit';
import timeSeriesReducer from './timeSeriesSlice';

export const store = configureStore({
  reducer: {
    timeSeries: timeSeriesReducer,
  },
});

