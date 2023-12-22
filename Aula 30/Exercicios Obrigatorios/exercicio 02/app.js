const produtos = [
    { id: 1, nome: 'Camiseta', preco: 29.9 },
    { id: 2, nome: 'Calça', preco: 59.9 },
    { id: 3, nome: 'Tênis', preco: 99.9 }
]

function calcularTotal(produtos) {
    return produtos.reduce ((acumulador, produto) => acumulador + produto.preco, 0)
}
console.log(calcularTotal(produtos))