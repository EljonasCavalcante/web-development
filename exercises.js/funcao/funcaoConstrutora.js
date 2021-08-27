function Carro(VelocidadeMaxima = 200, delta = 5) {
  //atributo privado
  let velocidadeAtual = 0
  // metodo publico
  this.acelerar = function () {
    if(velocidadeAtual + delta <= VelocidadeMaxima) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = VelocidadeMaxima
    }
  }
// metodo puvlico
this.getVelocidadeAtual = function () {
  return velocidadeAtual
}

}
const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())



const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
console.log( typeof Carro)
console.log( typeof ferrari)
console.log( typeof uno)
