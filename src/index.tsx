import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './Context/Styles/index.css'

import { ThemeProvider } from '@mui/material/styles';
import theme from './Styles/Theme';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthContextProvider } from './Context';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AuthContextProvider>
        <App />
        </AuthContextProvider>
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

