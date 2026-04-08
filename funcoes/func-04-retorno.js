function sobradosalario(meuSalario){
    const contaDeluz = 150.0
    const aluguel = 1500.0
    const resto = meuSalario - (contaDeluz+aluguel) 
    return `O que restou no fim do mês ${resto}`
}
const sobra = sobradosalario(1700.0);
console.log(sobradosalario(20000.00))
console.log(sobra)
