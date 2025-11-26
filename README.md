YoPostagens –  Blog com Consumo de API

Bem-vindo ao YoPostagens, um mini-blog inspirado em plataformas como Twitter, Facebook e LinkedIn, onde o usuário pode criar um post com título e conteúdo, e enviá-lo para uma API pública usando JavaScript.

Este projeto demonstra os conceitos essenciais do desenvolvimento front-end moderno:

📌 Manipulação do DOM
📌 Comunicação com API usando fetch()
📌 Envio de dados com POST
📌 Renderização dinâmica
📌 Uso de formulários e eventos
📌 Organização semântica do HTML
📌 Estilização leve com CSS

🚀 Funcionalidades
✅ Criar uma postagem

🧩 O usuário preenche:

--Um título

--Um conteúdo

Depois clica no botão Postar.

✅ Enviar dados para uma API real

O projeto envia a postagem para:

`https://jsonplaceholder.typicode.com/posts`


🧩 Utilizando:

-method: "POST"
-headers: { "Content-type": "application/json; charset=UTF-8" }
-body: JSON.stringify(data)

✅ Exibir o retorno da API na tela

O título e conteúdo enviados são exibidos imediatamente na área de renderização.

✅ Layout clean e responsivo

Os elementos são organizados com espaçamentos adequados e uma interface amigável.

🧩 Estrutura do Projeto:

├── 📄 index.html
├── 🎨 style.css
├── 🧠 script.js
└── 📘 README.md

🧩 Tecnologias Utilizadas

-HTML5	Estrutura semântica da página
-CSS3	Estilização e layout
-JavaScript Vanilla	Lógica, DOM, eventos e consumo de API
-Fetch API	Requisições HTTP POST
-JSONPlaceholder API	

🧩 Estrutura do Formulário (HTML)
-O projeto contém um formulário com:
-input para título
-textarea para conteúdo
-button para enviar
-Uma área de exibição da postagem enviada
-Todo elemento possui id, facilitando a captura no JavaScript.


Autora

Yonah Falcão.
Projeto Yo Postagens – Desenvolvido por Yonah em parceria DEVStart SENAI.
