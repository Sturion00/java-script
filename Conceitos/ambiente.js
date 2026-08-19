let num = [5, 8, 9, 4, 2, 3]

console.log(num)

num.sort()
num.push(10)
console.log(`${num}`)

/*
let cd = 0
let lentNum = Number(num.length)

while (cd <= lentNum) {
    console.log(num[cd])
    cd++
}
    */


// for (let cont = 0; cont < num.length; cont++) {
//     console.log(num[cont])
// }

// for (let cont in num) {
//     console.log(`A posição ${cont} tem valor ${num[cont]}`)
// }

let position = num.indexOf(0)


if (position != -1) {
    console.log(`O valor 4 está na posição ${position}`)
} else {
    console.log('O valor não exite no vetor')
}