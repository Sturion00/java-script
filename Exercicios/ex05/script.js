const num = document.getElementById('txtn')
const lista = document.getElementById('lista')
const res = document.querySelector('article#output')
let valores = []

function isNumero (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        alert('tudo ok')
    } else {
        alert('Valor inválido ou já presente na lista')
    }
}