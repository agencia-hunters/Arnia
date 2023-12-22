const io = require ('../io/io')

io.write('Digite quantos anos você tem')
const anos = io.readInt()

io.write('Além dos anos, digite quantos meses você tem')
const meses = io.readInt()

io.write('E pra completar, quantos dias?')
const dias = io.readInt()


function idadeEmDias(anos,meses,dias){

    const anosEmMeses = anos*365
    const mesesEmDias = anosEmMeses + (meses*30)
    return mesesEmDias + dias
}

const resultado = idadeEmDias(anos,meses,dias)
io.write(`Sua idade em dias é: ${resultado}`)
