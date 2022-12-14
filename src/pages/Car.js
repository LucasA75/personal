import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FormularioAuto,Navbar,TablaAutos,Boton, ColorSwitches } from "../components";

const CarPage = () => {
/* Palabra reservada para navegar */
    const navigate = useNavigate();
    /* Aqui hago una arrow funcion y le digo primero : donde quiero ir */
    const handleOnClick = useCallback(()=> navigate("/",{},[navigate]));
    return(
        <div>
            {/* Aqui se van colocando los componentes */}
            <Navbar/>
            <FormularioAuto/>
            <TablaAutos />
            <ColorSwitches/>
            <Boton infoboton={"Vuelve al gulag"} handleOnClick={handleOnClick}/>
        </div>
    );
}

export default CarPage;
