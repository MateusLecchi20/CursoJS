const nome = 'Mateus de deus';
const sobrenome = 'Reisen Lecchi';
const idade = 21;
const peso = 75;
const alturaEmM = 1.65
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2024 - 21;

console.log('Meu nome é: ' + nome + ' ' + sobrenome + ' tenho ' + idade + ' anos' + ' e peso ' + peso + ' kg.');
console.log('Tenho ' + alturaEmM + ' de altura' +' e meu IMC é de ' + imc + '.');
console.log('Eu nasci em ' + anoNascimento + '.');

console.log(`Meu nome é: ${nome} ${sobrenome}, tenho ${idade} anos e peso ${peso} kg`);
console.log(`Tenho ${alturaEmM} de altura, meu IMC é de ${imc}`);
console.log(`Eu nasci em ${anoNascimento}.`);