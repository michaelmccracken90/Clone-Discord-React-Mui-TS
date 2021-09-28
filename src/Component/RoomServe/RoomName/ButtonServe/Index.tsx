import React from 'react';
// Import Material UI Styles
import { makeStyles } from '@mui/styles';
import Tooltip from '@mui/material/Tooltip';
// Import Component Material UI Bottom
import ListItemButton, {ListItemButtonProps} from '@mui/material/ListItemButton';
import { IconButton, ListItemIcon, ListItemSecondaryAction, ListItemText } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
// Tipando as propriedades que o componente recebera

// Estilo do component
//  para manter a estilização organizada, entra apenas dois niveis dentro de cada escopo,

const useStyles = makeStyles({


 
});
type Event ={
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
}
interface Props{
  text: string,
  index: number,
  
  



}
// Cria se entao um component novo, reutlizando o buttom component do material ui,
// Aonde esse component receber a props criada e as props do componenet do material UI
export default function ButtonServices(props: Props  & Omit<ListItemButtonProps, keyof Props> ) {
  

  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
 
  // Estancio todas as proprias dentro de uma unica constante, e passo essa props pro useStyles
  
  const classes = useStyles();
  // Return então um button, com estilo criado, e todos estilos ja definidos pelo  material ui com ...other 
  // return <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}
  return <ListItemButton selected={props.selected} onClick={props.onClick} onChange={props.onChange}  {...a11yProps(props.index)}
  sx={{
    position: 'relative',
    paddingRight: '50px',
    '& .Teste': {
      display:'none'
    },
    '&:hover': {
      '& .Teste ' : {
        zIndex: 10,
        display: 'block',
        '&:hover': {
        }
      },
    }
  }}
>
  <ListItemIcon sx={{
    margin: 0,
    padding: 0,
    minWidth: 'auto',
  }}>
    <SendIcon />
  </ListItemIcon>
  
  <ListItemText primary= {props.text} />
  
  <ListItemSecondaryAction className='Teste'>

    <ListItemIcon>
      <Tooltip title='config'>

      <IconButton>

      <SendIcon sx={{ margin: 0, padding: 0,  }} />
      </IconButton>
      </Tooltip>
      <IconButton>

      <SendIcon sx={{ margin: 0, padding: 0,  }} />
      </IconButton>
      
    </ListItemIcon>

  </ListItemSecondaryAction>

</ListItemButton>

}

