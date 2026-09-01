function analisar() {
    const entra = Number(document.getElementById('txtn').value)
    const dias = new Date(2026, entra, 0).getDate()
    const saida = document.querySelector('div.saida>p')

    if (!entra) {
        alert('Informe um Número de 1 a 12...')
    } else {
        switch (entra) {
            case 1:
                saida.innerHTML = `o Mês ${entra} é janeiro e tem ${dias}.`
                break
            case 2:
                saida.innerHTML = `o Mês ${entra} é Fevereiro e tem ${dias}.`
                break
            case 3:
                saida.innerHTML = `o Mês ${entra} é Março e tem ${dias}.`
                break
            case 4:
                saida.innerHTML = `o Mês ${entra} é Abril e tem ${dias}.`
                break
            case 5:
                saida.innerHTML = `o Mês ${entra} é Maio e tem ${dias}.`
                break
            case 6:
                saida.innerHTML = `o Mês ${entra} é Junho e tem ${dias}.`
                break
            case 7:
                saida.innerHTML = `o Mês ${entra} é Julho e tem ${dias}.`
                break
            case 8:
                saida.innerHTML = `o Mês ${entra} é Agosto e tem ${dias}.`
                break
            case 9:
                saida.innerHTML = `o Mês ${entra} é Setembro e tem ${dias}.`
                break
            case 10:
                saida.innerHTML = `o Mês ${entra} é Outubro e tem ${dias}.`
                break
            case 11:
                saida.innerHTML = `o Mês ${entra} é Novembro e tem ${dias}.`
                break
            case 12:
                saida.innerHTML = `o Mês ${entra} é Dezembro e tem ${dias}.`
                break
        }
    }
}