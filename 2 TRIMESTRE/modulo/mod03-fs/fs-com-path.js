const fs = require('fs');
const path = require('path');

try{
    const caminho = path.resolve(__dirname, "READE.md");

    const arquivo = fs.readFileSync(caminho, 'utf-8')
    console.log(arquivo);

} catch(error){
    console.log('-------------------------')
    console.warn("Atenção!"+error.path)
    throw new Error('Mensagem de erro personalizada');
    console.log('-------------------------')
}