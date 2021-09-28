// Import React 
import React from 'react';

// Context 

// Components
import ListServe from '../ListServer/Index';
import RoomServe from '../RoomServe/Index';
import ChatServe from '../ChatServer/Index';

// Material Ui
import { Box } from "@mui/system";
import { Grid } from '@mui/material';


export default function Layout() {
 

  return (
    <Box sx={{ margin: 0, padding: 0, width: '100vw', height: '100vh', }}>
      <Grid container >
        <ListServe />
        <RoomServe />
        <ChatServe />
      </Grid>
    </Box>
  )
}