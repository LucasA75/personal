import React from 'react';
//la importacion de esto es: npm install react-router-dom
import ReactDOM from 'react-dom';//si no encuentra una importacion el programa se cae
import App from "./App.js";//si recivo mas de un componente aqui se recibe con {}


ReactDOM.render(<App/>,document.querySelector('#root'));