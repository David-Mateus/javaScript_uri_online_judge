var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var c = parseInt(lines.shift());
var d = parseInt(lines.shift());
var e = parseInt(lines.shift());
let valores = [a, b, c, d, e];
let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;
for (i = 0; i < valores.length; i++) {


    if (valores[i] % 2 == 0) {
        pares++;
    }
    if (valores[i] % 2 !== 0) {
        impares++;
    }
    if (valores[i] > 0) {
        positivos++
    }
    if (valores[i] < 0) {
        negativos++
    }
}

console.log(pares + " valor(es) par(es)");
console.log(impares + " valor(es) impar(es)");
console.log(positivos + " valor(es) positivo(s)");
console.log(negativos + " valor(es) negativo(s)");

