import { createContext, useContext, useState, useEffect } from 'react';
import Api from "../services/Api";
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext('auth');

export const AuthProvider = ({children}) => {

  let   storageToken    = sessionStorage.getItem('token');
  let   isAlreadyAuth   = false;
  const [user, setUser] = useState(storageToken);
  
  if(user){
    isAlreadyAuth = true;
  }

  const [isAuth, setAuth]         = useState(isAlreadyAuth);
  const [isLoading, setIsLoading] = useState(false);



  async function logout(){
    sessionStorage.removeItem('token');
    setAuth(false);

    return(true);
  }


  return (
    <AuthContext.Provider value={{isAuth, isLoading, setAuth, setIsLoading, user, setUser, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  return useContext(AuthContext);
}
