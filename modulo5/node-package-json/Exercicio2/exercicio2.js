const primeiroNumero = Number(process.argv [2])
const segundoNumero = Number(process.argv [3])

function add (n1, n2) {
    const operacao = n1 + n2
    return operacao
}

console.log(add(primeiroNumero,segundoNumero))

function sub (n1, n2) {
    const operacao = n1 - n2
    return operacao
}

console.log(sub(primeiroNumero,segundoNumero))

function mult (n1, n2) {
    const operacao = n1 * n2
    return operacao
}

console.log(mult(primeiroNumero,segundoNumero))

function div (n1, n2) {
    const operacao = n1 / n2
    return operacao
}

console.log(div(primeiroNumero,segundoNumero))
