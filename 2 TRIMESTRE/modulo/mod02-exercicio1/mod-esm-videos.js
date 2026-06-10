export function alugarFilmes(nomeFilme, dataAlguel, preco){
    return `O filme ${nomeFilme} foi alugado dia ${dataAlguel} custando, ${preco}`
}

export function devolverFilme(nomeFilme, dataEntrega){
    return `O filme ${nomeFilme} foi devolvido dia ${dataEntrega}`
}