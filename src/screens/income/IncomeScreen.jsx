import * as React from 'react';

import "./transactionScreen.scss";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';

//navigating Section
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { checkAuthAndRedirect } from './../../authUtils';

import { TransactionForm } from "../../components";
import Grid from '../../common/grid/Grid';
import IncomeFormENT from './../../components/IncomeFormEnt/IncomeForm';

function Income() {

  const navigate = useNavigate();
  useEffect(() => {
    checkAuthAndRedirect(navigate)
  }, []);

  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('md');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const categorys = ['Fiver','Main-Job', 'Fix-Deposits'];
  const columns = [
    {
      field: 'happenDate',
      headerName: 'Income Date',
      type: 'date',
      width: 180,
      editable: true,
    },
    { field: 'discription', headerName: 'Discription', width: 250, editable: true },
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
      headerName: 'Income Category',
      width: 220,
      editable: true,
      type: 'singleSelect',
      valueOptions: categorys,
    },
  ];

  const dataColoumns = [
    {
      id: 1,
      discription: "Payment 01",
      amount: 560,
      happenDate: new Date("2024-10-14"),
      category: "Main-Job",
    },
    {
      id: 2,
      discription: "Payment 02",
      amount: 560,
      happenDate: new Date("2024-10-14"),
      category: "Fix-Deposits",
    },
    {
      id: 3,
      discription: "Payment 03",
      amount: 560,
      happenDate: new Date("2024-10-14"),
      category: "Fiver",
    },


  ];

  const handleClose = () => {
    setOpen(false);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom>
        Income
      </Typography>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Income
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
                <IncomeFormENT />
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
        dataColoumns={dataColoumns} />

    </React.Fragment>
  );
}

export default Income;
