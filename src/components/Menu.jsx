///PRODUCTOOOOSSS///
import React/*  {useState} */ from "react"; 
// import data from "../menu.json";
// import Comanda from "./Comanda";

const Menu = ({productsMenu}) => {
  // const [comanda,agregarProductos] = useState([]);

  // const agregarProductosAComanda = (idProducto, nombre) =>{
  //     console.log(idProducto, nombre);
  //     // SI LA COMANDA NO TIENE ELEMENTOS, SE AGREGA UNO
  //     if (comanda.length===0){
  //       agregarProductos([{id:idProducto, nombre:nombre, cantidad: 1}]);
  //     }
  // }

  return (
  <div>
      <h3>Productos</h3>
      <div className="CONTENEDORDEPRODUCTOS">
          {productsMenu.map((producto,index) => {
              return (
                <div key={index} className="CONTENEDORINDIVIDUALDECADAPRODUCTO">
                    <p>{producto.name}</p>
                    <button 
                      // onClick={() => agregarProductosAComanda(carta.id, carta.name)}
                      >agregar
                        {/* {carta.name}{carta.precio} */}
                    </button>
                </div>
          )})
          }
      </div>
  </div>
  );
};

export default Menu;
