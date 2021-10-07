import * as React from 'react';

interface User {
  email: string
  password:string
}
export default function Teste(){
  const User : User ={
    email:'',
    password: ''

  }
 const [user, setUser]= React.useState(User)
  return(
    <form
    
    onSubmit={(e: React.SyntheticEvent) => {
      e.preventDefault();
      const target = e.target as typeof e.target & {
        email: { value: string };
        password: { value: string };
      };
      User.email = target.email.value; // typechecks!
      User.password = target.password.value; // typechecks!
      // etc...
      setUser(User)

      console.log(User.email);
      
      
    }}
  >
    <div>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
    </div>
    <div>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
    </div>
    <div>
      <input type="submit" value="Log in" />
    </div>
  {user.email}
  {user.password}
  
  </form>
  

  )
}