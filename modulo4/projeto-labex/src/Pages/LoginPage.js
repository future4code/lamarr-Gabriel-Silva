import React from "react";
import { useNavigate } from "react-router-dom";
import * as Coord from "../Coodinators/Coodinator";

const LoginPage = () => {

    const navigate=useNavigate();

    return (

<>
            <p>LoginPage</p>
            <button onClick={()=>{Coord.goToHomePage(navigate)}}>Voltar</button>
            <button onClick={()=>{Coord.goToAdminHomePage(navigate)}}>Logar</button>
        </>
    )
}

export default LoginPage;