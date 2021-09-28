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
       flexDirection:'column'
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
        inicial
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item 1
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item 2
      </TabPanel>
        <TabPanel value={value} index={3}>
       item 3
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item 4
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