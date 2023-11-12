import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('theme');

export const ThemeProvider = ({children}) => {

  const [theme, setTheme] = useState('Dark');

  const toggleTheme = () => theme==='Dark' ? setTheme('Light') : setTheme('Dark'); 

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(){
  return useContext(ThemeContext);
}
