const io = require('../../io/io')

io.write('Digite a primeira reta')
const reta1 = io.readInt()

io.write('Digite a segunda reta')
const reta2 = io.readInt()

io.write('Digite a terceira reta')
const reta3 = io.readInt()

if(reta1 < reta2 + reta3 && reta2 < reta3 + reta1 && reta3 < reta2 + reta1) {
    io.write('Sim, nesse caso, as retas representam um triângulo')
} else {
    io.write('Não, as retas informadas não representam um triângulo')
}