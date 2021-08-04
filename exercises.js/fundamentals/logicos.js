function compras(trabalho1, trabalho2){
  const comprarSorvete = trabalho1 || trabalho2 // (||ou)
  const comprarTv50 = trabalho1 && trabalho2 // (&& é "e")
  //const comprarTv32 = !!(trabalho1 ^ trabalho2)
  const comprarTv32 = trabalho1 != trabalho2 // (!= diferente "ou exclusivel") 
  const manterSaudavel = !comprarSorvete // operador unário
  return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} // obj
}
  console.log(compras(true, true))
  console.log(compras(true, false))
  console.log(compras(false, true))
  console.log(compras(false, false))