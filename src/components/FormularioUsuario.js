import React, { useState, useEffect } from "react";
import "../css/Formulario.css"
//Para ocupar un formulario , la etiqueta input arroja un error la solucion es agregar un / al final para cerrar la etiqueta
// Esto lo copie de bootstrapp 
//Tambien hay que correr el dom
//Te odio React
//Buena practica colocar nombre de const initialUsuario
const initialUsuario = {
    name: "",
    lasname: "",
    correo: "",
    id: ""
}



const FormularioUsuario = ({ userAdd, usuarioEditado, setUsuarioEditado,userEdit }) => {

    const [usuario, setUsuario] = useState(initialUsuario);
    const { name, lasname, correo, id } = usuario;


    //El hook useEffect siempre esta pendiente de si la variable que tiene dentro de sus corchetes debera hacer todo lo que tiene la funciopn dentro
    //Aca vamos a hacer que una variable que actualize
    //IMPORTANTE -> useEffect siempre corre al menos 1 vez cuando la pagina carga por 1vez
    useEffect(() => {
        if (usuarioEditado !== null) {
            setUsuario(usuarioEditado)
        } else {
            setUsuario(
                {
                    name: "",
                    lasname: "",
                    correo: "",
                    id: ""
                }
            )
        }

    }, [usuarioEditado]);
    //Te odio React
    //Se coloca una e porque si :) -> siempre se coloca ....Odio react
    const handleInputChange = (e) => {
        //Esta funcion se llama cada vez que nosotros escribimos algo en algun input de nuestra pagina
        const changedFormValue = {
            //va a mantener los datos que tiene usuario
            ...usuario,
            //Esto mete el atributo que cambie por su nuevo valor
            [e.target.name]: e.target.value
        }
        setUsuario(changedFormValue);
    }

    return (
        <div className="container-lg formularioUsuario">
        <div className="F_usuario" class="container-lg">

            {usuarioEditado !== null ? <h1>Editar Usuario</h1> : <h1>Ingrese Usuario</h1>}

            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">id</label>
                    <input
                        type="text"

                        class="form-control"

                        id="inputEmail4"
                        //Para que mi formulario sea capaz de crear un usuario agregamos esto
                        name="id"
                        value={id}
                        onChange={handleInputChange}
                        disabled
                    />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="inputPassword4"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"
                        name="lasname"
                        value={lasname}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Correo</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"
                        name="correo"
                        value={correo}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div class="col-12">

                    {usuarioEditado !== null ? (
                        <button
                            type="button"
                            class="btn btn-success"
                            onClick={() => userEdit(usuario)}
                        >
                            Editar usuario
                        </button>
                    ) : (
                        <button
                            type="button"
                            class="btn btn-success"
                            onClick={() => userAdd(usuario)}
                        >
                            Ingresar usuario
                        </button>
                    )}
                    {usuarioEditado !== null ? (
                        <button
                            type="button"
                            class="btn btn-danger"
                            onClick={() => setUsuarioEditado(null)}
                        >
                            Cancelar
                        </button>
                    ) : (
                        <></>
                    )}


                </div>
            </form>
        </div>
        </div>
    );
}

export default FormularioUsuario;