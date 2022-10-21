import './App.css';
import React, { useState } from 'react';
import { EnviarMensagem, Frase, Mensagem, Tela } from './components/style';



function App() {

  const [chat, setChat] = useState([]);
  const [InputNomeUsuario, setInputNomeUsuario] = useState("")
  const [InputMensagem, setInputMensagem] = useState("")

  const limpar = () => {
    setInputNomeUsuario('');
    setInputMensagem('');
  }

  const enviarMensagem = () => {
    const novaMensagem = {
      nomeUsuario: InputNomeUsuario,
      mensagem: InputMensagem
    };
    const conversa = [...chat, novaMensagem];

    setChat(conversa);
    limpar()
  }

  return (
    <div className='App'>
      <Tela>
        {chat.map((porUsuario) => {
          return (
            <Mensagem>
              <strong>{porUsuario.nomeUsuario}:</strong> {porUsuario.mensagem}
            </Mensagem>
          )
        })}
      </Tela>

      <EnviarMensagem>
        <Frase>
          Quem está escrevendo a mensagem?
        </Frase>
        <input
          value={InputNomeUsuario}
          onChange={(e) => {
            setInputNomeUsuario(e.target.value);
          }}
          placeholder="Insira seu nome"
        />
        <Frase>
          Escreva a sua mensagem
        </Frase>
        <input
          value={InputMensagem}
          onChange={(e) => {
            setInputMensagem(e.target.value);
          }}
          placeholder="Escreva sua mensagem"
        />
        <button
          onClick={enviarMensagem}
        >
          Enviar mensagem
        </button>
      </EnviarMensagem>

    </div>

  );
}

export default App;
