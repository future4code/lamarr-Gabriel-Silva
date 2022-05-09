/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
   
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// 

console.log('Boas vindas ao jogo de Blackjack')
alert('Bem vindo a jogatina do BlackJack! A.k.a 21')

/*Construindo a primeira parte do jogo. Liberando as primeiras cartas e evitando que o jogador exploda na primeira mão*/

const jogadorUm = []
const computador = []
let somaValoresJogadores = []

if (confirm("Quer iniciar uma rodada?")) {

   function dealer() {
      let i = 0
      while (i !== 2) {
         let carta = comprarCarta()
         jogadorUm.push(carta)
         let cartaComputador = comprarCarta()
         if (cartaComputador !== jogadorUm[i]) {
            computador.push(cartaComputador)
         } else {
            cartaComputador = (comprarCarta() !== jogadorUm)
            computador.push(cartaComputador)
         }
         i++
      }
   }
   dealer()

   function somandoValores(s1, s2) {
      const valoresJogadorUm = s1.map((player) => {
         return player.valor
      })
      let somaJogadorUm = 0
      for (let i = 0; i < valoresJogadorUm.length; i++) {
         somaJogadorUm += valoresJogadorUm[i]
      }
      const valoresComputador = s2.map((player) => {
         return player.valor
      })
      let somaComputador = 0
      for (let i = 0; i < valoresComputador.length; i++) {
         somaComputador += valoresComputador[i]
      }
      somaValoresJogadores.push(somaJogadorUm)
      somaValoresJogadores.push(somaComputador)
   }
   somandoValores(jogadorUm, computador)

   function verificandoCartasDosJogadores(v1) {
      if (v1[0] === 22) {
         jogadorUm.splice(0, 2)
         jogadorUm.push(dealer())
      } else if (v1[1] === 22) {
         computador.splice(0, 2)
         computador.push(dealer())
      }
   }
   verificandoCartasDosJogadores(somaValoresJogadores)

} else {console.log('O jogo acabou!')
alert("O jogo acabou!")}

// /*******************************JOGADOR COMPRANDO CARTAS ********************************/

let novaMaoJogadorUm = [...jogadorUm]
let somaValoresJogadorUm = [somaValoresJogadores[0]]
let novaMaoComputador = [...computador]
let somaValoresComputador = [somaValoresJogadores[1]]


if (somaValoresJogadorUm < 21) {
   if (confirm(`Suas cartas são ${novaMaoJogadorUm[0].texto}, ${novaMaoJogadorUm[1].texto}. A carta revelada do computador é ${computador[0].texto}. Deseja comprar mais uma carta?`)) {
      const cartasMao = novaMaoJogadorUm.map((cartas) => {
         return cartas.texto
      })
      let novaCartaJogadorUm = comprarCarta()
      if (novaCartaJogadorUm.texto !== cartasMao) {
         novaMaoJogadorUm.push(novaCartaJogadorUm)
         somandoValoresJogadorUm(novaMaoJogadorUm)
      } else (console.log("ERRO 1"))
   } else { robozinho() }
}
if (somaValoresJogadorUm[1] < 21) {
   if (confirm(`Suas cartas são ${novaMaoJogadorUm[0].texto}, ${novaMaoJogadorUm[1].texto}, ${novaMaoJogadorUm[2].texto}. A carta revelada do computador é ${computador[0].texto}. Deseja comprar mais uma carta?`)) {
      const cartasMao = novaMaoJogadorUm.map((cartas) => {
         return cartas.texto
      })
      let novaCartaJogadorUm = comprarCarta()
      if (novaCartaJogadorUm.texto !== cartasMao) {
         novaMaoJogadorUm.push(novaCartaJogadorUm)
         somandoValoresJogadorUm(novaMaoJogadorUm)
      } else (console.log("ERRO 3"))
   } else { robozinho() }
}

