// 10. Leia 20 valores reais e calcule seu somatório utilizando a instrução while.

var cont = 0;
var somar = 0;

while(cont<20){
    var numero = prompt("digite um numero");
    somar = somar + parseInt(numero);
    cont++;
    console.log(somar)
}
