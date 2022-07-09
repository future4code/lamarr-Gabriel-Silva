import styled from "styled-components";

export const User = styled.p`
font-weight:bold;
font-size:small;
`
export const Message = styled.p`
font-size:small;
`


export const Container = styled.div`
width:100%;
margin:0;

`
export const Form = styled.form`
display: flex;
justify-content:space-around;
width: 100%;

input.User {
    width:10%;
    text-align:center;
    border-radius: 10px;
    border: 2px solid rgba(0, 0, 0, 0.5);
    font-weight: bold;
}
input.Message {
    width:80%;
    text-align:center;
    border-radius: 10px;
    font-weight: bold;
    border: 2px solid rgba(0, 0, 0, 0.5);
}
button {
    width:10%;
    border-radius: 10px;
    font-weight: bold;
    border: 2px solid rgba(0, 0, 0, 0.5);
}
`
export const MessageContainer = styled.div`
background-color: green;
padding-left: 10px;
padding-right: 10px;
border-radius: 10px;
margin: 10px;
margin-right: 70%;
`
export const MessageContainer2 = styled.div`
background-color: lightcoral;
padding-left: 10px;
padding-right: 10px;
border-radius: 10px;
margin: 10px;
margin-left: 70%;
`