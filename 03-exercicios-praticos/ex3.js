const precoEtiqueta = 150.90;
const formaPagamento = 'Crédito';
const parcelas = 2;

let precoFinal = 0;

if (formaPagamento === 'Débito') {
    precoFinal -= precoEtiqueta * 0.1;
} else if (formaPagamento === 'Dinheiro' || formaPagamento === 'PIX') {
    precoFinal -= precoEtiqueta * 0.15;
} else if (formaPagamento === 'Crédito') {
    if (parcelas > 2) {
        precoFinal = (precoEtiqueta * parcelas) + (precoEtiqueta * 0.1);
    } else {
        precoFinal = precoEtiqueta * parcelas;
    }
}

console.log(`Valor final: ${precoFinal.toFixed(2)}`);