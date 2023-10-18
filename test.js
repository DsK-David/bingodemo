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
            console.log(green(`Parabens! seu numero ${numeroEscolhido} foi sorteado`))
        }
    }
    console.log('bingo completo')
}
const numeroEscolhido = parseInt(question('Escolha um numero de 1000 a 9999'),10)
bingo()