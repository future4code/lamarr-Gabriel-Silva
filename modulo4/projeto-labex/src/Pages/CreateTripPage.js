import React from "react";
import { useNavigate } from "react-router-dom";
import * as Coord from "../Coodinators/Coodinator";

const CreateTripPage = () => {

    const navigate=useNavigate();

    return (
        <>
            <p>CreateTripPage</p>
            <button onClick={()=>{Coord.goToAdminHomePage(navigate)}}>Voltar</button>
            <button>Criar</button>
        </>
    )
}

export default CreateTripPage;