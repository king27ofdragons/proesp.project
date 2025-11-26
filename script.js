const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const imc = document.getElementById("imc");
const feedback = document.getElementById("feedback-imc");

function calcularIMC() {
  if (!peso || !altura || !imc) return;

  if (!peso.value || !altura.value) {
    feedback.innerText = "Preencha peso e altura";
    feedback.style.background = "gray";
    return;
  }

  const alturaMetros = altura.value / 100;
  const resultado = peso.value / (alturaMetros * alturaMetros);
  imc.value = resultado.toFixed(2);

  if (resultado < 18.5) {
    feedback.style.background = "yellow";
    feedback.innerText = "Abaixo do peso";
  } 
  else if (resultado < 25) {
    feedback.style.background = "green";
    feedback.innerText = "Peso normal";
  } 
  else {
    feedback.style.background = "red";
    feedback.innerText = "Sobrepeso";
  }
}

if (peso && altura) {
  peso.addEventListener("input", calcularIMC);
  altura.addEventListener("input", calcularIMC);
}