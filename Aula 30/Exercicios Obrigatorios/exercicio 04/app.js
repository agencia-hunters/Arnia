function filtrarPalavras(palavras, callback) {
    return palavras.filter(callback)
}

const verificarTamanho = palavra => palavra.length > 5
const palavras = ['casa', 'carro', 'bicicleta', 'abacaxi',
'livro']
const resultado = filtrarPalavras(palavras, verificarTamanho)
console.log(resultado)