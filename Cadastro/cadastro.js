
//Função do botão
function Cadastrar(){
    //Puxar o valor das variáveis
    let userName = document.getElementById('name').value;
    let userEmail = document.getElementById('email').value;
    let userPassword = document.getElementById('password').value;
    let userPasswordConfirm = document.getElementById('passwordConfirm').value;
    
    if (userName && userEmail && userPassword === userPasswordConfirm){   

        //Criar objeto
        const userData = {
            userName: userName,
            userEmail: userEmail,
            userPassword: userPassword,
            userPasswordConfirm: userPasswordConfirm
        };
    
        //Salvar informações do login e mandar para o localStorage
        localStorage.setItem("userData", JSON.stringify(userData));
    
        //Passar para a tela inicial
        window.location.href = "/PaginaInicial/paginaInicial.html"
                // Página inicial de usuario não cadastrado, mudar isso


        alert("Login concluído com sucesso! :-)")

    } else if (userPassword ==! userPasswordConfirm){
        
        alert("Alguma das senhas está incorreta!!")
    
    } else {
        
        alert('Ocorreu algum erro!')
    
    }

}

function returnPaginaInicial() {
    window.location.href = "../../PaginaInicial/paginaInicial.html"
}
