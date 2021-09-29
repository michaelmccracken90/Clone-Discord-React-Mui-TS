import { Box } from "@mui/material";
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

// Importe Context Theme Styled
import theme from '../../../Styles/Theme'

// Component Exported
export default function ServeName() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  // HTML Exported
  return (
    <Box sx={{
      height: '46px',
      borderBottom: `1px solid ${theme.background.tertiary}`
    }}>
      <ListItemButton onClick={handleClick}>
        
        <ListItemText primary="Servidor DEV"  sx={{color: theme.text.primary,}}/>
        {open ? <ExpandLess sx={{color: theme.text.primary}} /> : <ExpandMore sx={{color: theme.text.primary}}/>}
      </ListItemButton>

    </Box>
  )
}