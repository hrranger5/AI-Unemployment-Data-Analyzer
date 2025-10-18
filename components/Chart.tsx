import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import type { ChartDataPoint } from '../types';

interface ChartProps {
  data: ChartDataPoint[];
  theme: 'light' | 'dark';
}

const Chart: React.FC<ChartProps> = ({ data, theme }) => {
  const isDark = theme === 'dark';
  const axisStrokeColor = isDark ? '#9ca3af' : '#6b7280';
  const gridStrokeColor = isDark ? '#4b5563' : '#e5e7eb';
  const lineColor = isDark ? '#60a5fa' : '#3b82f6';
  const tooltipBg = isDark ? 'rgba(31, 41, 55, 0.8)' : 'rgba(255, 255, 255, 0.8)';
  const tooltipText = isDark ? '#f3f4f6' : '#1f2937';
  const brushFillColor = isDark ? '#374151' : '#f3f4f6';


  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke={gridStrokeColor} />
        <XAxis dataKey="date" tick={{ fill: axisStrokeColor }} />
        <YAxis 
          label={{ value: 'Rate (%)', angle: -90, position: 'insideLeft', fill: axisStrokeColor }}
          tick={{ fill: axisStrokeColor }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: tooltipBg,
            border: '1px solid #ccc',
            borderColor: gridStrokeColor,
            color: tooltipText,
          }}
          labelStyle={{ fontWeight: 'bold' }}
          formatter={(value: number) => [`${value.toFixed(2)}%`, 'Unemployment Rate']}
        />
        <Legend wrapperStyle={{ color: axisStrokeColor }} />
        <Line type="monotone" dataKey="rate" stroke={lineColor} strokeWidth={2} activeDot={{ r: 8 }} dot={{ r: 2 }}/>
        <Brush dataKey="date" height={30} stroke={lineColor} fill={brushFillColor} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;