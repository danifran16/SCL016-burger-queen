import React from "react";
import styles from "../styles/mesas.module.css";
// import '../styles/estilo.scss'
import { Link } from "react-router-dom";

const Mesas = () => {
  return (
    <div className="container">
      <div className="row border text-center gx-4 gy-4 justify-content-around">
        <div className="col-4">
          <Link to="/toma-de-pedidos"> 1 </Link>
        </div>
        <div className="col-4">2</div>
        <div className="col-4">3</div>
        <div className="col-4">4</div>
        <div className="col-4">5</div>
        <div className="col-4">6</div>
        <div className="col-4">7</div>
        <div className="col-4">8</div>
        <div className="col-4">9</div>
        <div className={styles.divholi}>holaaaaaa</div>{" "}
        {/* prueba class modules */}
      </div>
    </div>
  );
};

export default Mesas;
