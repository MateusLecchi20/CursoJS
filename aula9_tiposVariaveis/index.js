// String, number, undefined, null, boolean -- Tipos Primitivos
const nome = 'Luiz'; // string
const nome1 = "Luiz"; // string
const nome2 = `Luiz`; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta pra local nenhuma na memória
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhuma na memória
const aprovado = true; // Boolean = true, false (lógico)

const a = [1, 2]
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);