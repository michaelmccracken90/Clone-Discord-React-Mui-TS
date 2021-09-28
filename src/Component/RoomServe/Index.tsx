// Material UI
import {  Grid } from "@mui/material";

// Import Context Theme Styled
import theme from '../../Styles/Theme'
// Import component Interno
import RoomName from "./RoomName/Index";
import ServeName from "./ServeName/Index";
import UserName from "./UserName/Index";

// Component Exported
export default function RoomServe() {
  // HTML Exported
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