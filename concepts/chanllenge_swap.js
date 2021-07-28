let a = 7;
let b = 94;

// o desafio é troca ... no caso seria a = 94 e b = 7
 let temp = a; // essa ainda é 7 que recebeu o nome de "temp"
 a = b;
 b = temp;

 // outra maneira seria [a,b] = [b,a]

 console.log("a = " + a);
 console.log("b = " + b);