import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";

import { BarChart } from '@mui/x-charts/BarChart';
import TransactionForm from './../../components/transactionForm/TransactionForm';
import IncomeForm from "../../components/IncomeForm/IncomeForm";


const Income = () => {
  return (
    <div className="content-area">
      <IncomeForm/>
    </div>
  );
};

export default Income;
