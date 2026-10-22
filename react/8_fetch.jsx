import {createContext, useContext, useEffect, useState} from "react";

const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Dashboard />
    </ThemeContext.Provider>
  );
}

function Dashboard() {
  const {theme, setTheme} = useContext(ThemeContext);

    return (
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Current theme: {theme}
        </button>
    );
}

export default App;