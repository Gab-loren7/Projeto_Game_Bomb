// Login GameBomb
function Login(){
    
    let loginEmail = document.getElementById('loginEmail').value;
    let loginPassword = document.getElementById('loginPassword').value; 
    
    // console.log(`${registerEmail} && ${loginEmail} | ${registerPassword} && ${loginPassword}`)
    
    if (loginEmail === "" || loginPassword === "" || loginPasswordConfirm === "") {
        alert("Preencha todos os campos")
    }

    
    let Perfil = JSON.parse(localStorage.getItem("Perfil"))

    let registerEmail = Perfil.userEmail
    let registerPassword = Perfil.userPassword
    
    if(loginEmail == registerEmail && loginPassword == registerPassword){
        alert("Login concluído com sucesso!")
        window.location.href = "../PaginaInicial/paginaInicial.html"
    }

    else if(registerEmail !== loginEmail){
        alert("O email está incorreto!")
    }

    else if(loginPassword !== registerPassword){
        alert("As senhas estão incorretas!")
    }
}

function returnPaginaInicial() {
    window.location.href = "../PaginaInicial/paginaInicial.html"
}

