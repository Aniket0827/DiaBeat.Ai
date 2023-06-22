import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function CustomBarChart({ data }) {
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="cholesterol" fill="#8884d8" />
      <Bar dataKey="bloodPressure" fill="#82ca9d" />
    </BarChart>
  );
}

export default CustomBarChart;