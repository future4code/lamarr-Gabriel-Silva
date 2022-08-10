import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate=useNavigate();

    return (
        <>
            <p>HomePage</p>
            <button>Login</button>
            <button>Lista</button>
        </>
    )
}

export default HomePage;