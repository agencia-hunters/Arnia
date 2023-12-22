const io = require('../../io/io')

io.write('Digite o primeiro número')
const numero1 = io.readInt()

io.write('Digite o segundo número')
const numero2 = io.readInt()

if (numero1 > numero2) {
    io.write(`O número ${numero1} é maior que o ${numero2}`)
} else{
    io.write(`O número ${numero1} é menor que o ${numero2}`)
}


