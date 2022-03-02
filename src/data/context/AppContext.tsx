import { createContext, useEffect, useState } from "react";

interface AppContextProps {
  theme: string
  alterTheme: () => void
}

const AppContext  = createContext<AppContextProps>({});

export function AppProvider(props: any) {
  const [theme, setTheme] = useState('dark');

  function alterTheme() {
  const newTheme = theme === 'dark' ? '' : 'dark';
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme);
  }, [])

  return (
    <AppContext.Provider value={{
      theme,
      alterTheme
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext;