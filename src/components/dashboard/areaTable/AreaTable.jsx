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
        if (!response.data || response.data.length === 0) {
          console.log("No Data");
        } else{
        
          console.log(response.data)
          setData(response.data)
        }

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
      {data?.length != 0 ? <table>
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
        : "No Data"}

      </div>
    </section>
  );
};

export default AreaTable;
