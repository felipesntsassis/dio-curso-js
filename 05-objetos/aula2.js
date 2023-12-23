class Pessoa {

    nome;
    idade;
    profissao;
    esporte;

    descrever () {
        console.log(`Olá, eu sou o ${this.nome}. Tenho ${this.idade} anos, trabalho como ${this.profissao} `
            + `e pratico ${this.esporte}.`);
    };

};

const felipe = new Pessoa();
felipe.nome = 'Felipe dos Santos Assis';
felipe.idade = 38;
felipe.profissao = 'Analista de Sistemas';
felipe.esporte = 'Ciclismo (MTB)';
felipe.descrever();

const isabelle = new Pessoa();
isabelle.nome = 'Isabelle Moreira Assis';
isabelle.idade = 8;
isabelle.profissao = 'Estudante';
isabelle.esporte = 'Jiu Jitsu';
isabelle.descrever();
