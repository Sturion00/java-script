function analisar() {
    const num = Number(document.getElementById('txtn').value)
    const saida = document.querySelector('div.saida>p')
    
    switch (num) {
        case 1:
            saida.innerHTML = `O número ${num} em Java Script representa Domingo.`
            break
        case 2:
            saida.innerHTML = `O número ${num} em Java Script representa Segunda-Feira.`
            break
        case 3:
            saida.innerHTML = `O número ${num} em Java Script representa Terça-Feira.`
            break
        case 4:
            saida.innerHTML = `O número ${num} em Java Script representa Quarta-Feira`
            break
        case 5:
            saida.innerHTML = `O número ${num} em Java Script representa Quinta-Feira.`
            break
        case 6:
            saida.innerHTML = `O número ${num} em Java Script representa Sexta-Feira.`
            break
        case 7:
            saida.innerHTML = `O número ${num} em Java Script representa Sabado.`
            break
    }
}