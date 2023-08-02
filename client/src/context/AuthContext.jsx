import { createContext, useContext, useState, useEffect } from 'react';
import Api from "../services/Api";

const AuthContext = createContext('auth');

export const AuthProvider = ({children}) => {

  const [auth, setAuth]           = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser]           = useState(null);

  useEffect(() => {

    Api.get('/user').then((res) => {
      setUser(res.data.user);
      setAuth(true);
      setIsLoading(false);
    }).catch(() => {
      setIsLoading(false);
    })

  }, [])

  return (
    <AuthContext.Provider value={{isAuth: auth, isLoading, setAuth, setIsLoading, user}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  return useContext(AuthContext);
}
