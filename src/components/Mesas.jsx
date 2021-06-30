import React from "react";
import '../styles/mesas.css';
// import '../styles/estilo.scss'
import { Link } from "react-router-dom";

const Mesas = () => ( 
  <div className="container holi">  
    <div className="row justify-content-between">
      
      <div className="col-4">
        <Link to="/pedidos"> 1 </Link>
      </div>
      
      <div className="col-4">
        2 
      </div>
      <div className="col-4">
        3 
      </div>
      <div className="col-4">
        4 
      </div>
      <div className="col-4">
        5 
      </div>
      <div className="col-4">
        6
      </div>
      <div className="col-4">
        7 
      </div>
      <div className="col-4">
        8 
      </div>
      <div className="col-4">
        9 
      </div>

    </div>
</div>
);

export default Mesas;