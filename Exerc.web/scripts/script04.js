function calcular() {
    const nasc = new Date(document.getElementById('txta').value)
    const hoje = new Date()

    let anos = hoje.getFullYear() - nasc.getFullYear()
    let meses = hoje.getMonth() - nasc.getMonth()
    let dias = hoje.getDate() - nasc.getDate()

    if (dias < 0) {
        meses--
        dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate()
    }
    if (meses < 0) {
        anos--
        meses += 12
    }

    const saida = document.querySelector('div#saida>p.um')
    saida.innerHTML = `Você tem ${anos} anos, ${meses} meses e ${dias} dias.`
}





