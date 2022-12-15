import React,{useCallback} from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

        /* Palabra reservada para navegar */
        const navigate = useNavigate();

        /* Aqui hago una arrow funcion y le digo primero : donde quiero ir */
    const handleOnClick = useCallback(()=> navigate("/",{},[navigate]));

    /* Asi funciona el Navbar ... porfin voy entendiendo React uFFF */
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-success">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active"   href="/" handleOnClick={handleOnClick} >Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    );
}

export default Navbar;