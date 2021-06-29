import React from "react";
import logoApp from '../images/logo.png';
import '../styles/inicio.css';

const Inicio = ()=> ( 
  <div className= "container">
    <div className="inicio_fondo">
      
      <div className="row">
        
        <div className="col-lg">
          <img src={logoApp} alt="logo Waffle Queen"/>
        </div>
        
        <div className="col-lg">
          <button>Cocina</button>
        </div>
        
        <div className="col-lg">
          <button>Mesero</button>
        </div>
      
      </div>
    </div>
  </div>
)   

export default Inicio;