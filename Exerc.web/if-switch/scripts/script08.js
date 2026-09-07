function analisar() {
    const entra = Number(document.getElementById('txts').value)
    const saida = document.querySelector('div.saida>p')

    switch (entra) {
        case 0:
            saida.innerHTML = '+3 pontos'
            break
        case 1: 
            saida.innerHTML = '+1 ponto'
            break
        case 2: 
            saida.innerHTML = 'Não pontuou.'
    }
}