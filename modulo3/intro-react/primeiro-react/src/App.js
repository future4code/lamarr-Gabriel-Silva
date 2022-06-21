import perfil from './img/Eu.jpg';
import './App.css';

function App() {
  function mensagem(){
    alert ("Aoba, noite boa!")
  }
  return (
    <div className="App">
      <h1> Olá eu sou o Gabriel!</h1>
      <img src={perfil} alt="desenho_meu"/>
      <p>Este é o meu primeiro app react</p>
      <button onClick={mensagem}>Clique aqui!</button>
    </div>
  );
}

export default App;
