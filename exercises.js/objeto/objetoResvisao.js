// coleção dinâmica de pares chaves/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

//outro exemplo

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Eljonas',
    idade: 26,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 123
    }
  },
  condutores: [{
    nome: 'Junior',
    idade: 19
  }, {
    nome: 'Ana',
    idade: 25
  }],
  calcularValorSeguro: function() {
    //...
  }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario'] ['endereco'] ['logradouro'] = 'Av Gigante'
console.log(carro)