# EXERCÍCIO - Maior número sorteado

```javascript
const { gets, print } = require('./funcoes-auxiliares.js');

const quantidadeDeAlunos = gets();

let maiorValor = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();

    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(`Maior Valor: ${maiorValor}`);

```
