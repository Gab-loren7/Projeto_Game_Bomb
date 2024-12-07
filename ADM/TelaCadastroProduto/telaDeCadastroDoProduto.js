function returnPaginaInicial() {
    window.location.href = "../../PaginaInicial/paginaInicial.html"
}

// Modal

// Lógica para abrir o botão
const openButtons = document.querySelectorAll('.profileButton')

openButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal')
        const modal = document.getElementById(modalId)

        modal.showModal();
    });
});

// Lógica para fechar o botão
const closeButtons = document.querySelectorAll('.close-modal');

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        modal.close();
    });
});

//Produtos
let produtoEditandoIndex = null;  // Variável global para armazenar o índice do produto sendo editado.

function cadastrarProduto() {
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const descricao = document.getElementById('descricao').value;
    const urlImage = document.getElementById('urlImage').value;

    const produto = {
        nome,
        preco,
        descricao,
        urlImage
    };

    if (produto.nome && produto.preco && produto.descricao) {
        let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

        // Se estiver editando um produto, atualize ele, caso contrário, adicione um novo
        if (produtoEditandoIndex !== null) {
            produtos[produtoEditandoIndex] = produto;  // Atualiza o produto no índice correspondente
            produtoEditandoIndex = null;  // Limpa o índice de edição
        } else {
            produtos.push(produto);  // Adiciona um novo produto
        }

        localStorage.setItem('produtos', JSON.stringify(produtos));
        limparFormulario();
        exibirProdutos();
    } else {
        alert('Preencha todos os campos para cadastrar o produto!');
    }
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('urlImage').value = '';
}

function exibirProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';

    for (let i in produtos) {
        const produto = produtos[i];
        
        const li = document.createElement('li');
        li.classList.add('item'); 


        const img = document.createElement('img');
        img.classList.add('imagemProdutos'); 

        img.src = produto.urlImage;
        img.style.margin = '10px'; 
        img.style.width = '50px'; 
        img.style.height = 'auto';

        li.textContent = `${produto.nome} - R$${produto.preco} - ${produto.descricao}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Deletar';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => deletarProduto(i);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Editar';
        editBtn.classList.add('edit-btn');
        editBtn.onclick = () => editarProduto(i);  // Chama a função para editar o produto

        li.prepend(img);
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        listaProdutos.appendChild(li);
    }
}

function deletarProduto(index) {
    let produtos = JSON.parse(localStorage.getItem('produtos'));
    produtos.splice(index, 1);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    exibirProdutos();
}

function limparProdutos() {
    localStorage.removeItem('produtos');
    exibirProdutos();
}

function editarProduto(index) {
    let produtos = JSON.parse(localStorage.getItem('produtos'));
    const produto = produtos[index];

    // Preenche o formulário com os dados do produto
    document.getElementById('nome').value = produto.nome;
    document.getElementById('preco').value = produto.preco;
    document.getElementById('descricao').value = produto.descricao;
    document.getElementById('urlImage').value = produto.urlImage;

    produtoEditandoIndex = index;  // Marca o produto que está sendo editado
}

function adicionarAoCarrinho(index) {
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const produto = produtos[index];

    // Verifica se o produto já está no carrinho
    const produtoExistente = carrinho.find(p => p.nome === produto.nome);

    if (produtoExistente) {
        alert('Este produto já foi adicionado ao carrinho.');
    } else {
        // Adiciona o produto ao carrinho
        carrinho.push(produto);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        alert('Produto adicionado ao carrinho!');
    }
}

document.getElementById('urlImage').addEventListener('input', function () {
    const url = this.value;
    const imagemPrevisao = document.getElementById('imagem-previsao');
    const img = new Image(); // Cria um objeto de imagem para validar a URL
    img.src = url;
    img.onload = function () { // Quando a imagem carrega com sucesso
        imagemPrevisao.innerHTML = `<img src="${url}" alt="Pré-visualização" style="max-width: 100%; max-height: 100%;">`;
    };
    img.onerror = function () { // Se houver erro no carregamento da imagem
        imagemPrevisao.innerHTML = '<span>Imagem inválida ou indisponível</span>';
    };
});

window.onload = exibirProdutos;

function abrirEdicao() {
    if (produtoSelecionado === null || produtosRecentes[produtoSelecionado] === undefined) {
        return; // Retorna se não houver produto válido selecionado.
    }
    const produto = produtosRecentes[produtoSelecionado];
    document.getElementById('editar-nome-produto').value = produto.nome; // Preenche os campos do modal com os dados do produto.
    document.getElementById('editar-descricao-produto').value = produto.descricao;
    document.getElementById('editar-preco-produto').value = produto.precoOriginal;
    document.getElementById('editar-url-imagem').value = produto.imagem;
}