class Pessoa {

    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return (this.peso / (this.altura * this.altura));
    }

    classificarImc() {
    }

}

const jose = new Pessoa('José', 70, 1.75);
console.log(`Olá! sou o ${jose.nome}, peso ${jose.peso}Kg, tenho ${jose.altura}m de altura. Meu IMC é ${jose.calcularImc().toFixed(2)}`);

const felipe = new Pessoa('Felipe', 76, 1.73);
console.log(`Olá! sou o ${felipe.nome}, peso ${felipe.peso}Kg, tenho ${felipe.altura}m de altura. Meu IMC é ${felipe.calcularImc().toFixed(2)}`);