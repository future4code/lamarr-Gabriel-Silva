/***************************** Exercícios de interpretação de código *****************************/

    /*1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
        
        let array
        console.log('a. ', array)

      R: A resposta impressa será undefined, pois não definimos um valor para o array.
        
        array = null
        console.log('b. ', array)
    
      R: A resposta impressa será null, pois definimos o valor null para o array.
        
        array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        console.log('c. ', array.length)

      R: A resposta impressa será o tamanho do array, no caso, 11.
        
        let i = 0
        console.log('d. ', array[i])

      R: A resposta impressa o valor 3. Pois, para a variável i foi atribuido o valor 0, este, representa o valor 3 do array.
        
        array[i+1] = 19
        console.log('e. ', array)

      R: O segundo valor do array, 4, será substituido por 19.
        
        const valor = array[i+6]
        console.log('f. ', valor)
      R: A resposta impressa será o valor 9. Pois, para a variável valor atribuímos a soma do primeiro valor do array + 6.
       
 2. Leia o código abaixo com atenção 
        
      const frase = prompt("Digite uma frase")
        
        console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
    
        Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

    R: O valor impresso será a frase em caixa alta e, onde aparece a letra A, esta será substituida pela letra I. 
       E no final, constará o tamanho da frase contando os espaços.*/

/***************************** Exercícios de escrita de código *****************************/

/*1- Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!*/

const nomeUsuario = prompt("Olá, como você se chama?")
let emailUsuario = prompt("Por favor, digite o seu e-mail")

console.log("Exercício 1")
console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}`)

/*2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
    a) Imprima no console o array completo
    
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.
    
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista*/

const comidasPreferidas = ["Strogonoff","Lasanha","PFão","Pavê","Brigadeirão"]

console.log("Exercicio 2")
console.log(comidasPreferidas)
console.log(`B. Essas são as minhas comidas preferidas: 
${comidasPreferidas[0]}, 
${comidasPreferidas[1]},
${comidasPreferidas[2]},
${comidasPreferidas[3]},
${comidasPreferidas[4]}.`)

const perguntaDesafio = prompt("Qual é a sua comida preferida?")
comidasPreferidas[0+1] = perguntaDesafio

console.log(`C. Nova lista: ${comidasPreferidas}`)

/*3. Faça um programa, seguindo os passos:
    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    c) Imprima o array no console
    
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    e) Remova da lista o item de índice que o usuário escolheu.
    
    f) Imprima o array no console*/

    console.log("Exercício 3")
    const listaDeTarefas = []
    listaDeTarefas.push(prompt("Vamos montar uma lista de 3 tarefas para hoje. Primeiro, digite uma tarefa para hoje"))
    listaDeTarefas.push(prompt("Agora, digite mais uma tarefa para hoje"))
    listaDeTarefas.push(prompt("Por fim, digite outra tarefa para hoje."))
    
    console.log("A,B,C",listaDeTarefas)

    listaDeTarefas.splice(Number(prompt("Das tarefas comentadas anteriormente, de 1 a 3, escolha qual você já realizou"))-1,1)
    console.log("D,E,F.", listaDeTarefas)

/***************************** Desafio *****************************/

const arrayFrase = []
arrayFrase.push(prompt("Digite aqui sua frase"))

console.log(`1. ${arrayFrase}`)

let arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
let escolhaFruta = prompt("Escolha uma das frutas a seguir para saber o seu índice no array. Banana, Morango, Abacaxi, Laranja e Ameixa");

function contem_fruta(nome_fruta) {

   return nome_fruta.indexOf(escolhaFruta) !== -1;
}

console.log(`O índice da fruta escolhida, ${escolhaFruta}, é ${arrayFrutas.findIndex(contem_fruta, escolhaFruta)} e o lenght do array é ${arrayFrutas.length}`);
