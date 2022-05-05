/*************************Exercícios de interpretação de código*************************/

// 1. Leia o código abaixo:

/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
    console.log(item, index, array)
})*/

//   a) O que vai ser impresso no console?

/*R: Será impresso tudo. Isto é, primeiro será impresso o primeiro elemento do array, depois o número índice
desse elemento e por fim, o array completo. Isso se repete para os demais elementos do array consequentemente.*/

// 2. Leia o código abaixo

/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
    return item.nome
})

console.log(novoArrayB)*/

// a) O que vai ser impresso no console?

//R: Retorna somente os nomes presente no array usuários.

// 3. Leia o código abaixo


/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
    return item.apelido !== "Chijo"
})

console.log(novoArrayC)*/


// a) O que vai ser impresso no console?
//R: Serão impressos os objetos que não contêm o apelido Chijo.

/*************************Exercícios de interpretação de código*************************/

/*1.Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:*/

//a) Crie um novo array que contenha apenas o nome dos doguinhos

//b) Crie um novo array apenas com os [cachorros salsicha]

/*c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"*/

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

console.log('Exercício 1A')
const listaNomePets = pets.map((array) =>  {
    return array.nome
})
console.log(listaNomePets)

console.log('Exercício 1B')
const petsSalsicha = pets.filter((array) => {
    return array.raca === "Salsicha"
})

console.log(petsSalsicha)

console.log('Exercício 1C')

const petsPoodle = pets.filter((array) => {
    return array.raca === "Poodle"
})
const listaNomePoodles = petsPoodle.map((array) => {
    return array.nome
})

for (let i = 0; i < listaNomePoodles.length; i++) {
    let mensagemPoodle = `Você ganhou um cupom de desconto de 10% para tosar o/a ${listaNomePoodles[i]}!`
    console.log(mensagemPoodle)
}

// 2.Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

// a) Crie um novo array que contenha apenas o nome de cada item

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
console.log("Exercício 2A")
const listaNomesProdutos = produtos.map((array) => {
    return array.nome
})
console.log(listaNomesProdutos)

console.log("Exercício 2B")
let valorDesconto = 5

function descontosProdutos(array) {
    let desconto = (array.preco * (1 - (valorDesconto / 100))).toFixed(2) //Pesquisei esse toFixed() pq estava muito estranho os decimais
    let nome = array.nome
    let categoria = array.categoria
    const novosObjetos = {
        nome: nome,
        categoria: categoria,
        preco: desconto
    }
    return novosObjetos
}

let descontos = produtos.map(descontosProdutos)

console.log(descontos)

console.log("Exercício 2C")

const listaBebidas = produtos.filter((array) => {
    return array.categoria === "Bebidas"
})
console.log(listaBebidas)

console.log("Exercício 2D")

const listaYpe = produtos.filter((array) => {
    return array.nome.includes("Ypê")
})
console.log(listaYpe)

console.log("Exercício 2E")

const listaMensagemCampanha = listaYpe.map((array) => {
    return `Compre ${array.nome} por ${array.preco}`
})
console.log(listaMensagemCampanha)

/*************************DESAFIO*************************/

// 1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

// a) Crie um novo array que contenha apenas o nome dos pokémons em **ordem alfabética**
console.log("DESAFIO 1A")
const nomesPokemons = pokemons.map((array) => {
    return array.nome
})
console.log(nomesPokemons.sort())
// b) Crie um novo array apenas com os tipos dos pokémons, sem repetição

console.log("DESAFIO 1B")
const step = pokemons.map((array)=>{
    return array.tipo
})
const tiposPokemons = [...new Set(step)]
console.log(tiposPokemons)
