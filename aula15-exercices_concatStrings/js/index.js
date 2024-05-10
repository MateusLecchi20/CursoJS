function Numero(){
   const TextElement = document.getElementById("meuValor");
//    console.log({TextElement});
   const valor = Number(TextElement.value)
   console.log(meuValor.value);
   texto.innerHTML = '';
   texto.innerHTML += `<p>${valor} é inteiro? ${Number.isInteger(valor)}</p>`;
   texto.innerHTML += `<p>Raiz quadrada = ${valor ** 0.5}</p>`;
   texto.innerHTML += `<p>Arredondando para cima = ${Math.ceil(valor)}</p>`;
   texto.innerHTML += `<p>Arredondando para baixo = ${Math.floor(valor)}</p>`;
   texto.innerHTML += `<p>É Nan? ${Number.isNaN(valor)}</p>`;
   texto.innerHTML += `<p>Com duas casas decimais = ${valor.toFixed(2)}</p>`;
}