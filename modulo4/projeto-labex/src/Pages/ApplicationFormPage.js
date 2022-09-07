import React from "react";
import { useNavigate } from "react-router-dom";
import * as Coord from "../Coodinators/Coodinator";

const ApplicationFormPage = () => {

    const navigate = useNavigate();

    return (
        
        <>
            <p>ApplicationFormPage</p>
            <button onClick={()=>{Coord.goToHomePage(navigate)}}>Voltar</button>
            <button>Enviar</button>
        </>
    )
}

export default ApplicationFormPage;