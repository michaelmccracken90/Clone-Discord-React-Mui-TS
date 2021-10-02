// Import Img Logo

// Import React 
import * as React from 'react';

// Import Material UI Styles
import { makeStyles } from '@mui/styles';
import theme from '../../../../Styles/Theme'
// Import Component Material UI Bottom
import Typography, { TypographyProps } from '@mui/material/Typography';

// Tipando as propriedades que o componente recebera
interface Props {
  selected?: Boolean;
  
}

// Estilo do component
//  para manter a estilização organizada, entra apenas dois niveis dentro de cada escopo,
const useStyles = makeStyles({
  root:{
    height: '20px',
    backgroundColor:theme.palette.primary.main,
    padding:'0 5px',
    justifyContent:'center',
    alignItems: 'center',
    marginLeft:'10px',
    borderRadius:'5px',
    color:'#fff',
    
    display: (props: Props) =>
      props.selected  ? 'flex' : 'none'
  }

  
});

// Cria se entao um component novo, reutilizando o button component do material ui,
// Aonde esse component receber a props criada e as props do componenet do material UI
export default function ButtonServices(props: Props & Omit<TypographyProps, keyof Props>) {
  // Estancio todas as proprias dentro de uma unica constante, e passo essa props pro useStyles
  const { selected, ...other } = props;
  const classes = useStyles(props);
  // Return então um button, com estilo criado, e todos estilos ja definidos pelo  material ui com ...other 
  // HTML
  return <Typography variant='caption' className={classes.root} {...other} />

}
