/******************************************** EXERCICIO DE INTREPRETAÇÃO DE CÓDIGO ********************************************/

/*1.Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

RESPOSTA: O Console ira imprimir o resultado a. false, b. false c.true d. Boolean.

2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

Resposta: O console ira mostrar somente os valores escolhidos e não realizará a operação de soma.

3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

Para corrigir, devemos adicionar o comando Number na frente do prompt, assim, convertemos os valores para números e a operação será realizada.

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)*/

/******************************************** EXERCÍCIOS DE ESCRITA DE CÓDIGO ********************************************/

/*1. Faça um programa que:
    
    a) Pergunte a idade do usuário
    
    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    
    d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)*/

    let idadeUsuario = Number(prompt("Olá, quantos anos você tem?"))
    let idadeMelhorAmigeUsuario = Number(prompt("Quantos anos tem o seu ou a sua melhor amigo (a)?"))

    console.log("EXERCÍCIO 1")
    console.log("Sua idade é maior do que a do seu melhor amigo?", (idadeUsuario > idadeMelhorAmigeUsuario))
    console.log("A diferença de idade entre vocês é de:", (idadeUsuario - idadeMelhorAmigeUsuario), "ano(s)")

/*2. Faça um programa que:
    
    a) Peça ao usuário que insira um número **par**
    
    b) Imprima na console **o resto da divisão** desse número por 2.
    
    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    
    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código*/

    let numeroUsuario = Number(prompt("To rodando um teste aqui, ajuda eu por favor? escolha um número par."))

    console.log("EXERCÍCIO 2")
    console.log("O resto da divisão do seu número por 2 é de:", (numeroUsuario % 2))

    /* Resposta C: Todos os restos possuem o valor 0.
       Resposta D: Todos os restos possuem o valor 1*/
    

    /*3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    a) A idade do usuário em meses
    
    b) A idade do usuário em dias
    
    c) A idade do usuário em horas*/

    let anoNascimentoUsuario = Number(prompt("Já que estamos no momento interrogatório. Eu sei que você já falou sua idade, mas em que ano você nasceu?"))
    let anoAtual = 2022
    let idadeUsuarioMeses = (anoAtual - anoNascimentoUsuario) * 12
    let idadeUsuarioDias = (anoAtual - anoNascimentoUsuario) * 365
    let idadeUsuarioHoras = idadeUsuarioDias * 24

    console.log("EXERCÍCIO 3")
    console.log("Curiosidade. Sua idade em meses é de:", idadeUsuarioMeses, "meses")
    console.log("Curiosidade. Sua idade em dias é de:", idadeUsuarioDias, "dias")
    console.log("Curiosidade. Sua idade em horas é de:", idadeUsuarioHoras, "horas")

    // O 365 foi só para fazer o exercício, mas eu ainda estou pensando um jeito de considerar os anos bissextos para o resultado dos dias serem 100% corretos kkkkk

    
    /* 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:*/

    let primeiroNumeroUsuario = Number(prompt("Aproveitando de sua bondade, to precisando de um número aleatório, me fala um ai..."))
    let segundoNumeroUsuario = Number(prompt("Agora preciso de outro número aleatório."))
    let restoPrimeiroNumero = primeiroNumeroUsuario % segundoNumeroUsuario
    let restoSegundoNumero = segundoNumeroUsuario % primeiroNumeroUsuario

    console.log("EXERCÍCIO 4")
    console.log("O primeiro número é maior que o segundo?", (primeiroNumeroUsuario > segundoNumeroUsuario))
    console.log("O primeiro número é igual ao segundo?", (primeiroNumeroUsuario === segundoNumeroUsuario))
    console.log("O primeiro número é divisível pelo segundo?", (restoPrimeiroNumero === 0))
    console.log("O segundo número é divisível pelo primeiro?", (restoSegundoNumero === 0))



/******************************************** DESAFIOS ********************************************/

/*Todos os exercícios aqui são de escrita de código! 

1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). 
Abaixo estão duas delas:

- Graus Fahrenheit(°F) para Kelvin(K)
    
    ```
    (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
    ```
    
- Graus Celsius(°C) para Graus Fahrenheit (°C)
    
    ```
    (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32*/

console.log("DESAFIO DAS TEMPERATURAS")

// a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

let mcKelvin = ((77 - 32)*(5/9)) + 273.15

console.log("O valor de 77°F em Kelvin é de:", mcKelvin,"K")

// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.

let fahrenheit = (80*(9/5))+32

console.log("O valor de 80°C em Fahrenheit é de:", fahrenheit,"°F")

// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.

fahrenheit = (30*(9/5))+32
mcKelvin = ((fahrenheit - 32)*(5/9)) + 273.15

console.log("O valor de 30°C em Fahrenheit é de:", fahrenheit,"°F.", "E em Kelvin é de:", mcKelvin,"K")

// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

let portiolliCelsius = Number(prompt("Último pedido, por favor, escolha uma valor de temperatura em Celsius."))

fahrenheit = (portiolliCelsius*(9/5))+32
mcKelvin = ((fahrenheit - 32)*(5/9)) + 273.15

console.log("O valor escolhido de", portiolliCelsius,"°C", "em Fahrenheit é de:", fahrenheit,"°F.", "E em Kelvin é de:", mcKelvin,"K")

console.log("DESAFIO DA CONTA DE LUZ")

/*2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. 
Sabe-se que o quilowatt-hora de energia custa R$0.05. 
Faça um programa que receba a quantidade de quilowatts consumida por uma residência.*/

// a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora

let quilowatts = 280
let valorConta = quilowatts * 0.05

console.log("O valor da conta a ser paga é de R$",valorConta)

// b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto

let valorDesconto = 0.85

valorConta = valorConta * valorDesconto

console.log("O valor da conta com o desconto de 15% será de R$",valorConta)

console.log("DESAFIO DOS PESOS E MEDIDAS")

/*3. Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. 
Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). 
Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). 
Dada essa introdução, faça o que se pede:*/
    
    /*a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
    `20lb equivalem a X kg`*/

    let libra = 20
    let libraQuilograma = libra / 2.205

    console.log(libra,"lb equivalem a", libraQuilograma,"kg")
    
     /*b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
    `10.5oz equivalem a X kg`*/

    let onca = 10.5
    let oncaQuilograma = onca / 35.274

    console.log(onca,"oz equivalem a", oncaQuilograma,"kg")
    
    /*c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
    `100mi equivalem a X m`*/

    let milha = 100
    let milhaMetros = milha * 1609

    console.log(milha,"mi equivalem a", milhaMetros,"m")
    
    /*d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
    `50ft equivalem a X m`*/

    let pes = 50
    let pesMetros = pes / 3.281

    console.log(pes,"ft equivalem a", pesMetros,"m")
    
    /*e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
    `103.56gal equivalem a X l`*/

    let galaoAmericano = 103.56
    let galaoAmericanoLitro = galaoAmericano * 3785

    console.log(galaoAmericano,"gal equivalem a", galaoAmericanoLitro,"l")
    
    /*f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
    `450 xic equivalem a X l`*/

    let xicaraImperial = 450
    let xicaraImperialLitro = xicaraImperial * 284

    console.log(xicaraImperial,"xic equivalem a", xicaraImperialLitro,"l")
    
    // g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter

    libra = Number(prompt("Agora é sério, última pedido mesmo. Confia! Escolha um valor qualquer em Libra para ser convertido em kg. Obrigado pela ajuda!"))
    libraQuilograma = libra / 2.205

    console.log(libra,"lb equivalem a", libraQuilograma,"kg")

   