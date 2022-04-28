/********************EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO********************/

// // 1. Leia o código abaixo:

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// // a) Explique o que o código faz. Qual o teste que ele realiza?
// // R: O código solicia ao usuário que escolha um número, esse número que virá como string é convertido para number e assim usado para verificar se o mesmo é divisível por 2. 
// // Caso seja, resto 0, irá retornar a mensagem "Passou no teste", se não for, retorna a outra mensagem "Não passou no teste.".

// // b) Para que tipos de números ele imprime no console "Passou no teste"? 
// // R: Números com divisão exata por 2

// // c) Para que tipos de números a mensagem é "Não passou no teste"?
// // R: Números que não possuem a divisão exata por 2

// // 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// // a) Para que serve o código acima?
// // R: O código acima serve para trazer o preço da fruta escolhida pelo usuário

// // b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// // R: O preço da fruta Maçã é R$ 2.25

// // c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` 
// // (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// // R: O valor que será mostrado é o do default, R$ 5. Pois, quando removemos o break, o código da continuidade e não para no item selecionado.

// // 3.Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// // a) O que a primeira linha está fazendo?
// // R: A primeira linha está solicitando que o usuário escolha um número através do comando prompt.
// // E com o comando Number, está convertendo esse valor que estaria como string para number.

// // b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// // R: Com o número 10, o console imprime "Esse número passou no teste", e com -10 não imprime nada.

// // c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// //R: Sim. A variável mensagem foi criada no escopo local, sendo assim, o console.log que está no escopo global tentando acessar
// // a variável mensagem, não irá funcionar. 

/********************EXERCÍCIOS DE ESCRITA DE CÓDIGO********************/

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

const idadeUsuario = Number(prompt("Digite a sua idade"))

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
// Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir.".

console.log("EXERCICIO 1")
if (idadeUsuario >= 18){
    console.log(`Você pode dirigir! (▀̿Ĺ̯▀̿ ̿)`)
} else { 
    console.log(`Você não pode dirigir. (︶︹︺)`)
}

/*2. Agora faça um programa que verifica que turno do dia um aluno estuda. 
Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 
Utilize o bloco if/else*/

console.log("EXERCICIO 2")
const periodo = prompt("Escolha uma das letras para informar o período que você estuda:\nM (matutino), V (Vespertino) ou N (Noturno).").toLowerCase()

if (periodo === 'm'){
    comprimentar = 'Bom Dia'
} else if (periodo === 'v'){
    comprimentar = 'Boa Tarde'
} else if (periodo === 'n'){
    comprimentar = 'Boa Noite'
} else { comprimentar = 'Por favor, escolha somente uma das letras indicadas'}

console.log(comprimentar)

// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

console.log("EXERCICIO 3")
const periodoDois = prompt("Escolha uma das letras para informar o período que você estuda:\nM (matutino), V (Vespertino) ou N (Noturno).").toLowerCase()

let saudacoes
switch (periodoDois){
    case 'm':
    saudacoes = 'Bom Dia'
    break;
    case 'v':
        saudacoes = 'Boa Tarde'
        break;
        case 'n':
            saudacoes = 'Boa Noite'
            break;
            default:
            saudacoes = 'Por favor, escolha somente uma das letras indicadas'
            break;
}
console.log(saudacoes)

// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, 
// porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso estiver abaixo de 15 reais. 
// Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, 
// então verifique se seu amigo ou amiga vai topar assistir o filme. 
// Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

console.log("EXERCICIO 4")
let generoFilme = prompt("Digite o gênero do filme?").toLowerCase().trim()
let valorIngresso = Number(prompt("Digite o valor do ingresso"))

function vaiRolarFilminho(v1,v2){
    if ((v1 === 'fantasia') && (v2 < 15)){
        return 'Bom Filme'
    } else {return 'Escolha outro filme :('}
}
console.log(vaiRolarFilminho(generoFilme,valorIngresso))

/********************DESAFIOS********************/

// 1.Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho 
// ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", 
// trocando [LANCHINHO] pelo que o usuário colocou no input.

console.log("DESAFIO 1")
let generoFilmeDesafio = prompt("Digite o gênero do filme?").toLowerCase().trim()
let valorIngressoDesafio = Number(prompt("Digite o valor do ingresso"))


function vaiRolarFilminhoDesafio(v1,v2){
    if ((v1 === 'fantasia') && (v2 < 15)){

        console.log('Bom filme!')
        let lanche = prompt("Qual lanche você irá comprar: Pipoca, chocolate ou docinhos?")
        let mensagemLanches    
        switch (lanche.toLowerCase().trim()){
                case 'pipoca':
                    mensagemLanches = `Aproveite a sua ${lanche}`
                    break;
                    case 'chocolate':
                        mensagemLanches = `Aproveite o seu ${lanche}`
                        break;
                        case 'docinhos':
                            mensagemLanches = `Aproveite os seus ${lanche}`
                            break;
                            default:
                                mensagemLanches = `Não quis lanche, tudo bem. :(`
                                break;
            }
            console.log(mensagemLanches)
    } else {console.log('Escolha outro filme =(')} 
}
vaiRolarFilminhoDesafio(generoFilmeDesafio,valorIngressoDesafio)

