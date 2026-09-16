var num = [1, 5, 6, 9, 0]

num.push(7)
num.sort()

console.log(num)
console.log(`O array tem ${num.length} posições`)
console.log(`O terceiro valor é ${num[2]}`)

let pos = num.indexOf(2) 
if (pos == -1) {
    console.log(`O valor não existe...`)
} else {
    console.log(`o valor está na posição ${pos}`)
}