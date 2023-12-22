const io = require ('../io/io')

io.write('Digite um valor')
const numero = io.readInt()

function boleanTeste (numero) {
    return numero % 2 === 0;
}

const resultado = boleanTeste(numero)
io.write(resultado)