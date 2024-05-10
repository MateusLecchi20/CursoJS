/**
 * Ariméticos
 * + Adição / Concatenação  (- / *)
 * ** Potenciação
 * % Resto da divisão
 */

/* Regras de Precedencia
()
**
* / %
+ -
*/

/*
Incremento = ++
Decremento = --
*/

/*const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log(num1 * num2 / num3);*/

const passo = 2;
let contador = 2;

contador *= passo; // contador = contador + 50
contador *= passo;
contador *= passo;
console.log(contador);

// NaN - Not a number -- parseInt (inteiro), parseFloat (decimais)
const num1 = 10;
const num2 = Number('5');
console.log(num1 + num2);
console.log(typeof num2);