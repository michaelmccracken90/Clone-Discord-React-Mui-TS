import React, {useState} from 'react';
// Import Component Material UI
import { Avatar, Box, IconButton, List, ListItem, ListItemIcon,  ListItemSecondaryAction,  Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BsGearFill } from "react-icons/bs";
import { BsMicFill } from "react-icons/bs";
import { BiHeadphone } from "react-icons/bi";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
// Import Context Theme Styled
import theme from '../../../Styles/Theme'
const useStyles = makeStyles({
  icon:{
    maxWidth: '24px',
    maxHeight: '24px',
  }
  });
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.background.user}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  

  
// Export Componenet 
export default function UserName() {
  const [openMic, setOpenMic]= useState(false)
  const [openFone, setOpenFone]= useState(false)

  function HandleMic(){
    setOpenMic(!openMic)
  }
  function HandleFone(){
    setOpenMic(!openMic)
    setOpenFone(!openFone)
  }
  const classes = useStyles()
  // HTML Exported
  return (
    <Box sx={{
      maxWidth:'240px',
      height: '52px',
      background: theme.background.user
    }}>
      <List sx={{margin:0, padding:0}}>

      <ListItem>
        <Box sx={{display: 'flex', justifyContent:'center', alignItems:'center', color:theme.text.primary}}>
        <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        sx={{maxWidth:'46px',marginRight:'10px'}}
      >
        <Avatar sx={{width:'36px', height:'36px' }}>

</Avatar>
      </StyledBadge>
          
          <Box >

          <Typography sx={{fontSize:'14px'}}>
            ReisSouza
          </Typography>
          <Typography sx={{fontSize:'10px'}}>
            #34548
          </Typography>

          </Box>
        </Box>

             <ListItemSecondaryAction sx={{alignItems: 'center', justifyContent:'center', display:'flex'}}>
      <ListItemIcon sx={{minWidth:40}}>
        <Tooltip title='Silencial' arrow>

      <IconButton sx={{ marginRight: '5px', padding: 0, color:theme.text.primary, maxWidth:'16px', }}  onClick={HandleMic} >
      {openMic ?<BsMicFill className={classes.icon} />  : <BiHeadphone className={classes.icon} /> }
      
      </IconButton>
      </Tooltip>
      <Tooltip title='Desativa audio'arrow>
        
      <IconButton sx={{marginRight: '5px', padding: 0, color:theme.text.primary, maxWidth:'16px', gap:5}} onClick={HandleFone}  >
      {openMic ?<BiHeadphone className={classes.icon} />  : <BsMicMuteFill className={classes.icon} /> }

      
      </IconButton>
      </Tooltip>
      <Tooltip title='Configurações de usuario'arrow>
        
      <IconButton sx={{ margin: 0, padding: 0, color:theme.text.primary, maxWidth:'16px', gap:5}}  >
        
        <BsGearFill className={classes.icon}/>
      </IconButton>
      </Tooltip>
     
      
    </ListItemIcon>

  </ListItemSecondaryAction>
        </ListItem>
        </List>
    </Box>
  )
}