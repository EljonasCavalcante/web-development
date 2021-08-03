console.log('01)', '1' == 1) // dois simbolos de == compara a igualdade. = <--- nome de recebe
console.log('02)', '1' === 1) // ele diz " ele é estritamente igual? não porque um é string e outro numero"
console.log('03)', '3' != 3) // simbolo de diferente.
console.log('04)', '3' !== 3) // simbolo de  estritamente diferente.
console.log('05)', 3 < 2)  //  3 menor é que 2?
console.log('06)', 3 > 2)  // 3 maior é que 2?
console.log('07)', 3 <= 2) // menor ou igual
console.log('08)', 3 >= 2) // maior ou igual

const d1 = new Date(0) // O zero Um número representando os milissegundos passados entre 1 de Janeiro de 1970 00:00:00 UTC e a data atual.
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) /* O método getTime() retorna o valor numérico correspondente ao horário da data especificada de acordo com o horário universal */

console.log ('12)', undefined == null)
console.log ('13)', undefined === null)