const mudarCor = () => {
    const paragrafo = document.getElementById('paragrafo1')
    //adicionar classe
    //paragrafo.classList.add('verde')
    //remove classe:
    //paragrafo.classList.remove('verde')
    const classeExiste = paragrafo.classList.contains('verde')
    console.log(classeExiste)
}   