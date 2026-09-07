function analisar () {
    const num = Number(document.getElementById('txtn').value)
    const saida = document.querySelector('div.saida>p')

    if (!num || num <= 0) {
        alert('Insira um número valido')
    }
    if (num > 0 && num < 90) {
        saida.innerHTML = 'Ângulo agudo'
    } else if (num == 90) {
        saida.innerHTML = 'Ângulo reto'
    } else if (num > 90 && num < 180) {
        saida.innerHTML = 'Ângulo obtuso'
    } else if (num == 0 || num == 180) {
        saida.innerHTML = 'Ângulo rado'
    } else if (num > 180 && num < 360) {
        saida.innerHTML = 'Ângulo côncavo'
    } else if (num == 360) {
        saida.innerHTML ='Ângulo completo'
    }

}