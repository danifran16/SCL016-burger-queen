import React from 'react';
import mLogo from '../images/miniLogo.png';
import { Link } from 'react-router-dom';

const Header = () =>(
<div className="container"> 
  <ul className="nav">
    <li className="nav-item">
      <Link to="/">
        <img src={mLogo} alt="miniLogo" />
      </Link>
    </li>
    <li className="nav-item">
      <h1>holaa</h1>
    </li>
    <li className="nav-item">
      <h1>holooo</h1>
    </li>
  </ul>
</div>

)

export default Header; 
