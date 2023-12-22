const io = require ('../io/io')

/* crie uma função que vai receber um dado de um usuário e posteriormente utiliza uma segunda função para dar boas vindas ao usuário*/

const darBoasVindas = (nome) => {
    io.write(`Olá ${nome}`)
}

/*
    Imagine que a função "receberUsuario" [NÃO TEM] acesso direto à função "darBoasVindas"
*/

const receberUsuario = () => {
    io.write('Informe o seu nome')
    const nome = io.read()
    darBoasVindas(nome)
}

receberUsuario()

