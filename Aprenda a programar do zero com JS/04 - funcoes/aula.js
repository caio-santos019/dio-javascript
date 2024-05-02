function sayMyName(name) {
  console.log("Your name is " + name);
}

sayMyName("Renan");
sayMyName("Vitor");

function quadrado(valor) {
  return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

function incrementarJuros(valor, percentualJuros) {
  const valorDeAcrescimo = (percentualJuros / 100) * valor;
  return valor + valorDeAcrescimo;
}
console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
