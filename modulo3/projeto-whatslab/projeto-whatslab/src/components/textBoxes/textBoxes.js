import React, { useState } from "react";
import { Form, Container, MessageContainer, User, Message, MessageContainer2 } from './style'

export function Talk() {

    const [inputName, setInputName] = useState("");
    const [inputText, setInputText] = useState("");
    const [inputMessage, setInputMessage] = useState([]);

    const handleInputName = (e) => {
        setInputName(e.target.value)
    }
    const handleInputText = (e) => {
        setInputText(e.target.value)
    }
    const handleInputMessage = (e) => {
        e.preventDefault()

        const newMessage = { user: inputName, message: inputText }
        const uploadMessage = [...inputMessage, newMessage]
        setInputMessage(uploadMessage)
    }

    const messageBox = inputMessage.map((msg, index) => {
        return (
            <div key={index}>
                <User>{msg.user}</User>
                <Message>{msg.message}</Message>
            </div>)
    })
    const final = (nome) => {
        if (nome === "Eu" | 'eu') {
            <Container>
                <MessageContainer2>
                    {messageBox}
                </MessageContainer2>
                <Form>
                    <input
                        className="User"
                        placeholder="Nome"
                        onChange={handleInputName}
                    />
                    <input
                        className="Message"
                        placeholder="Mensagem"
                        onChange={handleInputText}
                    />
                    <button onClick={handleInputMessage}> Enviar </button>
                </Form>
            </Container>
        }
        final(handleInputName)
    }
    return (

        <Container>
            <MessageContainer>
                {messageBox}
            </MessageContainer>
            <Form>
                <input
                    className="User"
                    placeholder="Nome"
                    onChange={handleInputName}
                />
                <input
                    className="Message"
                    placeholder="Mensagem"
                    onChange={handleInputText}
                />
                <button onClick={handleInputMessage}> Enviar </button>
            </Form>
        </Container>

    )

}
