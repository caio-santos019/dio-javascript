function escreverNome(nome) {
  return nome;
}

function verificarIdade(idade) {
  if (idade >= 18) {
    console.log(escreverNome("Caio") + " é maior de idade");
  } else {
    console.log(escreverNome("Caio") + " é menor de idade");
  }
}

verificarIdade(15);
