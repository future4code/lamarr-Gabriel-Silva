// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {

    let exercicioUm = array.length
    return exercicioUm
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let exercicioDois = array.reverse()
    return exercicioDois
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let exercicioTres = array.sort(function (a, b) { return a - b })
    return exercicioTres
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let exercicioQuatro = []
    for (let i = 0; i < array.length; i++) {
        let pares = Number(array[i]) % 2
        if (pares === 0) {
            numerosPares.push(array[i])
        }
    }
    return exercicioQuatro
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let exercicioCinco = []
    for (let i = 0; i < array.length; i++) {
        let pares = Number(array[i]) % 2
        if (pares === 0) {
            let elevados = Number(array[i]) ** 2
            exercicioCinco.push(elevados)
        }
    }
    return exercicioCinco
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let exercicioSeis = array.sort(function (a, b) { return a - b })
    return exercicioSeis[exercicioSeis.length - 1]
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = []
    let menorNumero = []
    if (num1 > num2) {
        maiorNumero.push(num1)
        menorNumero.push(num2)
    } else if (num1 < num2) {
        maiorNumero.push(num2)
        menorNumero.push(num1)
    } else {
        maiorNumero.push(num2)
        menorNumero.push(num1)
    }
    let divisivel = ((maiorNumero[0] % menorNumero[0]) === 0)
    let diferenca = maiorNumero[0] - menorNumero[0]
    let exercicioSete = {
        maiorNumero: maiorNumero[0],
        maiorDivisivelPorMenor: divisivel,
        diferenca: diferenca
    }
    return exercicioSete

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let exerciocioOito = []
    let i = 0
    while (i < n * 2) {
        exerciocioOito.push(i)
        i += 2
    }
    return exerciocioOito
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let exercicioNove
    if (ladoA === ladoB && ladoA === ladoC) {
        exercicioNove = "Equilátero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        exercicioNove = "Isósceles"
    } else { exercicioNove = "Escaleno" }
    return exercicioNove
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let exercicioDez = array.sort(function (a, b) { return a - b })
    return [exercicioDez[exercicioDez.length - 2], exercicioDez[1]]


}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let exercicioOnze = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
    return exercicioOnze

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const exercicioDoze = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return exercicioDoze
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    let exercicioTrezeA = []
    let exercicioTrezeB = []

    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].idade > 14 && pessoas[i].idade < 60 && pessoas[i].altura > 1.5) {
            exercicioTrezeA.push(pessoas[i])
        } else { exercicioTrezeB.push(pessoas[i]) }
    }
    return exercicioTrezeA

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

    let exercicioTrezeA = []
    let exercicioTrezeB = []

    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].idade > 14 && pessoas[i].idade < 60 && pessoas[i].altura > 1.5) {
            exercicioTrezeA.push(pessoas[i])
        } else { exercicioTrezeB.push(pessoas[i]) }
    }
    return exercicioTrezeB
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

// Somando valores das compras
let somaComprasClientes = []
const valoresCompras = contas.map((Array) => {
	return Array.compras
})
for (let i = 0; i < valoresCompras.length; i++) {
	let selecaoElementosValoresCompras = valoresCompras[i]
	let soma = 0
	for (let i = 0; i < selecaoElementosValoresCompras.length; i++) {
		soma += selecaoElementosValoresCompras[i]
	} somaComprasClientes.push(soma)

}
//Mapeando os valores do saldo dos clientes
const valoresSaldo = contas.map((Array) => {
	return Array.saldoTotal
})

//Novo saldo dos clientes
let saldoClientes = []
for (let i = 0; i < valoresSaldo.length; i++) {
	let atualizacao = valoresSaldo[i] - somaComprasClientes[i]
	saldoClientes.push(atualizacao)
}
// Mapear nomes clientes
const nomesClientes = contas.map((Array) => {
	return Array.cliente
})

let novoObjeto = []
let i = 0
while (i < contas.length) {
	let elementos =
    { cliente: `${nomesClientes[i]}`, saldoTotal: saldoClientes[i], compras: [] }
	novoObjeto.push(elementos)
	i++
}


return novoObjeto

}


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

    
    function compare(a, b) {
        if (a.nome < b.nome) {
            return -1
        }
        else if (a.nome > b.nome) {
            return 1
        } else { 0 }
    }
    return consultas.sort(compare)

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}