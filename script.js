document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".produto button");
  const contador = document.getElementById("contador");
  let total = 0;

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      if (botao.textContent === "Adicionar ao Carrinho") {
        botao.textContent = "Remover do Carrinho";
        botao.style.backgroundColor = "orange";
        total++;
      } else {
        botao.textContent = "Adicionar ao Carrinho";
        botao.style.backgroundColor = "yellow";
        total--;
      }
      contador.textContent = total;
    });
  });
});
