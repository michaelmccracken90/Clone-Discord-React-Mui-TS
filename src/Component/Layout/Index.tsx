// Import React 
import React from 'react';

// Context 
import {AuthContext} from '../../Context/index';

// Components
import ListServe from '../ListServer/Index';
import RoomServe from '../RoomServe/Index';
import ChatServe from '../ChatServer/Index';

// Material Ui
import { Box } from "@mui/system";
import { Grid } from '@mui/material';


export default function Layout() {
  const {user,Handle} = React.useContext(AuthContext)
 

  console.log(user);

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