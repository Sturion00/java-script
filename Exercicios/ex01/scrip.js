function carregar() {
    var texto = document.querySelector('article#texto')
    var foto = document.getElementById('foto')
    var data = new Date()
    hora = 8
    //var hora = data.getHours()
    texto.innerHTML = `Agora são ${hora}h00 horas.`
    if (hora >= 5 && hora < 12) {
        //Bom dia!
        foto.src = 'imgens/manha.jpg'
        document.body.style.background = '#f5d785'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        foto.src = 'imgens/dia.jpg'
        document.body.style.background = '#1797be'
    } else if (hora >= 18 && hora <= 19) {
        //Por do sol... <3
        foto.src = 'imgens/porDoSol.jpg'
        document.body.style.background = '#b65721'
    } else {
        // Boa noite!
        foto.src = 'imgens/noite.jpg'
        document.body.style.background = '#3d485a'
    }

}

