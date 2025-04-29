function loginAdm(){
    const businessCode = "gamebomb2024"
    const businessPassword = "empresagamebomb"
    const businessEmail = "empresa@gmail.com"
    

    let userCode = document.getElementById('code').value
    let userPassword = document.getElementById('password').value
    let userEmail = document.getElementById('email').value


    if (userCode == businessCode && userPassword == businessPassword && userEmail == businessEmail){

        alert("Acesso permitido!")
        window.location.href = "../TelaCadastroProduto/telaDeCadastroDoProduto.html"
    }

    else if(userCode === "" || userEmail === "" || userPassword === ""){
        alert("Preencha todos os campos!")
    }
    
    else if(userCode !== businessCode){
        alert("Código da empresa incorreto!")
    }
}

function returnPaginaInicial() {
    window.location.href = "../../PaginaInicial/paginaInicial.html"
}