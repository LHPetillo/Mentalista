var numeroSecreto = parseInt(Math.random() * 11);
function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  var elementoResultado = document.getElementById("resultado");
  var chuteAviso = document.getElementById("aviso");
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "você acertou";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = " dica o chute é maior que o numero secreto ";
  } else {
    elementoResultado.innerHTML = " dica o numero secreto é maior que o chute";
  }
}
