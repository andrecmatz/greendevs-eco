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
//Voltando para home
function VoltarParaHome() {
  window.location.href = 'index.html';
}


//lista de parceiros
document.addEventListener('DOMContentLoaded', function() {
  //esse DOMContentLoaded é para garantir que esta funçao sera executada apos o carregamento do dom
  const parceiros = [
  { id: 1, nome: 'MICROSOFT' },
  { id: 2, nome: 'COAMO' },
  { id: 3, nome: 'IFOOD' },
  ];

  const parceirosContainer = document.getElementById('parceiros-container');

  parceiros.map(parceiro => {
    const li = document.createElement('p');
    li.textContent = parceiro.nome;
    parceirosContainer.appendChild(li);
  });
});

//criar cadastro
document.getElementById('criar-conta-btn').addEventListener('click', function() {
  alert('Conta criada!');
});