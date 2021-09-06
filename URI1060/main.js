var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var n1 = parseFloat(lines.shift());
var n2 = parseFloat(lines.shift());
var n3 = parseFloat(lines.shift());
var n4 = parseFloat(lines.shift());
var n5 = parseFloat(lines.shift());
var n6 = parseFloat(lines.shift());
var i = 0;


if (n1 > 0) {
   i++;
} 

if (n2 > 0) {
   i++;
} 

if (n3 > 0) {
   i++;
} 

if (n4 > 0) {
   i++;
} 

if (n5 > 0) {
   i++;
} 

if (n6 > 0) {
   i++;
} 

console.log(i + " valores positivos" );
console.log()