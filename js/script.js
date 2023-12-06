// function enviarFormulario() {
//     // Obtenha os valores do formulário
//     var name = document.getElementById("nome").value;
//     var email = document.getElementById("email").value;

//     // Construa o corpo do email
//     var corpoEmail = "Nome: " + name + "\n";
//     corpoEmail += "Email: " + email + "\n";

//     // Configurar e enviar o email
//     var assuntoEmail = "Novo formulário de contato";
//     var destinatarioEmail = "gabriel.adm2607@gmail.com"; // Substitua pelo seu email

//     var linkEmail = "mailto:" + destinatarioEmail +
//                     "?subject=" + encodeURIComponent(assuntoEmail) +
//                     "&body=" + encodeURIComponent(corpoEmail);

//     // Abrir o cliente de email padrão com as informações fornecidas
//     window.location.href = linkEmail;
// }