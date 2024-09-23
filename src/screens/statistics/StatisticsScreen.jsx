import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";

import { BarChart } from '@mui/x-charts/BarChart';
import TransactionForm from './../../components/dashboard/transactionForm/TransactionForm';

const Statistics = () => {
  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards />
      <AreaCharts />
      <AreaTable />


      <section className="content-area-charts">
        <div className="bar-chart">
          <div className="bar-chart-info">
            <h5 className="bar-chart-title">Total Revenue</h5>
            <div className="chart-info-data">
              <div className="info-data-value">$50.4K</div>
              <div className="info-data-text">

                <p>5% than last month.</p>
              </div>
            </div>
          </div>
          <div className="bar-chart-wrapper">
            <BarChart
              series={[
                { data: [35, 44, 24, 34] },
                { data: [51, 6, 49, 30] },
                { data: [15, 25, 30, 50] },
                { data: [60, 50, 15, 25] },
              ]}
              height={290}
              xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          </div>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-info">
            <h4 className="progress-bar-title">Most Sold Items</h4>
          </div>
          <div className="progress-bar-list">

          </div>
        </div>
      </section>

      <TransactionForm/>
    </div>
  );
};

export default Statistics;
