// IF pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter varios else ifs na checagem
// So posso ter um else na checagem
// Podemos usar condicoes sem else if, utilizando apenas if e else

// const hora = 50;

// if (hora >= 0 && hora <= 11) {
//     console.log(`Bom dia!`);
// } else if (hora >= 12 && hora <= 17) {
//     console.log(`Boa tarde!`);
// } else if (hora >= 18 && hora <= 23) {
//     console.log(`Boa noite!`);
// } else {
//     console.log(`Ola`);
// }

// const tenhoDinheiro = NaN;

// if (tenhoDinheiro) {
//     console.log(`Vou sair de casa`);
// } else {
//     console.log(`Vou ficar em casa`);
// }

const numero = 10;

// Se a condicao ocorrer, faz isso {codigo}
// Se nao faz isso {outro codigo}

if (numero <= 10) {
    console.log(`Numero menor ou igual a 10.`);
}

if (numero >= 0 && numero <= 5) {
    console.log(`Numero entre 0 e 5`);
} else if (numero >= 6 && numero <= 8) {
    console.log(`Numero entre 6 e 8`);
} else if (numero >= 9 && numero <= 11) {
    console.log(`Numero entre 9 e 11`);
} else {
    console.log(`Numero fora das condicoes`);
}

console.log(`...Aqui vai o resto do codigo.`);