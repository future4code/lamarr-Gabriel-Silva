import styled from "styled-components";

export const Footer = styled.footer`
    background-color: #333b3e;
    color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 10px;

    p {
        font-weight: bold;
    }

    .teste {
        font-style: italic;
    }
`

export const Header = styled.header`
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 50px;
    height: 10%;

    h1 {
        color: purple;
    }
`