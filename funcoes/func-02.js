//Crie 4 funções para operações (+, -, *, /)
function somar(a, c) {
    const resultado = a + c;
    console.log("Resultado da soma: " + (a + c));
}

function subtrair(a, c) {
    const resultado = a - c;
    console.log("Resultado da subtração: " + (a - c));
}

function multiplicar(a, c) {
    const resultado = a * c;
    console.log("Resultado da multiplicação: " + (a * c));
}

function dividir(a, c) {
    if (c === 0) {
        console.log("Erro: Divisão por zero não é permitida.");
    }else{
   const resultado = a / c;
    console.log("Resultado da divisão: " + (a / c));
    }
}
somar(5, 3); 

subtrair(21, 16);

multiplicar(4, 7);

dividir(10, 2);
dividir(10, 0);