// Import Img Logo
import Logo from '../../../Assets/logo.svg'

// Import React 
import * as React from 'react';

// Import Material UI Styles
import { makeStyles } from '@mui/styles';

// Import Component Material UI Bottom
import Button, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

// Tipando as propriedades que o componente recebera
interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotification?: boolean;
  mentions?: number;
}

// Estilo do component
//  para manter a estilização organizada, entra apenas dois niveis dentro de cada escopo,
const useStyles = makeStyles({
  root: {
    boxSizing:'border-box',
    border: 0,
    outline: 0,
    fontFamily: 'Roboto',
    minWidth:48,


    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    flexShrink: 0,

    width: 48,
    height: 48,
    borderRadius: '50%',

    marginBottom: 8,

    cursor: 'pointer',
    position: 'relative',


    // Como o makeStyle se encontra dentro do mesmo escopo que a interface de props consigo passar a props dentro 
    // De uma propriedade do estilo e interagir com elas,  aonde chama um function anomica que dentro dela passo a props, 
    // e ele nas retorna algo, podendo passar condicoes ternarias 
    // Condição ternarias ? if, então faça isso, : else , se nao faça isso. e && if else

    backgroundColor: (props: Props) =>
      props.isHome
        ? '#6e86d6'
        : '#36393f',

    '&:hover': {
      backgroundColor: (props: Props) =>
        props.isHome
          ? '#6e86d6'
          : '#36393f',
          '&::before': {
            height: 20,
            top: 'calc(50% - 10px)',

          }
    },

    '& img': {
      width: 24,
      height: 24,
    },
    '&::before': {
      fontFamily: 'Roboto',
      width: 9,
      height: 9,

      position: 'absolute',
      left: -17,
      top: 'calc(50% - 4.5px)',

      backgroundColor: '#ffffff',
      borderRadius: '2px',

      content: '""',
      // display:'inline',
      display: (props: Props) =>
      props.hasNotification  ? 'inline' : 'none'

    },
    '&::after': {

      textAlign:'right',
      alignItems:'center',
      justifyContent:'center',
      fontFamily: 'Roboto',

      backgroundColor: '#f84a4b',
      minWidth: '25px',
      width: 'auto',
      height: 28,

      padding: '2px  ',


      position: 'absolute',
      bottom: -4,
      right: -4,

      borderRadius: 12,
      border: ' 4px solid #292b2f',


      fontSize: 13,
      fontWeight: 'bold',
      color: "#fff",

      // Para utilizar content, precisa se passa passar aspa pelo fato do style component ,
      //  e dentro de aspas, passamos o valor de content "" 
      // Lembrando que para utilizar a props dentro de content precisamos interpolar com ${}, dentro dele podemos passar
      // Qualquer codigo JS

      content: (props: Props) => `"${props.mentions && props.mentions}"`,
      //  a logica a baixo diz chama  a props, e passar o valor do content dentro de uma interpolação que diz
      //  Que se tiver props.mentions, então retorna props.mentions
      display: (props: Props) =>
      // Logica  abaixo bem semelhante a de cima, mudanças uma unica situação que se props mentions for maior que 0
      // Então display e Flex, se nao e none
        props.mentions && props.mentions > 0 ? 'flex' : 'none'

    },

    // Passando transição apenas para propriedade especificas do CSS
    transition: 'borderRadius .2s, backgroundColor .2s',

    // Passando  observação para duas pseudo classes
    '&:hover, &.selected':{
      borderRadius:16,
      backgroundColor:(props: Props) =>
      props.isHome
        ? '#36393f'
        : '#6e86d6',
    }

  },
});

// Cria se entao um component novo, reutilizando o button component do material ui,
// Aonde esse component receber a props criada e as props do componenet do material UI
export default function ButtonServices(props: Props & Omit<MuiButtonProps, keyof Props>) {
  // Estancio todas as proprias dentro de uma unica constante, e passo essa props pro useStyles
  const { isHome, hasNotification, mentions, selected, ...other } = props;
  const classes = useStyles(props);
  // Return então um button, com estilo criado, e todos estilos ja definidos pelo  material ui com ...other 
  // HTML
  return <Button className={classes.root} {...other}>
    {isHome && <img src={Logo} alt='RocktSeet' />}
  </Button>;

}


