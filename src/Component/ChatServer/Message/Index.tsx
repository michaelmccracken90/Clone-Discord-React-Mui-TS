import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { IoIosAddCircle } from "react-icons/io";
import { IoIosGift } from "react-icons/io";
import { AiOutlineGif } from "react-icons/ai";
import { TiDocumentAdd } from "react-icons/ti";
import { GoSmiley } from "react-icons/go";
import theme from '../../../Styles/Theme'
import {AuthContext} from '../../../Context/index'
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Boot from './Boot/Index'

const useStyles = makeStyles({
  List:{
    borderLeft:'1px solid black'
  }
})
function refreshMessages(): MessageExample[] {
  const getRandomInt = (max: number) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}
type Props={
  boot?:boolean;
}
export default function FixedBottomNavigation(props: Props ) {
  
  
  
  const {value} = React.useContext(AuthContext)
  const ref = React.useRef<HTMLDivElement>(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());
  
  React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);
  function handle(event: any){
    event.target.style.color = '#ffff22';

  }
  function handleOf(event: any, ){
    event.target.style.color = theme.text.primary;
  }
 
const classes = useStyles(props)
  

  return (
    <Box sx={{ pb: 7 , position:'relative', maxHeight:'calc(100vh - 46px)'}} ref={ref} >
      <CssBaseline />
      <List sx={{
        width:'100%',
         maxHeight:'calc(100vh - 132px)',
          overflowY:'scroll',
           
           '::-webkit-scrollbar': {
            width: '8px',
            
          },
           '::-webkit-scrollbar-thumb': {
            backgroundColor:theme.background.tertiary,
            borderRadius:'4px',
            
          },
           '::-webkit-scrollbar-track': {
            backgroundColor:theme.background.primary,
            
          },
        
          
        
           
           }} disablePadding>
        {messages.map(({ primary, secondary, person, data, boot  }, index , ) => (
          <ListItem button key={index + person} className={classes.List} >
              {/* `1px solid ${theme.palette.primary.main}` */}
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={person} />
            </ListItemAvatar>
            <Box>
              <Box sx={{display: 'flex',  alignItems: 'center'}}>

              <Typography variant='h1' component='h1' sx={{fontSize:'16px', color:'#fff', fontWeight:'700'}} > {primary}</Typography>
              
              <Typography variant='body1'  component='h1' sx={{display:'flex', alignItems:'center', ml:'10px' }}> {data}</Typography>
              <Boot selected={boot}> Boot </Boot>
              </Box >
              <Typography variant='h1' component='h1' sx={{fontSize:'16px', color:'#ffffffcc', fontWeight:'400'}} > {secondary}</Typography>

              

              
            </Box>
          </ListItem>
        ))}
      </List>
      <Box sx={{height:'86px', width:'100%'}}></Box>
      <Box sx={{ 
        position: 'absolute',
        bottom: 0,
        left: 0, 
        right: 0, 
        width:'100%',
        backgroundColor:theme.background.primary,
        padding:'10px 16px 24px  16px  '

      }}>
      <Paper component="form" sx={{
         backgroundColor:theme.background.input,
          p: ' 2px 4px ',
          display: 'flex',
          alignItems: 'center',
        boxShadow:'none',
        
        }}
        
          
        elevation={3}>
     
      <IconButton sx={{ p: ' 10px', color: theme.text.primary }} aria-label="menu" >
        <IoIosAddCircle />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Conversed"
        inputProps={{ 'aria-label': 'Conversed' }}
        multiline
      />
      <Tooltip title='Reforce os parças! de Vantagens superbacanas com bate papo Nitro ' arrow>
      <IconButton type="submit" sx={{ p: '10px', color: theme.text.primary }} aria-label="search">
        <IoIosGift />

      </IconButton>
</Tooltip>
      
      <IconButton color="primary" sx={{ p: '10px', color: theme.background.primary }} aria-label="directions">
        <Box sx={{ backgroundColor:theme.text.primary, width:30, height:22, borderRadius:1 }}>
        <AiOutlineGif />
        </Box>
      </IconButton>

      <IconButton color="primary" sx={{ p: '10px', color: theme.text.primary }} aria-label="directions">
        <TiDocumentAdd />
      </IconButton>

      <IconButton color="primary" sx={{ p: '10px', color: theme.text.primary,   }} 
      aria-label="directions" 
      onMouseOver={handle}
      onMouseOut={handleOf}
      value={1}
      >
      

        <GoSmiley />
      </IconButton>
    
      </Paper>
      </Box>
    </Box>
  );
}

interface MessageExample {
  primary: string;
  secondary: string;
  person: string;
  data: string;
  boot?:boolean;
  
  
}

const messageExamples: readonly MessageExample[] = [
  {
    primary: 'Jackson Reis',
    secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: '/static/images/avatar/5.jpg',
    data:'01/10/2021',
    boot:true
  },
  {
    primary: 'Fabio Aguiar',
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: '/static/images/avatar/1.jpg',
    data:'01/10/2021'
  },
  {
    primary: 'Kaua Bernardes',
    secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: '/static/images/avatar/2.jpg',
    data:'01/10/2021'
  },
  {
    primary: 'Pablo Henrique',
    secondary: 'I have the tickets to the ReactConf for this year.',
    person: '/static/images/avatar/3.jpg',
    data:'01/10/2021'
  },
  {
    primary: "Henrique Fernandez",
    secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
    person: '/static/images/avatar/4.jpg',
    data:'01/10/2021'
  },
  {
    primary: 'Fernando Ferreira',
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: '/static/images/avatar/5.jpg',
    data:'01/10/2021'
  },
  {
    primary: 'Maicon Antonio',
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: '/static/images/avatar/1.jpg',
    data:'01/10/2021'
  },
];

// const IconsSmiles ={
//   {
    
//   }
// }