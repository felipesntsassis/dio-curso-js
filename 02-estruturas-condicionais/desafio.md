# DESAFIO 2

```javascript
const precoEtanol = 3.59;
const precoGasolina = 4.99;
const kmsPorLitros = 8;
const distanciaEmKms = 350;
const tipoCombustivel = 'Etanol';
const litrosConsumidos = distanciaEmKms / kmsPorLitros;

const valorGasto = litrosConsumidos * (tipoCombustivel === 'Etanol' ? precoEtanol : precoGasolina);

/* if (tipoCombustivel === 'Etanol') {
    valorGasto = litrosConsumidos * precoEtanol;
} else {
    valorGasto = litrosConsumidos * precoGasolina;
} */

console.log('Valor gasto (em R$): ', valorGasto.toFixed(2));
```
