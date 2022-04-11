import React, { useState, createContext, Children } from 'react';

//Sistema de autenticacion.
export const AuthContext = createContext({
    auth: undefined,
    logout: () => null,
});

export function AuthProvider(props) {
    const { children } = props;
    const [auth, setAuth] = useState(null);

    const logout = () => {
        console.log("Cerra el ojete")
        setAuth(null)
    }

    const data = {
        auth,
        logout,
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
} 