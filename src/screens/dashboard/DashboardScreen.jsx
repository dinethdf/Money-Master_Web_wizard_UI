import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";

//navigating Section
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { checkAuthAndRedirect } from './../../authUtils';
import SampleCompScreen from "../sampleComp/SampleCompScreen";
import IncomeTable from './../../components/dashboard/incomeTable/IncomeTable';

const Dashboard = () => {

 const navigate = useNavigate();
  useEffect(() => {
    checkAuthAndRedirect(navigate)
  }, []);

  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards />
      <AreaCharts />
      {/* <SampleCompScreen/> */}
      <AreaTable />
      <IncomeTable/>
    </div>
  );
};

export default Dashboard;
