import { createContext, useState } from "react";

type Theme = 'dark' | '';

interface AppContextProps {
  theme: Theme
  alterTheme: () => void
}

const AppContext  = createContext<AppContextProps>({});

export function AppProvider(props: any) {
  const [theme, setTheme] = useState<Theme>('dark');

  function alterTheme() {
    setTheme(theme === 'dark' ? '' : 'dark');
  }

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