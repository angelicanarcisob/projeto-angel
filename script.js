/* eu acesso meu documento html com document.documentElemente*/
function toggleMode(){
    const html = document.documentElement

    if (html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }
    /* PODEMOS UTILIZAR TAMBEM DESSA FORMA 
     html.classList.toggle('light') 
     ele ja vai ler automatico se tiver light ou nao ou seja faz a mesma coisa do de cima */

     // pegar a tag img
     const img = document.querySelector("#profile img")

     // substituir a imagem por outra 
     if(html.classList.contains('light')) {
        //dr tiver light mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar-light.png')
        } else {
            //se tiver sem light mode, manter a imagem normal
            img.setAttribute('src', './assets/avatar.png')
        }
}