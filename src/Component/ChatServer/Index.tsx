// Import React
import * as React from 'react';
// Material UI
import { Box, Grid,  Typography } from '@mui/material';
// Import Context of state application
import { AuthContext } from '../../Context';
// Import Context of Theme application
import theme from '../../Styles/Theme';
// import Input from '@mui/material/Input';
// import { makeStyles } from '@mui/styles';
// Types of component
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
// const useStyles = makeStyles({
//   input:{
//     border:'none',
//     '&::after, &::before,':{
//       border:'none',
//       content: {
//         display:'none'
//       }
//     },
//     '&:hover':{
//       border:'none'
//     }
//   }
//   });
// Componenet Interno
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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
          <TabPanel value={value} index={0}>
            Conheça as tecnologias usadas na aplicação
            {/* <Input type="text"  className={classes.input} /> */}
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
          <TabPanel value={value} index={4}>
            React Icons
          </TabPanel>
          <TabPanel value={value} index={5}>
            React Router Dom
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
