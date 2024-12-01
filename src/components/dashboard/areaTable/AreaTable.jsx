import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "Transaction Date",
  "Discription",
  "Category",
  "Amount",
  "Action",
];

const TABLE_DATA = [
  {
    id: 100,
    name: "Payment food city",
    date: "Jun 29,2022",
    customer: "Food",
    status: "delivered",
    amount: 400,
  },
  {
    id: 101,
    name: "Class fees",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Education",
    status: "pending",
    amount: 288,
  },
  {
    id: 102,
    name: "Payment food city",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Food",
    status: "canceled",
    amount: 500,
  },
  {
    id: 103,
    name: "Light Bill",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Bill",
    status: "delivered",
    amount: 100,
  },

];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Latest Expenses</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                
                  <td>{dataItem.date}</td>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.customer}</td>
                  <td>${dataItem.amount.toFixed(2)}</td>
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
