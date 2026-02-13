# Time Series Data Visualization Dashboard

A modern, interactive time series data visualization dashboard built with React, Redux, Material UI, Formik, Apache ECharts, and Recharts.

## 🔥 NEW: Dual Chart Libraries!
- **Apache ECharts** - Advanced features (Zoom, Export, Data View)
- **Recharts** - Simple & fast alternative
- **Toggle** between them in the dashboard!

## 🚀 Features

- **Dual Chart Libraries**: Apache ECharts (advanced) + Recharts (simple)
- **Advanced Tools**: Zoom, Pan, Export, Data View, Magic Type switching
- **Interactive Time Series Charts**: Line, Area, and Bar charts
- **Real-time Data Filtering**: Filter data by date range and metrics
- **Multiple Metrics**: Track Value, Temperature, Humidity, and Sales
- **Data Input Forms**: Add new data points with validation using Formik
- **Responsive Design**: Beautiful Material UI components that work on all devices
- **State Management**: Redux Toolkit for efficient state management
- **Metrics Cards**: Real-time statistics with trend indicators
- **Sample Data Generation**: Built-in sample data for testing
- **Export Functionality**: Save charts as high-resolution images
- **Data View**: See raw data in table format

## 📦 Technologies Used

- **React 18**: Modern React with hooks
- **Redux Toolkit**: State management
- **Material UI (MUI)**: Beautiful, responsive UI components
- **Apache ECharts**: Enterprise-grade charting with 50+ chart types
- **Recharts**: Simple and fast charting alternative
- **Formik**: Form management with validation
- **Yup**: Schema validation
- **date-fns**: Date manipulation

## 🛠️ Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Start the development server**:
```bash
npm start
```

3. **Open your browser** and navigate to:
```
http://localhost:3000
```

## 📊 Features Overview

### 1. Metrics Dashboard
- Real-time statistics cards showing:
  - Average Value
  - Average Temperature
  - Average Humidity
  - Total Sales
- Trend indicators showing percentage change

### 2. Interactive Charts
- **Dual Libraries**:
  - Apache ECharts (Advanced features)
  - Recharts (Simple & fast)
- **Chart Types**:
  - Line Chart (default)
  - Area Chart
  - Bar Chart
- **Advanced Features** (ECharts):
  - 🔍 Zoom & Pan
  - 💾 Export as Image
  - 📊 Data View
  - 🔄 Magic Type Switching
  - ↩️ Restore/Reset
- **Multiple Metrics**: Display multiple metrics simultaneously
- **Responsive**: Automatically adjusts to screen size

### 3. Filters & Settings
- **Date Range Filter**: Select custom date ranges
- **Chart Type Selector**: Switch between chart types
- **Metrics Selection**: Choose which metrics to display
- **Refresh Data**: Generate new sample data

### 4. Data Input Form
- Add new data points with validation
- Fields: Date, Value, Temperature, Humidity, Sales
- Real-time validation using Yup schema
- Success notifications

## 🎨 Project Structure

```
src/
├── components/
│   ├── Dashboard.js          # Main dashboard layout
│   ├── TimeSeriesChart.js    # Chart component with Recharts
│   ├── FilterForm.js         # Formik form for filters
│   ├── DataInputForm.js      # Formik form for data input
│   └── MetricsCards.js       # Statistics cards
├── store/
│   ├── store.js              # Redux store configuration
│   └── timeSeriesSlice.js    # Redux slice for time series data
├── App.js                    # Main App component
├── index.js                  # Entry point
└── index.css                 # Global styles
```

## 🔧 Available Scripts

- `npm start`: Run the app in development mode
- `npm build`: Build the app for production
- `npm test`: Run tests
- `npm eject`: Eject from Create React App (one-way operation)

## 📝 Usage Examples

### Adding a New Data Point
1. Scroll to the "Add New Data Point" section
2. Fill in all fields (Date, Value, Temperature, Humidity, Sales)
3. Click "Add Data Point"
4. The chart will automatically update

### Filtering Data
1. Use the "Filters & Settings" panel on the left
2. Select start and end dates
3. Click "Apply Date Filter"
4. The chart and metrics will update

### Changing Chart Type
1. In the "Filters & Settings" panel
2. Select from "Chart Type" dropdown
3. Choose Line, Area, or Bar chart

### Selecting Metrics
1. In the "Filters & Settings" panel
2. Check/uncheck metrics to display
3. Chart updates automatically

## 🎯 Future Enhancements

- Export data to CSV/Excel
- Dark mode toggle
- More chart types (Scatter, Pie, etc.)
- Data persistence (localStorage/API)
- Advanced analytics
- Custom color themes
- Real-time data streaming
- Multi-language support

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Created with ❤️ for time series data visualization

---

**Happy Coding! 🚀**

