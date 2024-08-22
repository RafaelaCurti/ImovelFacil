// import Banner from "./Componentes/Banner/Banner.jsx";
// import Footer from "./Componentes/Footer/Footer.jsx";
// import Header from "./Componentes/Header/Header.jsx";
// import Cadastro from "./Pages/Cadastro/Cadastro.jsx";
// import Home from "./Pages/Home/Home.jsx";
// import Imobi from "./Pages/Imobi/Imobi.jsx";
// import Error from "./Pages/Error/Error.jsx";
// import Login from "./Pages/Login/Login.jsx";
import Global from "./styles/Global.js";
import { Fragment } from "react";
import RotaApp from "./Rotas/index.jsx";
function App() {
  return (
    <div>
      {/* <Header/> */}
      {/* <Error/> */}
      {/* <Cadastro/> */}
      {/* <Login/> */}
      {/* <Imobi/> */}
      {/* <Banner/> */}
      {/* <Home/> */}
      {/* <Footer/> */}
      {/* <Global/> */}
      <Fragment>
        <RotaApp>
        </RotaApp>
        <Global />
      </Fragment>
    </div>
  );
}

export default App;
