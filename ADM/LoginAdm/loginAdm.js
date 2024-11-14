function loginAdm(){
    let businessCode = 69

    let userCode = document.getElementById('code')
    let userEmail = document.getElementById('email')
    let userPassword = document.getElementById('password')
    let userPasswordConfirm = document.getElementById('passwordConfirm')

    if (userCode == businessCode && userPassword === userPasswordConfirm && userEmail.value){

        window.location.href = "../TelaCadastroProduto/telaDeCadastroDoProduto.html"
            // arrumar dps, tá dando erro
    }

}

function returnPaginaInicial() {
    window.location.href = "../../PaginaInicial/paginaInicial.html"
}