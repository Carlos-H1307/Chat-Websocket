import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext('theme');

export const ThemeProvider = ({children}) => {
  let storageTheme = sessionStorage.getItem('theme');

  if( !storageTheme ){
    storageTheme = 'Dark';
  }

  const [theme, setTheme] = useState(storageTheme);

  function toggleTheme(){
    if(theme==='Dark'){
      sessionStorage.setItem('theme', 'Light');
      setTheme('Light');
    }else{
      sessionStorage.setItem('theme', 'Dark');
      setTheme('Dark');
    }

  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(){
  return useContext(ThemeContext);
}
