var N = parseInt(prompt(""))
var i = 0;
var soma = 0;
while(N > 0){
    if(N < 0){
        break;
    }
    else{
        i++;
        soma = soma + N;
        
    }

console.log((soma/i).toFixed(1));
}

var N = parseInt(lines.shift());
var i = 0;
var soma = 0;
while(N > 0){
    if(N < 0){
        break;
    }
    else{
        i++;
        soma = soma + N;
        
    }
console.log((soma/i).toFixed(2));
}