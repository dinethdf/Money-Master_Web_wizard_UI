import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";

//navigating Section
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { checkAuthAndRedirect } from './../../authUtils';

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
      <AreaTable />
    </div>
  );
};

export default Dashboard;
