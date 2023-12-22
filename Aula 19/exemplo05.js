const io = require('../io/io')
/* Faça um programa que receba o nome de um país e se i oapís for [Brasil] ou [Portugal] mostre a mensagem: "Este país fala português"*/

io.write('Informe o nome do país')
const pais = io.read()

if (pais === "Brasil" || pais === "Portugal") {
    io.write('Este país fala a lingua portuguesa')
}