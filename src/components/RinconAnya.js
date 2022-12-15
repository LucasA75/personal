import React from "react";
import Anya from "../assets/img/Anya.png";
import Anya2 from "../assets/img/Anya2.jpg";
import Anya3 from "../assets/img/Anya3.jpg";
import "../css/Anya.css"

const RinconAnya =() =>{
    return(
        <div>
            <center>
            <h1>Que es esto?</h1>
            </center>
            <div>
            <img src={Anya} alt="anya1"/>
            </div>
            <div>
            <img src={Anya2} alt="anya2"/>
            </div>
            <div>
            <img src={Anya3} alt="anya3"/>
            </div>
         </div> 
    )
}
export default RinconAnya;