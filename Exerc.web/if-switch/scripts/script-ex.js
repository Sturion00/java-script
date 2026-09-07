function identificar() {
    code = document.getElementById('cod')

    if (!code.value || code.value <= 0) {
        return 'Insira um código válido'
    }

    const itens = {
        200: 'Camisa',
        201: 'Calça',
        202: 'Jaqueta',
        203: 'Saia'
    }
    
    return itens[code] || 'Código Invalido'
}

function procurar() {
  const item = identificar();
  alert(item); // ou exibir em outro lugar da página
}