//direcionamento para tela de login estando na home
function carregarPaginaLogin() {
    window.location.href = 'login.html';
}


//preenchimento automatico na tela de login
const usuario = {
  email: "agricultora@agricultora.com.br",
  senha: "senha123456!"
};

const preencherCampo = () => {
  document.getElementById("email").value = usuario.email;
  document.getElementById("password").value = usuario.senha;
}


//Fale conosco
const enviarMensagem = () => {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (firstName === '' || lastName === '' || email === '' || message === '') {
    alert("Por favor, preencha todos os campos do formulário.");
    return;
  }
  let successMessage = "Agradecemos a sua mensagem, " + firstName + "!" + " Em breve retornaremos o seu contato";
  alert(successMessage);

}