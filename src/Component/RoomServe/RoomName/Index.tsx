// Import React
import React from 'react';
import { RiAddLine } from "react-icons/ri";
// Import Material UI
import {
  Box,
  IconButton,
  List,
  ListItem,

  ListItemText,
} from "@mui/material";

// Import Icons
import theme from '../../../Styles/Theme'
import Tooltip from '@mui/material/Tooltip';
import ButtonRoom from './ButtonServe/Index'

// Theme 
// import theme from '../../../Styles/Theme'
import {AuthContext} from '../../../Context/index'
export default function RoomName() {
  const {selectedIndex, handleListItemClick,  handleChange} = React.useContext(AuthContext)
  // const [selectedIndex, setSelectedIndex] = React.useState(0);

  // const handleListItemClick = (
  //   event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  //   index: number,
  // ) => {
  //   console.log('cliquei');
    
  //   setSelectedIndex(index);
  // };
  // const [selectedIndex, setSelectedIndex] = React.useState(0);

  // const handleListItemClick = (
  //   event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  //   index: number,
  // ) => {
  //   setSelectedIndex(index);
  // };
  
  

  function IconToolTips(){
    return(
<Tooltip title='Add Friends'><RiAddLine /></Tooltip>
    )
  }
  return (
    <Box sx={{ height: 'calc(100vh - 98px)', }}>

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