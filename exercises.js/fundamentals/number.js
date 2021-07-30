const peso1 = 1.0
const peso2 = Number(2.0)

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const evaluation1 = 9.871
const evaluation2 = 6.871

const total = evaluation1 * peso1 + evaluation2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // tofixed serve para escolher a quantidade decimal


