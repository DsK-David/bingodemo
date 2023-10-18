# Jogo de Bingo 🎲

Bem-vindo ao Jogo de Bingo em JavaScript! Este programa simples sorteia números aleatórios até que todos os números de 1000 a 9999 sejam escolhidos ou até que o usuário escolha um número específico que seja sorteado.

## 🚨 Problema

Ao tentar executar o código, você pode encontrar o erro "cannot use import statement outside a module."

## 🛠️ Solução

Esse erro ocorre ao tentar usar a sintaxe de importação ES6 (`import`) em um ambiente que não suporta módulos ES6 diretamente. Para resolver isso, você pode modificar o código para usar a sintaxe comum de `require`.

Aqui estão as alterações necessárias para resolver o problema:

```javascript
const chalk = require('chalk');
const readline = require('readline-sync');
const { random } = require('./index');

function bingo() {
    const NumerosSorteados = new Set()
    const totalNumeros = 90
    let rodada = 1

    while (NumerosSorteados.size < totalNumeros) {
        const NumeroSorteado = random()
        if (!NumerosSorteados.has(NumeroSorteado)) {
            NumerosSorteados.add(NumeroSorteado);
            console.log(`rodada ${rodada++}:${NumeroSorteado}`)
        }
        if (NumeroSorteado === numeroEscolhido) {
            console.log(chalk.green(`Parabens! seu numero ${numeroEscolhido} foi sorteado`))
        }
    }
    console.log('bingo completo')
}

const numeroEscolhido = parseInt(readline.question('Escolha um numero de 1000 a 9999'), 10);
bingo();
```

Agora, o código usa a sintaxe comum de `require` para importar os módulos necessários.

## ▶️ Como Executar

Para jogar o jogo, você precisa ter o Node.js instalado. Em seguida, execute o seguinte comando no terminal:

```bash
node nomedoarquivo.js
```

Substitua `nomedoarquivo.js` pelo nome real do seu arquivo JavaScript se ele não estiver salvo como `index.js`.

Aproveite o Jogo de Bingo! 🎉
