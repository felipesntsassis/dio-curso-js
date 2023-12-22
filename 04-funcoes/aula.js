function teste() {
    console.log('Teste');
}

function sayMyName(name) {
    console.log(`Your name is ${name}!`);
}

function quadrado(valor) {
    return valor ^ 2;
}

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;

    return valor + valorDeAcrescimo;
}

teste();
sayMyName('Felipe');

console.log(quadrado(10));
console.log(quadrado(10) + quadrado(10));
console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));