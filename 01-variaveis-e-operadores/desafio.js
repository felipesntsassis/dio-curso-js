/*
    Faça um programa para calcular o valor de uma viagem.

    1. Preço do combustível;
    2. Gasto médio de combustível;
    3. Distância em KM da viagem;

    Imprima no console o valor que será gasto de combustível para realizar esta viagem
*/
const precoCombustivel = 4.99;
const kmsPorLitros = 8;
const distanciaEmKms = 350;
const litrosConsumidos = distanciaEmKms / kmsPorLitros;
const valorGasto = litrosConsumidos * precoGasolina;

console.log('Valor gasto (em R$): ', valorGasto.toFixed(2));

