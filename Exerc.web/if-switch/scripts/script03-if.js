function analisar() {
    const entra = Number(document.getElementById('txtn').value)
    const dias = new Date(2026, entra, 0).getDate()
    const saida = document.querySelector('div.saida>p')

    if (!entra) {
        alert('Informe um Número')
    }

    if (entra == 1) {
        saida.innerHTML = `O mês ${entra} é Janeiro e tem ${dias} dias.`
    } else if (entra == 2) {
        saida.innerHTML = `O mês ${entra} é Fevereiro e tem ${dias} dias.`
    } else if (entra == 3) {
        saida.innerHTML = `O mês ${entra} é Março e tem ${dias} dias.`
    } else if (entra == 4) {
        saida.innerHTML = `O mês ${entra} é Abril e tem ${dias} dias.`
    } else if (entra == 5) {
        saida.innerHTML = `O mês ${entra} é Maio e tem ${dias} dias.`
    } else if (entra == 6) {
        saida.innerHTML = `O mês ${entra} é Junho e tem ${dias} dias.`
    } else if (entra == 7) {
        saida.innerHTML = `O mês ${entra} é Julho e tem ${dias} dias.`
    } else if (entra == 8) {
        saida.innerHTML = `O mês ${entra} é Agosto e tem ${dias} dias.`
    } else if (entra == 9) {
        saida.innerHTML = `O mês ${entra} é Setembro e tem ${dias} dias.`
    } else if (entra == 10) {
        saida.innerHTML = `O mês ${entra} é Outubro e tem ${dias} dias.`
    } else if (entra == 11) {
        saida.innerHTML = `O mês ${entra} é Novembro e tem ${dias} dias.`
    } else if (entra == 12) {
        saida.innerHTML = `O mês ${entra} é Dezembro e tem ${dias} dias.`
    } else if (entra > 12) {
        alert('informe um Número até 12.')
    }
    

}