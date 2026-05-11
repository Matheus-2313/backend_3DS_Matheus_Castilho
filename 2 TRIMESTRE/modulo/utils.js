const mod_calc = require("./mod_calc")

let healt = 100

function danoJogador(arma, dano) {
    if(healt <= 0) {
        console.log('Jogador já está mmorto')
    } else {
    const danoTotal = healt - dano
    return `${arma} causa dano ${dano} -> ${danoTotal}`
}
}

module.exports = {
    danoJogador
}