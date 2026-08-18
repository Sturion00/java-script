function calcular() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let razao = document.getElementById('txtr')
    let resul = document.getElementById('output')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || razao.value.length == 0) {
        output.innerHTML = 'Impossivel contar.'
    } else {
        output.innerHTML = 'Contando: <br> '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let r = Number(razao.value)
        if (r <= 0) {
            window.alert('Razão invalida, valor 1 considerado.')
            r = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += r) {
                output.innerHTML += `${c} \u{2B95} `
            }
        } else {
            for (let c = i; c >= f; c -= r) {
                output.innerHTML += `${c} \u{2b95}`
            }
        }
        output.innerHTML += `\u{1f3c1}`
    }
}

