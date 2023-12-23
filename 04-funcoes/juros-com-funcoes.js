function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

function calcularPrecoParcelado(valor, parcelas) {
    if (parcelas > 2) {
        return (valor * parcelas) + aplicarJuros(valor, 10);
    }

    return (valor * parcelas);
}

const precoEtiqueta = 150.90;
const formaPagamento = 'Crédito';
const parcelas = 2;

let precoFinal = 0;
if (formaPagamento === 'Débito') {
    console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (formaPagamento === 'Dinheiro' || formaPagamento === 'PIX') {
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaPagamento === 'Crédito') {
    console.log(calcularPrecoParcelado(precoEtiqueta, 1));
    console.log(calcularPrecoParcelado(precoEtiqueta, 3));
    
}



