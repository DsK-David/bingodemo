import chalk  from 'chalk';
import  { question }  from 'readline-sync';
import { random } from './index.js';
function bingo(){
    const NumerosSorteados = new Set()
    const totalNumeros = 3
    let rodada = 1

    while(NumerosSorteados.size<totalNumeros){
        const NumeroSorteado = 1234
        if(!NumerosSorteados.has(NumeroSorteado)){
            NumerosSorteados.add(NumeroSorteado);
            console.log(`rodada ${rodada++}:${NumeroSorteado}`)
        }
        if(NumeroSorteado === numeroEscolhido){
            console.log(chalk.green(`Parabens! seu numero ${numeroEscolhido} foi sorteado`))
           
        }
    }
    console.log('bingo completo seu numero não foi sorteado')
}
const numeroEscolhido = parseInt(question('Escolha um numero de 1000 a 9999:'),10)
bingo()
