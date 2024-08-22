import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Header from "../Componentes/Header/Header";
import Footer from "../Componentes/Footer/Footer";
import Error from "../Pages/Error/Error";
import Imobi from "../Pages/Imobi/Imobi";
import Login from "../Pages/Login/Login";
import Cadastro from "../Pages/Cadastro/Cadastro";
// import Perfil from "../pages/Perfil";
// import PrivateRoute from "../components/PrivateRoute";

const RotaApp = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/imovel" element={<Imobi />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="*" element={<Error />} /> {/* Rota de erro para qualquer caminho não definido */}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default RotaApp;
