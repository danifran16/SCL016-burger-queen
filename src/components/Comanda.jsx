import React from "react";
////Comanda es un estado que va cambiando///////
const Comanda = ({comanda}) => {
  return (
    <div>
      <h3>pedido usuario</h3>
      {comanda.length > 0 ? (
        comanda.map((producto, index) => {
          return (
            <div key={index}>
              <p>{producto.name}</p>
              <p>Precio:{producto.precio}</p>
            </div>
          );
        })
      ) : (
        <p>aun no se agrega nada</p>
      )}
    </div>
  );
};

export default Comanda;
