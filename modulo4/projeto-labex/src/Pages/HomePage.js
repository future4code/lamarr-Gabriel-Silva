import React from "react";
import { useNavigate } from "react-router-dom";
import * as Coord from "../Coodinators/Coodinator";

const HomePage = () => {

    const navigate = useNavigate();

    return (
        <>
            <p>HomePage</p>
            <button onClick={()=>{Coord.goToLoginPage(navigate)}}>Login</button>
            <button onClick={()=>{Coord.goToListTripPage(navigate)}}>Lista</button>
        </>
    )
}

export default HomePage;