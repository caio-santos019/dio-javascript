function aplicarDesconto(valor, desconto) {
  return valor - valor * (desconto / 100);
}

function aplicarJuros(valor, juros) {
  return valor + valor * (juros / 100);
}

const precoEtiquetaProduto = 100;
const formaPagamento = 4;

if (formaPagamento === 1) {
  // Debito
  console.log(aplicarDesconto(precoEtiquetaProduto, 10));
} else if (formaPagamento === 2) {
  // Dinheiro ou Pix
  console.log(aplicarDesconto(precoEtiquetaProduto, 15));
} else if (formaPagamento === 3) {
  // Parcelado em duas vezes
  console.log(precoEtiquetaProduto);
} else {
  // Parcelado acima de duas vezes
  console.log(aplicarJuros(precoEtiquetaProduto, 10));
}
