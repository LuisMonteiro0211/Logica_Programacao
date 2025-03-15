function sorteador_numeros(minimo, maximo, quantidade) {
  let numeros_sorteados = [];

  for (let contador = 1; (contador <= quantidade); contador++) {
    console.log(contador);
    numeros_sorteados.push(
      Math.round(Math.random() * (maximo - minimo + 1) + minimo)
    );
  }
  return numeros_sorteados;
}

function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let minimo = parseInt(document.getElementById("de").value);
  let maximo = parseInt(document.getElementById("ate").value);

  let num_aleatorio = sorteador_numeros(minimo, maximo, quantidade);
  alert(num_aleatorio);
}
