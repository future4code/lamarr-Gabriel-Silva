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

// console.log('Boas vindas ao jogo de Blackjack')
// alert('Bem vindo a jogatina do BlackJack! A.k.a 21')

// const jogadorUm = []
// const computador = []
// if (confirm("Quer iniciar uma rodada?")) {


//    function dealer() {
//       let i = 0
//       while (i !== 2) {
//          let carta = comprarCarta()
//          jogadorUm.push(carta)
//          let cartaComputador = comprarCarta()
//          if (cartaComputador !== jogadorUm[i]) {
//             computador.push(cartaComputador)
//          } else {
//             cartaComputador = (comprarCarta() !== jogadorUm)
//             computador.push(cartaComputador)
//          }
//          i++
//       }
//    }
//    dealer()

//    let somaValoresJogadores = []

//    function somandoValores(s1, s2) {
//       const valoresJogadorUm = s1.map((player) => {
//          return player.valor
//       })
//       let somaJogadorUm = 0
//       for (let i = 0; i < valoresJogadorUm.length; i++) {
//          somaJogadorUm += valoresJogadorUm[i]
//       }
//       const valoresComputador = s2.map((player) => {
//          return player.valor
//       })
//       let somaComputador = 0
//       for (let i = 0; i < valoresComputador.length; i++) {
//          somaComputador += valoresComputador[i]
//       }
//       somaValoresJogadores.push(somaJogadorUm)
//       somaValoresJogadores.push(somaComputador)
//    }
//    somandoValores(jogadorUm, computador)

//    function conclusaoJogo(jogadorUm, computador, somaValoresJogadores) {
//       let usuario = `Usuário - cartas: ${jogadorUm[0].texto} ${jogadorUm[1].texto} - pontuação ${somaValoresJogadores[0]}`
//       console.log(usuario)
//       let computadorFinal = `Computador - cartas: ${computador[0].texto} ${computador[1].texto} - pontuação ${somaValoresJogadores[1]}`
//       console.log(computadorFinal)
//       let vencedor = somaValoresJogadores
//       if (vencedor[0] > 21 && vencedor[1] > 21) {
//          mensagem = "Empate"
//       } else if (vencedor[0] > 21) {
//          mensagem = "O Computador ganhou!"
//       } else if (vencedor[1] > 21) {
//          mensagem = "O Usuário ganhou!"
//       } else if (vencedor[0] < vencedor[1]) {
//          mensagem = "O Computador ganhou!"
//       } else if (vencedor[0] > vencedor[1]) {
//          mensagem = "O Usuário ganhou!"
//       } else { mensagem = "Empatou" }
//       console.log(mensagem)
//    }
//    conclusaoJogo(jogadorUm, computador, somaValoresJogadores)
// } else {
//    console.log('O jogo acabou!')
// }
