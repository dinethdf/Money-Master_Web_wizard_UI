import * as React from 'react';
import "./transactionScreen.scss";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

//navigating Section
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

import axios from 'axios';
import { jwtDecode } from "jwt-decode";

import { TransactionForm } from "../../components";
import Grid from '../../common/grid/Grid';

export default function Transaction() {

  useEffect(() => {
    loadTransactionData();
  }, []);

  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('md');
  const [data, setData] = React.useState([])


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
  
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };


  const handleClickOpen = () => {
    setOpen(true);
  };
  const categorys = ['Utilities', 'Food', 'Transport', 'Education', 'Bill'];
  const columns = [
    {
      field: 'happenDate',
      headerName: 'Transaction  Date',
      type: 'string',
      width: 180,
      editable: true,
    },
    { field: 'description', headerName: 'Description', width: 250, editable: true },
    {
      field: 'amount',
      headerName: 'Amount',
      type: 'number',
      width: 100,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },

    {
      field: 'category',
      headerName: 'Transaction Category',
      valueGetter: (value, row) => {
        // console.log(value,row)
        // if (!row.gross || !row.costs) {
        //   return null;
        // }
      return row.expensesCategory.name
      },
      width: 220,
      editable: true,
      type: 'singleSelect',
      valueOptions: categorys,
    },
  ];

  // const dataColoumns = [
  //   {
  //     id: 1,
  //     discription: "Payment 01",
  //     amount: 560,
  //     happenDate: new Date(2024-10-14),
  //     category: "Food",
  //   },
  //   {
  //     id: 2,
  //     discription: "Payment 02",
  //     amount: 560,
  //     happenDate: new Date(2024-10-14),
  //     category: "Education",
  //   },

  // ];

  const handleClose = () => {
    setOpen(false);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  const saveTransaction = () =>{
    setData([...data,    {
      id: 3,
      discription: "Payment 03sd",
      amount: 560,
      happenDate: new Date(2024-10-14),
      category: "Education",
    }])
  }  

  const updateData = (transactions) =>{

    loadTransactionData();
    // newId = newId + 1 ;
    // const addIdTransaxtion = {...transactions, id:newId};
    // console.log([...data, addIdTransaxtion])
    // setData([...data, addIdTransaxtion])
  
  }  

  return (
    <React.Fragment>
    <Typography variant="h3" gutterBottom>
        Transaction
      </Typography>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Transaction
      </Button>

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <div className='popup-transactions'>
          <DialogTitle > </DialogTitle>
          <DialogContent>
            <Box
              noValidate
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                m: 'auto',
                width: 'fit-content',
              }}
            >
              <div className="content-area">
                <TransactionForm categorys={categorys}  updateData={updateData}/>
              </div>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </div>
      </Dialog>

        <Grid
          columns={columns}
          dataColoumns={data}
          />

    </React.Fragment>
  );
}
