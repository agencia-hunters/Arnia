const io = require ('../io/io')

io.write('Digite START para começar')
const start = io.read()

if (start === 'START') {
    for (let contador = 100; contador >= 1; contador--) {
        io.write(contador);        
    }
}