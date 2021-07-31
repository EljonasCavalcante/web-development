const school = 'Cod3r'

console.log(school.charAt(4)) //charAt() retorna o caractere especificado a partir de uma string.
console.log(school.charAt(0))
console.log(school.charCodeAt(3))
console.log(school.indexOf('3'))

console.log(school.substring(2, 4))
console.log(school.substring(1))

console.log("School ".concat(school).concat("!"))
console.log(school.replace(3, "e"))
console.log(school.replace(/\d/, "a")) //    /\d/ "substuir todos os digitos "a" "

console.log('Ana,Maria,Pedro'.split(","))

