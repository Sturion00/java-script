function analisar() {
    n1 = Number(document.getElementById('txt1').value)
    n2 = Number(document.getElementById('txt2').value)
    res = n1 % n2
    res2 = n2 % n1
    saida = document.querySelector('div.saida>p#um')
    saida2 = document.querySelector('div.saida>p#dois')

    if (!n1 && !n2) {
        alert('Informe os dois números primeiro')   
    } else {
        res == 0  ? saida.innerHTML = `${n1} é multiplo de ${n2}` : saida.innerHTML = `${n1} não é multiplo de ${n2}`
        res2 == 0 ? saida2.innerHTML = `${n2} é multiplo de ${n1}` : saida2.innerHTML = `${n2} não é multiplo de ${n1}`
    }
}

function vazio() {
    if(document.getElementById('txt1') && document.getElementById('txt1').value.trim() === '') {
        document.getElementById('txt1').focus()
        alert('Ensira tambem o valor 1.')
    }
    if(document.getElementById('txt2') && document.getElementById('txt2').value.trim() === '') {
        document.getElementById('txt2').focus()
        alert('Ensira tambem o valor 2.')
    }
}

function limpar() {
    document.getElementById('txt1').value = ''
    document.getElementById('txt2').value = ''
    saida.innerHTML = '--Informe os números--'
    saida2.innerHTML = ''

    document.getElementById('txt1').focus()

}