//USE ESTATE Y USE EFFECT

import React, { createContext, useContext, useState, useEffect } from 'react';

// CREA EL CONTEXTO CON VALOR POR DEFECTO
const ThemeContext = createContext({
    theme: 'light', // ESTADO INICIAL
    toggleTheme: () => { }, // FUNCIÓN PARA CAMBIAR EL TEMA
});

// HOOK PARA USAR EL CONTEXTO
export const useTheme = () => useContext(ThemeContext);

// PROVEEDOR DEL CONTEXTO PARA ENVOLVER COMPONENTES
export const ThemeProvider = ({ children }) => {

    // ESTADO DEL TEMA, AUTO DETECTA EL ESQUEMA DE COLOR DEL SISTEMA
    const [theme, setTheme] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    );

    // EFECTO PARA APLICAR EL TEMA AL BODY DEL DOCUMENTO
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    // FUNCIÓN PARA CAMBIAR EL TEMA
    const toggleTheme = () => {
        setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
    };

    // ESCUCHA CAMBIOS EN EL ESQUEMA DE COLOR DEL SISTEMA
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            setTheme(mediaQuery.matches ? 'dark' : 'light');
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // DEVUELVE EL ESTADO DEL TEMA Y LA FUNCIÓN PARA CAMBIARLO
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};