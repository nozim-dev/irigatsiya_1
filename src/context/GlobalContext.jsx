import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

export const ThemeContext = createContext();

export const GlobalContext = ({ children }) => {
   
    useEffect(() => {
        let ws_l = localStorage.getItem("ws_l");
        if (ws_l != null) {
            setLang(ws_l);
        }
    }, [])
    const [lang, setLang] = useState('uz')
    return (
        <ThemeContext.Provider value={{ lang, setLang }}>
            {children}
        </ThemeContext.Provider>
    );
};