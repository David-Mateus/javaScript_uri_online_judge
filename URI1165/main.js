var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var N = parseInt(lines.shift());
while(N >= 1 && N <= 100){
    let X = parseInt(lines.shift());
    if(1<X<=10000000){
    if(X/X!==0 && X%2!==0 && X%3!==0){
        console.log(X+" eh primo");
    }else{
        console.log(X+" nao eh primo");
    }
}
    N-=1;
}


var N = parseInt(prompt("ff"));
while(N >= 1 && N <= 100){
    
    let X = parseInt(prompt("rr"));
    if(1<X<=10000000){
    if(X%2===0){
        console.log(X+" eh primo");
    }else{
        console.log(X+" nao eh primo");
    }
}
    N-=1;
}
var N = parseInt(lines.shift());
while(N>=1 && N<=2000){
    var X = String(lines.shift());
    if(X === 'Ciencia da Computacao'){
        console.log("Ciencia da Computacao")
    }else{
        console.log('Ciencia da Computacao')
    }
}




