import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import eu from './img/Eu.jpg'
import cea from './img/c&a.jpg'
import itau from './img/itau.jpg'
import email from './img/email.png'
import endereco from './img/endereco.png'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={eu}
          nome="Gabriel"
          descricao="Oi, eu sou o Gabriel. Atualmente trabalho como analista de fraude, entretanto, já trabalhei com concessão de crédito, FP&A, BackOffice, Analista de Qualidade (Químico) e em breve, serei um novo Dev FullStack."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png"
          texto="Ver mais"
        />

        <CardPequeno
          imagem={email}
          email="teste@gmail.com"
        />
        <CardPequeno
          imagem={endereco}
          email="Rua dos Bobos, Nº 0"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={cea}
          nome="C&A"
          descricao="Analista de Fraude"
        />

        <CardGrande
          imagem={itau}
          nome="Itaú"
          descricao="Estagiário em Concessão de Crédito."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
