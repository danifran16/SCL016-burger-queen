import React/* , { useState } */from "react";
import Menu from "../components/Menu";
// import Header from "../components/Header";
// import data from "../menu.json";
/* import Comanda from "../components/Comanda"; */ //COMANDA EN VEZ DE CARRITO


////////AQUI PUEDO TENER MUCHOS COMPONENTES///////////////
////COMPONENTES:
////PRODUCTOS(MENU)
////COMANDA
////BOTONES
////NOMBRE CLIENTE
////HEADER 


// const [comanda,agregarProductos] = useState([]);
//   const agregarProductosAComanda = (idProducto, nombre) =>{
//       console.log(idProducto, nombre);
//       // SI LA COMANDA NO TIENE ELEMENTOS, SE AGREGA UNO
//       if (comanda.length===0){
//         agregarProductos([{id:idProducto, nombre:nombre, cantidad: 1}]);
//       }
//   }


const TomaDePedidos = ({productsMenu, agregarProductosAComanda }) => {
  return (
    <div className="container">
      {/* <div><Header/></div> */}

      {/* <div>
        <input placeholder="cliente" />
      </div> */}

      {/* <div>
        <button>Desayuno</button>
        <button>Almuerzo</button>
      </div> */}

      <div>
        <Menu productsMenu= {productsMenu}
         agregarProductosAComanda={agregarProductosAComanda}
         />  
      </div>

     {/*  <div>
        <Comanda />
      </div> */}

      {/* <div>
        <button>ENVIAR A COCINA</button>
      </div> */}

      
    </div>
  );
};

export default TomaDePedidos;
