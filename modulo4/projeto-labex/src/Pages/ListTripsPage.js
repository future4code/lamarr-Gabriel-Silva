import React from "react";
import { useNavigate } from "react-router-dom";
import * as Coord from "../Coodinators/Coodinator";

const ListTripsPage = () => {

    const navigate=useNavigate();

    return (
        <>
            <p>ListTripsPage</p>
            <button onClick={()=>{Coord.goToHomePage(navigate)}}>Home</button>
            <button onClick={()=>{Coord.goToApplicationFormPage(navigate)}}>Inscrever</button>
        </>
    )
}

export default ListTripsPage;