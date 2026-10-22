import {useState, useContext, createContext} from 'react';

const themeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState('light');

    return (
        <themeContext.Provider value={{ theme, setTheme }}>
            {/* Your app components here */}
        </themeContext.Provider>
    );
}