/*2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:

- Nome completo;
- Tipo de jogo: IN indica internacional; e DO indica doméstico;
- Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
- Categoria: pode ser as opções 1, 2, 3 ou 4;
- Quantidade de ingressos

O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . 
Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar 
(ou seja, o valor unitário do ingresso multiplicado pela quantidade). 
Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. 
Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)*/

console.log("DESAFIO 2")
const nomeUsuario = prompt('Digite o seu nome completo')
const tipoDeJogo = prompt('Escolha qual é o tipo do jogo: \nIN (Internacional)\nNA (Nacional)')
const etapaDoCampeonato = prompt('Qual é a fase do jogo? \nSF (semi-final)\nDT (Decisão terceiro lugar)\nFI (Final)')
const setores = Number(prompt('Escolha o numéro identificando o setor que deseja: \n1 (Camarote)\n2 (Numeradas)\n3 (Arquibancadas Azul,Vermelha)\n4 (Arquibancada Laranja/Amarela)'))
const quatidadeIngresso = Number(prompt('Quantos ingressos deseja comprar?'))

let semiCategorias = [1320, 880, 550, 220]
let terceiroCategorias = [660, 440, 330, 170]
let finalCategorias = [1980, 1320, 880, 330]
let dolar = 4.10


function valorIngressoJogo(vj1, vj2, vj3, vj4, vj5) {
    if (vj2.toLowerCase() === 'na') {
        let categoriaJogo = 'Nacional'
        if (vj3.toLowerCase() === 'sf') {
            let setorValorSf
            switch (vj4) {
                case 1:
                    setorValorSf = semiCategorias[vj4 - 1]
                    break;
                case 2:
                    setorValorSf = semiCategorias[vj4 - 1]
                    break;
                case 3:
                    setorValorSf = semiCategorias[vj4 - 1]
                    break;
                case 4:
                    setorValorSf = semiCategorias[vj4 - 1]
                    break;
                default:
                    setorValorSf = "Por favor, somente o número do setor: \n1 (Camarote)\n2 (Numeradas)\n3 (Arquibancadas Azul,Vermelha)\n4 (Arquibancada Laranja/Amarela)"
                    break;
            }   let valorPagoSetor = setorValorSf * vj5
            let fase = 'Semi Finais'
            console.log(`----Dados da compra---- \nNome do Cliente: ${vj1}\nTipo do Jogo: ${categoriaJogo}\nEtapa do Campeonato: ${fase}\nSetor escolhido: ${vj4}\nQuantidade de ingressos: ${vj5}\n----Valores----\nValor do ingresso: R$ ${setorValorSf}\nValor total: R$ ${valorPagoSetor}`)
        } else if (vj3.toLowerCase() === 'dt') {
            let setorValorDt
            switch (vj4) {
                case 1:
                    setorValorDt = terceiroCategorias[vj4 - 1]
                    break;
                case 2:
                    setorValorDt = terceiroCategorias[vj4 - 1]
                    break;
                case 3:
                    setorValorDt = terceiroCategorias[vj4 - 1]
                    break;
                case 4:
                    setorValorDt = terceiroCategorias[vj4 - 1]
                    break;
                default:
                    setorValorDt = "Por favor, somente o número do setor: \n1 (Camarote)\n2 (Numeradas)\n3 (Arquibancadas Azul,Vermelha)\n4 (Arquibancada Laranja/Amarela)"
                    break;
            } let valorPagoSetor = setorValorDt * vj5
            let fase = 'Decisão Terceiro Lugar'
            console.log(`----Dados da compra---- \nNome do Cliente: ${vj1}\nTipo do Jogo: ${categoriaJogo}\nEtapa do Campeonato: ${fase}\nSetor escolhido: ${vj4}\nQuantidade de ingressos: ${vj5}\n----Valores----\nValor do ingresso: R$ ${setorValorDt}\nValor total: R$ ${valorPagoSetor}`)
        } else if (vj3.toLowerCase() === 'fi') {
            let setorValorFinal
            switch (vj4) {
                case 1:
                    setorValorFinal = finalCategorias[vj4 - 1]
                    break;
                case 2:
                    setorValorFinal = finalCategorias[vj4 - 1]
                    break;
                case 3:
                    setorValorFinal = finalCategorias[vj4 - 1]
                    break;
                case 4:
                    setorValorFinal = finalCategorias[vj4 - 1]
                    break;
                default:
                    setorValorFinal = "Por favor, somente o número do setor: \n1 (Camarote)\n2 (Numeradas)\n3 (Arquibancadas Azul,Vermelha)\n4 (Arquibancada Laranja/Amarela)"
                    break;
            } let valorPagoSetor = setorValorFinal * vj5
            let fase = 'Final'
            console.log(`----Dados da compra---- \nNome do Cliente: ${vj1}\nTipo do Jogo: ${categoriaJogo}\nEtapa do Campeonato: ${fase}\nSetor escolhido: ${vj4}\nQuantidade de ingressos: ${vj5}\n----Valores----\nValor do ingresso: R$ ${setorValorFinal}\nValor total: R$ ${valorPagoSetor}`)
        } else { console.log(`Escolha uma das siglas que identificam a fase do campeonato`) }
    } else if (vj2.toLowerCase() === 'in') {
        let categoriaJogo = 'Internacional'
        if (vj3.toLowerCase() === 'sf') {
            let setorValorSf
            switch (vj4) {
                case 1:
                    setorValorSf = semiCategorias[vj4 - 1] / dolar
                    break;
                case 2:
                    setorValorSf = semiCategorias[vj4 - 1] / dolar
                    break;
                case 3:
                    setorValorSf = semiCategorias[vj4 - 1] / dolar
                    break;
                case 4:
                    setorValorSf = semiCategorias[vj4 - 1] / dolar
                    break;
                default:
                    setorValorSf = "Por favor, somente o número do setor: \n1 (Camarote)\n2 (Numeradas)\n3 (Arquibancadas Azul,Vermelha)\n4 (Arquibancada Laranja/Amarela)"
                    break;
            }   let valorPagoSetor = (setorValorSf * vj5)
            let fase = 'Semi Finais'
            console.log(`----Dados da compra---- \nNome do Cliente: ${vj1}\nTipo do Jogo: ${categoriaJogo}\nEtapa do Campeonato: ${fase}\nSetor escolhido: ${vj4}\nQuantidade de ingressos: ${vj5}\n----Valores----\nValor do ingresso: U$ ${setorValorSf}\nValor total: U$ ${valorPagoSetor}`)
        } else if (vj3.toLowerCase() === 'dt') {
            let setorValorDt
            switch (vj4) {
                case 1:
                    setorValorDt = terceiroCategorias[vj4 - 1] / dolar
                    break;
                case 2:
                    setorValorDt = terceiroCategorias[vj4 - 1] / dolar
                    break;
                case 3:
                    setorValorDt = terceiroCategorias[vj4 - 1] / dolar
                    break;
                case 4:
                    setorValorDt = terceiroCategorias[vj4 - 1] / dolar
                    break;
                default:
                    setorValorDt = "Por favor, somente o número do setor: \n1 (Camarote)\n2 (Numeradas)\n3 (Arquibancadas Azul,Vermelha)\n4 (Arquibancada Laranja/Amarela)"
                    break;
            } let valorPagoSetor = (setorValorDt * vj5)
            let fase = 'Decisão Terceiro Lugar'
            console.log(`----Dados da compra---- \nNome do Cliente: ${vj1}\nTipo do Jogo: ${categoriaJogo}\nEtapa do Campeonato: ${fase}\nSetor escolhido: ${vj4}\nQuantidade de ingressos: ${vj5}\n----Valores----\nValor do ingresso: U$ ${setorValorDt}\nValor total: U$ ${valorPagoSetor}`)
        } else if (vj3.toLowerCase() === 'fi') {
            let setorValorFinal
            switch (vj4) {
                case 1:
                    setorValorFinal = finalCategorias[vj4 - 1] / dolar
                    break;
                case 2:
                    setorValorFinal = finalCategorias[vj4 - 1] / dolar
                    break;
                case 3:
                    setorValorFinal = finalCategorias[vj4 - 1] / dolar
                    break;
                case 4:
                    setorValorFinal = finalCategorias[vj4 - 1] / dolar
                    break;
                default:
                    setorValorFinal = "Por favor, somente o número do setor: \n1 (Camarote)\n2 (Numeradas)\n3 (Arquibancadas Azul,Vermelha)\n4 (Arquibancada Laranja/Amarela)"
                    break;
            } let valorPagoSetor = (setorValorFinal * vj5)
            let fase = 'Final'
            console.log(`----Dados da compra---- \nNome do Cliente: ${vj1}\nTipo do Jogo: ${categoriaJogo}\nEtapa do Campeonato: ${fase}\nSetor escolhido: ${vj4}\nQuantidade de ingressos: ${vj5}\n----Valores----\nValor do ingresso: U$ ${setorValorFinal}\nValor total: U$ ${valorPagoSetor}`)
        } else { console.log(`Escolha uma das siglas que identificam a fase do campeonato: \nSF (semi-final)\nDT (Decisão terceiro lugar)\nFI (Final) `) }
    } else { console.log(`Escolha uma das siglas que identificam o tipo do jogo: \nIN (Internacional)\nNA (Nacional)`) }
}
valorIngressoJogo(nomeUsuario, tipoDeJogo, etapaDoCampeonato, setores, quatidadeIngresso)