// Material UI
import { Box, Grid } from "@mui/material";

// Theme 
import theme from '../../Styles/Theme'
import RoomName from "./RoomName/Index";
import ServeName from "./ServeName/Index";
import UserName from "./UserName/Index";


export default function RoomServe() {
  return (
    <Grid item sx={{
      background: theme.background.secondary,

      height: '100vh',
      width: '240px',

      display: 'flex',
      flexDirection: 'column'
    }}>

      <ServeName />
      <RoomName />
      <UserName />
    </Grid>
  )
}