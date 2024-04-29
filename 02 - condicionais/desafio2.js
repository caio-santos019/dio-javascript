const precoEtanol = 2.12;
const precoGasolina = 5.79;
const tipoCombustivel = "Etanol";
const kmPorLitros = 10;
const distanciaEmKm = 300;

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === "Etanol") {
  const valorGastoEtanol = litrosConsumidos * precoEtanol;
  console.log("Gastou R$ " + valorGastoEtanol.toFixed(2) + " no etanol.");
} else if (tipoCombustivel === "Gasolina") {
  const valorGastoGasolina = litrosConsumidos * precoGasolina;
  console.log("Gastou R$ " + valorGastoGasolina.toFixed(2) + " na gasolina.");
} else {
  console.log("Combústivel desconhecido.");
}
