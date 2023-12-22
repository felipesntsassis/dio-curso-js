const nota1 = 6;
const nota2 = 7;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;

console.log(`Sua média: ${media}`);

if (media < 5) {
    console.log('Reprovado!');
} else if (media >= 5 && media <= 7) {
    console.log('Em recuperação!');
} else {
    console.log('Aprovado! Passou de semestre!');
}
