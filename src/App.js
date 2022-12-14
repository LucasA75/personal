//Los componentes van con Mayus , este es uno -> Un componente es una funcion que puede ser reutilizable 
//Una diferencia es que los componentes devuelven VISTAS.
import React from "react"; //Esto va en todos LADOS 
//Buena practica -> que el componente se llame igual que el archivo
//Arrow function

import {BrowserRouter, Routes, Route} from "react-router-dom"
//Este App en la carpeta main , tiene esta importacion
import { CarPage, HomePage, SecretPage } from "./pages";


//Esto va ha hacer la navegacion

//Funcion de APP
const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<HomePage/>}/>
                <Route path = "/Auto" element={<CarPage/>}/>
                <Route path = "/Secret" element={<SecretPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

