/**************************************************** Exercícios de interpretação de código ****************************************************/

// /*1. Leia o código abaixo
    

//     function minhaFuncao(variavel) {
//     	return variavel * 5
//     }
    
//     console.log(minhaFuncao(2))
//     console.log(minhaFuncao(10))

    
//     a) O que vai ser impresso no console?

//     R: Os valores atribuídos dentro do () serão multiplicados por 5. Será impresso o valor final dessa multiplicação.
    
//     b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

//     R: Os valores continuariam sendo multiplicados normalmente, entretanto, não seria impresso nada no console.
    
// 2. Leia o código abaixo
    

//     let textoDoUsuario = prompt("Insira um texto");
    
//     const outraFuncao = function(texto) {
//     	return texto.toLowerCase().includes("cenoura")
//     }
    
//     const resposta = outraFuncao(textoDoUsuario)
//     console.log(resposta)
    
//     a. Explique o que essa função faz e qual é sua utilidade

//     R: Essa função deixa o texto inserido em minúsculo e busca validar se a palavra cenoura consta na frase inserida pelo usuário.
//     A utilidade dessa função pode ser atribuida para formulários, organizando as letras dos e-mails, vendo se foram escritos corretamente, por exemplo,
//     confirmando se o @ foi inserido.
    
//     b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//          i.   `Eu gosto de cenoura`
//          R: A saida seria true.

//          ii.  `CENOURA é bom pra vista`
//          R: A saida seria true.

//          iii. `Cenouras crescem na terra`
//          R: A saida seria true.*/
         
// /**************************************************** Exercícios de escrita de código ****************************************************/

/*1. Escreva as funções explicadas abaixo:
    
    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
    
    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
    
    Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
    
    b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
    
    Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].*/

console.log("EXERCÍCIO 1A - Outras infos sobre o user")

let informacoesUsuario = prompt("Escreva informações sobre você que não sejam seu nome, idade, onde você mora e sua profissão.")

function funcaoPrimeiroA(texto){
    console.log(texto)
}
funcaoPrimeiroA(informacoesUsuario)

console.log("EXERCÍCIO 1B - Infos básicas do user")

const nomeUsuario = prompt("Digite o seu nome")
let idadeUsuario = Number(prompt("Informe a sua idade"))
const cidadeUsuario = prompt("Informe a cidade onde mora")
let profissaoUsuario = prompt("Informe sua profissão atual")

let infoBaseUser = function (nome, idade, cidade, profissao) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
}
infoBaseUser(nomeUsuario,idadeUsuario,cidadeUsuario,profissaoUsuario)

/*2. Escreva as funções explicadas abaixo:
    
    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
    
    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
    
    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    
    d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.*/

console.log("EXERCÍCIO 2A - Somar os números")

let numeroPrimeiro = Number(prompt("Escolha um número"))
let numeroSegundo = Number(prompt("Escolha um outro número"))

const somando=(n1,n2)=>n1+n2
console.log(somando(numeroPrimeiro,numeroSegundo))

console.log("EXERCÍCIO 2B - Primeiro >= Segundo")

const comparacao=(n1,n2)=>n1>=n2
console.log(comparacao(numeroPrimeiro,numeroSegundo))

console.log("EXERCÍCIO 2C - Par ou Impar")

const parOuImpar=(n1)=> (n1 % 2) === 0

console.log(`O primeiro número escolhido é par? ${parOuImpar(numeroPrimeiro)}`)

console.log("EXERCÍCIO 2D - Contando o tamanho da frase em maiúsculo")
 
let fraseUser = prompt("Escreva uma frase")

function tamanhoFrase(frase){

    maiuscula = frase.toUpperCase()
    tamanho = frase.length

    final = `${maiuscula} ${tamanho}`

return final
}
console.log(tamanhoFrase(fraseUser))
    
/*3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
Em seguida, peça para o usuário inserir dois números e **chame** essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
Por fim, mostre no console o resultado das operações:
    

    Números inseridos: 30 e 3
    Soma: 33
    Diferença: 27
    Multiplicação: 90
    Divisão: 10*/

console.log("EXERCÍCIO 3 - Operações matemágicas")

let numberFirst = Number(prompt("Escolha um número"))
let numberSecond = Number(prompt("Escolha um outro número"))

const soma=(n1,n2)=> n1+n2
const subtracao=(n1,n2)=> n1-n2
const multiplicacao=(n1,n2)=> n1*n2
const divisao=(n1,n2)=> n1/n2

console.log(`O valor da soma é ${soma(numberFirst,numberSecond)}, da subtração é ${subtracao(numberFirst,numberSecond)},
 da multiplicação é ${multiplicacao(numberFirst,numberSecond)} e o da divisão é ${divisao(numberFirst,numberSecond)}`)

// /**************************************************** Desafios ****************************************************/

/*1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. 
Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
    
    a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
    
    b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** 
       Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo*/

console.log("DESAFIO 1A")

let primeiroParametro = Number(prompt("Escolha um número aleatório"))

const arrowFunctionA = n1 => n1

console.log(arrowFunctionA(primeiroParametro))

console.log("DESAFIO 1B")

let segundoParametro = Number(prompt("Escolha outro número aleatório"))
let terceiroParametro = Number(prompt("Escolha mais um número aleatório"))

const arrowFunctionB = (n2,n3) => n2 + n3

console.log(arrowFunctionA(arrowFunctionB(segundoParametro,terceiroParametro)))

/*2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. 
   Retorne este valor, invoque a função e imprima o resultado no console.*/

let catetoPrimeiro = Number(prompt("Informe o primeiro cateto"))
let catetoSegundo = Number(prompt("Informe o segundo cateto"))

const hipotenusa = (cat1,cat2) => Math.sqrt(((cat1*cat1)+(cat2*cat2)))

console.log(`O valor da hipotenusa é de ${hipotenusa(catetoPrimeiro,catetoSegundo)}`)

