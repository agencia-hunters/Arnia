const io = require ('../io/io')
/*Faça um programa que receba um número e use uma função para calcular e mostrar este número x 2*/


function calcularDobro(numero) {
    const resultado = numero * 2
    io.write(`numero x 2 = ${resultado}`)
}

io.write('Digite um numero')
const numero = io.readInt()
calcularDobro(numero)