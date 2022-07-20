const emailCadastro = "usuarioxyz@google.com";
const senhaCadastro = "A112233";

function login(email, senha) {
    if(emailCadastro !== email){
        return window.alert("E-mail não encontrado na base de dados!")
    }
    if(senhaCadastro !== senha){
        return window.alert("Senha incorreta, por favor verifique.")
    }
    return window.alert("Login liberado!")
}

login("usuarioabc@google.com", "B112233" )