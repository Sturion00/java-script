function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var saida = document.querySelector('article#saida')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[Bugo foi tudo...] verifique os dados irmãozinhu')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIAÇA
                img.setAttribute('src', 'imagens/crianca.jpg')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'imagens/menina.jpg')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'imagens/home.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', 'imagens/velhas.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIAÇA
                img.setAttribute('src', 'imagens/crianca.jpg')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'imagens/menina.jpg')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'imagens/home.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', 'imagens/velhas.jpg')
            }
        }
        saida.style.textAlign = 'center'
        saida.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        saida.appendChild(img)
    }

}