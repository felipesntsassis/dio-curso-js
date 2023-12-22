/*
    Faça um programa para calcular o valor de uma viagem.

    1. Preço do combustível;
    2. Gasto médio de combustível;
    3. Distância em KM da viagem;

    Imprima no console o valor que será gasto de combustível para realizar esta viagem
*/
const precoCombustivel = 4.99;
console.log('Preço p/ litro: ', precoCombustivel);

const kmsPorLitros = 8;
console.log('Kms/litro: ', kmsPorLitros);

const distanciaEmKms = 350;
console.log('Distância (em Kms)', distanciaEmKms);

const litrosConsumidos = distanciaEmKms / kmsPorLitros;
console.log('Litros consumidos: ', litrosConsumidos);

const valorGasto = litrosConsumidos * precoCombustivel;
console.log('Valor gasto (em R$): ', valorGasto.toFixed(2));

