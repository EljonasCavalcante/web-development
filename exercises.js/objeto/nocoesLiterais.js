const a = 1
const b = 2
const c = 3

const obj1 = { a:a, b:b, c:c} // modo antigo, mas se quiser troca o valor da variável por aqui é mais fácil
const obj2 = { a, b, c} // modo atual

console.log(obj1,obj2)

//origin
const nomeAttr = 'nota'
const valorAttr = 7.87


// primeiro metodo
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

//segundo metodo
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)