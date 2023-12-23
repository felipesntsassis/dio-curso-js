const pessoa = {
    nome: 'Felipe dos Santos Assis',
    idade: 38,
    profissao: 'Analista de Sistemas',
    esporte: 'Ciclismo (MTB)',
    descrever: function () {
        console.log(`Olá, eu sou o ${this.nome}. Tenho ${this.idade} anos, trabalho como ${this.profissao} `
            + `e pratico ${this.esporte}.`);
    }
};

pessoa.altura = 1.73;

console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.descrever();
console.log(pessoa);

const atributo = 'idade';
console.log(pessoa[atributo]);
console.log(pessoa['nome']);