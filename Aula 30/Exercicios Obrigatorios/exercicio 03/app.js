function dobrarNumeros(array, callback) {
    return array.map(callback)
  }
  
  const dobrar = num => num * 2
  const numeros = [1, 2, 3, 4, 5]
  const resultado = dobrarNumeros(numeros, dobrar)
  console.log(resultado)