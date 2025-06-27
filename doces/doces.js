document.addEventListener("DOMContentLoaded", () => {
  const doces = { A: 6, B: 7, C: 8 };
  const nomesDoces = { A: "Caramelo", B: "Bombom", C: "Barra Chocolate" };
  let valorInserido = 0;

  const estadoElemento = document.getElementById("estado");
  const mensagemElemento = document.getElementById("mensagem");
  const doceButtons = document.querySelectorAll(".doce");
  const notaButtons = document.querySelectorAll(".nota");
  const somMoeda = document.getElementById("som-moeda");

  const abrirMaquina = document.getElementById("abrir-maquina");
  const fecharMaquina = document.getElementById("fechar-maquina");
  const containerMaquina = document.getElementById("maquina-container");

  abrirMaquina.addEventListener("click", () => {
    abrirMaquina.style.display = "none";
    containerMaquina.classList.add("visible");
    valorInserido = 0;
    atualizarEstado();
    mensagemElemento.textContent = "Insira uma nota";
    doceButtons.forEach(button => button.disabled = true);
  });

  fecharMaquina.addEventListener("click", () => {
    containerMaquina.classList.remove("visible");
    abrirMaquina.style.display = "block";
  });

  notaButtons.forEach(button => {
    button.addEventListener("click", () => {
      inserirNota(parseInt(button.getAttribute("data-valor")));
    });
  });

  doceButtons.forEach(button => {
    button.addEventListener("click", () => {
      selecionarDoce(button.getAttribute("data-doce"));
    });
  });

  function atualizarEstado() {
    estadoElemento.textContent = `Valor: R$${valorInserido},00`;
    doceButtons.forEach(button => {
      const tipo = button.getAttribute("data-doce");
      button.disabled = valorInserido < doces[tipo];
    });
    if (valorInserido >= doces.C) {
      mensagemElemento.textContent = "Barra Chocolate disponível";
    } else if (valorInserido >= doces.B) {
      mensagemElemento.textContent = "Bombom disponível";
    } else if (valorInserido >= doces.A) {
      mensagemElemento.textContent = "Caramelo disponível";
    } else {
      mensagemElemento.textContent = "Insira uma nota";
    }
  }

  function criarAnimacaoMoeda(valor) {
    if (valor <= 0) return;
    for (let i = 0; i < valor; i++) {
      setTimeout(() => {
        const coin = document.createElement("div");
        coin.classList.add("coin");
        document.querySelector(".interface-panel").appendChild(coin);
        coin.style.animation = "coin-fall 1s forwards";
        if (somMoeda) {
          somMoeda.currentTime = 0;
          somMoeda.play().catch(() => {});
        }
        setTimeout(() => coin.remove(), 1000);
      }, i * 500);
    }
  }

  function mostrarDoceEntregue(tipo) {
    const doce = document.createElement("div");
    doce.classList.add("doce-entregue");
    const img = document.createElement("img");
    img.src = `../images/candy${tipo === "A" ? 1 : tipo === "B" ? 2 : 3}.png`;
    img.alt = `Doce ${tipo}`;
    img.style.width = "120px";
    doce.appendChild(img);
    document.getElementById("saida-doce").appendChild(doce);
    containerMaquina.classList.add("shake");
    setTimeout(() => containerMaquina.classList.remove("shake"), 600);
    setTimeout(() => doce.remove(), 2000);
  }

  function inserirNota(valor) {
    valorInserido += valor;
    criarAnimacaoMoeda(valor);
    atualizarEstado();
  }

  function selecionarDoce(tipo) {
    if (valorInserido >= doces[tipo]) {
      const troco = valorInserido - doces[tipo];
      valorInserido = 0;
      atualizarEstado();
      mostrarDoceEntregue(tipo);
      const nome = nomesDoces[tipo];
      mensagemElemento.textContent = troco > 0
        ? `${nome} entregue. Troco: R$${troco},00`
        : `${nome} entregue sem troco`;
    }
  }
});