// Import React
import * as React from 'react';
// Material UI
import ChatMessage from './ChatMessage';
import ChatName from './ChatName/Index'
import  {Grid}  from '@mui/material';

// Import Context of Theme application
import theme from '../../Styles/Theme';

// Component of exportation
export default function ChatServe() {

  return (
    <Grid item xs
      sx={{
        background: theme.background.primary,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        color: theme.text.primary,
        padding:0
      }}
    >
      <ChatName/>
      <ChatMessage/>
    </Grid>
  );
}
