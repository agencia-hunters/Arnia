const io = require('../io/io')

let x = 0
let acumulador = 0
let numero

while (x < 20) {
    io.write('Digite um número: ')
    numero = io.readInt()
    acumulador = acumulador + numero
    x++
}
const media = acumulador / 20
io.write(`a média aritmética desses números ${media}`)