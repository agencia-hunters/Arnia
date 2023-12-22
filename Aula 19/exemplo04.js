const io = require('../io/io')

/* Faça um programa que recebe a idade e retorne para o usuario a sua Faixa Etária*/

io.write("Informe sua idade: ")
const idade = io.readInt()

if (idade < 12) {
    io.write ('Infância')
} else if (idade >= 12 && idade < 18) { // && => e / || => ou*/
    io.write ('Adolescência')
} else if (idade >= 18 && idade < 60) {
    io.write('Adulto')
} else {
    io.write('Idoso')
}