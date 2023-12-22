const io = require('../io/io')

io.write('Escreva um número: ')
const n = io.readInt()

io.write('Escreva uma frase: ')
const frase = io.read()

let x = 1

while (x < n) {
    io.write(frase)
    x++
}