import React from "react";

const TablaAutos = ({autos, autoDelete}) => {
    return (
        <div class="card container mb-5">
            <h2>Tabla de autos</h2>
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
                            año
                        </th>
                        <th>
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
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