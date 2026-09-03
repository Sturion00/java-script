function analisar() {
    num1 = Number(document.getElementById('txt1').value)
    num2 = Number(document.getElementById('txt2').value)
    num3 = Number(document.getElementById('txt3').value)
    saida = document.querySelector('div.saida>p')
    let res = num1 + num2 + num3

    if (!num1 || !num2 || !num3) {
        alert('Informe todos os ângulos')

    } else if (res == 180) {
            saida.innerHTML = `O triangulo é válido`
        } else {
            saida.innerHTML = `Triângulo invalido`
        }
}

function vazio() {
    if (!document.getElementById('txt1')) {
        document.getElementById('txt1').focus()
    }
    if (!document.getElementById('txt2')) {
        document.getElementById('txt2').focus()
    }
    if (!document.getElementById('txt3')) {
        document.getElementById('txt3').focus()
    }
}

function limpar() {
    document.getElementById('txt1').value = ''
    document.getElementById('txt2').value = ''
    document.getElementById('txt3').value = ''
    
    document.getElementById('txt1').focus()
    
}