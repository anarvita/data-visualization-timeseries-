# Quick Setup Guide

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

This will install:
- React 18
- Redux Toolkit
- Material UI (MUI)
- Recharts (for charts)
- Formik (for forms)
- Yup (for validation)
- date-fns (for date handling)

### 2. Start Development Server
```bash
npm start
```

The app will open automatically at `http://localhost:3000`

## What You'll See

### Dashboard Features:
1. **Top Metrics Cards** - Shows average values and trends
2. **Filter Panel (Left)** - Control date range, chart type, and metrics
3. **Chart (Right)** - Interactive time series visualization
4. **Data Input Form (Bottom)** - Add new data points

## How to Use

### View Different Chart Types
1. Go to "Filters & Settings" panel
2. Select "Chart Type" dropdown
3. Choose: Line Chart, Area Chart, or Bar Chart

### Filter by Date Range
1. Select "Start Date" and "End Date"
2. Click "Apply Date Filter"
3. Chart updates automatically

### Select Metrics to Display
1. Check/uncheck metrics:
   - Value
   - Temperature
   - Humidity
   - Sales
2. Chart updates in real-time

### Add New Data
1. Scroll to "Add New Data Point" section
2. Fill in all fields
3. Click "Add Data Point"
4. Success notification appears

### Refresh Sample Data
1. Click "Refresh Sample Data" button
2. New random data is generated

## Troubleshooting

### Port 3000 already in use?
```bash
# Kill the process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port
set PORT=3001 && npm start
```

### Dependencies not installing?
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Technology Stack
- ⚛️ React 18
- 🔄 Redux Toolkit
- 🎨 Material UI (MUI)
- 📊 Recharts
- 📝 Formik + Yup
- 📅 date-fns

Enjoy building with this dashboard! 🚀

