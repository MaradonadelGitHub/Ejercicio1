const selectElement = document.getElementById("tipoSeguro");

selectElement.addEventListener("change", (event) => {
  const resultado = document.getElementById("valorSeguro");
  resultado.textContent = `${event.target.value}`;
});