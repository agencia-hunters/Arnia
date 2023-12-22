const io = require('../io/io')

let contador = 2

while (contador <= 100) {
    io.write(contador)
    contador = contador + 2
}