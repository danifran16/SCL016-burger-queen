import React from "react";
import logoApp from "../images/logo.png";
// import "../styles/estilo.scss";
import "../styles/inicio.css";
import { Link } from "react-router-dom";

const Inicio = () => (
  <main>
    <div className="container container-md">
      <div className="row align-items-center">
        <div className="col-7 div">
          <img className="inicio-logo" src={logoApp} alt="logo Waffle Queen" />
        </div>

        <div className="col-5">
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
  </main>
);

export default Inicio;
