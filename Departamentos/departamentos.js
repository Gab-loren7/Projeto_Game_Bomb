function returnPaginaInicial() {
    window.location.href = "../PaginaInicial/paginaInicial.html";
}

// Função para exibir produtos cadastrados na página inicial como cards
function exibirProduto() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const listaProdutos = document.getElementById('listaProdutos');
    
    listaProdutos.innerHTML = ''; // Limpa a lista antes de exibir os produtos

    produtos.forEach((produto, index) => {
        const li = document.createElement('li');
        li.classList.add('item'); 
        
        const img = document.createElement('img');
        img.src = produto.urlImage;
        img.alt = produto.nome;
        img.classList.add('imagemProdutos'); 

        const nome = document.createElement('p');
        nome.textContent = produto.nome;
        nome.classList.add('textoDosProdutos');


        const preco = document.createElement('p');
        preco.innerHTML = `<strong style="color: #1ABB00;"> R$ ${produto.preco}</strong><strong> no Pix</strong>`; 
        preco.classList.add('precoProdutos');

        const addToCartBtn = document.createElement('button');
        addToCartBtn.textContent = 'COMPRAR';
        addToCartBtn.classList.add('botaoProdutos');
        addToCartBtn.onclick = () => adicionarAoCarrinho(produto);

        li.appendChild(img);
        li.appendChild(nome);
        li.appendChild(preco);
        li.appendChild(addToCartBtn);

        listaProdutos.appendChild(li);
    });
}

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(produto) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    alert('Produto adicionado ao carrinho')
    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    // Atualizar a exibição do carrinho
    exibirCarrinho();
}

// Função para exibir o carrinho de compras
// Função para exibir o carrinho de compras
function exibirCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produtoCarrinho = document.getElementById('produtoCarrinho');

    produtoCarrinho.innerHTML = ''; // Limpa a lista antes de exibir os produtos

    carrinho.forEach((produto, index) => {
        const li = document.createElement('li');
        li.classList.add('carinItens'); 

        const img = document.createElement('img');
        img.src = produto.urlImage;
        img.alt = produto.nome;
        img.classList.add('carinImg'); 

        const nome = document.createElement('p');
        nome.textContent = produto.nome;
        nome.classList.add('carinNome');

        // Crie uma nova div para englobar preco e lixo
        const divPrecoLixo = document.createElement('div');
        divPrecoLixo.classList.add('precoLixoContainer'); // Adicione uma classe se necessário

        const preco = document.createElement('p');
        preco.innerHTML = `<strong style="color: #1ABB00;"> R$ ${produto.preco}</strong> no Pix`; 
        preco.classList.add('carinPreco');

        const lixo = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        lixo.setAttribute("viewBox", "0 0 16 16");
        lixo.setAttribute("width", "18");
        lixo.setAttribute("height", "18");
        lixo.style.fill = "#8000cf";

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5");
        
        lixo.appendChild(path);
        lixo.classList.add("carinLixo");
        lixo.addEventListener('click', function() {
            deletarProdutoCarrinho(index);
        });

        // Adicione preco e lixo à nova div
        divPrecoLixo.appendChild(preco);
        divPrecoLixo.appendChild(lixo);

        li.appendChild(img);
        li.appendChild(nome);
        li.appendChild(divPrecoLixo); // Adicione a nova div ao li

        produtoCarrinho.appendChild(li);
    });
}

// Função para deletar um produto do carrinho
function deletarProdutoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho'));
    carrinho.splice(index, 1); // Remove o item do carrinho
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Atualiza a exibição do carrinho
    exibirCarrinho();
}

// Executa as funções ao carregar a página
window.onload = function() {
    exibirProduto(); // Exibe os produtos na página inicial
    exibirCarrinho(); // Exibe o carrinho
};

