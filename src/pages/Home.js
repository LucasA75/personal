import React,{useCallback, useEffect, useState} from "react"; /* Aqui estoy importando un hook */
import { useNavigate } from "react-router-dom";
import { Tabla1,TextoComponent,FormularioUsuario,Navbar,Boton, TablaAutos,TablaUsuarios } from "../components";

import "../css/Home.css"
import { getAllUsers , addUser, editUser, deleteUser} from "../services/User";


const usuario1=[{
    nombre:'Joseph',
    apellido:'Joestar',
    correo:'Jojo@Yahoo.com',
    rut:'92342442-1'
    }
    ,
    {
    nombre:'Jose',
    apellido:'Perez',
    correo:'comePasteles3000@gmail.com',
    rut:'92242342-4'
    },
    {
        nombre:'Juan Carlos',
        apellido:'Bodoque',
    correo:'Pruebaesto@live.cl',
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


    useEffect(()=>{
        getUsers();
    },[])

    //Trae todos los usuarios de la base de Usuarios
    const getUsers = async()=>{
        const usuarioBD = await getAllUsers();
        setState(usuarioBD);
    }

    const userAdd = async(usuarioAgregado) =>{
        // En esta linea agreagamos un usuario a la base de datos
        const usuarioBD = await addUser(usuarioAgregado);
        //En sesta linea haremos que la tabla se actualize con los nuevos datos
        getUsers();
    }

    const userEdit = async(usuarioEditado) =>{
        const usuaroBD = await editUser(usuarioEditado);
        getUsers();
    }

    const userDelete = async(idUsuario) => {
        const usuarioBD = await deleteUser(idUsuario);
        getUsers();
    }


    const autoDelete=(añoAuto)=>{
        const changeAuto = auto.filter(auto => auto.año !== añoAuto);
        /* al momento de ocupar la funcion de arriba yo le cambiare el valor temporal a mis usuarios */
        setAuto(changeAuto)
    }


/*     const userDelete=(rutUsuario)=>{
        const changeUser = state.filter(usuario => usuario.rut !== rutUsuario);
        /* al momento de ocupar la funcion de arriba yo le cambiare el valor temporal a mis usuarios 
        setState(changeUser)
    } */

    //Esta funcion agraega un usuario en la tabla usuariios - no la ocuparemos porque la traeremos de la base
/*     const userAdd = (usuario)=>{ // Que es esto <-
        const addUsuario = [
            //Mantenme los datos que tengo en user y agregame o que yo tengo aqui
            ...state, usuario
        ]
        /* Luego actualizamos el state 
        setState(addUsuario);
    } */

/*     const userEdit =(usuarioEditado)=>{
        const editUser = state.map(usuario =>(usuario.rut === usuarioEditado.rut ? usuarioEditado: usuario))

        setState(editUser);
    } */

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
            <br></br>
            <br></br>
            <TablaUsuarios usuarios={state} deleteUser={userDelete} setUsuarioEditado={setUsuarioEditado}/>
            <br></br>
            <center>
            <Boton className="btn2" infoboton={"Ir a Autos"} handleOnClick={handleOnClick}/>
            </center>
            {/* <TablaAutos autos={auto} autoDelete={autoDelete}/> */}
            <br></br>
            <br></br>
        </div>
        //Holas
    );
}

export default HomePage;