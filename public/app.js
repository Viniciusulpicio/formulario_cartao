document.getElementById("form-cartao").addEventListener("submit", async function(event) {
  event.preventDefault(); // Evita o recarregamento da página

  const nome = document.getElementById("nome").value;
  const numero = document.getElementById("numero").value.replace(/\s/g, ''); // Remove espaços
  const validade = document.getElementById("validade").value;
  const cvv = document.getElementById("cvv").value;

  const dadosCartao = { nome, numero, validade, cvv };

      // Validação de validade: apenas números
      if (!/^\d{2}\/\d{2}$/.test(validade)) {
        document.getElementById("erro-validade").textContent = "Formato inválido. Use MM/AA.";
        return;
    }

    // Validação de CVV: apenas 3 números
    if (!/^\d{3}$/.test(cvv)) {
        document.getElementById("erro-cvv").textContent = "CVV deve ter 3 números.";
        return;
    }

  try {
      const response = await fetch("http://localhost:8080/cartoes", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(dadosCartao),
      });

      const result = await response.json();

      if (response.ok) {
          // Redirecionar para o link do YouTube
          window.location.href = "https://www.youtube.com/watch?v=HWjCStB6k4o";
      } else {
          alert("❌ Erro: " + result.message);
      }
  } catch (error) {
      console.error("Erro ao conectar ao servidor:", error);
      alert("Erro ao conectar ao servidor. Verifique se o backend está rodando.");
  }
});
