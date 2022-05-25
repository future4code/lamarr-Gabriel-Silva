function calculaPrecoTotal(quantidade) {
    if (quantidade < 12) {
        let valorPago = quantidade * 1.30
        return valorPago
    } else if (quantidade >= 12) {
        let valorPago = quantidade * 1
        return valorPago
    } else return valorPago = "Chamar supervisão"
}