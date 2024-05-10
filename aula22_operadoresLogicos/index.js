/**
 * Operadores logicos
 * && -> AND -> E -- Todas as expressoes precisam ser verdadeiras
 * || -> OR -> OU
 * ! -> NOT -> NAO
 */

const expressaoAnd = true && true && true && true;
const expressaoOr = false || false || false || false;
console.log(expressaoOr);

const usuario = `Mateus`;
const senha = `123456`;
const vaiLogar = usuario === `Mateus` && senha === `123456`;
console.log(vaiLogar);

console.log(!true);