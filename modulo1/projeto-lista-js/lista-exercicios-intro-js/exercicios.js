// // EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// // EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// // EXERCÍCIO 0B
function imprimeMensagem() {
//   // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// // EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

 let mensagemAltura = Number(prompt("Digite a altura!"))
 let mensagemLargura = Number(prompt("Digite a largura!"))

console.log(mensagemAltura*mensagemLargura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  let mensagemAnoAtual = Number(prompt("Digite o ano atual!"))
  let mensagemAnoNascimento = Number(prompt("Digite o ano do seu nascimento!"))

  console.log(mensagemAnoAtual - mensagemAnoNascimento)

}

// // EXERCÍCIO 03
function calculaIMC(peso, altura) {
//   // implemente sua lógica aqui

  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  let mensagemNomeUsuario = (prompt("Digite o seu nome!"))
  let mensagemIdadeUsuario = Number(prompt("Digite a sua idade!"))
  let mensagemEmailUsuario = (prompt("Digite o seu e-mail!"))

  console.log(`Meu nome é ${mensagemNomeUsuario}, tenho ${mensagemIdadeUsuario} anos, e o meu email é ${mensagemEmailUsuario}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  let mensagemPrimeiraCor = (prompt("Digite a sua cor favorita!"))
  let mensagemSegundaCor = (prompt("Digite a sua segunda cor favorita!"))
  let mensagemTerceiraCor = (prompt("Digite a sua terceira cor favorita!"))

  const cores = [mensagemPrimeiraCor,mensagemSegundaCor,mensagemTerceiraCor]

  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length -1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

 let elementoPrimeiro = array[0]
 array[0] = array[array.length-1]
 array[array.length-1] = elementoPrimeiro

 return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

const anoAtual = Number(prompt("Digite o ano atual"))
const anoNascimento = Number(prompt("Digite o ano do seu Nascimento"))
const anoEmissao = Number(prompt("Digite o ano da emissão do RG"))

let idade = (a1,a2) => a1 - a2
let prazoEmissao = (a1,a3) => a1 - a3

function validador(v1,v2) {

    let primeiraFaixa = ((v1 <= 20) && (v2 >= 5))
    let segundaFaixa = ((v1 <= 50) && (v2 >= 10))
    let terceiraFaixa = ((v1 > 50) && (v2 >= 15))

    validacao = (primeiraFaixa || segundaFaixa || terceiraFaixa)

    return validacao
}

console.log(validador(idade(anoAtual,anoNascimento),prazoEmissao(anoAtual,anoEmissao)))
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
 
      return anoBissexto = (((ano % 4) === 0) && ((ano % 100) !== 0)) || (((ano % 4)===0) && ((ano % 100)===0) && ((ano % 400) === 0))

  }
  
// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  const idadeUser = prompt("Por favor, responda as perguntas a seguir somente com sim ou não. Você tem mais de 18 anos?")
const escolaUser = prompt("Você possui ensino médio completo?")
const disponibilidadeUser = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

ageUser = idadeUser.trim().toLowerCase() === 'sim'
schoolUser = escolaUser.trim().toLowerCase() === 'sim'
dispUser = disponibilidadeUser.trim().toLowerCase() === 'sim'

validador = (ageUser === schoolUser === dispUser)
console.log(validador)

}