/**
 * Primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados
 * 
 * Referencia (mutavel) - array, object, function - Passados por referencia
 */

// let nome = `mateus`;
// nome[0] = `R`;
// console.log(nome[0], nome);

// let a = `A`;
// let b = a; // Copia
// console.log(a, b);

// a = `Outra coisa`;
// console.log(a, b);

// let a = [1, 2, 3];
// let b = [...a];
// let c = b;
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push(`mateus`);
// console.log(a, c);

const a = {
    nome: `mateus`,
    sobrenome: `lecchi`
};
const b = {...a};

a.nome = `arthur`;
console.log(a);
console.log(b);