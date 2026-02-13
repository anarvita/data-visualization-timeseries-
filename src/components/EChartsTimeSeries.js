import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ReactECharts from 'echarts-for-react';
import { Box, Typography } from '@mui/material';

const COLORS = {
  value: '#8884d8',
  temperature: '#82ca9d',
  humidity: '#ffc658',
  sales: '#ff7c7c',
};

const METRIC_NAMES = {
  value: 'Value',
  temperature: 'Temperature',
  humidity: 'Humidity',
  sales: 'Sales',
};

const EChartsTimeSeries = () => {
  const { filteredData, selectedMetrics, chartType } = useSelector(
    (state) => state.timeSeries
  );

  const option = useMemo(() => {
    // Prepare data
    const dates = filteredData.map(item => item.date);
    const series = selectedMetrics.map(metric => {
      const baseConfig = {
        name: METRIC_NAMES[metric],
        data: filteredData.map(item => item[metric]),
        smooth: true,
        emphasis: {
          focus: 'series',
        },
        itemStyle: {
          color: COLORS[metric],
        },
      };

      // Configure based on chart type
      switch (chartType) {
        case 'area':
          return {
            ...baseConfig,
            type: 'line',
            areaStyle: {
              opacity: 0.6,
            },
            lineStyle: {
              width: 2,
            },
          };
        case 'bar':
          return {
            ...baseConfig,
            type: 'bar',
            barMaxWidth: 40,
          };
        default: // line
          return {
            ...baseConfig,
            type: 'line',
            lineStyle: {
              width: 3,
            },
            showSymbol: true,
            symbolSize: 6,
          };
      }
    });

    return {
      title: {
        text: 'Time Series Analysis',
        left: 'center',
        textStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985',
          },
        },
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderColor: '#ccc',
        borderWidth: 1,
        textStyle: {
          color: '#333',
        },
      },
      legend: {
        data: selectedMetrics.map(m => METRIC_NAMES[m]),
        bottom: 10,
        icon: 'roundRect',
      },
      toolbox: {
        feature: {
          saveAsImage: {
            title: 'Save as Image',
            pixelRatio: 2,
          },
          dataZoom: {
            title: {
              zoom: 'Zoom',
              back: 'Reset Zoom',
            },
          },
          restore: {
            title: 'Restore',
          },
          dataView: {
            title: 'Data View',
            readOnly: false,
          },
          magicType: {
            type: ['line', 'bar'],
            title: {
              line: 'Line',
              bar: 'Bar',
            },
          },
        },
        right: 20,
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: chartType === 'bar',
        data: dates,
        axisLabel: {
          rotate: 45,
          interval: 'auto',
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value}',
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
          },
        },
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 100,
        },
        {
          start: 0,
          end: 100,
          handleIcon:
            'path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
          handleSize: '80%',
          handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2,
          },
        },
      ],
      series: series,
      animation: true,
      animationDuration: 1000,
      animationEasing: 'cubicOut',
    };
  }, [filteredData, selectedMetrics, chartType]);

  if (filteredData.length === 0) {
    return (
      <Box
        sx={{
          height: 500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h6" color="text.secondary">
          No data available for the selected date range
        </Typography>
      </Box>
    );
  }

  return (
    <ReactECharts
      option={option}
      style={{ height: '500px', width: '100%' }}
      notMerge={true}
      lazyUpdate={true}
      theme="light"
    />
  );
};

export default EChartsTimeSeries;

