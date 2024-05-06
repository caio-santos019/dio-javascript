class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2024 - idade;
  }
  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

const caio = new Pessoa("Caio", 21);
const renan = new Pessoa("Renan", 30);

console.log(caio);

caio.descrever();
renan.descrever();
