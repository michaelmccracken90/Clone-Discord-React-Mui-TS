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

  
  // HTML AuthContextProvider
  return (
    <AuthContext.Provider value={{  selectedIndex, handleListItemClick, value, handleChange  }}>
      {props.children}
    </AuthContext.Provider>
  );
}