import React from "react";
import "../css/TablaAutos.css"

//Te amo React
const TablaAutos = ({autos, autoDelete }) => {
    return (
        <div class="card container mb-4">
        <center>
        <h1>Tablas de Autos</h1>
        </center>
        <table class="table">
        <thead>
            <tr>
                <th>
                ID
                </th>
                <th>
                Marca
                </th>
                <th>
                Modelo
                </th>
                <th>
                Año
                </th>
            </tr>
        </thead>
        <tbody>
            {/* Aqui va la iteracion */}
            {autos.map(auto=>(
            <tr>
            <td>
                {auto.id}
            </td>
            <td>
                {auto.marca}
            </td>
            <td>
                {auto.modelo}
            </td>
            <td>
                {auto.año}
            </td>
            <td>
            <button
                //Esto es iguala una funcion de java ... el parametro que le paso es el mismo que esta donde lo declaro que en este caso es en Car.js
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    autoDelete(auto.año);
                  }}
                >
                 Eliminar
                </button>
            </td>
        </tr>
            ))}
        
        </tbody>
        </table>
        </div>
    )
}

export default TablaAutos;