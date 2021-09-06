let valor = parseFloat(lines.shift());

let notacem = valor/100;
let nota50 = ((valor%100)/50);
let nota20 = (((valor%100)%50)/20);
let nota10 = ((((valor%100)%50)%20)/10);
let nota5 = (((((valor%100)%50)%20)%10)/5);
let nota2 = ((((((valor%100)%50)%20)%10)%5)/2);

let moeda1r = (((((((valor%100)%50)%20)%10)%5)%2)/1);
let moeda50 = ((((((((valor%100)%50)%20)%10)%5)%2)%1)/0.5);
let moeda25 = (((((((((valor%100)%50)%20)%10)%5)%2)%1)%0.5)/0.25);
let moeda10 = ((((((((((valor%100)%50)%20)%10)%5)%2)%1)%0.5)%0.25)/0.10);
let moeda5 = (((((((((((valor%100)%50)%20)%10)%5)%2)%1)%0.5)%0.25)%0.10)/0.05);
let moeda1c = ((((((((((((valor%100)%50)%20)%10)%5)%2)%1)%0.5)%0.25)%0.10)%0.05)/0.01);

console.log("NOTAS:");
console.log(Math.floor(notacem)+" nota(s) de R$ 100.00");
console.log(Math.floor(nota50)+" nota(s) de R$ 50.00");
console.log(Math.floor(nota20)+" nota(s) de R$ 20.00");
console.log(Math.floor(nota10)+" nota(s) de R$ 10.00");
console.log(Math.floor(nota5)+" nota(s) de R$ 5.00");
console.log(Math.floor(nota2)+" nota(s) de R$ 2.00");
console.log("MOEDAS:");
console.log(Math.floor(moeda1r)+" moeda(s) de R$ 1.00");
console.log(Math.floor(moeda50)+" moeda(s) de R$ 0.50");
console.log(Math.floor(moeda25)+" moeda(s) de R$ 0.25");
console.log(Math.floor(moeda10)+" moeda(s) de R$ 0.10");
console.log(Math.floor(moeda5)+" moeda(s) de R$ 0.05");
console.log(Math.floor(moeda1c)+" moeda(s) de R$ 0.01");