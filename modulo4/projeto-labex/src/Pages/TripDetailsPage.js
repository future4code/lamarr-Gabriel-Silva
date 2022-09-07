import React from "react";
import { useNavigate } from "react-router-dom";
import * as Coord from "../Coodinators/Coodinator";


const TripDetailsPage = () => {

    const navigate=useNavigate();

    return (
        <>
            <p>TripDetailsPage</p>
            <button onClick={()=>{Coord.goToHomePage(navigate)}}>Voltar</button>
        </>
    )
}

export default TripDetailsPage;