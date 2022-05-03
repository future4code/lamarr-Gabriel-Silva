/********************Exercícios de interpretação de código********************/

// // 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?


// let valor = 0
// for (let i = 0; i < 5; i++) {
//     valor += i
// }
// console.log(valor)
// // R: O resultado impresso será 10. O código cria um looping que, enquanto a variável i for menor que 5, serão adicionados valores a variável valor e somados.

// // 2. Leia o código abaixo:


// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     if (numero > 18) {
//         console.log(numero)
//     }
// }

// // a) O que vai ser impresso no console?
// //R: Será impresso no console somente os valores maiores que 18.

// // b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// /*R: No for...of... o laço varre todo o array informado, portanto, somente ele não seria suficiente. No caso acima, seria necessário criar uma lógica,
// para identificar o tamanho do novo array (valores >18) e assim, seria possível identificar o índice de cada elemento do array.*/

// // 3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while (quantidadeAtual < quantidadeTotal) {
//     let linha = ""
//     for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
//         linha += "*"
//     }
//     console.log(linha)
//     quantidadeAtual++
// }
// // R: O valor impresso, será uma sequência de * iniciando com * e terminando com ****

/********************Exercícios de escrita de código********************/

// 1.Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

// c) Por fim, imprima o array com os nomes dos bichinhos no console

console.log("EXERCÍCIO 1")
const quantidadePets = Number(prompt("Quantos pets você tem?"))
if (quantidadePets === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else if (quantidadePets === 1) {
    let listaPets = []
    const nomePets = prompt("Digite o nome do seu pet")
    listaPets.push(nomePets)
    console.log(listaPets)
} else {
    let i = 0
    let listaPets = []
    while (i < (quantidadePets)) {
        const nomePets = prompt("Digite um nome de cada vez dos seus pets")
        listaPets.push(nomePets)
        i++
    } console.log(listaPets)
}

/*2.Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. 
Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:*/

// a) Escreva um programa que **imprime** cada um dos valores do array original.

// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

console.log("EXERCÍCIO 2")
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
console.log(`Exercício A: ${arrayOriginal}`)

let novoArray = []
for (let i = 0; i < arrayOriginal.length; i++) {
    const elementoDivido = (arrayOriginal[i] / 10)
    novoArray.push(elementoDivido)
} console.log(`Exercício B: ${novoArray}`)

let arrayPares = []
for (let i = 0; i < arrayOriginal.length; i++) {
    let numerosPares = (arrayOriginal[i] % 2)
    if (numerosPares === 0) {
        arrayPares.push(arrayOriginal[i])
    }
} console.log(`Exercício C: ${arrayPares}`)

let arrayStrings = []

let i = 0
while (i < arrayOriginal.length) {
    let index = arrayOriginal.indexOf(arrayOriginal[i])
    let numero = arrayOriginal[index]
    texto = `\nO elemento do índex ${index} é: ${numero}`
    arrayStrings.push(texto)
    i++
}
console.log(`Exercício D: ${arrayStrings}`)

function numerosMaiorMenor(v1) {
    let maiorNumero = 0
    for (let elementoArray of v1) {
        if (elementoArray > maiorNumero) {
            maiorNumero = elementoArray
        }
    }
    let menorNumero = maiorNumero
    for (let elementoArray of v1) {
        if (elementoArray < menorNumero) {
            menorNumero = elementoArray
        }
    }
    return `O maior número do array é ${maiorNumero} e o menor é ${menorNumero}`
}
console.log(`Exercício E: ${numerosMaiorMenor(arrayOriginal)}`)

/********************DESAFIO********************/

/*1. Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. 

Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. 
Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si.*/

/*Um resumo das funcionalidades são:

a) Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`

b) A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado no console:

- O número chutado, com a mensagem: `O número chutado foi: <número>`
- Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`

c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: 
`Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>`*/

console.log('DESAFIO 1')
const nomeJogadorUm = prompt("Nome do primeiro jogador")

const nomeJogadorDois = prompt("Nome do segundo jogador")


let jogadorUm = 0
while (jogadorUm < 1){
    solicitarNumero = Number(prompt("Escolha um número de 1 a 100"))
    jogadorUm =solicitarNumero
}

let jogadorDois = [Number(prompt("Sua vez! Tente adivinhar o número escolhido de 1 a 100"))]

let indice = 0
while (jogadorDois[indice] !== jogadorUm) {
    if (jogadorDois[indice] < jogadorUm) {
        console.log(`O número chutado foi: ${jogadorDois[indice]}\nErrou! É maior!`)
        let novaTentativa = Number(prompt("Errou! É maior! Chute novamente!"))
        jogadorDois.push(novaTentativa)
    } else {
        jogadorDois[indice] > jogadorUm
        console.log(`O número chutado foi: ${jogadorDois[indice]}\nErrou! É menor!`)
        let novaTentativa = Number(prompt("'Errou! É menor!Chute novamente!"))
        jogadorDois.push(novaTentativa)
    }
    indice++
} console.log(`O número chutado foi: ${jogadorDois[indice]}\nAcertou!!!!!\nO número de tentativas foi de: ${jogadorDois.length} tentativas.\nParabéns ${nomeJogadorDois}, agora é sua vez! F5 para começar a sua rodada!`)

/*2. Uma das principais características de uma boa pessoa programadora é conseguir resolver seus problemas independentemente. 
Queremos que você comece a treinar isso a partir de hoje! Então, vamos pedir para que você faça uma alteração no código acima. 
Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador. 
A ideia é: ao iniciar o jogo, você deve sortear um número aleatório (entre 1 e 100) e o usuário terá que ficar chutando o valor até acertar. 
Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.
Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta alteração? 
O que você poderia ter feito para que fosse mais fácil? **Deixe comentários no seu código sobre esta reflexão.***/

console.log('DESAFIO 2')
const nomeUsuario = prompt("Digite o seu nome")

function roboAleatorio(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}
const numeroRobo = roboAleatorio(1, 100)

let usuario = [Number(prompt("Bora adivinhar o número que o robô escolheu de 1 a 100"))]
let index = 0
while (usuario[index] !== numeroRobo) {
    if (usuario[index] < numeroRobo) {
        console.log(`O número chutado foi: ${usuario[index]}\nErrou! É maior!`)
        let novaTentativa = Number(prompt("Errou! É maior! Chute novamente!"))
        usuario.push(novaTentativa)
    } else {
        usuario[index] > roboAleatorio(1, 100)
        console.log(`O número chutado foi: ${usuario[index]}\nErrou! É menor!`)
        let novaTentativa = Number(prompt("'Errou! É menor!Chute novamente!"))
        usuario.push(novaTentativa)
    }
    index++
} console.log(`O número chutado foi: ${usuario[index]}\nAcertou!!!!!\nO número de tentativas foi de: ${usuario.length} tentativas.\nParabéns ${nomeUsuario} você venceu o sistema`)

/*Reflexão: Foi muuuuuuuuuuuito mais fácil. Se a idéia era ser perrengue moio kkkkkkk. O esqueleto já estava montado, basicamente só tirei a solicitação
do primeiro usuário e criei a função do robozinho aleatório. Ok, mudei os nomes das variáveis, mas isso é sussa. Então, foi beeem tranquilo!*/