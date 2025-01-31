import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { hour: '6am', value: 10 },
  { hour: '8am', value: 45 },
  { hour: '10am', value: 85 },
  { hour: '12pm', value: 75 },
  { hour: '2pm', value: 80 },
  { hour: '4pm', value: 70 },
  { hour: '6pm', value: 30 },
  { hour: '8pm', value: 15 },
];

const ProductiveHoursChart = () => (
  <ResponsiveContainer width="100%" height={150}>
    <BarChart data={data}>
      <XAxis dataKey="hour" fontSize={12} />
      <YAxis hide />
      <Tooltip />
      <Bar dataKey="value" fill="var(--primary)" radius={[4, 4, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);

export default ProductiveHoursChart; 