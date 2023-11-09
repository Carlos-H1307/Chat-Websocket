import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('theme');

export const ThemeProvider = ({children}) => {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => theme=='dark' ? setTheme('light') : setTheme('dark'); 

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(){
  return useContext(ThemeContext);
}
