import { createContext, useCallback, useMemo, useEffect, useState } from 'react';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem('user'));

    const login = useCallback((resp) => {
        window.localStorage.setItem('user', JSON.stringify(resp))  
        setIsAuthenticated(true); 
    }, []);

    // Define una función para cerrar sesión
    const logout = useCallback(() => {
        // Elimina la información de autenticación de localStorage
        window.localStorage.removeItem('user');
        setIsAuthenticated(false);
    }, []);

    // Comprueba si el usuario está autenticado al cargar la página
    useEffect(() => {
        const user = window.localStorage.getItem('user');
        if (user) {
            setIsAuthenticated(true);
        }
    }, []);

    const value = useMemo(() => ({
        login,
        logout,
        isAuthenticated
    }), [isAuthenticated, login]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}