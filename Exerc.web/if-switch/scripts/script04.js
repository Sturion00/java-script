function analisar() {
    const num1 = Number(document.getElementById('txtn1').value)
    const num2 = Number(document.getElementById('txtn2').value)
    const saida = document.querySelector('div.saida>p')
    
    if (!num1 || !num2) {
        alert('Informe os dois números...')
    }
    
    num1 > num2 ? saida.innerHTML = `O número ${num1} é maior que ${num2}.` : saida.innerHTML = `O número ${num2} é maior que ${num1}`

}

function limpar() {
    const num1 = document.getElementById('txtn1')
    const num2 = document.getElementById('txtn2')
    const saida = document.querySelector('div.saida>p')

    num1.value = ''
    num2.value = ''
    num1.focus()

    saida.innerHTML = '--Digite os Números--'
}

function relogio() {
    const agora = new Date()
    const display = document.querySelector('div.relogio>p')

    let hora = agora.getHours() < 10 ? `0${agora.getHours()}` : agora.getHours()
    let min = agora.getMinutes() < 10 ? `0${agora.getMinutes()}` : agora.getMinutes()
    let sec = agora.getSeconds() < 10 ? `0${agora.getSeconds()}` : agora.getSeconds()

    display.innerHTML = `${hora} : ${min} : ${sec}`
}


setInterval(relogio, 1000)