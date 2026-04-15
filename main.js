// Função que calcula o tempo restante
function calculaTempo(ms) {
  const dias = Math.floor(ms / (1000 * 60 * 60 * 24)); // Quantos dias
  ms %= (1000 * 60 * 60 * 24);
  const horas = Math.floor(ms / (1000 * 60 * 60)); // Quantas horas
  ms %= (1000 * 60 * 60);
  const minutos = Math.floor(ms / (1000 * 60)); // Quantos minutos
  ms %= (1000 * 60);
  const segundos = Math.floor(ms / 1000); // Quantos segundos

  // Organizando a resposta
  let tempoString = '';
  if (dias > 0) {
    tempoString += `${dias} dia${dias > 1 ? 's' : ''} `;
  }
  if (horas > 0) {
    tempoString += `${horas} hora${horas > 1 ? 's' : ''} `;
  }
  if (minutos > 0) {
    tempoString += `${minutos} minuto${minutos > 1 ? 's' : ''} `;
  }
  if (segundos > 0) {
    tempoString += `${segundos} segundo${segundos > 1 ? 's' : ''} `;
  }

  return tempoString.trim();
}

// Função para atualizar a contagem regressiva
function atualizaContagem() {
  const tempoFinal = new Date('2026-12-31T23:59:59').getTime(); // Data alvo para a contagem regressiva
  const agora = new Date().getTime(); // Tempo atual

  const tempoRestante = tempoFinal - agora; // Calcula o tempo restante

  if (tempoRestante <= 0) {
    document.getElementById('contador').textContent = 'A contagem chegou ao fim!';
  } else {
    const tempoFormatado = calculaTempo(tempoRestante);
    document.getElementById('contador').textContent = `Faltam: ${tempoFormatado}`;
  }
}

// Atualiza a contagem regressiva a cada segundo
setInterval(atualizaContagem, 1000);

// Chama a função uma vez para exibir o contador imediatamente ao carregar a página
atualizaContagem();