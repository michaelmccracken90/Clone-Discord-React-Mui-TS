// Import Material Ui, Criando contexto de Theme
import { createTheme } from '@mui/material/styles';
// Typando os novos temas criados 
declare module '@mui/material/styles' {
  interface Theme {
    background: {
      primary: React.CSSProperties['color'];
      secondary: React.CSSProperties['color'];
      tertiary: React.CSSProperties['color'];
      active: React.CSSProperties['color'];
      input: React.CSSProperties['color'];
      user: React.CSSProperties['color'];
      
    },
    text:{
      primary: React.CSSProperties['color'];
    }
  }
  interface ThemeOptions {
    background: {
      primary: React.CSSProperties['color'];
      secondary: React.CSSProperties['color'];
      tertiary: React.CSSProperties['color'];
      active: React.CSSProperties['color'];
      input: React.CSSProperties['color'];
      user: React.CSSProperties['color'];
      
    },
    text:{
      primary: React.CSSProperties['color'];
    }
  }

}
// A custom theme for this app
const theme = createTheme({
  text:{
primary:""
  },

  background: {
    primary: '',
    secondary: '',
    tertiary: '',
    active: '',
    input: '',
    user: ''

  },
  palette: {
    primary: {
      main: '',
    },
    secondary: {
      main: '',
    },

  },
});

// Exportando Theme
export default theme;
