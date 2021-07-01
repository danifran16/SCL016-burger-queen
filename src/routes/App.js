import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Inicio from '../components/Inicio';
import Mesas from '../components/Mesas';
import Pedidos from '../components/Pedido';
import Header from '../components/Header';//prueba de fondo
import Error from '../components/Error';
import Menu from '../components/Menu';

const App = () => (
  <BrowserRouter>

    <Switch>
      < Route exact path="/" component= {Inicio} />  
      < Route exact path="/mesas" component= {Mesas} />
      < Route exact path="/pedidos" component= {Pedidos} />
      < Route exact path="/prueba" component= {Header} />
      < Route exact path="/menu" component= {Menu} />
      < Route component= {Error} />


    </Switch>

  
  </BrowserRouter>
    

)
export default App;
