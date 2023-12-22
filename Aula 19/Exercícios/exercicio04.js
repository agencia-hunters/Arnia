const io = require('../../io/io')

io.write('Digite variável a')
const a = io.readInt()

io.write('Digite a variável b')
const b = io.readInt()

io.write('Digite a variável c')
const c = io.readInt()

const delta = (b * b) - (4 * a * c)

if (delta < 0) {
    io.write('Não existe rais para equação')
} else if (delta > 0) {
    let raiz1 = (-b + Math.sqrt(delta)) / (2 * a)
    let raiz2 = (-b - Math.sqrt(delta)) / (2 * a)
    io.write(`A primeira raiz é ${raiz1} a segunda raiz é ${raiz2}`)
}    else if (delta === 0) {
    let raiz1 = (-b + Math.sqrt(delta)) / (2 * a)
    io.write(`A raiz é ${raiz1}`)
}
