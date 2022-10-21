const nome = process.argv [2]
const idade = Number(process.argv [3])

function dados (name, idade) {
    let resposta = `Olá, ${name}! Você tem ${idade} anos.`
    return resposta
}

console.log(dados(nome,idade))

function seteAnos (name, idade) {
    const novaIdade = idade + 7
    let resposta = `Olá, ${name}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`
    return resposta
}

console.log(seteAnos(nome,idade))