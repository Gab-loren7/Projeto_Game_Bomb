//Pegar os ID

let userName = document.getElementById('name');
let labelName = document.getElementById('labelName');
let userEmail = document.getElementById('email');
let labelEmail = document.getElementById('labelEmail');
let userPassword = document.getElementById('password');
let labelPassword = document.getElementById('labelPassword');
ValidS = false
let userPasswordConfirm = document.getElementById('passwordConfirmation');
let labelPasswordConfirm = document.getElementById('labelPasswordConfirm');
ValidS = false
let termoStatus = document.getElementById('Termos');


// -> Cadastro

//Cor do input da name
userName.addEventListener('keyup', () => {
    if (userName.value.length <= 2) {
        labelName.style.color = 'red';
        userName.style.borderColor = 'red';
        ValidS = false
    } else {
        labelName.style.color = 'green';
        userName.style.borderColor = 'green';
        ValidS = true
    }
});

//Cor do input do Email
userEmail.addEventListener('keyup', () => {
    if (userEmail.value.length <= 2) {
        labelEmail.style.color = 'red';
        userEmail.style.borderColor = 'red';
        ValidS = false
    } else {
        labelEmail.style.color = 'green';
        userEmail.style.borderColor = 'green';
        ValidS = true
    }
});

//Cor do input da senha
userPassword.addEventListener('keyup', () => {
    if (userPassword.value.length <= 5) {
        labelPassword.style.color = 'red';
        userPassword.style.borderColor = 'red';
        ValidS = false
    } else {
        labelPassword.style.color = 'green';
        userPassword.style.borderColor = 'green';
        ValidS = true
    }
});

//Cor do input da Confirmação de Senha
userPasswordConfirm.addEventListener('keyup', () => {
    if (userPassword.value !== userPasswordConfirm.value) {
        labelPasswordConfirm.style.color = 'red';
        userPasswordConfirm.style.borderColor = 'red';
        ValidS = false
    } else {
        labelPasswordConfirm.style.color = 'green';
        userPasswordConfirm.style.borderColor = 'green';
        ValidS = true
    }
});

//Função do botão
function Registro() {

    if(userName.value.length <= 2){
        alert("Nome com faltas de digitos!!")
    } else if(userPassword.value.length <= 5 || userPassword.value !== userPasswordConfirm.value){
        alert("Alguma das senhas está incorreta!!")
    } else {

        //Puxar o valor das variáveis
        userName.value;
        userEmail.value;
        userPassword.value;
        userPasswordConfirm.value;
    
        //Criar objeto
        const obj = {
            name: userName,
            email: userEmail,
            password: userPassword,
            passwordConfirm: userPasswordConfirm
        };
    
        //Salvar informações do login e mandar para o localStorage
        localStorage.setItem("Login", JSON.stringify(obj));
    
        //Passar para a tela inicial
        window.location.href = "paginaInicial.html"
    
        alert("Login concluído com sucesso! :-)")
        
    }

}



// Pag Inicial

