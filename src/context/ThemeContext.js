import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [ darkMode, setDarkMode ] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false 
    );

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);