const io = require('../io/io')

/* faça um programa de computador que recebe do usuário o nome de um país e caso este país seja Brasil, o programa deve responder: "Pais recebido com sucesso"! */

io.write ("informe o nome do país: ")
const pais = io.read()


if (pais === 'Brasil') {
    io.write("País recebido com sucesso")
}

io.write(pais)