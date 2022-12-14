import React from "react";

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
                Rut
                </th>
            </tr>
        </thead>
        </table>
        </div>
    )
}

export default TablaAutos;