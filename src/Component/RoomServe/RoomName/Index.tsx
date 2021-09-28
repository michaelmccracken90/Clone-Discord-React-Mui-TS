// Import React
import React from 'react';

// Import Material UI
import {
  Box,
  IconButton,
  List,
  ListItem,

  ListItemText,
} from "@mui/material";

// Import Icons
import DeleteIcon from '@mui/icons-material/Delete';

import ButtonRoom from './ButtonServe/Index'

// Theme 
// import theme from '../../../Styles/Theme'
import {AuthContext} from '../../../Context/index'
export default function RoomName() {
  const {selectedIndex, handleListItemClick, value, handleChange} = React.useContext(AuthContext)
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
  function HadleTeste(){
    console.log('teste');
    
  }
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  return (
    <Box sx={{ height: 'calc(100vh - 98px)', }}>

      <List sx={{ width: '100%', maxWidth: 240, }} component="nav" aria-labelledby="nested-list-subheader">
        
        <ListItem secondaryAction={ <IconButton edge="end" aria-label="delete"> <DeleteIcon /> </IconButton>}>

          <ListItemText primary="Single-line item" />

        </ListItem>
<ButtonRoom  text='test' selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)} onChange={handleChange} index={1}/>
<ButtonRoom  text='test' selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)} onChange={handleChange} index={2}/>
<ButtonRoom  text='test' selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)} onChange={handleChange} index={3}/>
<ButtonRoom  text='test' selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)} onChange={handleChange} index={4}/>
<ButtonRoom  text='test' selected={selectedIndex === 5} onClick={(event) => handleListItemClick(event, 5)} onChange={handleChange} index={5} />


        

      </List>
    </Box>
  )
}