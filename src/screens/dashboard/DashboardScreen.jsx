import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";

import SampleCompScreen from "../sampleComp/SampleCompScreen";
import IncomeTable from './../../components/dashboard/incomeTable/IncomeTable';

const Dashboard = () => {

  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards />
      <AreaCharts />
      {/* <SampleCompScreen /> */}
      <AreaTable />
      <IncomeTable />
    </div>
  )
  
};

export default Dashboard;
