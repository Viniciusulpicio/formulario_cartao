function validarCartao(numero, validade, cvv) {
  let mensagens = [];

  // Validação do número do cartão (16 dígitos)
  if (!/^\d{16}$/.test(numero)) {
    mensagens.push("O número do cartão deve ter 16 dígitos numéricos.");
  }

  // Verificação de números repetidos (exemplo: 1111 1111 1111 1111)
  if (/^(.)\1{15}$/.test(numero)) {
    mensagens.push("O número do cartão não pode conter todos os dígitos iguais.");
  }

  // Validação do algoritmo de Luhn
  if (!validarLuhn(numero)) {
    mensagens.push("O número do cartão é inválido. Verifique se está correto.");
  }

  // Validação da data de validade (MM/YY)
  if (!/^\d{2}\/\d{2}$/.test(validade)) {
    mensagens.push("Formato de validade inválido. Use MM/YY.");
  } else {
    let [mes, ano] = validade.split("/").map(Number);
    let anoFull = 2000 + ano;
    let dataAtual = new Date();
    let dataValidade = new Date(anoFull, mes - 1);

    if (dataValidade < dataAtual) {
      mensagens.push("A data de validade não pode ser anterior à data atual.");
    }
  }

  // Validação do CVV (3 ou 4 dígitos)
  if (!/^\d{3,4}$/.test(cvv)) {
    mensagens.push("O código de segurança (CVV) deve ter 3 ou 4 dígitos.");
  }

  return mensagens.length ? mensagens : ["Cartão válido!"];
}

// Algoritmo de Luhn para validar número do cartão
function validarLuhn(numero) {
  let soma = 0;
  let deveDobrar = false;

  for (let i = numero.length - 1; i >= 0; i--) {
    let digito = parseInt(numero.charAt(i));

    if (deveDobrar) {
      digito *= 2;
      if (digito > 9) digito -= 9;
    }

    soma += digito;
    deveDobrar = !deveDobrar;
  }

  return soma % 10 === 0;
}

module.exports = validarCartao;
