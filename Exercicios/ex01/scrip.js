function carregar() {
    var texto = document.querySelector('article#texto')
    var foto = document.getElementById('foto')
    var data = new Date()
    hora = 15
    //var hora = data.getHours()
    texto.innerHTML = `Agora são ${hora}h00 horas. <br>`
    if (hora >= 5 && hora < 12) {
        //Bom dia!
        texto.innerHTML += 'Bom Dia!'
        foto.src = 'imgens/manha.jpg'
        document.body.style.background = '#f5d785'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        texto.innerHTML += 'Boa Tarde!'
        foto.src = 'imgens/dia.jpg'
        document.body.style.background = '#1797be'
    } else if (hora >= 18 && hora <= 19) {
        //Por do sol... <3
        texto.innerHTML += 'Coisa linda...'
        foto.src = 'imgens/porDoSol.jpg'
        document.body.style.background = '#b65721'
    } else {
        // Boa noite!
        texto.innerHTML += 'Boa Noite!'
        foto.src = 'imgens/noite.jpg'
        document.body.style.background = '#3d485a'
    }

}

