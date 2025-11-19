function criaCartao(categoria, pergunta, resposta) {
    // Corrige o getElementById
    let container = document.getElementById('container');

    // Cria o elemento principal do cartão
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    // Define o conteúdo do cartão
    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    // Estado para controlar se a resposta está visível
    let respostaEstaVisivel = false;

    // Função que vira o cartão ao clicar
    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    // Adiciona o evento de clique
    cartao.addEventListener('click', viraCartao);

    // Adiciona o cartão ao container
    container.appendChild(cartao);
}