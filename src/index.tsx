// Import React 
import React from 'react';
// Import React Dom 
import ReactDOM from 'react-dom';
// Importando a aplicação
import App from './App';
// Impontando Provedor de theme do Material Ui 
import { ThemeProvider } from '@mui/material/styles';
// Importando Theme Create
import theme from './Styles/Theme';
// Import Reset CSS Material
import CssBaseline from '@mui/material/CssBaseline';
// Import Context State 
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

