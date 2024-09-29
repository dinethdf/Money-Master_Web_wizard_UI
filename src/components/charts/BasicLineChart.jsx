import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10,15,17] }]}
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
        {
          data: ["2", 5.5, 2, 8.5, 1.5, 5,10,20],
        },
      ]}
      width={500}
      height={300}
    />
  );
}