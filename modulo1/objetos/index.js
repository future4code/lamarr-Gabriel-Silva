/******************** EXERCÍCIOS DE INTERPERETAÇÃO DE CÓDIGO ********************/

// // 1. Leia o código abaixo
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// // a) O que vai ser impresso no console?

// /*R: No primeiro, será impresso o nome do primeiro do array elenco, Matheus Nachtergaele. 
// No segundo, será impresso o nome do último valor do array do elenco, Virginia Cavendish
// No terceirio, será impresso as informações do último valor do array transmissoesHoje, Canal: Globo, horario: 14h.*/

// // 2. Leia o código abaixo

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// // a) O que vai ser impresso no console?
// /*R: No primeiro, será impresso o objeto cachorro com todas as suas informações.
// No segundo, será impresso o objeto gato. As informações desse objetos foram copiadas do objeto cachorro, e mudamos o nome do pet.
// No terceiro, será impresso o objeto tartaruga. As informações desse objeto foram copiadas do objeto gato, e mudamos o nome do pet, onde tem a colocamos o.*/

// // b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// /*R: A sintaxe dos três pontos, permite que façamos uma copia de algum objeto existente, e assim, possamos acrescentar ou alterar valores
// sem que o objeto original seja alterado.*/

// // 3. Leia o código abaixo

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// // a) O que vai ser impresso no console?
// /*R: No primeiro, será impresso a informação false. E no segundo, será impresso o valor undefined*/

// // b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// /*R: A função criada tem como objetivo verificar um objeto e trazer a informação de alguma propriedade presente nele.
// Sendo assim, no primeiro console.log, usamos o objeto pessoa e buscamos a informação que existe na propriedade backender, por isso, o retorno que tivemos foi false.
// Já no segundo caso, buscamos a propriedade altura, entretanto, essa não existe no objeto. Por isso, o retorno foi de undefined.*/

/******************** EXERCÍCIOS DE ESCRITA DE CÓDIGO ********************/

/*1. Resolva os passos a seguir: 
a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). 
Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:*/

console.log("EXERCÍCIO 1A")

const nome = prompt("Digite o seu nome")
const apelidoUm = prompt("Digite um apelido seu")
const apelidoDois = prompt("Digite outro apelido seu")
const apelidoTres = prompt("Digite mais um apelidos seu")

const pessoas = {
    nomes: nome,
    apelidos: [apelidoUm, apelidoDois, apelidoTres] 
}

console.log(`Eu sou ${pessoas.nomes}, mas pode me chamar de: ${pessoas.apelidos[0]}, ${pessoas.apelidos[1]} ou ${pessoas.apelidos[2]}`)

/*b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. 
Depois, chame a função feita no item anterior passando como argumento o novo objeto*/

console.log("EXERCÍCIO 1B")

const novosApelidos = {
    ...pessoas,
    apelidos: ["Gigante", "Verstappen", "Martins"]
}

console.log(`Eu sou ${novosApelidos.nomes}, mas pode me chamar de: ${novosApelidos.apelidos[0]}, ${novosApelidos.apelidos[1]} ou ${novosApelidos.apelidos[2]}`)

// /*2. Resolva os passos a seguir: 

// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`*/

const personOne = {
    id: "John",
    age: 30,
    job: "Fazendeiro"
}

const personTwo = {
    id: "Marie",
    age: 28,
    job: "Veterinária"
}

function minhaFuncao(objeto) {
    ids = objeto.id
    tamanhoNome = ids.length
    age = objeto.age
    job = objeto.job
    tamanhoProfissao = job.length

    array = [ids, tamanhoNome, age, job, tamanhoProfissao]

    return array
}
console.log ("EXERCÍCIO 2")
console.log(minhaFuncao(personTwo))

/*3. Resolva os passos a seguir: 
a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)
c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 
d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos*/

console.log("EXERCÍCIO 3")

const frutaUm = prompt("Digite uma fruta que você tenha que comprar")
const frutaDois= prompt("Digite outra fruta que você tenha que comprar")
const frutaTres = prompt("Digite mais uma fruta que você tenha que comprar")

const carrinho = []

const primeiraFruta = { 
    nome: frutaUm,
    disponibilidade: true
}
const segundaFruta = { 
    nome: frutaDois,
    disponibilidade: true
}
const terceiraFruta = { 
    nome: frutaTres,
    disponibilidade: true
}

function meuCarrinho(objetoUm,objetoDois,ObjetoTres) {
carrinho.push(objetoUm)
carrinho.push(objetoDois)
carrinho.push(ObjetoTres)
}
meuCarrinho(primeiraFruta,segundaFruta,terceiraFruta)

console.log(carrinho)

/******************** DESAFIOS ********************/

/*1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. 
Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.*/

const nomes = prompt("Digite o seu nome")
const idade = Number(prompt("Digite sua idade"))
const profissao = prompt("Digite sua profissão")

const profissional = { 
    nome: nomes,
    idade: idade,
    profissao: profissao
}

console.log('DESAFIO 1')
console.log(profissional,typeof(profissional))

/*2. Crie uma função que receba dois objetos que representam filmes. 
Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:*/

const filmeUm = {
    anoLancamento: 2022,
    nome: 'Fantastic Beasts: The Secrets of Dumbledore'
}
const filmeDois ={
    anoLancamento: 2022,
    nome: 'The Batman'
}
function comparativo (f1,f2){
    lancamentoAntes = (f1 < f2)
    lancamentoMesmoAno = (f1 === f2)

}
comparativo(filmeUm.anoLancamento, filmeDois.anoLancamento)

console.log('DESAFIO 2')
console.log(`O primeiro filme foi lançado antes do segundo? ${lancamentoAntes}`)
console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${lancamentoMesmoAno}`)

/*3. Crie uma função a mais pro exercício 3 de escrita de código. 
Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e 
retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido.*/


const desafioFrutaUm = prompt("Digite uma fruta que você tenha que comprar").toLowerCase().trim()
const desafioFrutaDois= prompt("Digite outra fruta que você tenha que comprar").toLowerCase().trim()
const desafioFrutaTres = prompt("Digite mais uma fruta que você tenha que comprar").toLowerCase().trim()

const desafioCarrinho = []

const desafioPrimeiraFruta = { 
    nome: desafioFrutaUm,
    disponibilidade: true
}
const desafioSegundaFruta = { 
    nome: desafioFrutaDois,
    disponibilidade: true
}
const desafioTerceiraFruta = { 
    nome: desafioFrutaTres,
    disponibilidade: true
}

function desafioMeuCarrinho(objetoUm,objetoDois,ObjetoTres) {
    desafioCarrinho.push(objetoUm)
    desafioCarrinho.push(objetoDois)
    desafioCarrinho.push(ObjetoTres)
}
desafioMeuCarrinho(desafioPrimeiraFruta,desafioSegundaFruta,desafioTerceiraFruta)

function estoque(e1){
    let estoqueFruta = {
    ...desafioPrimeiraFruta,
    disponibilidade: false
    }
    desafioCarrinho[0] = estoqueFruta
}
estoque(desafioPrimeiraFruta)

console.log('DESAFIO 3')
console.log(desafioCarrinho)