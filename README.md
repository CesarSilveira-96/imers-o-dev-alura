# 🔴 Galeria de Jogadores: Lendas e Elenco Atual do Manchester United

[![Manchester United](https://1.bp.blogspot.com/-3tdzQ6V5OYI/Xh_9oXxzh6I/AAAAAAAAPXU/5_xSGlXgERQKei0OVMlW6YOSYlhLJWswgCLcBGAsYHQ/s1600/Logo%2BDream%2BLeague%2BSoccer%2BManchester%2BUnited%2B2020.png)]()
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Status do Projeto](https://img.shields.io/badge/Status-Concluído-success)](https://github.com/SeuUsuario/SeuRepositorio)

## 🎯 Sobre o Projeto

Este projeto é uma **Galeria Digital Interativa** focada no Manchester United, desenvolvida como parte da **Imersão Dev da Alura**. O objetivo principal foi consolidar habilidades de Front-end para criar uma aplicação dinâmica que exibe, de forma organizada, o elenco atual e as lendas históricas do clube.

A aplicação demonstra a capacidade de consumir e manipular dados externos (JSON) para renderizar uma interface rica e responsiva, separando a lógica de apresentação dos dados.

## ✨ Demonstração e Funcionalidades

A galeria apresenta os jogadores em formato de *cards* detalhados, permitindo uma navegação intuitiva.

![Screenshot da Aplicação](./assets/screenshot.png)

### Principais Características

* **Listagem Dinâmica:** Renderização de jogadores a partir de uma fonte de dados externa (`data.json`).
* **Cards Detalhados:** Exibição de informações-chave como nome, posição, nacionalidade, idade e um breve resumo de carreira e conquistas.
* **Design Responsivo:** O layout se adapta perfeitamente a diferentes dispositivos (desktop, tablet e mobile), garantindo uma User Experience (UX) consistente.
* **Estrutura de Dados (JSON):** Utilização de JSON para simular um banco de dados simples, praticando a separação de *data* e *view*.

## ⚙️ Tecnologias e Metodologias

| Categoria | Tecnologia / Ferramenta | Aplicação no Projeto |
| :--- | :--- | :--- |
| **Estrutura** | HTML5 (Semântico) | Organização do conteúdo e hierarquia da informação. |
| **Estilização** | CSS3 | Aplicação de design (Grid Layout, Flexbox) e criação de um tema visualmente atraente. |
| **Lógica** | JavaScript (ES6+) | Consumo de dados (`fetch` API), manipulação eficiente do DOM e lógica de renderização dinâmica. |
| **Dados** | JSON | Armazenamento estruturado das informações dos jogadores. |
| **Produtividade** | Gemini Code Assist | Ferramenta de IA utilizada para auxílio na revisão de código, refatoração e sugestão de padrões de melhoria. |

## 🚀 Como Executar o Projeto Localmente

Para rodar este projeto em seu ambiente de desenvolvimento, siga os passos abaixo:

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/SeuUsuario/SeuRepositorio.git](https://github.com/SeuUsuario/SeuRepositorio.git)
    cd SeuRepositorio
    ```
2.  **Abra o `index.html`:**
    Como o projeto não utiliza um servidor *backend* complexo (apenas o consumo de um JSON local), você pode simplesmente abrir o arquivo `index.html` em seu navegador.
3.  **Alternativa (Recomendada):**
    Para simular um ambiente de produção e garantir que a requisição `fetch` do JSON funcione corretamente (especialmente em alguns navegadores), utilize a extensão **Live Server** (VS Code) ou inicie um servidor HTTP local simples.

## 📁 Estrutura do Repositório

├── 📄 index.html # Estrutura principal ├── 📄 script.js # Lógica de programação (Manipulação do DOM) ├── 📄 data.json # Fonte de dados dos jogadores (JSON) ├── 📄 README.md # Documentação do projeto ├── 📁 static/ │ ├── 📁 assets/ # Imagens dos jogadores e visuais do site │ └── 📁 css/

│ └── 📄 style.css # Folha de estilos principal
