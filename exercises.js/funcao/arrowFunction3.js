let comparaConThis = function (param) {
  console.log(this === param)  // estritamente igual
}

comparaConThis(global)

const obj = {}
comparaConThis = comparaConThis.bind(obj)
comparaConThis(global)
comparaConThis(obj)

let comparaConThisArrow = param => console.log(this === param)
comparaConThisArrow(global)
comparaConThisArrow(module.exports)

comparaConThisArrow = comparaConThisArrow.bind(obj)
comparaConThisArrow(obj)
comparaConThisArrow(module.exports)