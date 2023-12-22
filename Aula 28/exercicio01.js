const io = require ('../io/io')

const alunos = []

for(let i=0; i<10; i++){
    io.write('Escreva um nome')
    const nome = io.read()
    io.write('Escreva idade')
    const idade = io.readInt()
    io.write('Escreva o seu cpf')
    const cpf = io.readInt()

    const aluno = {
        nome,
        idade,
        cpf,
    }
    alunos.push(aluno)
}
const maiordeIdade = alunos.filter((aluno) => {
    return aluno.idade > 17
} )

console.log(maiordeIdade)