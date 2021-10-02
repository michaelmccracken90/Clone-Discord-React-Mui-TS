// Import React 
import React from 'react';



// Components Internos
import ListServe from '../ListServer/Index';
import RoomServe from '../RoomServe/Index';
import ChatServe from '../ChatServer/Index';

// Material Ui
import { Box } from "@mui/system";
import { Grid } from '@mui/material';

// Component of exportation
export default function Layout() {
 
//  HTML
  return (
    <Box sx={{ margin: 0, padding: 0, width: '100vw', height: '100vh', }}>
      {/* <Button  onMouseOver={handle}>
teste
      </Button> */}
      <Grid container >
        <ListServe />
        <RoomServe />
        <ChatServe />
      </Grid>
    </Box>
  )
}