// Import React
import React from 'react';
// Import React Icons
import { RiAddLine } from "react-icons/ri";
// Import Material UI
import Tooltip from '@mui/material/Tooltip';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
// Import Context State
import {AuthContext} from '../../../Context/index'

// Import Context Theme Styled
import theme from '../../../Styles/Theme'

// Import Component Interno
import ButtonRoom from './ButtonServe/Index'

// Component de exportação
export default function RoomName() {
  const {selectedIndex, handleListItemClick,  handleChange, id, open, anchorEl} = React.useContext(AuthContext)
// Component Interno
  function IconToolTips(){
    // HTML Component Interno
    return(
<Tooltip title='Add Friends'><RiAddLine /></Tooltip>
    )
  }
  // HTML EXPORT
  return (
    <Box sx={{ height: 'calc(100vh - 98px)', }}>
      <Popper id={id} open={open} anchorEl={anchorEl} transition >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={150}>
            <Box sx={{
               
               p: 1,
               bgcolor: theme.background.tertiary,
               margin:'7px 10px',
               height: '300px',
               width:'220px',
               borderRadius:'5px',
               color:'#fff', 
               display:'flex',
               alignItems: 'center',
               justifyContent: 'center',
               
               }}>
              In Construction Popper
            </Box>
          </Fade>
        )}
      </Popper>

      <List sx={{ width: '100%', maxWidth: 240, color:theme.text.primary }} component="nav" aria-labelledby="nested-list-subheader">
        
        <ListItem secondaryAction={ <IconButton edge="end" aria-label="delete" sx={{color:theme.text.primary}}> <IconToolTips/> </IconButton>}>

          <ListItemText primary="canal de texto" sx={{textTransform: 'uppercase'}}/>

        </ListItem>
<ButtonRoom  text='React JS' selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)} onChange={handleChange} index={1}/>
<ButtonRoom  text='Material UI' selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)} onChange={handleChange} index={2}/>
<ButtonRoom  text='TypeScript' selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)} onChange={handleChange} index={3}/>
<ButtonRoom  text='React Icons' selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)} onChange={handleChange} index={4}/>
<ButtonRoom  text='React Router Dom' selected={selectedIndex === 5} onClick={(event) => handleListItemClick(event, 5)} onChange={handleChange} index={5} />


        

      </List>
    </Box>
  )
}