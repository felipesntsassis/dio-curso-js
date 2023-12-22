const camisetaFelipeEAzul = true;
const camisetaIsabelleEAzul = false;

let numero = 10;
let eNumeroPar = (num) => (num % 2 === 0);

console.log(`O número ${numero} é par? ${eNumeroPar(numero) ? 'Sim' : 'Não'}`);

numero = 47847;
console.log(`O número ${numero} é par? ${eNumeroPar(numero) ? 'Sim' : 'Não'}`);

numero = 50;

if (eNumeroPar(numero)) {
    console.log('Par');
} else {
    console.log('Ímpar');
}
