const io = require ('../io/io')

io.write("digite o primeiro numero")
const numero1 = io.readInt()

io.write("Digite o segundo numero")
const numero2 = io.readInt()

const resultado = numero1 - numero2

io.write (`O rsultado da operação é de: ${resultado}`)