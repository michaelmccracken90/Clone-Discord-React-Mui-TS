// Import React 
import React from 'react';

// Import for create Context
import { createContext, ReactNode,  } from "react";


// Tipagem do que o context exportara
type AuthContextType = {
  value: number
  selectedIndex: number
  handleListItemClick: any
  handleChange: any
  handleClick: any
  id:any
  open: boolean
  anchorEl: HTMLElement | null
 
}

type AuthContextProviderProps = {
  children: ReactNode;
}

// Exportando context 
export const AuthContext = createContext({} as AuthContextType);

// Exportando component contexto provider
export function AuthContextProvider(props: AuthContextProviderProps) {

  // Context for Select list item and page of render
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  // Context for  change Page
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [openModal, setOpenModal] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenModal((previousOpen) => !previousOpen);
    setOpen(!open)
  };

  const canBeOpen = openModal && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  
  // HTML AuthContextProvider
  return (
    <AuthContext.Provider value={{  selectedIndex, handleListItemClick, value, handleChange, handleClick, id, open, anchorEl}}>
      {props.children}
    </AuthContext.Provider>
  );
}