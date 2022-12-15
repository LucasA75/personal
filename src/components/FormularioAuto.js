import React from "react";
import "../css/FormularioAuto.css"

const FormularioAuto = () => {
    return (
        <div>
        <center>
        <div className="container-lg   formularioAuto">
        <div className="F_auto"  class="container-lg">
       <center><h1>Formulario de Automovil</h1></center>
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Marca y Modelo</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Patente</label>
                    <input type="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Nombre Dueño</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Dirreccion</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">Ciudad</label>
                    <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">Color</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>Blanco</option>
                        <option>Negro</option>
                        <option>Gris</option>
                        <option>Verde</option>
                        <option>Plomo</option>
                        <option>Amarillo</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Codigo Chasis</label>
                    <input type="text" class="form-control" id="inputZip" />
                </div>
                <center>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                </center>
                <div class="col-12">
                <center><button type="submit" class="btn btn-primary">Sign in</button></center> 
                </div>
            </form>
        </div>
        </div>
        </center>
        </div>
    );
}
export default FormularioAuto;