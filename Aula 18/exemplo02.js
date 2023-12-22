
const io = require('../io/io')

//Mostrar uma mensagem para o usuário
io.write('Digite o número para multiplicá-lo por 2:')
//Receber o número do usuário
const numero = io.readInt() 
//Feedback para o usuário
io.write(`Obrigado! O número digitado foi: ${numero}`)
//Dobrar o número digitado
const resultado = numero * 2
//Mostrar o Resultado do cálculo (Numero dobrado)
io.write (`O dobro do número digitado é: ${resultado}`)