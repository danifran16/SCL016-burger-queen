import React from "react";
import logoApp from "../images/logo.png";
// import "../styles/estilo.scss";
// import "../styles/inicio.css";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="container  d-flex">
      <div className="row border">
        <div className="col-7">
          <img className="" src={logoApp} alt="logo Waffle Queen" />
        </div>

        <div className="col-5 ">
          <div>
            <button>Cocina</button>
          </div>

          <div>
            <Link to="/mesas">
              <button className="btn btn-primary">Mesero</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Inicio;
