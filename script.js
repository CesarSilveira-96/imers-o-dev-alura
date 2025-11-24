// Altera a cor do logo de preto para branco usando um filtro CSS
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");
  const logoLink = document.getElementById("logo-link");
  const linkMasculino = document.getElementById("link-masculino");
  // const linkFeminino = document.getElementById("link-feminino");
  const linkLendas = document.getElementById("link-lendas");

  if (logo) {
    logo.style.filter = "invert(1)";
  }

  // --- Lógica de Filtro de Categoria ---
  logoLink.addEventListener("click", (e) => {
    e.preventDefault();
    definirCategoriaAtiva("todos");
  });
  linkMasculino.addEventListener("click", (e) => {
    e.preventDefault();
    definirCategoriaAtiva("masculino");
  });
  /*   linkFeminino.addEventListener("click", (e) => {
    e.preventDefault();
    definirCategoriaAtiva("feminino");
  }); */
  linkLendas.addEventListener("click", (e) => {
    e.preventDefault();
    definirCategoriaAtiva("lendas");
  });

  // Inicia a busca de dados assim que a página carrega
  iniciarBusca();
});

let cardContainer = document.querySelector(".card-container");
let campoBusca = document.querySelector("header input");
let dados = {}; // Agora 'dados' será um objeto
let categoriaAtiva = "todos"; // Categoria inicial

// --- Lógica do Modal ---
const modalContainer = document.getElementById("modal-container");
const modalBody = document.getElementById("modal-body");
const modalClose = document.querySelector(".modal-close");

// Fecha o modal ao clicar no 'X'
modalClose.addEventListener("click", () => {
  modalContainer.classList.remove("ativo");
});

// Fecha o modal ao clicar fora do conteúdo
modalContainer.addEventListener("click", (event) => {
  if (event.target === modalContainer) {
    modalContainer.classList.remove("ativo");
  }
});

document.querySelector("header button").addEventListener("click", () => {
  iniciarBusca();
});

document.body.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    iniciarBusca();
  }
});

campoBusca.addEventListener("input", () => {
  // A busca agora é em tempo real, sem precisar carregar os dados novamente
  filtrarErenderizar();
});

async function iniciarBusca() {
  if (Object.keys(dados).length === 0) {
    // Verifica se o objeto de dados está vazio
    try {
      let resposta = await fetch("data.json");
      dados = await resposta.json();
    } catch (error) {
      console.log("Falha ao buscar os dados: ", error);
      cardContainer.innerHTML = `<p style="color: red;">Falha ao carregar os dados.</p>`;
      return;
    } // Tratamento de erros para garantir que o usuário seja assistido caso a busca não retorne resultados
  }
  filtrarErenderizar();
}

function definirCategoriaAtiva(categoria) {
  categoriaAtiva = categoria;
  // Atualiza a classe 'ativo' nos links para feedback visual
  document.querySelectorAll(".category-link").forEach((link) => {
    link.classList.remove("ativo");
  });
  if (categoria !== "todos") {
    document.getElementById(`link-${categoria}`).classList.add("ativo");
  }
  filtrarErenderizar();
}

function filtrarErenderizar() {
  const termoBusca = campoBusca.value.toLowerCase();
  let dadosParaFiltrar = [];

  // Seleciona a lista de jogadores com base na categoria ativa
  if (categoriaAtiva === "todos") {
    dadosParaFiltrar = [...dados.masculino, ...dados.lendas];
  } else {
    dadosParaFiltrar = dados[categoriaAtiva] || [];
  }

  const dadosFiltrados = dadosParaFiltrar.filter(
    (dado) =>
      dado.nome.toLowerCase().includes(termoBusca) ||
      dado.posicao.toLowerCase().includes(termoBusca)
  );
  renderizarCards(dadosFiltrados);
}

function renderizarCards(dados) {
  cardContainer.innerHTML = "";
  for (let dado of dados) {
    let article = document.createElement("article");
    article.classList.add("card");
    article.innerHTML = `
      <div class="card-content">
        <h2>${dado.nome}</h2>
        <p>
          <strong>Posição: </strong>
          ${dado.posicao}
        </p>
        <p>
          <strong>Nascimento: </strong>
          ${dado.nascimento}
        </p>
        <p>
          <strong>Nacionalidade: </strong>
          ${dado.nacionalidade}
        </p>
        <p>
        <a
          >Expandir</a>
        </p>
      </div>
      <div class="card-image-container">
        <img class="player-image" src="static/assets/${dado.nome}.png" alt="Imagem do jogador">
      </div>
    `;

    // Adiciona o evento de clique para abrir o modal
    article.addEventListener("click", () => {
      // Constrói um novo HTML para o modal, incluindo o resumo do jogador
      modalBody.innerHTML = `
        <article class="card">
          <div class="card-content">
            <h2>${dado.nome}</h2>
            <p>
              <strong>Posição: </strong>
              ${dado.posicao}
            </p>
            <p>
              <strong>Nascimento: </strong>
              ${dado.nascimento}
            </p>
            <p>
              <strong>Nacionalidade: </strong>
              ${dado.nacionalidade}
            </p>
            </br>
            <p class="resumo">${dado.resumo}</p>
            <p>
              <a href=${dado.wikipedia} target="_blank">Saiba Mais</a>
              <a href=${dado.stats} target="_blank">Estatísticas</a>
            </p>
          </div>
          <div class="card-image-container">
            <img class="player-image" src="static/assets/${dado.nome}.png" alt="Imagem do jogador">
          </div>
        </article>
      `;
      modalContainer.classList.add("ativo"); // Mostra o modal
    });

    cardContainer.appendChild(article);
  }
}
