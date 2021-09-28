// Import React 
import React from 'react';

// Import for create Context
import { createContext, ReactNode,  } from "react";


// Tipoagem do que o context exportara
type AuthContextType = {
  value: number
  selectedIndex: number
  handleListItemClick: any
  handleChange: any
  // selectedIndex:  selectedIndex
 
}

type AuthContextProviderProps = {
  children: ReactNode;
  
  
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };
 

  

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  
  
  return (
    <AuthContext.Provider value={{  selectedIndex, handleListItemClick, value, handleChange  }}>
      {props.children}
    </AuthContext.Provider>
  );
}