function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min //Este exemplo retorna um número entre dois valores definidos. O valor retornado será maior ou igual a min, e menor que max.
  return Math.floor(valor)//A função Math.floor(x) retorna o menor número inteiro dentre o número "x(um numero)".
}

const valor = { max:50, min:40} // {obj} poderia subtituir nome valor por Obj.
console.log(rand(valor)) 
console.log(rand({ min: 955 }))
console.log(rand({}))
