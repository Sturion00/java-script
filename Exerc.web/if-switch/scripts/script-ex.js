code = document.getElementById('cod')
qntd = document.getElementById('qntd')
codeValue = code.value.trim()
qntdValue = qntd.value.trim()

function identItem() {
    
    if (!codeValue) {
        alert('Insira um código.')
    }
    
    itens = {
        200: 'Camisa',
        201: 'Calça',
        202: 'Jaqueta',
        203: 'Saia'
    }
    
    return itens[codeValue] || 'Código Invalido'
}

function identPreco() {

    if (qntdValue == 0 ) {
        qntdValue = 1
    }

    precos = {
        200: 25,
        201: 35,
        202: 45,
        203: 55
    }

    return precos[codeValue] || ''
}


function limpar() {
    code.value = ''
    qntd.value = ''
}