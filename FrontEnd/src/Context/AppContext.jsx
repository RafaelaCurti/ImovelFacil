import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import Api from "../Services/Api";
import { getLocalStorage, setLocalStorage } from "./Utils";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const user = getLocalStorage();
        if (user) {
            setUser(user);
            console.log('Usuário logado', user);
        }
    }, []);

    // Context/AppContext.js
    async function authenticate(email, password) {
        try {
            const response = await Api.post('/sessao', { email, password });
            console.log('Resposta da API:', response.data); // Adicione um log para depuração
            if (response.data.erro) {
                toast.error(response.data.message);
                return;
            }
            const { id, email, token } = response.data.user;
            const payload = { token, email, id };
            setUser(payload);
            setLocalStorage(payload);
            window.location.href = "/perfil";
        } catch (error) {
            console.error('Erro na autenticação:', error);
        }
    }

    function logout() {
        setUser(null);
        setLocalStorage(null);
    }

    return (
        <AppContext.Provider value={{ ...user, authenticate, logout }}>
            {children}
        </AppContext.Provider>
    )
}