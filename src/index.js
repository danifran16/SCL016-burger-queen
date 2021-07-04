import React from 'react';
import ReactDOM from 'react-dom';
// import './styles/estilo.css';
// import '../node_modules/bootstrap/scss/bootstrap.scss';
// import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import App from './routes/App.js';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
