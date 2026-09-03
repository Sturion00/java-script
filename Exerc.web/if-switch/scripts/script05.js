function analisar() {
    const num = Number(document.getElementById('txtn').value)
    const saida = document.querySelector('div.saida>p')
    let res = num % 2 

    //alert(`${res}, ${num}`)

    if (num == 0) {
        alert('Coloque um número diferente de 0.')
    }
    if (res == 0 && num > 0) {
        saida.innerHTML = `O número ${num} é par e positivo`
    } else if (res == 0 && num < 0) {
        saida.innerHTML = `O número ${num} é par e negativo`
    } else if (res != 0 && num > 0) {
        saida.innerHTML = `O número ${num} é impar e positivo`
    } else if (res != 0 && num < 0) {
        saida.innerHTML = `O número ${num} é impar e negativo`
    }
}