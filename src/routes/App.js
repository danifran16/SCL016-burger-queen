import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Inicio from '../components/inicio.js';

const App = () => (
  <BrowserRouter>
    <div>

    < Route exact path="/" component= {Inicio} />  
    
    </div>

  
  </BrowserRouter>
    

)
export default App;
