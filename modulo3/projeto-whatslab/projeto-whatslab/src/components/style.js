import styled from "styled-components";

export const Tela = styled.div`

display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;

height: 90vh;
width: 50%;

border: 1px solid black;
margin: 0 auto;
`
export const Mensagem = styled.p`
margin: 5px;
`
export const EnviarMensagem = styled.div`
display:flex;
flex-direction: column;
justify-content: center;

margin: 10px auto;

width: 50%;
`
export const Frase = styled.label`
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0,0,0,0);
border: 0;
`