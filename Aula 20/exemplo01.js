const io = require('../io/io')

let iterador = 1

while (iterador <= 10) { //laço ou looping
    io.write('Brasil')

    iterador = iterador + 1 //altera o valor do iterador (soma + 1)

    io.write(iterador)
}
