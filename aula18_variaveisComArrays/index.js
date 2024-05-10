// const pessoa1 = {
//     nome: 'Mateus',
//     sobrenome: 'Lecchi',
//     idade: 20
// };

// const pessoa2 = {
//     nome: 'Arthur',
//     sobrenome: 'Aguiar',
//     idade: 22
// };

// console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);

// console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);

// function criaPessoa (nome, sobrenome, idade) {
//     return {nome, sobrenome, idade
//     };
// }

// const pessoa1 = criaPessoa('Mateus', 'Lecchi', 20);
// const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
// const pessoa3 = criaPessoa('João', 'Moreira', 55);
// const pessoa4 = criaPessoa('Junior', 'Lara', 44);
// const pessoa5 = criaPessoa('Jean', 'Lecchi', 69);
// console.log(pessoa1.nome,pessoa2.nome);

const pessoa1 = {
    nome: `Mateus`,
    sobrenome: `Lecchi`,
    idade: 20,

    fala() {
        console.log(`A minha idade atual e ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();