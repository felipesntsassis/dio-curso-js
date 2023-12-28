# EXERCÍCIO 1

```javascript
class Carro {
    
    marca;
    cor;
    consumoMedioPorKm;

    constructor (marca, cor, consumoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.consumoMedioPorKm = consumoMedioPorKm;
    };
    
    calcularGastoDePercurso (distanciaEmKm, precoCombustivel) {
        return precoCombustivel * (distanciaEmKm / this.consumoMedioPorKm);
    }
}

const cobalt = new Carro('Chevrolet Cobalt', 'Prata', 8);
const palio = new Carro('Fiat Palio', 'Preto', 10);
const fusion = new Carro('Ford Fusion', 'Branco', 7.5);
console.log('Cobalt: ' + cobalt.calcularGastoDePercurso(100, 4.99).toFixed(2));
console.log('Palio: ' + palio.calcularGastoDePercurso(100, 4.99).toFixed(2));
console.log('Fusion: ' + fusion.calcularGastoDePercurso(100, 4.99).toFixed(2));

```
