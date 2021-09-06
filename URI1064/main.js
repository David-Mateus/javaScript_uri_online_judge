var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());
var D = parseFloat(lines.shift());
var E = parseFloat(lines.shift());
var F = parseFloat(lines.shift());
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
var media = soma/i;
console.log(i+" valores positivos");
console.log(media.toFixed(1));
// var numero = 50;

// for(let numero =0; numero <10; numero++){
//    console.log(numero);
// }
// console.log(numero*10)