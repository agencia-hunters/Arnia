const io = require('../../io/io')

io.write('Digite o primeiro número')
const numero1 = io.readInt()

io.write('Digite o segundo número')
const numero2 = io.readInt()

let produto = numero1 * numero2
if(produto >= 10) {
    io.write('O resultado é maior que 10')
}  else {
    io.write('O resultado é menor que 10')
}