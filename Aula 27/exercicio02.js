const io = require ('../io/io')

const vetor = [1000, 40, 340, 501, 500, 1093, 245, 21]

const precos = vetor.map((elemento) => {
    if (elemento >= 500) {
        elemento = elemento - (elemento * 15 / 100)
        return elemento
    }
})

io.write (precos)