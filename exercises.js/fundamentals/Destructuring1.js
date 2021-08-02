// nbovo recurso do ES2015

const pessoa = {
    nome: 'Eljonas',
    idade: 30,
    endereco: {
      logradouro: 'Rua:Taciba',
      numero: 14
    }
}

const { nome, idade } = pessoa // " tire do objeto(pessoa) o atributo nome e idade"
console.log(nome, idade)

// mundando o nome de varial
const { nome: n, idade: i} = pessoa
console.log(n, i)

// quando não tem nada dentro (atributos que não existe)
const {sobreNome,bemHumorado = true} = pessoa
console.log(sobreNome,bemHumorado)

// pegando algo interno
const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro,'n: '+ numero,'CEP:'+ cep)