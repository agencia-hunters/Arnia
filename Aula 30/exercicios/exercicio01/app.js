const carregarEstilo = () => {
    const estiloTitulo = document.getElementById('title')
    estiloTitulo.className = 'titulo1'
    const estiloParagrafos1 = document.getElementById('firstParagraph')
    estiloParagrafos1.className = 'paragrafos'
    const estiloParagrafos2 = document.getElementById('secondParagraph')
    estiloParagrafos2.className = 'paragrafos'
    const estiloParagrafos3 = document.getElementById('thirdParagraph')
    estiloParagrafos3.className = 'paragrafos'
    const estiloSecao1 = document.getElementById('section')
    estiloSecao1.className = 'secao1'
}
const darkMode = () => {
    const background = document.getElementById('body');
    const estiloDark = document.getElementById('title');
    const estiloDark1 = document.getElementById('firstParagraph');
    const estiloDark2 = document.getElementById('secondParagraph');
    const estiloDark3 = document.getElementById('thirdParagraph');
    const estiloDarkSecao1 = document.getElementById('section');

    if (background.classList.contains('backgroundDark')) {
        background.classList.remove('backgroundDark')
        estiloDark.classList.remove('titulo1Dark')
        estiloDark1.classList.remove('paragrafosDark')
        estiloDark2.classList.remove('paragrafosDark')
        estiloDark3.classList.remove('paragrafosDark')
        estiloDarkSecao1.classList.remove('secao1Dark')
    } else {
        background.classList.add('backgroundDark')
        estiloDark.classList.add('titulo1Dark')
        estiloDark1.classList.add('paragrafosDark')
        estiloDark2.classList.add('paragrafosDark')
        estiloDark3.classList.add('paragrafosDark')
        estiloDarkSecao1.classList.add('secao1Dark')

    }
}