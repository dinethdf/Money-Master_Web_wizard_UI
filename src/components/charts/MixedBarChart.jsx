import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];

const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function MixedBarChart() {
  return (
    <BarChart
      width={740}
      height={320}
      sx={{
       
        "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
         strokeWidth:"0.4",
         fill:"gray"
        },
         // change bottom label styles
         "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
             strokeWidth:"0.5",
             fill:"gray"
          },
       }}
      series={[
        { data: pData, label: 'pv', stack: 'stack1', color: '#42a5f5' },  // Light Blue
        { data: amtData, label: 'amt', color: '#66bb6a' },  // Green
        { data: uData, label: 'uv', stack: 'stack1', color: '#ffca28' },  // Yellow
      ]}
      
    />
  );
}
