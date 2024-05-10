/**
 * Operadores de comparacao
 * > maior que 
 * >= maior que ou igual a
 * < menor que
 * <= menor que ou igual a
 * == igualdade (valor) ***********
 * === igualdade estrita (valor e tipo)
 * != diferente (valor) ***********
 * !== diferente estrito (valor e tipo)
 */

const maior = 10 > 5;
console.log(maior);

const maiorIgual = 10 >= 11;
console.log(maiorIgual);

const menor = 10 < 11;
console.log(menor);

const menorIgual = 10 <= 11;
console.log(menorIgual);

const num1 = 10;
const num2 = `10`;
const comp = num1 === num2;
console.log(comp);

const num3 = 10;
const num4 = `10`;
const comparar = num1 !== num2;
console.log(comparar);