const io = require ('../io/io');

io.write('Escreva seus o valor de x')
const x = io.readInt()
io.write('Escreva seus o valor de z')
const z = io.readInt()
let contador = 0

function calculo (x, z){
    if (z === 0) {
        return 1;
    }
    let resultado = 1

    for (let contador = 0; contador < z; contador++) {
        resultado *= x;
    }
    return resultado;
    }

    const resultadofinal = calculo(x, z);

    io.write(`O resultado de ${x} elevado à potência ${z} é igual a ${resultadofinal}`)
