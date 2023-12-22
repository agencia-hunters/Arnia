const estudantes = [
    { nome: 'João' , idade: 20 },
    { nome: 'Maria', idade: 22 },
    { nome: 'Pedro', idade: 18 },
    { nome: 'Ana', idade: 21 }
    ]

function calcularDesconto(estudante) {
    if (estudante.idade < 20) {
        estudante.desconto = 0.1
    } else{
        estudante.desconto = 0.05
    }
}

function aplicarDesconto (estudante, callback) {
    for (let i = 0; i < estudante.length; i++){
        callback(estudantes[i])
    }
    return estudantes
}
const estudantesComDesconto = aplicarDesconto(estudantes, calcularDesconto);
console.log(estudantesComDesconto);
