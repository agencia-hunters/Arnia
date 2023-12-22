const io = require('../io/io')
io.write('Escreva o preço do primeiro produto:')
const produto1 = io.readInt()
io.write('Escreva o preço do segundo produto:')
const produto2 = io.readInt()
const media = (produto1 + produto2) / 2
io.write(`A média dos preços entre os produtos é: ${media}`)