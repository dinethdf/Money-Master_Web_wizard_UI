
  import React from 'react';
  import { Box, Button, Typography } from '@mui/material';
  import { useNavigate } from 'react-router-dom';

  export default function PageNotFound() {
    const navigate = useNavigate();
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: "#091827",
        }}
      >
        <Typography variant="h1" style={{ color: 'white' }}>
          404
        </Typography>
        <Typography variant="h6" style={{ color: 'white' }}>
          The page youre looking for doesnt exist.
        </Typography>
        <br />
        <Button variant="contained"  
        sx={{backgroundColor: "darkblue"}}
        onClick={()=>{
          navigate('/');
        }}
        >
          Back Home</Button>
      </Box>
    );
  }