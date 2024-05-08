const { gets, print } = require("./funcoes-auxiliares");

const n = gets(); // n = numero de valores que iremos receber
let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
  const numero = gets(); // a cada vez que o for iterar iremos pegar o numero da vez

  if (numero % 2 === 0) {
    if (maiorNumeroPar === null || numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  } else {
    if (menorNumeroImpar === null || numero < menorNumeroImpar) {
      menorNumeroImpar = numero;
    }
  }
}

print("Maior número par: " + maiorNumeroPar);
print("Menor número impar: " + menorNumeroImpar);
