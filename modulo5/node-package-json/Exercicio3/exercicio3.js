const listaTarefa = 
[
    "Lavar a louça",
]

const item = process.argv[2];

function novoItem (n1) {
    let busca = 
    listaTarefa
    busca.push(n1)
    return busca
}
console.log(novoItem(item))