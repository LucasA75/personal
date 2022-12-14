import React,{useCallback, useState} from "react"; /* Aqui estoy importando un hook */
import { useNavigate } from "react-router-dom";
import { Tabla1,TextoComponent,FormularioUsuario,Navbar,Boton, TablaAutos,TablaUsuarios } from "../components";

import "../css/Home.css"

const usuario1=[{
    nombre:'Joseph',
    apellido:'Joestar',
    correo:'tumama@gmail.com',
    rut:'92342442-1'
    }
    ,
    {
    nombre:'Jose',
    apellido:'Perez',
    correo:'comecaca@gmail.com',
    rut:'92242342-4'
    },
    {
        nombre:'Juan Carlos',
        apellido:'Bodoque',
    correo:'Pruebaesto@gmail.com',
    rut:'30242342-4'
    }
]

const autos=[
    {
        id:'1',
        marca:'Mazda',
        modelo:'Cx6',
        año:'2019'
    },
    {
        id:'2',
        marca:'Chevrolet',
        modelo:'Corsa',
        año:'2001'
    }
]


/* const usuario2={
    nombre:'Jose',
    apellido:'Perez',
    correo:'comecaca@gmail.com',
    rut:'92242342-4'
}
 */
const HomePage = () => {
    /* Palabra reservada para navegar */
    const navigate = useNavigate();
    /* Aqui hago una arrow funcion y le digo primero : donde quiero ir */
    const handleOnClick = useCallback(()=> navigate("/Auto",{},[navigate]));
    const handleOnClick2 = useCallback(()=> navigate("/Secret",{},[navigate]));
    /* En este momento state vale lo mismo que usuario 1 */
    /* Genera una funcion stteadora que me va a permitir cambiar los datos de usuario1 sin afectarlo directamente(setState) */
    const [state, setState] = useState(usuario1);
    
    const [usuarioEditado, setUsuarioEditado] = useState(null);

    const[auto,setAuto] = useState(autos);


    const autoDelete=(añoAuto)=>{
        const changeAuto = auto.filter(auto => auto.año != añoAuto);
        /* al momento de ocupar la funcion de arriba yo le cambiare el valor temporal a mis usuarios */
        setAuto(changeAuto)
    }


    const userDelete=(rutUsuario)=>{
        const changeUser = state.filter(usuario => usuario.rut != rutUsuario);
        /* al momento de ocupar la funcion de arriba yo le cambiare el valor temporal a mis usuarios */
        setState(changeUser)
    }

    const userAdd = (usuario)=>{ // Que es esto <-
        const addUsuario = [
            //Mantenme los datos que tengo en user y agregame o que yo tengo aqui
            ...state, usuario
        ]
        /* Luego actualizamos el state */
        setState(addUsuario);
    }

    const userEdit =(usuarioEditado)=>{
        const editUser = state.map(usuario =>(usuario.rut === usuarioEditado.rut ? usuarioEditado: usuario))

        setState(editUser);
    }

    return(
        <div>
            {/* Aqui se van colocando los componentes */}
            <Navbar/>
            <div className="secret">
            <Boton className="btn" infoboton={"Secret"} handleOnClick={handleOnClick2}/>
            </div>
            <Tabla1/>
            <TextoComponent/>
            <FormularioUsuario userAdd={userAdd} usuarioEditado={usuarioEditado} setUsuarioEditado={setUsuarioEditado} userEdit={userEdit}/>
            <TablaUsuarios usuarios={state} deleteUser={userDelete} setUsuarioEditado={setUsuarioEditado}/>
            <center>
            <Boton className="btn2" infoboton={"Ir a la muerte subita"} handleOnClick={handleOnClick}/>
            </center>
            <TablaAutos autos={auto} autoDelete={autoDelete}/>
        </div>
    );
}

export default HomePage;