function rand([min = 0, max = 100]) {
  if (min > max) [min, max] = [max, min] //usando o operador destructuring []=[] " se o minimo for maior que o maximo inverta "if"
  const  valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([,10]))// ficará navegando entre 0 a 10
console.log(rand([]))// ficará navegando entre 0 a 1000