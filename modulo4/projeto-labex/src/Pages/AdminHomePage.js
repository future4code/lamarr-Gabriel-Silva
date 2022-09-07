import React from "react";
import { useNavigate } from "react-router-dom";
import * as Coord from "../Coodinators/Coodinator";

const AdminHomePage = () => {

    const navigate=useNavigate();

    return (
        <>
            <p>AdminHomePage</p>
            <button onClick={()=>{Coord.goToHomePage(navigate)}}>Voltar</button>
            <button onClick={()=>{Coord.goToCreateTripPage(navigate)}}>Criar Viagem</button>
            <button onClick={()=>{Coord.goToHomePage(navigate)}}>Logout</button>
        </>
    )
}

export default AdminHomePage;