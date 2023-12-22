const io = require('../io/io')
io.write('Escreva o primeiro número:')
const numero1 = io.readInt()
io.write('Escreva o segundo número:')
const numero2 = io.readInt()
const resultado = numero1 % numero2
io.write(`O RESTO de divisão entre ${numero1} e ${numero2} é: ${resultado}`)