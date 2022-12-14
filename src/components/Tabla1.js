import React from "react";
import Mitsubishi from "../assets/img/Mitsubishi Lancer.jpg";
import Mazda6 from "../assets/img/Mazda6.jpg";
import "../css/Tablas.css"

const Tabla1 = () => {
    return (
        <div className="tablas" >
        <h1>Tablas de Autos</h1>
            <div>
                <img className="mazda"  class="container-m" src={Mazda6} alt="mazda" />
                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Año</th>
                            <th scope="col">Modelo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mazda</td>
                            <td>2020</td>
                            <td>Mazda 6</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="tabla2" class="container-lg">
            <img className="mitsubishi" src={Mitsubishi} alt="mitsubishi lancer" />
            <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Año</th>
                            <th scope="col">Modelo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mitsubishi</td>
                            <td>2021</td>
                            <td>Lancer Evolution</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}
//Si voy a importar mas de un componente tengo que quitar el default y poner los componentes en {}
export default Tabla1;