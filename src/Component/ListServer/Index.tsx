// Material UI
import { Grid } from "@mui/material";

// Theme 
import theme from '../../Styles/Theme'
// Import Component Interno
import ButtonServices from "./ButtonServe/Index";

// Export componenet 
export default function ListServe() {
  // HTML
  return (
    <Grid item 
      sx={{
        background: theme.background.tertiary,

        maxHeight: '100vh',
        width: '71px',
        
        paddingTop:1.5,
        
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
        overflowY: 'scroll',
        "::-webkit-scrollbar":{
          display:'none',
        }
   
      }}>
      <ButtonServices isHome hasNotification />
      <ButtonServices />
      <ButtonServices mentions={23} />
      <ButtonServices />
      <ButtonServices isHome hasNotification />
      <ButtonServices />
      <ButtonServices mentions={23} />
      <ButtonServices />
      <ButtonServices isHome hasNotification />
      <ButtonServices />
      <ButtonServices mentions={23} />
      <ButtonServices />
      <ButtonServices isHome hasNotification />
      <ButtonServices />
      <ButtonServices isHome hasNotification />
      <ButtonServices />
      <ButtonServices mentions={2} />
      <ButtonServices />
      <ButtonServices isHome hasNotification />
      <ButtonServices />
      <ButtonServices mentions={203} />
      <ButtonServices />
      <ButtonServices isHome hasNotification />
      <ButtonServices />
      <ButtonServices mentions={23} />
      <ButtonServices />
      <ButtonServices isHome hasNotification />
      <ButtonServices />
      
    </Grid>
  )
}