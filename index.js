function randomnumber(tamanho){
    const random = Math.floor(Math.random() * 9000)+1000
    const min = 10 ** (tamanho - 1)
    const max =  10 ** (tamanho - 1)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//console.log(randomnumber(6))


function random(){
    const random = Math.floor(Math.random() * 9000)+1000
    return random
}
module.exports = {
    random
}
