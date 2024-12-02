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
import AutoFill from "../../common/autoFill/AutoFill";
import TransactionAutoFill from "../../common/autoFill/TransactionAutoFill";



const UserGoalForm = () => {
  const { openSidebar } = useContext(SidebarContext);
  const dateRangeRef = useRef(null);


  const handleClickOutside = (event) => {

    if (dateRangeRef.current && !dateRangeRef.current.contains(event.target)) {
      setShowDatePicker(false);
    }
    
  };

  useEffect(() => {
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);

  return (
    <section className="form-area-top">
      <div className="area-top-l">
        <h2 className="area-top-title">Transactions</h2>
      </div>

      <div className="area-top-l">
        <form>
          <div className="form-controller-1">

            <TextField
              className="form1"
              label="Discription"
              variant="outlined"
              fullWidth
              margin="normal"
              id="discription"
            />
            
            <TextField
              className="form1"
              label="Payment Methode"
              variant="outlined"
              fullWidth
              margin="normal"
              id="paymentMethode"
            />

            <div className="form-Elements">
              <TextField
                className="form1"
                label="Amount"
                variant="outlined"
                fullWidth
                margin="normal"
                id="Amount"
              />
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Select Target Date" />
            </LocalizationProvider>
      
            <Button
              className="submitBtn"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>

    </section>
  );
};

export default UserGoalForm;
