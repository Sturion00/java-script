let amigo = {
    nome: 'José',
    peso: 85.4,
    sexo: 'muito',
    engordar(p=0) {
        console.log('Engordou')
        this.peso += p

    }
}

amigo.engordar(2 )
console.log(`${amigo.nome} pesa ${amigo.peso}`)