const io = require('../io/io')

io.write('Cadastro de pessoa')
io.write('Digite o nome')
const nome = io.read()
io.write('Digite o CPF')
const cpf = io.read()
io.write('Digite a Data de Nascimento')
const dataNascimento = io.read()

const pessoa = {
    nome: nome,
    cpf: cpf,
    dataNascimento: dataNascimento
}

io.write(`Nome: ${pessoa.nome} | CPF ${pessoa.cpf} | Data de Nascimento ${dataNascimento}`)
