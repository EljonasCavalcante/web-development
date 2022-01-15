// usando a notação litoral
const obj1 ={}
console.log(obj1)

//Objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//função construtoras
function Produto(nome, preco, desc) {
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2999.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory é função que fabrica alguma coisa

function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(`João reberá: ${f1.getSalario()}`,`Maria receberá: ${f2.getSalario()}` )

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// funcção famosa que retorna um objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
