// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprime cada Par encontrado.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter(n => n % 2 === 0);

console.log(`Números: ${numeros}`);
console.log(`Pares: ${pares}`);