import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";
import axios from 'axios';
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

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

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

const AreaTable = () => {

const  [data, setData] = useState([]);

useEffect(() => {
 loadTransactionData();
}, []);

  const loadTransactionData = async () => {
    const token = getCookie('JWT');
    let userName = "";

    try {
      const decodedToken = jwtDecode(token);
      userName = decodedToken.sub;

    } catch (error) {
      console.log("Error")
    }

    const response = await axios.get(`http://localhost:8080/expenses/user/${userName}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    )
      .then(function (response) {
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        
      });
  }


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
            {data?.slice(0, 8).map((dataItem) => {
              return (
                <tr key={dataItem.id}>

                  <td>{dataItem.happenDate}</td>
                  <td>{dataItem.description}</td>
                  <td>{dataItem.expensesCategory.name}</td>
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
