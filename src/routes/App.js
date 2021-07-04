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
const agregarProductosAComanda = (idProductoAAgregar, nombre, cantidad) =>{
        console.log(idProductoAAgregar, nombre);
  //       // SI LA COMANDA NO TIENE ELEMENTOS, SE AGREGA UNO
        if (comanda.length===0){
          agregarProductos([{id: idProductoAAgregar, name:nombre, cantidad:1}]);
        } else{
            //De otra forma revisamos que la comanda no tenga ya el producto que queremos agregar
            // Si ya lo tiene entoces queremos actualizar el valor
            // Si no tiene el producto entonces lo agregamos

            //Para poder editar el arreglo tenemos que clonarlo
            const nuevaComanda = [...comanda];

            //Coprobamos si el carrito ya tiene el ID del producto a agregar
            const yaEstaAgregado = nuevaComanda.filter((productosDeComanda)=> {
                return productosDeComanda.id === idProductoAAgregar
            }).length > 0;
            //Si ya tiene el producto entonces lo tenemos que actualizar
            if(yaEstaAgregado){
                //Para ello tenemos que buscarlo, obtener su posicion en el arreglo
                nuevaComanda.forEach((productoDeComanda,index)=>{
                    if(productoDeComanda.id===idProductoAAgregar){
                      const cantidad = nuevaComanda[index].cantidad;
                      nuevaComanda[index] = {
                              id: idProductoAAgregar,
                              name:nombre,
                              cantidad: cantidad + 1
                      }
                    }
                });

            //De otra forma entonces agregamos el producto al arreglo
            } else {
              nuevaComanda.push(
                {
                  id: idProductoAAgregar,
                  name:nombre,
                  cantidad: 1
                }
              );
            }

            //Por ultimo actualizamos la comanda
            agregarProductos(nuevaComanda);

        }
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
