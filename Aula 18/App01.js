const io = require('../io/io')
io.write('Escreva um número')
const numero1 = io.readInt()
const resultado = numero1 **2
io.write (`A raíz quadrada de ${numero1} é ${resultado}`)
