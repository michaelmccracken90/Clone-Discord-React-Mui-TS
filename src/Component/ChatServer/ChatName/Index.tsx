// Import React
import * as React from 'react';
// Material UI
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, Typography, } from '@mui/material';
// Import Context of state application
// Import Context of Theme application
import theme from '../../../Styles/Theme';
import { ImBook } from "react-icons/im";
import { FaCircle } from "react-icons/fa";
import InputBase from '@mui/material/InputBase';
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
export default function ChatName(){
  return(
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
  )
}