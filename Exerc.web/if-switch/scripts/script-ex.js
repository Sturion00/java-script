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
    
    //alert(itens[codeValue] || 'Código Invalido')
    return itens[codeValue] || alert('Código digitado inválido')
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
    
    //alert(precos[codeValue])
    return precos[codeValue] || null
}

function retorno() {
    const total = identValor() * qntd.value.trim()
    const quantidade = qntd.value.trim()

    if (!quantidade || quantidade <= 0) {
        quantidade = 1
    }

    document.getElementById('codi').innerHTML = code.value.trim()
    document.getElementById('desc').innerHTML = identItem()
    document.getElementById('quant').innerHTML = quantidade
    document.getElementById('valor').innerHTML =  identValor().toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    document.getElementById('total').innerHTML =  total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

}

function limpar() {
    code.value = null
    qntd.value = null

    document.getElementById('codi').innerHTML = null
    document.getElementById('desc').innerHTML = null
    document.getElementById('quant').innerHTML = null
    document.getElementById('valor').innerHTML = null
    document.getElementById('total').innerHTML = null
}