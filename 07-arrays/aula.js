const alunos = ['João', 'Vitor', 'Marina'];

console.log(alunos);
console.log(alunos[0]);

alunos.push('Renan');
console.log(alunos[3]);

alunos[4] = 'Vinícius';
console.log(alunos[4]);

alunos.push(10);
console.log(alunos);

alunos.pop();
console.log(alunos);

const notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

console.log(notas);
console.log(notas.length);

// const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
// console.log(soma / notas.length);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;

console.log(`Média: ${media}`);

for (let i = 0; i < notas.length; i ++) {
    console.log(i);
}

const nome = 'Felipe dos Santos Assis';

for (let i = 0; i < nome.length; i ++) {
    console.log(nome[i]);
}


