// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. 

var nome = prompt("USUARIO")
var senha = prompt("SENHA")
while(nome == senha){
    alert("DIGITE NOVAMENTE!!! ATENÇÃO: Sua senha tem que ser diferente do usuario")
    var nome = prompt("USUARIO")
    var senha = prompt("SENHA")
    if(nome !== senha){
        console.log("cadastro feito com sucesso")
    }
}