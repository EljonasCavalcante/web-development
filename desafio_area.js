/* fórmula para calcular area da circuferência 

A = PI. R²   
 
Quero saber o raio de 10 em metros quadrados
*/

const PI = 3.141592;
let raio = 10;
let areaCirc = PI * raio * raio;

console.log ("Area da Circufência: "+ areaCirc + " m²")



/*Math é um objeto embutido que tem propriedades e métodos para constantes e funções matemáticas. Não é um objeto de função.*/

// outro jeeto de resolver o desafio.
areaCirc = Math.PI * raio * raio; // O Math mostrou o PI exato.
console.log ("Area da Circufência: "+ areaCirc + " m²")

