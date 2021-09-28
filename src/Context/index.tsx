// import React, { useState, ReactNode } from 'react'
// export const AuthContext = React.createContext({});
// interface Props {
//   name: string,
//   children: ReactNode,
// }
// export const  AuthProvider =(props : Props) => {
//  const [user, setUser] = useState({
//    name: 'Reis',
//  });


//   return(
//     <AuthContext.Provider value={{user, setUser}}>
//       {props.children}
//     </AuthContext.Provider>
//   )
// }
import React from 'react';
import { createContext, ReactNode, useState } from "react";
// import { auth, firebase } from "../services/firebase";

type User = {
  name: string;
}


type AuthContextType = {
  value: number
  user: User | undefined;
  Handle () : Promise < void >
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
  const [user, setUser] = useState<User>({
    name:'Reis de Souza'
  });

  async function Handle(){
    return(
      setUser({
        name:'Matheus'
      })
    )
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  
  
  return (
    <AuthContext.Provider value={{ user, Handle, selectedIndex, handleListItemClick, value, handleChange  }}>
      {props.children}
    </AuthContext.Provider>
  );
}