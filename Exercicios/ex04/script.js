function tabuada() {
    let num = document.getElementById('txtn').value
    let tab = document.getElementById('seltab')

    if (num.length == '') {
        window.alert('Digite um Número')
    } else {
        let cont = 1
        tab.innerHTML = ''
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${cont} = ${num * cont}`
            item.value = `tab${cont }`
            tab.appendChild(item)
            cont++
        }
    }
}