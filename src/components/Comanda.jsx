//RECORRIDO DE LA COMANDA//
import React/* , {useState} */from "react";
// import productsMenu from "../productsMenu";
////Comanda es un estado que va cambiando///////

 const Comanda = ({comanda}) => {


// const [comanda,agregarProductos] = useState([
//     { id: 1, name: "te", price: 400, type: "bebestibles"},
//     { id: 2, name: "cafe", price: 500, type: "bebestibles"},
//     { id: 3, name: "jugo", price: 1000, type: "bebestibles"},
//     { id: 4, name: "limonada", price: 1500, type: "bebestibles"},
// ]);

//   const agregarProductosAComanda = (idProducto, nombre) =>{
//       console.log(idProducto, nombre);
//       // SI LA COMANDA NO TIENE ELEMENTOS, SE AGREGA UNO
//       if (comanda.length===0){
//         agregarProductos([{id:idProducto, nombre:nombre, cantidad: 1}]);
//       }
//   }


  return (
    <div className= "container">
      <h3>pedido usuario</h3>
        {comanda.length > 0 ? 
          comanda.map((productos, index) => {
                return(
                    <div key={index}>
                        <p>
                          {productos.name}
                        </p>     
                        Precio: {productos.price}             
                    </div>
                )
              }
              
          )
          :
          <p>aun no se agrega nada</p>




        }



      {/* { {comanda.length > 0 ? (
        comanda.map((producto, index) => {
          return ( //quiero devolver codigo jsx, por eso el return
              <div key={index}>
                <p>{producto.name}</p>
                <p>Precio:{producto.price}</p>
              </div>
            );
          })
        ) 
      :
      (
        <p>aun no se agrega nada</p>
      )}  */}
    </div>
  );
};

export default Comanda;