if (somaValoresJogadorUm[2] < 21) {
   if (confirm(`Suas cartas são ${novaMaoJogadorUm[0].texto}, ${novaMaoJogadorUm[1].texto}, ${novaMaoJogadorUm[2].texto}, ${novaMaoJogadorUm[3].texto}. A carta revelada do computador é ${computador[0].texto}. Deseja comprar mais uma carta?`)) {
      const cartasMao = novaMaoJogadorUm.map((cartas) => {
         return cartas.texto
      })
      let novaCartaJogadorUm = comprarCarta()
      if (novaCartaJogadorUm.texto !== cartasMao) {
         novaMaoJogadorUm.push(novaCartaJogadorUm)
         somandoValoresJogadorUm(novaMaoJogadorUm)
      } else (console.log("ERRO 5"))
   } else { robozinho() }
}

if (somaValoresJogadorUm[3] < 21) {
   if (confirm(`Suas cartas são ${novaMaoJogadorUm[0].texto}, ${novaMaoJogadorUm[1].texto}, ${novaMaoJogadorUm[2].texto}, ${novaMaoJogadorUm[3].texto}, ${novaMaoJogadorUm[4].texto}. A carta revelada do computador é ${computador[0].texto}. Deseja comprar mais uma carta?`)) {
      const cartasMao = novaMaoJogadorUm.map((cartas) => {
         return cartas.texto
      })
      let novaCartaJogadorUm = comprarCarta()
      if (novaCartaJogadorUm.texto !== cartasMao) {
         novaMaoJogadorUm.push(novaCartaJogadorUm)
         somandoValoresJogadorUm(novaMaoJogadorUm)
      } else (console.log("ERRO 7"))
   } else { robozinho() }
}

function somandoValoresJogadorUm(j1) {
   const novaMaoJogadorUm = j1.map((valores) => {
      return valores.valor
   })
   let soma = 0
   for (let i = 0; i < novaMaoJogadorUm.length; i++) {
      soma += novaMaoJogadorUm[i]
   }
   somaValoresJogadorUm.push(soma)
}


/*******************************COMPUTADOR COMPRANDO CARTAS ********************************/

function robozinho() {
   if (somaValoresComputador[somaValoresComputador.length - 1] < somaValoresJogadorUm[somaValoresJogadorUm.length - 1]) {
      const cartasMao = novaMaoComputador.map((cartas) => {
         return cartas.texto
      })
      let novaCartaComputador = comprarCarta()
      if (novaCartaComputador.texto !== cartasMao) {
         novaMaoComputador.push(novaCartaComputador)
         somaRobozin(novaMaoComputador)
      } else {
         let novaCartaComputador = comprarCarta()
         if (novaCartaComputador.texto !== cartasMao) {
            novaMaoComputador.push(novaCartaComputador)
            somaRobozin(novaMaoComputador)
         }
      }
   } else {conclusaoJogo(novaMaoJogadorUm, novaMaoComputador, somaValoresJogadorUm, somaValoresComputador)}
}

function somaRobozin(n1) {
   const bootMao = n1.map((valores) => {
      return valores.valor
   })
   let soma = 0
   for (let i = 0; i < bootMao.length; i++) {
      soma += bootMao[i]
   }
   somaValoresComputador.push(soma)
}


while (somaValoresComputador[somaValoresComputador.length - 1] < 21 && somaValoresComputador[somaValoresComputador.length - 1] < somaValoresJogadorUm[somaValoresJogadorUm.length - 1] && somaValoresJogadorUm[somaValoresJogadorUm.length - 1] <= 21) {
   robozinho()
}

/*******************************FINAL DO JOGO ********************************/

