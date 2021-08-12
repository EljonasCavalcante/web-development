// Função em JS é first-class 
// higher-order function

// criar de forma literal

function fun1(){}

// armagezenar em um variável
const fun2 = function () {}

// Armazenar em um Array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))
 
// Arnagenar en um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passar função como param

function run(fun) {
  fun()
}

run(function (){
  console.log('executando')
})

// função pode retornar / conter função

function soma(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}
 soma(2, 3)(4)