// Import React
import * as React from 'react';
// Material UI
import Message from './Message/Index'
import { Box, Grid, } from '@mui/material';
// Import Context of state application
import { AuthContext } from '../../Context';
// Import Context of Theme application
import theme from '../../Styles/Theme';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  // Estanciando props para reutilizar
  const {
    children, value, index, ...other
  } = props;
  // Estanciando Context state  para reutilizar
  const { selectedIndex } = React.useContext(AuthContext);
  
  //  HTML
  
  return (
    <div
      role="tabpanel"
      hidden={selectedIndex !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {selectedIndex === index ? (
        <Box sx={{   position:'relative'}}>
          {children}
        </Box>
      ) : (<div>teste</div>)}
    </div>
  );
}

// Component of exportation
export default function ChatServe() {
  // const classes = useStyles()
  // Instanciando Contexto de estado para reutilizar
  const { value } = React.useContext(AuthContext);
  
  return (
    <Grid
      item
      xs
      sx={{
        background: theme.background.primary,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        color: theme.text.primary,
        padding:0
      }}
    >
      <Box sx={{
        height: 46,
        borderBottom: `1px solid ${theme.background.tertiary}`,
      }}
      />
      <Box sx={{
        display: 'flex',
        height: 'calc(100vh - 46px)',
      }}
      >
        <Box sx={{
          width: 'calc(100% - 240px)',
          height: 'calc(100vh - 46px)',
        }}
        >
          <TabPanel value={value} index={0}  >
            <Message />
           
            {/* <Input type="text"  className={classes.input} /> */}
          </TabPanel>
          <TabPanel value={value} index={1}>
          <Message />
          </TabPanel>
          <TabPanel value={value} index={2}>
          <Message  />
          </TabPanel>
          <TabPanel value={value} index={3}>
          <Message />
          </TabPanel>
          <TabPanel value={value} index={4}>
          <Message />
          </TabPanel>
          <TabPanel value={value} index={5}>
          <Message />
          </TabPanel>

        </Box>
        <Box sx={{
          width: 240,
          height: 'calc(100vh - 46px)',
          background: theme.background.secondary,
        }}
        />
      </Box>
    </Grid>
  );
}
