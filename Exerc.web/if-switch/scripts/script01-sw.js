function analisar() {
    const letra = document.getElementById('txtl').value.toLowerCase()
    const saida = document.querySelector('div.saida>p')
    

    if (letra.length > 1) {
        alert('Digite somente uma letra')
    } else {
        switch (letra) {
            case "a":
                saida.innerHTML = `"${letra}" é uma vogal.`
                break
            case "e":
                saida.innerHTML = `"${letra}" é uma vogal.`
                break
            case "i":
                saida.innerHTML = `"${letra}" é uma vogal.`
                break
            case "o":
                saida.innerHTML = `"${letra}" é uma vogal.`
                break
            case "u":
                saida.innerHTML = `"${letra}" é uma vogal.`
                break
            default:
                saida.innerHTML = `"${letra}" é uma consoante.`
            }
    }
}