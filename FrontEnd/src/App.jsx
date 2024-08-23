// App.js
import Global from "./styles/Global.js";
import { Fragment } from "react";
import RotaApp from "./Rotas/index.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AppContextProvider } from "./Context/AppContext";

function App() {
  return (
    <Fragment>
      <AppContextProvider>
        <RotaApp />
      </AppContextProvider>
      <Global />
      <ToastContainer />
    </Fragment>
  );
}

export default App;
