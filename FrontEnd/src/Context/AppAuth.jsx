// Context/AppAuth.jsx
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(null);

    const authenticate = async (email, password) => {
        // Lógica de autenticação
        // Atualizar authState
    };

    return (
        <AuthContext.Provider value={{ authenticate, authState }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
