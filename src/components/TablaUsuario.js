import React from "react";
import Boton from "./Boton";
//Porque es tan asco React?
const TablaUsuarios = ({usuarios, deleteUser, setUsuarioEditado}) => {
    return (
        <div class="card container mb-2">
            <h2>Tabla Usuarios</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>
                            Rut
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Apellido
                        </th>
                        <th>
                            Correo
                        </th>
                        <th>
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>

{/* //Iteramos usuarios con .map, a 
cada elemento de usuarios lo llamaremos usuario 
y realizaremos lo siguiente =>
 */}
                    {usuarios.map(usuario=>( 
                        
                        <tr>
                        <td>
                            {usuario.rut}
                        </td>
                        <td>
                            {usuario.nombre}
                        </td>
                        <td>
                            {usuario.apellido}
                        </td>
                        <td>
                            {usuario.correo}
                        </td>
                        <td>
                        <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    deleteUser(usuario.rut);
                  }}
                >
                 Eliminar
                </button>
                <br></br>
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={() => {
                    setUsuarioEditado(usuario)
                  }}
                >
                 Editar
                </button>

                        </td>
                        </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default TablaUsuarios;