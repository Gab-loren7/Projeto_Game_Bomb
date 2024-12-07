
//Função do botão
function Cadastrar() {
    //Puxar o valor das variáveis
    let userName = document.getElementById('name').value;
    let userEmail = document.getElementById('email').value;
    let userPassword = document.getElementById('password').value;
    let userPasswordConfirm = document.getElementById('passwordConfirm').value;


    if (userName == "" || userEmail == "" || userPassword == "" || userPasswordConfirm == "") {
        alert("Preencha todos os campos!")
    }

    else if (userPassword !== userPasswordConfirm) {
        alert("As senhas não estão iguais")
    }

    else if (userName !== "" && userEmail !== "" && userPassword !== "" && userPasswordConfirm !== "") {

        //Criar objeto 
        const Perfil = {
            userName: userName,
            userEmail: userEmail,
            userPassword: userPassword,
            userPasswordConfirm: userPasswordConfirm
        };

        //Salvar informações do login e mandar para o localStorage
        localStorage.setItem("Perfil", JSON.stringify(Perfil))

        alert("Login concluído com sucesso! :-)")

        //Passar para a tela inicial
        window.location.href = "../PaginaInicial/paginaInicial.html"
    }

}

function returnPaginaInicial() {
    window.location.href = "../PaginaInicial/paginaInicial.html"
}