function conclusaoJogo(novaMaoJogadorUm, novaMaoComputador, somaValoresJogadorUm, somaValoresComputador) {
   const vezesJogador = novaMaoJogadorUm.length
   const vezesComputador = novaMaoComputador.length

   // Mensagem jogador
   switch (vezesJogador) {
      case 2:
         mensagemJogador = `As suas cartas são ${novaMaoJogadorUm[0].texto}, ${novaMaoJogadorUm[1].texto}. Sua pontuação é ${somaValoresJogadorUm[somaValoresJogadorUm.length - 1]}`
         break;
      case 3:
         mensagemJogador = `As suas cartas são ${novaMaoJogadorUm[0].texto}, ${novaMaoJogadorUm[1].texto}, ${novaMaoJogadorUm[2].texto}. Sua pontuação é ${somaValoresJogadorUm[somaValoresJogadorUm.length - 1]}`
         break;
      case 4:
         mensagemJogador = `As suas cartas são ${novaMaoJogadorUm[0].texto}, ${novaMaoJogadorUm[1].texto}, ${novaMaoJogadorUm[2].texto}, ${novaMaoJogadorUm[3].texto}. Sua pontuação é ${somaValoresJogadorUm[somaValoresJogadorUm.length - 1]}`
         break;
      case 5:
         mensagemJogador = `As suas cartas são ${novaMaoJogadorUm[0].texto}, ${novaMaoJogadorUm[1].texto}. ${novaMaoJogadorUm[2].texto}, ${novaMaoJogadorUm[3].texto}, ${novaMaoJogadorUm[4].texto}. Sua pontuação é ${somaValoresJogadorUm[somaValoresJogadorUm.length - 1]}`
         break;
      default:
         mensagemJogador = "ERRO NA MENSAGEM JOGADOR"
         break;
   }

   // Mensagem Computador
   switch (vezesComputador) {
      case 2:
         mensagemComputador = `As cartas do computador são ${novaMaoComputador[0].texto}, ${novaMaoComputador[1].texto}. A pontuação do computador é ${somaValoresComputador[somaValoresComputador.length - 1]}`
         break;
      case 3:
         mensagemComputador = `As cartas do computador são ${novaMaoComputador[0].texto}, ${novaMaoComputador[1].texto}, ${novaMaoComputador[2].texto}. A pontuação do computador é ${somaValoresComputador[somaValoresComputador.length - 1]}`
         break;
      case 4:
         mensagemComputador = `As cartas do computador são ${novaMaoComputador[0].texto}, ${novaMaoComputador[1].texto}, ${novaMaoComputador[2].texto}, ${novaMaoComputador[3].texto}. A pontuação do computador é ${somaValoresComputador[somaValoresComputador.length - 1]}`
         break;
      case 5:
         mensagemComputador = `As cartas do computador são ${novaMaoComputador[0].texto}, ${novaMaoComputador[1].texto}. ${novaMaoComputador[2].texto}, ${novaMaoComputador[3].texto}, ${novaMaoComputador[4].texto}. A pontuação do computador é ${somaValoresComputador[somaValoresComputador.length - 1]}`
         break;
      default:
         mensagemComputador = "ERRO NA MENSAGEM JOGADOR"
         break;
   }

   /*mensagem informando status final do jogo*/
   if (somaValoresJogadorUm[somaValoresJogadorUm.length - 1] > 21 && somaValoresComputador[somaValoresComputador.length - 1] > 21) {
      mensagem = "Empatou!"
   } else if (somaValoresJogadorUm[somaValoresJogadorUm.length - 1] > 21) {
      mensagem = "O Computador ganhou!"
   } else if (somaValoresComputador[somaValoresComputador.length - 1] > 21) {
      mensagem = "O Usuário ganhou!"
   } else if (somaValoresJogadorUm[somaValoresJogadorUm.length - 1] < somaValoresComputador[somaValoresComputador.length - 1]) {
      mensagem = "O Computador ganhou!"
   } else if (somaValoresJogadorUm[somaValoresJogadorUm.length - 1] > somaValoresComputador[somaValoresComputador.length - 1]) {
      mensagem = "O Usuário ganhou!"
   } else { mensagem = "Empatou!" }
   return`${mensagemJogador}\n${mensagemComputador}\n${mensagem}`
}

console.log(conclusaoJogo(novaMaoJogadorUm, novaMaoComputador, somaValoresJogadorUm, somaValoresComputador))
alert(`${conclusaoJogo(novaMaoJogadorUm, novaMaoComputador, somaValoresJogadorUm, somaValoresComputador)}`)