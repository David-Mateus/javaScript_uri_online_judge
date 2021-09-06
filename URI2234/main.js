var line = lines.shift().split(" ");
var H = parseInt(line[0]);
var P = parseInt(line[1])
var total = H/P;
console.log(total.toFixed(2));