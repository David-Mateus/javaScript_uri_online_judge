var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


while(true){
    var senha = parseInt(lines.shift());
    if(senha !== "2002"){
        console.log("Senha Invalida");

    }else{
        console.log("Acesso Permitido");
        break;
        
    }
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

cont = 1;
while(cont > 0){
    var senha = parseInt(lines.shift());
    if(senha === "2002"){
        console.log("Acesso Permitido");
        break;
    }else{
        var Senha = prompt("Senha Invalida");
    }
}
 var a = [1,2,4,6,3];
 a.sort()
 console.log(a)