// Material UI
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { AuthContext } from "../../Context";

// Theme 
import theme from '../../Styles/Theme'
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const {selectedIndex} = React.useContext(AuthContext)

  return (
    <div
      role="tabpanel"
      hidden={selectedIndex !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {selectedIndex === index ? (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box> 
      ) : (<div>teste</div>)}
    </div>
  );
}
export default function ChatServe(){
  const {value} = React.useContext(AuthContext)
  return(
    <Grid item xs sx={{ 
      background: theme.background.primary,
       height: '100vh',
       display:'flex',
       flexDirection:'column',
       color:theme.text.primary
       }}>
      <Box sx={{
        height:46,
        borderBottom: `1px solid ${theme.background.tertiary}`
      }}>

      </Box>
      <Box sx={{ 
        display:'flex',
        height:'calc(100vh - 46px)',
      }}>
        <Box sx={{width:'calc(100% - 240px)',
      height:'calc(100vh - 46px)',
      }}>
        <TabPanel value={value} index={0}>
        Conheça as tecnologias usadas na aplicação 
      </TabPanel>
      <TabPanel value={value} index={1}>
        React
      </TabPanel>
      <TabPanel value={value} index={2}>
        Material Ui
      </TabPanel>
        <TabPanel value={value} index={3}>
       TypeScript
      </TabPanel>
      <TabPanel value={value} index={4} >
        React Icons
      </TabPanel>
      <TabPanel value={value} index={5}>
        React Router Dom
      </TabPanel>
     
      

      </Box>
        <Box sx={{ 
          width:240,
          height:'calc(100vh - 46px)',
           background: theme.background.secondary}}>

        </Box>

      </Box>
    </Grid>
  )
}