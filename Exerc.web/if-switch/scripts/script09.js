function analisar () {
    const idade = Number(document.getElementById('txtn').value)
    const saida = document.querySelector('div.saida>p')


    if (!idade || idade <= 0) {
        alert('Informe um idade valida')
    }
        if (idade >= 18) {
            saida.innerHTML = 'Sua categoria é adulto'
        } else if (idade >= 14) {
            saida.innerHTML = 'Sua categoria é juvenil B'
        } else if (idade >= 11) {
            saida.innerHTML = 'Sua categoria é juvenil A'
        } else if (idade >= 8) {
            saida.innerHTML = 'Sua categoria é infantil B'
        } else if (idade >= 5) {
            saida.innerHTML = 'Sua categoria é infantil A'
        }

}