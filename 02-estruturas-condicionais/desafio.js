/*
Faça um programa para calcular o valor de uma viagem.

1. Preço do Etanol;
2. Preço da Gasolina;
3. O tipo de combustível utilizado em seu carro;
4. Gasto médio de combustível do carro por KM;
5. Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 3.59;
const precoGasolina = 4.99;
const kmsPorLitros = 8;
const distanciaEmKms = 350;
const tipoCombustivel = 'Etanol';
const litrosConsumidos = distanciaEmKms / kmsPorLitros;

const valorGasto = litrosConsumidos * (tipoCombustivel === 'Etanol' ? precoEtanol : precoGasolina);

/* if (tipoCombustivel === 'Etanol') {
    valorGasto = litrosConsumidos * precoEtanol;
} else {
    valorGasto = litrosConsumidos * precoGasolina;
} */

console.log('Valor gasto (em R$): ', valorGasto.toFixed(2));


