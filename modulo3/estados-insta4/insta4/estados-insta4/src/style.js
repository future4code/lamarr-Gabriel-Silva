import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
export const Forms = styled.form`

display: inline-flex;
justify-content: center;
align-items: center;
padding: 10px;
width:100%;

label {
    font-weight:bold;
    padding-right: 10px;
    padding-left: 10px;
}

input {
    text-align:center;
    border: 2px solid black;
    border-radius: 10px;

}

button {
    margin-left: 10px;
    background-color: black;
    color: white;
    font-weight:bold;
    border-radius: 10px;
    :hover {
        background-color: grey;
        cursor: pointer;
    }
}
`

