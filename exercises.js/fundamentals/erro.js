function tratarErroELancar(erro) {
  throw new Error('...')
}

function imprimirNomeX(obj) {
  try { console.log(obj.name.toUpperCase() + '!!!')
} catch (e) {
  tratarErroELancar(e)
}
 
}

const obj = { name: 'Roberto' }
imprimirNomeX(obj)