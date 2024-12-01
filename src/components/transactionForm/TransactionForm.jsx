import { MdOutlineMenu } from "react-icons/md";
import "./TransactionForm.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { SidebarContext } from "../../context/SidebarContext";

import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 

import { addDays } from "date-fns";
import { DateRange } from "react-date-range";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TransactionAutoFill from "../../common/autoFill/TransactionAutoFill";



const TransactionForm = (props) => {
  const { openSidebar } = useContext(SidebarContext);
  const dateRangeRef = useRef(null);
  const [transaction, setTransaction] = useState([]);

  const handleClickOutside = (event) => {

    if (dateRangeRef.current && !dateRangeRef.current.contains(event.target)) {
      setShowDatePicker(false);
    }
    
  };

  const handletransactionCategory = (data) => {
    console.log(data)
    setTransaction((prevTransaction) => ({
      ...prevTransaction, 
      ["category"]: data.title, 
    }));
    
  };

  const formSubmit  = () => {
    // console.log(transaction);
    const addId = {...transaction, id:5};
    console.log(addId)
    props.updateData(transaction);
    // setTransaction([]);
    
  };
//   useEffect(() => {
// console.log(transaction)

//   }, [transaction]);

  return (
    <section className="form-area-top">
      <div className="area-top-l">
        <h2 className="area-top-title">Transactions</h2>
      </div>

      <div className="area-top-l">
 
          <div className="form-controller-1">

            <TextField
              className="form1"
              label="Discription"
              variant="outlined"
              fullWidth
              margin="normal"
              id="discription"
           
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
                  handletransactionCategory = {handletransactionCategory}
              />
             </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Select Transaction Date" 
                        onChange={(newDate) => {
                     
                            setTransaction((prevTransaction) => ({
                              ...prevTransaction, 
                              ["happenDate"]: newDate ? new Date(newDate.format('YYYY-MM-DD')) : null, 
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
