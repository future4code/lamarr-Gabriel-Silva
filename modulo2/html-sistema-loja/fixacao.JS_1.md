```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    
    let comissaoCarros = qtdeCarrosVendidos * 100
    let comissaoValorvendas = valorTotalVendas * 0.05
    let salarioFixo = 2000
    let salario = comissaoCarros + comissaoValorvendas + salarioFixo

    return salario

}
```