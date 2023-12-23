class Pessoa {

    nome;
    idade;
    profissao;
    esporte;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = new Date().getFullYear() - idade;
    }

    descrever () {
        console.log(`Olá, eu sou o ${this.nome}. Tenho ${this.idade} anos, trabalho como ${this.profissao} `
            + `e pratico ${this.esporte}.`);
    };

};

const felipe = new Pessoa('Felipe dos Santos Assis', 38);
felipe.profissao = 'Analista de Sistemas';
felipe.esporte = 'Ciclismo (MTB)';
console.log(felipe.anoDeNascimento);
felipe.descrever();

const isabelle = new Pessoa('Isabelle Moreira Assis', 8);
isabelle.profissao = 'Estudante';
isabelle.esporte = 'Jiu Jitsu';
console.log(isabelle.anoDeNascimento);
isabelle.descrever();
