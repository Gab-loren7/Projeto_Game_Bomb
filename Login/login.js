// Login GameBomb
function Login(){
    let userData = JSON.parse(localStorage.getItem("userData"))

    let registerEmail = userData.userEmail
    let registerPassword = userData.userPassword
    let registerPasswordConfirm = userData.userPasswordConfirm
    
    let loginEmail = document.getElementById('loginEmail').value;
    let loginPassword = document.getElementById('loginPassword').value; 
    let loginPasswordConfirm = document.getElementById('loginPasswordConfirm').value;

    // console.log(`${registerEmail} && ${loginEmail} | ${registerPassword} && ${loginPassword}`)

    if (loginEmail == registerEmail && loginPassword == registerPassword && loginPasswordConfirm == registerPasswordConfirm){
        alert("Login Bem-Sucedido!")
        window.location.href = "/PaginaInicial/paginaInicial.html"
            // Página inicial de usuario não cadastrado, mudar isso
    }

    else {
        alert("Nome de usuário ou senha incorretos")
    }
}
