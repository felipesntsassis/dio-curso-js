# EXERCÍCIO 2

```javascript
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
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return `${this.nome} está abaixo do peso.`;
        }
        if (imc >= 18.5 && imc < 25) {
            return `${this.nome} está com peso normal.`;
        }
        if (imc >= 25 && imc < 30) {
            return `${this.nome} está acima do peso.`;
        }
        if (imc >= 30 && imc < 40) {
            return `${this.nome} está obeso.`;
        }
        if (imc >= 40) {
            return `${this.nome} está com obesidade grave.`;
        }
    }

}

const jose = new Pessoa('José', 70, 1.75);
console.log(`Olá! sou o ${jose.nome}, peso ${jose.peso}Kg, tenho ${jose.altura}m de altura. Meu IMC é ${jose.calcularImc().toFixed(2)}`);
console.log(jose.classificarImc());

const felipe = new Pessoa('Felipe', 76, 1.73);
console.log(`Olá! sou o ${felipe.nome}, peso ${felipe.peso}Kg, tenho ${felipe.altura}m de altura. Meu IMC é ${felipe.calcularImc().toFixed(2)}`);
console.log(felipe.classificarImc());

```
