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

  async function authenticate(email, password) {
    Api.post('/sessao', { email, password })
      .then((response) => {
        if (!response.data.erro === true) {
          toast(response.data.message)
        }
        const id = response.data.user.id;
        const email = response.data.user.email;
        const payload = { token: response.data.token, email, id }
        setUser(payload);
        setLocalStorage(payload);
        window.location.href = "/perfil"
      }).catch((error) => {
        console.log('Erro: App Error' + error);
      });
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