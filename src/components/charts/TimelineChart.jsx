import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Lun', hours: 2.1 },
  { day: 'Mar', hours: 3.2 },
  { day: 'Mie', hours: 2.8 },
  { day: 'Jue', hours: 1.9 },
  { day: 'Vie', hours: 2.7 },
  { day: 'Sab', hours: 1.4 },
  { day: 'Dom', hours: 0.8 },
];

const TimelineChart = () => (
  <ResponsiveContainer width="100%" height={150}>
    <LineChart data={data}>
      <XAxis dataKey="day" fontSize={12} />
      <YAxis hide />
      <Tooltip />
      <Line 
        type="monotone" 
        dataKey="hours" 
        stroke="var(--primary)" 
        strokeWidth={2}
        dot={{ fill: 'var(--primary)' }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default TimelineChart; 