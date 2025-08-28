document.addEventListener('DOMContentLoaded', function () {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

  // Alterna visibilidade das opções de acessibilidade
  botaoDeAcessibilidade.addEventListener('click', function () {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
  });

  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');

  let tamanhoAtualFonte = 1;
  const tamanhoMinimo = 0.8;
  const tamanhoMaximo = 2;

  // Aumenta fonte
  aumentaFonteBotao.addEventListener('click', function () {
    if (tamanhoAtualFonte < tamanhoMaximo) {
      tamanhoAtualFonte += 0.1;
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    }
  });

  // Diminui fonte
  diminuiFonteBotao.addEventListener('click', function () {
    if (tamanhoAtualFonte > tamanhoMinimo) {
      tamanhoAtualFonte -= 0.1;
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    }
  });

  // Cria botão para modo Titã
  const modoTitanBotao = document.createElement('button');
  modoTitanBotao.textContent = 'Modo Titã';
  modoTitanBotao.classList.add('btn', 'btn-dark', 'fw-bold', 'mt-2');
  opcoesDeAcessibilidade.appendChild(modoTitanBotao);

  // Alterna modo Titã
  modoTitanBotao.addEventListener('click', function () {
    document.body.classList.toggle('modo-titan');
  });
});
