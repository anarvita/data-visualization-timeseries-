import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Grid,
  Alert,
  Snackbar,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { addDataPoint } from '../store/timeSeriesSlice';
import { format } from 'date-fns';

const validationSchema = Yup.object({
  date: Yup.date().required('Date is required'),
  value: Yup.number()
    .required('Value is required')
    .min(0, 'Value must be positive'),
  temperature: Yup.number()
    .required('Temperature is required')
    .min(-50, 'Temperature must be above -50')
    .max(100, 'Temperature must be below 100'),
  humidity: Yup.number()
    .required('Humidity is required')
    .min(0, 'Humidity must be at least 0')
    .max(100, 'Humidity must be at most 100'),
  sales: Yup.number()
    .required('Sales is required')
    .min(0, 'Sales must be positive'),
});

const DataInputForm = () => {
  const dispatch = useDispatch();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Formik
        initialValues={{
          date: format(new Date(), 'yyyy-MM-dd'),
          value: '',
          temperature: '',
          humidity: '',
          sales: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const dataPoint = {
            date: values.date,
            timestamp: new Date(values.date).getTime(),
            value: parseFloat(values.value),
            temperature: parseFloat(values.temperature),
            humidity: parseFloat(values.humidity),
            sales: parseFloat(values.sales),
          };
          dispatch(addDataPoint(dataPoint));
          setOpenSnackbar(true);
          resetForm();
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={2.4}>
                <TextField
                  fullWidth
                  label="Date"
                  name="date"
                  type="date"
                  value={values.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.date && Boolean(errors.date)}
                  helperText={touched.date && errors.date}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={2.4}>
                <TextField
                  fullWidth
                  label="Value"
                  name="value"
                  type="number"
                  value={values.value}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.value && Boolean(errors.value)}
                  helperText={touched.value && errors.value}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={2.4}>
                <TextField
                  fullWidth
                  label="Temperature (°C)"
                  name="temperature"
                  type="number"
                  value={values.temperature}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.temperature && Boolean(errors.temperature)}
                  helperText={touched.temperature && errors.temperature}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={2.4}>
                <TextField
                  fullWidth
                  label="Humidity (%)"
                  name="humidity"
                  type="number"
                  value={values.humidity}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.humidity && Boolean(errors.humidity)}
                  helperText={touched.humidity && errors.humidity}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={2.4}>
                <TextField
                  fullWidth
                  label="Sales"
                  name="sales"
                  type="number"
                  value={values.sales}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.sales && Boolean(errors.sales)}
                  helperText={touched.sales && errors.sales}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  startIcon={<AddIcon />}
                  size="large"
                >
                  Add Data Point
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Data point added successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default DataInputForm;

