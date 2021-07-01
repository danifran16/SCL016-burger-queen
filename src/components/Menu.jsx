import React, {useState} from "react";
import data from "../menu.json";
import Comanda from "./Comanda";


const Menu = () => {
  
  const [comanda,agregarProductos] = useState([]);

  return (
    <div>
      {data.map((carta) => {
        return (
          <div>
            <button key={carta.id}>{carta.name}</button>
          </div>
        );
      })}

    <div>
      <Comanda comanda={comanda} />
      </div>

    </div>
  );
};

export default Menu;
