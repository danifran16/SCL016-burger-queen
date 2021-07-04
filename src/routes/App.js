import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Inicio from "../templates/Inicio";
import Mesas from "../templates/Mesas";
import Pruebas from "../components/Pruebas"; //prueba de fondo
import TomaDePedidos from "../templates/TomaDePedidos";
import Error from "../templates/Error";

import Comanda from "../components/Comanda";

// import "../menu.json";
import productsMenu from "../productsMenu";


const App = () => {

  const [comanda,agregarProductos] = useState([]);
//     { id: 1, name: "te", price: 400, type: "bebestibles"},
//     { id: 2, name: "cafe", price: 500, type: "bebestibles"},
//     { id: 3, name: "jugo", price: 1000, type: "bebestibles"},
//     { id: 4, name: "limonada", price: 1500, type: "bebestibles"},
// ]);
const agregarProductosAComanda = (idProducto, nombre) =>{
        console.log(idProducto, nombre);
  //       // SI LA COMANDA NO TIENE ELEMENTOS, SE AGREGA UNO
  //       if (comanda.length===0){
  //         agregarProductos([{id:idProducto, nombre:nombre, cantidad: 1}]);
  //       }
    }
 

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/mesas" component={Mesas} />
        <Route exact path="/toma-de-pedidos">
            <TomaDePedidos 
                productsMenu={productsMenu}
                agregarProductosAComanda={agregarProductosAComanda}
            />
            <Comanda comanda={comanda}/>
        </Route>
        
      
        <Route exact path="/pruebas" component={Pruebas} /> pruebaaa
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
