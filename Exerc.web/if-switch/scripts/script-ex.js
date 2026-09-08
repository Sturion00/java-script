code = document.getElementById('cod')
qntd = document.getElementById('qntd')

function identItem() {
    const codeValue = code.value.trim()
    
    if (!codeValue) {
        alert('Insira um código.')
        return null
    }
    
    itens = {
        200: 'Camisa',
        201: 'Calça',
        202: 'Jaqueta',
        203: 'Saia'
    }
    
    alert(itens[codeValue] || 'Código Invalido')
    return itens[codeValue] || 'Código Invalido'
}

function identValor() {
    const codeValue = code.value.trim()
    let qntdValue = Number(qntd.value.trim())

    if (!qntdValue || qntdValue <= 0) {
        qntdValue = 1
    }

    precos = {
        200: 25,
        201: 35,
        202: 45,
        203: 55
    }
    
    const preUnit = precos[codeValue]

    alert(preUnit * qntdValue)
    return preUnit * qntdValue
}

function limpar() {
    code.value = ''
    qntd.value = ''
}