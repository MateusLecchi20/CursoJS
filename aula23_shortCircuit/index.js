/**
 * FALSY
 * false
 * 0
 * '' "" ``
 * null / undefined
 * NaN
 */

// function falaOi () {
//     return `Oi`;
// }

// const vaiExecutar = `Joaozinho`;

// console.log(vaiExecutar && falaOi());

// const corUsuario = `vermelho`;
// const corPadrao = corUsuario || `preto`;

// console.log(corPadrao);

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || `Joaozinho` || c || d || e);