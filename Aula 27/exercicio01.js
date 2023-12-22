const io = require ('../io/io')
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filtrados = array.filter((elemento) => {
    return elemento % 2 !==0;
})

io.write (filtrados)

const soma = filtrados.reduce((acumulador, elemento) => {
    return acumulador + elemento
})

io.write (soma)

for (contador = 0; contador <= soma; contador++) {
    io.write (`JavaScript é muito bom`)
}












