var line = lines.shift().split(" ");
let A = parseFloat(line[0]);
let B = parseFloat(line[1]);
let reajuste = ((B*100.0)/A) - 100.0;
console.log(reajuste.toFixed(2)+"%")