import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Inicio from "../templates/Inicio";
import Mesas from "../templates/Mesas";
import Pruebas from "../components/Pruebas"; //prueba de fondo
import TomaDePedidos from "../templates/TomaDePedidos";
import Error from "../templates/Error";

// import "../menu.json";
import productsMenu from "../productsMenu";


const App = () => {
 

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/mesas" component={Mesas} />
        <Route exact path="/toma-de-pedidos">
            <TomaDePedidos productsMenu={productsMenu} />
        </Route>
        
      
        <Route exact path="/pruebas" component={Pruebas} /> pruebaaa
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
