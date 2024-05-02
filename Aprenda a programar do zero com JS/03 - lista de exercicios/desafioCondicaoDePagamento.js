const precoEtiquetaProduto = 100;
const formaPagamento = 4;

if (formaPagamento === 1) {
  // Debito
  console.log(precoEtiquetaProduto - precoEtiquetaProduto * 0.1);
} else if (formaPagamento === 2) {
  // Dinheiro ou Pix
  console.log(precoEtiquetaProduto - precoEtiquetaProduto * 0.15);
} else if (formaPagamento === 3) {
  // Parcelado em duas vezes
  console.log(precoEtiquetaProduto);
} else {
  // Parcelado acima de duas vezes
  console.log(precoEtiquetaProduto + precoEtiquetaProduto * 0.1);
}
