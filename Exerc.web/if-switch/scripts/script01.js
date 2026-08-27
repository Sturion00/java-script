function analisar() {
    const letra = document.getElementById('txtl').value.toLowerCase()
    const saida = document.querySelector('div.saida>p')
    

    if (letra.length > 1) {
        alert('Digite apenas uma letra')
    } 
    if (letra.length < 1) {
        alert('Digite um letra')
    } else {
        if (letra == 'a' || letra == 'e'|| letra == 'i' || letra == 'o' || letra == 'u' ) {
            saida.innerHTML = 'A letra é vogal'
        } else {
            saida.innerHTML = 'A letra é consoante'
        }
    }

}