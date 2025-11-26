// Seletores essenciais (ids conforme enunciado)
const form = document.querySelector('#postForm');
const titulo = document.querySelector('#titulo'); // usado em data.title
const conteudo = document.querySelector('#conteudo'); // usado em data.body

const btnPost = document.querySelector('#btnPost');
const btnClear = document.querySelector('#btnClear');
const statusEl = document.querySelector('#formStatus');

const renderTitulo = document.querySelector('#renderizador-titulo');
const renderConteudo = document.querySelector('#renderizador-conteudo');

const postsList = document.querySelector('#posts');

// URL da API de teste 
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Função para criar elemento visual de post 
function createPostElement(postData) {
  const card = document.createElement('article');
  card.className = 'post';
  const h = document.createElement('h4');
  h.textContent = postData.title || 'Sem título';
  const p = document.createElement('p');
  p.textContent = postData.body || '';
  card.appendChild(h);
  card.appendChild(p);
  return card;
}

// Limpa form
btnClear.addEventListener('click', () => {
  form.reset();
  statusEl.textContent = '';
});

// Evento submit
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Validar campos simples
  if (!titulo.value.trim() || !conteudo.value.trim()) {
    statusEl.textContent = 'Por favor preencha título e conteúdo.';
    return;
  }

  // Monta o objeto conforme requisito
  const data = {
    title: titulo.value,
    body: conteudo.value,
    userId: 1
  };

  // Feedback UI
  btnPost.disabled = true;
  statusEl.textContent = 'Enviando...';

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });

    if (!res.ok) throw new Error('Erro na requisição: ' + res.status);

    const returned = await res.json();

    // Renderização (ids exigidos)
    renderTitulo.textContent = returned.title;
    renderConteudo.textContent = returned.body;

    // Também adicionamos ao feed (no topo)
    const postEl = createPostElement(returned);
    postsList.prepend(postEl);

    statusEl.textContent = 'Post enviado com sucesso!';
    // opcional: limpar form
    form.reset();
  } catch (err) {
    console.error(err);
    statusEl.textContent = 'Ocorreu um erro ao enviar. Tente novamente.';
  } finally {
    btnPost.disabled = false;
  }
});
