const pessoa1 = {nome: 'Maria da Silva', dataNascimento: '15/07/1978', profissao: 'Advogada',}
const pessoa2 = {
    nome: 'João da Silva', 
    dataNascimento: '05/09/1998', 
    profissao: 'Médico',
}

console.log(pessoa1)
console.log(pessoa2)
//acessando os dados do objeto

console.log(pessoa1.profissao)

//novo atributo no objeto

pessoa2.idade = 35

//alterando o valor de uma propriedade do objeto

pessoa2.nome = 'João da Silva Santos'

console.log(pessoa2)