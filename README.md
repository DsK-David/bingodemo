# BingoDemo 🎲

Bem-vindo ao Jogo de Bingo em JavaScript! Este programa simples sorteia números aleatórios até que todos os números de 1000 a 9999 sejam escolhidos ou até que o usuário escolha um número específico que seja sorteado.
```javascript
const chalk = require('chalk');
const readline = require('readline-sync');
import { green } from 'chalk';
import { question } from 'readline';
import { random } from './index';
function bingo(){
    const NumerosSorteados = new Set()
    const totalNumeros = 90
    let rodada = 1

    while(NumerosSorteados.size<totalNumeros){
        const NumeroSorteado = random()
        if(!NumerosSorteados.has(NumeroSorteado)){
            NumerosSorteados.add(NumeroSorteado);
            console.log(`rodada ${rodada++}:${NumeroSorteado}`)
        }
        if(NumeroSorteado === numeroEscolhido){
            console.log(chalk.green(`Parabens! seu numero ${numeroEscolhido} foi sorteado`))
        }
    }
    console.log('bingo completo')
}
const numeroEscolhido = parseInt(question('Escolha um numero de 1000 a 9999'),10)
bingo()
```
## ▶️ Como Executar

Para jogar o jogo, você precisa ter o Node.js instalado. Em seguida, execute o seguinte comando no terminal:

```bash
node test.js
```


Aproveite o Jogo de Bingo! 🎉
