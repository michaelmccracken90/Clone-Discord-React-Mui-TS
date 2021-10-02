// Import React
import * as React from 'react';
// Material UI
import Message from './Message/Index'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Grid, IconButton, Typography, } from '@mui/material';
// Import Context of state application
import { AuthContext } from '../../Context';
// Import Context of Theme application
import theme from '../../Styles/Theme';
import { ImBook } from "react-icons/im";
import { FaCircle } from "react-icons/fa";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0.2),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  right:0,
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: theme.spacing(1),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

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
        display:'flex'
      }}>
        <Box sx={{flexGrow:1, display: 'flex',  alignItems: 'center', pl:'15px'}}>
          <ImBook/>
          <Typography variant='body2'  sx={{ml:'5px', color:'#fff', fontWeight:'700'}}>
            Boas Vindas ao Canal de Texto

          </Typography>
        </Box>
        <Box sx={{display:'flex' ,
        [theme.breakpoints.down('lg')]: {
          display:'none'
        },
      
      }}>

          <IconButton>
            <FaCircle/>
          </IconButton>

          <IconButton>
            <FaCircle/>
          </IconButton>

          <IconButton>
            <FaCircle/>
          </IconButton>

          <IconButton>
            <FaCircle/>
          </IconButton>

          <Search sx={{ margin:'5px 0'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconButton>
            <FaCircle/>
          </IconButton>
          <IconButton>

            <FaCircle/>
          </IconButton>

          </Box>
      </Box>
      
      <Box sx={{
        display: 'flex',
        height: 'calc(100vh - 46px)',
      }}
      >
        <Box sx={{
          width: '100%',
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
          [theme.breakpoints.down('lg')]: {
            display:'none'
          },
        }}
        />
      </Box>
    </Grid>
  );
}
