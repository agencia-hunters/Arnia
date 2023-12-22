const io = require('../io/io')

/*Faça um programa de computador que recebe do usuário um número inteiro e acuse se este número é par ou ímpar*/

io.write("Digite um número")
const numero = io.readInt()
const resto = numero % 2
if (resto === 0) {
    io.write("Este número é PAR")
}
if (resto !== 0) {
    io.write("Este número é ÍMPAR")
}