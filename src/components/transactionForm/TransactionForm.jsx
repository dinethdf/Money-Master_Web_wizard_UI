import "./TransactionForm.scss";
import { useContext, useEffect, useRef, useState } from "react";

import { SidebarContext } from "../../context/SidebarContext";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { addDays } from "date-fns";
import { DateRange } from "react-date-range";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TransactionAutoFill from "../../common/autoFill/TransactionAutoFill";

import axios from 'axios';
import { jwtDecode } from "jwt-decode";



const TransactionForm = (props) => {
  const { openSidebar } = useContext(SidebarContext);
  const dateRangeRef = useRef(null);
  const [transaction, setTransaction] = useState([]);
  const [openMSG, setOpenMSG] = useState(false);
  const [messege, setMessege] = useState({
    states: "",
    message: ""
  });

  const handleClickOutside = (event) => {

    if (dateRangeRef.current && !dateRangeRef.current.contains(event.target)) {
      setShowDatePicker(false);
    }

  };

  const handletransactionCategory = (data) => {
    console.log(data)
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      ["categoryId"]: data.categoryId,
      ["category"]: data.title,
    }));

  };

  const formSubmit = () => {
    // console.log(transaction);
    // const addId = {...transaction, id:5};

    const validate = validateInputs();
    if (validate) {
      console.log(transaction)
     loadTransactionData();
    } else {
      console.log("error")
    }
    props.updateData(transaction);
    // setTransaction([]);

  };

  const loadTransactionData = async () => {

    const token = getCookie('JWT');
    let userName = "";

    try {
      const decodedToken = jwtDecode(token);
      userName = decodedToken.sub;
    } catch (error) {
      console.log("Error")
    }

    const response = await axios.post(`http://localhost:8080/expenses`, {
      amount: transaction.amount,
      happenDate: transaction.happenDate,
      description:   transaction.discription,
      expensesCategory: {
        id: transaction.categoryId,
      },
      user: {
        username: userName
      }
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    )
      .then(function (response) {
        // setData(response.data)
        console.log("done")
        setOpenMSG(true)
        setMessege({ states: "success", message: "Transaction Add Success " });
        setTransaction({})
      })
      .catch(function (error) {
        setOpenMSG(true)
        setMessege({ states: "error", message: "Somthing Wrong " });
      });
  }

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };


  //   useEffect(() => {
  // console.log(transaction)

  //   }, [transaction]);

  const validateInputs = () => {

    if (!transaction.discription || transaction.discription == "" || transaction.discription == null) {
      setOpenMSG(true)
      setMessege({ states: "error", message: "Discription is empty" })
      return false
    }

    if (!transaction.amount || transaction.amount == "" || transaction.amount == null || transaction.amount == 0) {
      setOpenMSG(true)
      setMessege({ states: "error", message: "Amount is empty" })
      return false
    }

    if (!transaction.category || transaction.category == "" || transaction.category == null) {
      setOpenMSG(true)
      setMessege({ states: "error", message: "Category is Not selected" })
      return false
    }

    const isValidDate = !isNaN(Date.parse(transaction.happenDate));
    if (!transaction.happenDate || !isValidDate || transaction.happenDate == null) {
      setOpenMSG(true)
      setMessege({ states: "error", message: "Selecte the Date" })
      return false
    }

    return true;

  };

  return (
    <section className="form-area-top">
      <div className="area-top-l">
        <h2 className="area-top-title">Transactions</h2>
      </div>
      {openMSG && (
        <Stack sx={{ width: '100%', paddingTop: "10px" }} spacing={2}>
          <Alert severity={messege.states}>{messege.message}</Alert>
        </Stack>)}
      <div className="area-top-l">

        <div className="form-controller-1">

          <TextField
            className="form1"
            label="Description"
            variant="outlined"
            fullWidth
            margin="normal"
            id="discription"
            value={transaction.discription || ""}
            key="form-Description"
            onChange={(event) => {
              setTransaction((prevTransaction) => ({
                ...prevTransaction,
                [event.target.id]: event.target.value,
              }));
            }}
          />


          {/* <TextField
              className="form1"
              label="Payment Methode"
              variant="outlined"
              fullWidth
              margin="normal"
              id="paymentMethode"
              onChange={(event) => {
                setTransaction((prevTransaction) => ({
                  ...prevTransaction, 
                  [event.target.id]: event.target.value, 
                }));
              }}
            /> */}

          <div className="form-Elements">
            <TextField
              className="form1"
              label="Amount"
              variant="outlined"
              fullWidth
              margin="normal"
              id="amount"
              value={transaction.amount || ""}
              key="form-amount"
              onChange={(event) => {
                setTransaction((prevTransaction) => ({
                  ...prevTransaction,
                  [event.target.id]: event.target.value,
                }));
              }}
            />
          </div>

          <div className="form-Elements-autoFill">
            <TransactionAutoFill
              className="form1"
              handletransactionCategory={handletransactionCategory}
            />
          </div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Select Transaction Date"
              onChange={(newDate) => {
                const dateObject = new Date(newDate);
                const formattedDate = dateObject.toISOString().split("T")[0];
               
                setTransaction((prevTransaction) => ({
                  ...prevTransaction,
                  ["happenDate"]: formattedDate ? formattedDate : null,
                }));
              }}

            />
          </LocalizationProvider>

          <Button
            className="submitBtn"
            variant="contained"
            color="primary"
            onClick={formSubmit}
          >
            Submit
          </Button>
        </div>

      </div>

    </section>
  );
};

export default TransactionForm;
