import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Stack,
} from '@mui/material';
import { Refresh as RefreshIcon } from '@mui/icons-material';
import { setDateRange, setSelectedMetrics, setChartType, refreshData } from '../store/timeSeriesSlice';

const validationSchema = Yup.object({
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date()
    .required('End date is required')
    .min(Yup.ref('startDate'), 'End date must be after start date'),
});

const FilterForm = () => {
  const dispatch = useDispatch();
  const { dateRange, selectedMetrics, chartType } = useSelector(
    (state) => state.timeSeries
  );

  const metrics = [
    { value: 'value', label: 'Value' },
    { value: 'temperature', label: 'Temperature' },
    { value: 'humidity', label: 'Humidity' },
    { value: 'sales', label: 'Sales' },
  ];

  const handleMetricChange = (metric) => {
    const newMetrics = selectedMetrics.includes(metric)
      ? selectedMetrics.filter((m) => m !== metric)
      : [...selectedMetrics, metric];
    
    if (newMetrics.length > 0) {
      dispatch(setSelectedMetrics(newMetrics));
    }
  };

  const handleRefreshData = () => {
    dispatch(refreshData(30));
  };

  return (
    <Formik
      initialValues={{
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(setDateRange(values));
      }}
      enableReinitialize
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>
          <Stack spacing={3}>
            {/* Date Range */}
            <TextField
              fullWidth
              label="Start Date"
              name="startDate"
              type="date"
              value={values.startDate}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.startDate && Boolean(errors.startDate)}
              helperText={touched.startDate && errors.startDate}
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              fullWidth
              label="End Date"
              name="endDate"
              type="date"
              value={values.endDate}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.endDate && Boolean(errors.endDate)}
              helperText={touched.endDate && errors.endDate}
              InputLabelProps={{ shrink: true }}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Apply Date Filter
            </Button>

            {/* Chart Type */}
            <FormControl fullWidth>
              <InputLabel>Chart Type</InputLabel>
              <Select
                value={chartType}
                label="Chart Type"
                onChange={(e) => dispatch(setChartType(e.target.value))}
              >
                <MenuItem value="line">Line Chart</MenuItem>
                <MenuItem value="area">Area Chart</MenuItem>
                <MenuItem value="bar">Bar Chart</MenuItem>
              </Select>
            </FormControl>

            {/* Metrics Selection */}
            <Box>
              <InputLabel sx={{ mb: 1 }}>Select Metrics</InputLabel>
              <FormGroup>
                {metrics.map((metric) => (
                  <FormControlLabel
                    key={metric.value}
                    control={
                      <Checkbox
                        checked={selectedMetrics.includes(metric.value)}
                        onChange={() => handleMetricChange(metric.value)}
                      />
                    }
                    label={metric.label}
                  />
                ))}
              </FormGroup>
            </Box>

            {/* Refresh Data */}
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<RefreshIcon />}
              onClick={handleRefreshData}
              fullWidth
            >
              Refresh Sample Data
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default FilterForm;

