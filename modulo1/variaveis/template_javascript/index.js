//EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO

// 1 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

// let a = 10
// let b = 10

// console.log(b)

// b = 5

// console.log(a,b)

/*Será impresso primeiro o valor de 10 para B, e depois, os valores de 10 para A e 5 para B. Pois, o comando let permite a alteração do valor atribuído as variáveis, 
sendo assim,seguindo a ordem do código, após atribuir o valor inicial de 10 para B, alteramos para 5. */

// 2 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

// let a = 10
// let b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c)

/* Será impresso para todos o valor de 10. */

/* 3 - Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. 
Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.*/

// let horasTrabalhadasPorDia = prompt("Quantas horas você trabalha por dia?")
// let valorRecebidoPorDia = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${valorRecebidoPorDia/horasTrabalhadasPorDia} por hora`)

// //Os comandos acima calculam o quando a pessoa que está preenchendo as informações solicitadas recebe por hora.

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCICIO 1 

// const nome
// let idade

// console.log(typeof nome, idade)

//Resposta D: O valor impresso foi o Undefined, pois as variáveis criadas não possuel valores definidos.

const nome = prompt("Qual é o seu nome?")
let idade = Number(prompt("Quantos anos você tem?"))

console.log(nome, typeof nome)
console.log(idade, typeof idade)

/*Resposta F: O valor do nome volta como string e o valor da idade como number. Entretanto, o valor da idade só volta como number pois, usei o comando number
antes do prompt, caso contrário, voltaria como string também. */

console.log("Olá", nome, "você tem", idade, "anos")

//EXERCICIO 2

let voceESaoPaulino = prompt("Você torce para o São Paulo?")
const SaoPauloTemMundial = prompt("O São Paulo já foi campeão mundial?")
let PalmeirasTemMundial = prompt("E o Palmeiras, já foi campeão mundial?")

console.log("Eu sou São Paulino?", voceESaoPaulino, "O São Paulo já foi campeão mundial?", SaoPauloTemMundial, "E o Palmeiras, já foi?", PalmeirasTemMundial)

//EXERCICIO 3

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

c = b
b = a
a = c


// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

//DESAFIO

let numeroAleatorioPrimeiro = Number(prompt("Escolha um número qualquer?"))
let numeroAleatorioSegundo =  Number(prompt("Escolha outro número qualquer?"))

console.log("O primeiro número somado ao segundo número resulta em:", numeroAleatorioPrimeiro + numeroAleatorioSegundo)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", numeroAleatorioPrimeiro * numeroAleatorioSegundo)