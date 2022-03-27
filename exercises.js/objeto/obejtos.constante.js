//pessoa -> 123 { ...}

const pessoa = { nome: 'joão'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}

//pessoa = { nome: 'Ana'}

Object.freeze(pessoa)

// serve para não pode muda nada com freeze()