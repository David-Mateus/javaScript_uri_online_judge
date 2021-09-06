var A = parseFloat(lines.shift().split(''));
var B = parseFloat(lines.shift().split(''));
var C = parseFloat(lines.shift().split(''));
var D = parseFloat(lines.shift().split(''));
var E = parseFloat(lines.shift().split(''));
var F = parseFloat(lines.shift().split(''));
var i = 0;
var soma = 0;
if(A > 0){
    i++;
    soma = soma +A;
}
if(B>0){
    i++;
    soma = soma +B;
}
if(C>0){
    i++;
    soma = soma +C;
}
if(D>0){
    i++;
    soma = soma +D;
}
if(E>0){
    i++;
    soma = soma +E;
}if(F>0){
    i++;
    soma = soma +F;
}
console.log(i+" valores positivos");
console.log(soma/i);





























// var A = parseInt(lines.shift());
// var B = parseInt(lines.shift());
// var C = parseInt(lines.shift());
// var D = parseInt(lines.shift());
// var E = parseInt(lines.shift());
// let valores = [A, B, C, D, E];

// pares = 0;
// impares = 0;

// if(A%2===0){
//     pares++;
// }else{
//     impares++;
// }

// var N = parseInt()
// while(N > 0){
//     var X = prompt("entrads");
//     var total = X/2
//     console.log(total)
//     return 1;
    
// }



// var entrada = prompt("feliz")
// var soma = 'a'
// for(var i = 1; i <= entrada; i++){
//     soma+='a';
//     console.log("Feliz nat"+soma+"l!\n")
// }